import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { preferences, topTools } = await request.json();

    const prompt = `You are an AI tool expert helping users find the best AI tools for their needs.

User Preferences:
- Purpose: ${preferences.purpose.join(', ')}
- Experience Level: ${preferences.experience}
- Budget: ${preferences.budget}
- Important Features: ${preferences.features.join(', ')}

Top Recommended Tools:
${topTools.map((tool: any, idx: number) => `
${idx + 1}. ${tool.name}
   - Description: ${tool.description}
   - Category: ${tool.category.join(', ')}
   - Pricing: ${tool.pricing}
`).join('\n')}

Based on the user's preferences and these top tool recommendations, provide a brief, personalized insight (2-3 sentences) explaining why these tools are a great fit for them. Be encouraging and specific about how these tools align with their needs.

Keep your response concise, friendly, and actionable.`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.1-8b-instant',
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    const insights = chatCompletion.choices[0]?.message?.content || '';

    return NextResponse.json({ insights });
  } catch (error) {
    console.error('Groq API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate AI insights' },
      { status: 500 }
    );
  }
}
