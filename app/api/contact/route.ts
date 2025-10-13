import { sendMail } from "@/lib/mail/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, phone, reason, message } = data;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #1565c0; margin-bottom: 8px;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Reason:</strong> ${reason}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f3f4f6; border-radius: 6px; padding:10px; margin-top:5px;">${message}</div>
      <hr/>
      <small>This message was sent from your portfolio contact form.</small>
    </div>
  `;

  try {
    await sendMail({
      to: "m.berkcertel@outlook.com",
      subject: `Contact Form: ${reason} - ${name}`,
      html,
    });
    return NextResponse.json({ status: "ok" });
  } catch (err) {
    return NextResponse.json(
      { status: "fail", error: (err as Error).message },
      { status: 500 }
    );
  }
}
