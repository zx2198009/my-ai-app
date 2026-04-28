import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-5.4'),
    messages,
  });

  return result.toAIStreamResponse();
}