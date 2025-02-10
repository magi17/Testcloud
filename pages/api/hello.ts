export const runtime = 'edge';

export default async function handler(req: Request): Promise<Response> {
  return new Response(JSON.stringify({ message: 'Hello from Edge Runtime!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
