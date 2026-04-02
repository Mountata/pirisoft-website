import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Pirisoft Contact <onboarding@resend.dev>",
      to:   ["renelegrandmountata@gmail.com"],
      replyTo: email,
      subject: `Nouveau message de ${name} — Pirisoft`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #185FA5; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">
              Nouveau message — Pirisoft
            </h1>
          </div>
          <div style="background: #f7faff; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2eaf4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #667; font-size: 13px; width: 120px;">Nom</td>
                <td style="padding: 10px 0; font-weight: bold; color: #0D1B2A;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #e2eaf4;">
                <td style="padding: 10px 0; color: #667; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; color: #185FA5;">
                  <a href="mailto:${email}" style="color: #185FA5;">${email}</a>
                </td>
              </tr>
              <tr style="border-top: 1px solid #e2eaf4;">
                <td style="padding: 10px 0; color: #667; font-size: 13px;">Entreprise</td>
                <td style="padding: 10px 0; color: #0D1B2A;">${company || "Non renseigné"}</td>
              </tr>
              <tr style="border-top: 1px solid #e2eaf4;">
                <td style="padding: 10px 0; color: #667; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #0D1B2A; line-height: 1.6;">
                  ${message.replace(/\n/g, "<br/>")}
                </td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2eaf4;">
              <a href="mailto:${email}"
                style="background: #185FA5; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: bold;">
                Répondre à ${name}
              </a>
            </div>
          </div>
          <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 16px;">
            Pirisoft — Dakar, Sénégal &amp; Brazzaville, Congo
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Erreur Resend:", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}