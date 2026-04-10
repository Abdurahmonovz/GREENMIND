import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text = `🌿 *Yangi Murojaat! (Plant Shop)*\n\n👤 *Ism:* ${name}\n📞 *Tel:* ${phone}\n💬 *Xabar:* ${message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (response.ok) return NextResponse.json({ success: true });
    return NextResponse.json({ success: false }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ error: "Xatolik yuz berdi" }, { status: 500 });
  }
}