import { google } from '@ai-sdk/google';
import { StreamingTextResponse, streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('models/gemini-1.5-flash-latest'),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
