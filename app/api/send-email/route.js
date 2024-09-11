// app/api/send-email/route.js

import axios from "axios";

export async function POST(request) {
  try {
    const { name, email, local } = await request.json();

    // Unisender API endpoint for sending a single email
    const unisenderApiUrl = "https://api.unisender.com/en/api/sendEmail";

    // Determine the attachment based on the local value
    const attachmentUrl =
      local === "ar"
        ? "https://ebook.artsmrkts.com/arstmkrts_strategy_ar.pdf"
        : "https://ebook.artsmrkts.com/arstmkrts_strategy_en.pdf";

    // Prepare the request payload
    const payload = {
      format: "json",
      api_key: process.env.UNISENDER_API_KEY,
      email: email,
      sender_name: "Artsmrkts",
      sender_email: process.env.SENDER_EMAIL,
      subject: `Welcome to Artsmrkts, ${name}!`,
      body: `
          Hi ${name}, Grab  your free copy of the Artsmrkts Strategy Guide. 
      
      
          Best regards,
          The Artsmrkts Team
        `,
      list_id: 1, //process.env.UNISENDER_LIST_ID, // Add this line
      attachments: [
        {
          type: "url",
          url: attachmentUrl,
          name: `arstmkrts_strategy_${local}.pdf`,
        },
      ],
    };

    // Send email using Unisender API
    const response = await axios.post(
      unisenderApiUrl,
      new URLSearchParams(payload),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.data.result) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
      });
    } else {
      throw new Error(response.data.error || "Unknown error occurred");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}
