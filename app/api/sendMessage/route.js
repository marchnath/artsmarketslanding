// // /app/api/sendMessage/route.js

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const { name, email, message, phone_number, language } = await req.json();

//     const apiUrl =
//       "https://b24-xsgp2b.bitrix24.com/rest/1/woap0lfwspb37q2k/crm.contact.add"; // Correct API method URL

//     const bitrix24Response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         fields: {
//           NAME: name,
//           EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
//           COMMENTS: message || language,
//           OPENED: "Y",
//           TYPE_ID: "CLIENT",
//           SOURCE_ID: "SELF",
//           PHONE: [{ VALUE: phone_number }],
//         },
//         params: { REGISTER_SONET_EVENT: "Y" },
//       }),
//     });

//     if (bitrix24Response.ok) {
//       const result = await bitrix24Response.json();
//       return NextResponse.json(
//         { success: true, data: result },
//         { status: 200 },
//       );
//     } else {
//       const errorData = await bitrix24Response.text();
//       console.error("Error response from Bitrix24:", errorData);
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Failed to add contact to Bitrix24",
//           errorData,
//         },
//         { status: 500 },
//       );
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//     return NextResponse.json(
//       { success: false, message: "An error occurred", error },
//       { status: 500 },
//     );
//   }
// }

// /app/api/sendMessage/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone_number } = await req.json();

    const apiUrl =
      "https://binorix.bitrix24.ru/rest/84/vkjnlsum474ykygo/crm.lead.add";

    const bitrix24Response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          TITLE: `Lead: ${name}`,
          NAME: name,
          UF_CRM_1717761252272: email, // "Email" field
          // COMMENTS: message || language,
          OPENED: "Y",
          STATUS_ID: "NEW",
          SOURCE_ID: "WEB",
          PHONE: [{ VALUE: phone_number, VALUE_TYPE: "WORK" }],
          UF_CRM_1713940452974: "artsmrkts landing page", // "Lead Source" field
        },
        params: { REGISTER_SONET_EVENT: "Y" },
      }),
    });

    if (bitrix24Response.ok) {
      const result = await bitrix24Response.json();
      return NextResponse.json(
        { success: true, data: result },
        { status: 200 }
      );
    } else {
      const errorData = await bitrix24Response.text();
      console.error("Error response from Bitrix24:", errorData);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to add lead to Bitrix24",
          errorData,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred", error: error.toString() },
      { status: 500 }
    );
  }
}
