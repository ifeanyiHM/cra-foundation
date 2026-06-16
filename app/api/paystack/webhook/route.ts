import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

/**
 * Paystack webhook handler.
 * Register this URL in Paystack Dashboard → Settings → API Keys & Webhooks:
 *   https://yourdomain.com/api/paystack/webhook
 *
 * This independently confirms payments server-to-server, which matters most
 * for recurring (subscription) charges that happen with no browser open.
 */
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-paystack-signature");

  if (!process.env.PAYSTACK_SECRET_KEY) {
    console.error("PAYSTACK_SECRET_KEY is not set");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  const expectedHash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(rawBody)
    .digest("hex");

  if (expectedHash !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: { event: string; data: Record<string, unknown> };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  switch (event.event) {
    case "charge.success": {
      // One-time or first-charge of a subscription succeeded.
      // const { reference, amount, customer, metadata } = event.data;
      // await db.donations.upsert({ where: { reference }, ... });
      break;
    }

    case "subscription.create": {
      // A recurring donation plan was successfully created.
      break;
    }

    case "subscription.disable": {
      // Donor cancelled or subscription was disabled.
      break;
    }

    case "invoice.create": {
      // Paystack is about to attempt a recurring charge.
      break;
    }

    case "invoice.payment_failed": {
      // A recurring charge failed — consider notifying the donor.
      break;
    }

    default:
      // Unhandled event type — safe to ignore.
      break;
  }

  return NextResponse.json({ received: true });
}
