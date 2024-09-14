import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: false,
});

export async function POST(req) {
  try {
    const body = await req.json();

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
  const chatIds = [
    process.env.TELEGRAM_CHAT_ID_TWO,
    // process.env.TELEGRAM_CHAT_ID_THREE,
    // process.env.TELEGRAM_CHAT_ID_ONE,
  ]; // Ensure you have these environment variables set

  try {
    for (const chatId of chatIds) {
      if (!chatId) {
        console.error("Chat ID is undefined or null");
        continue;
      }
      console.log(`Sending message to chat ID: ${chatId}`);
      await bot.sendMessage(chatId, lead);
      console.log(`Message sent to chat ID: ${chatId}`);
    }
  } catch (error) {
    console.error("Error sending welcome message:", error);
  }
}
