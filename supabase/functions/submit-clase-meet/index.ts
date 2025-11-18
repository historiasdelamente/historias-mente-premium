import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ClaseMeetRequest {
  nombre: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, email }: ClaseMeetRequest = await req.json();

    console.log('Received registration:', { nombre, email });

    // Validación básica
    if (!nombre || !email) {
      return new Response(
        JSON.stringify({ error: 'Nombre y email son requeridos' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Enviar datos al webhook de n8n
    console.log('Sending data to n8n webhook...');
    const webhookResponse = await fetch(
      'https://n8n-n8n.ya3fud.easypanel.host/webhook/apegodetox',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email }),
      }
    );

    console.log('n8n webhook response status:', webhookResponse.status);

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error('n8n webhook error:', errorText);
      throw new Error(`Webhook failed with status ${webhookResponse.status}`);
    }

    const webhookData = await webhookResponse.json();
    console.log('n8n webhook success:', webhookData);

    return new Response(
      JSON.stringify({ success: true, data: webhookData }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error in submit-clase-meet function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Error al procesar la solicitud' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
