import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: false,
});

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received a POST request", body);

    const { name, email, phone_number } = body;
    await sendWelcomeMessage(name, email, phone_number);

    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

async function sendWelcomeMessage(name, email, phone) {
  const lead = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSource: 'Artsmrkts landing page'`;

  try {
    await bot.sendMessage(lead);
  } catch (error) {
    console.error("Error sending welcome message:", error);
  }
}
