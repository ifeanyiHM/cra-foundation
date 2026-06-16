import { NextRequest, NextResponse } from "next/server";

interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data: {
    status: "success" | "failed" | "abandoned";
    reference: string;
    amount: number; // in kobo
    currency: string;
    paid_at: string;
    customer: { email: string };
    metadata: Record<string, unknown>;
  };
}

export async function POST(req: NextRequest) {
  let reference: string | undefined;

  try {
    const body = await req.json();
    reference = body.reference;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  if (!reference) {
    return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  }

  if (!process.env.PAYSTACK_SECRET_KEY) {
    console.error("PAYSTACK_SECRET_KEY is not set");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        cache: "no-store",
      },
    );

    const data: PaystackVerifyResponse = await res.json();

    if (!res.ok || !data.status) {
      return NextResponse.json(
        { error: data.message || "Verification request failed" },
        { status: 400 },
      );
    }

    if (data.data.status !== "success") {
      return NextResponse.json(
        { error: `Payment ${data.data.status}`, status: data.data.status },
        { status: 400 },
      );
    }

    const {
      amount,
      currency,
      customer,
      metadata,
      paid_at,
      reference: ref,
    } = data.data;

    // ── TODO: Persist to your database ──
    // await db.donations.create({
    //   reference: ref,
    //   amountNaira: amount / 100,
    //   currency,
    //   email: customer.email,
    //   metadata,
    //   paidAt: paid_at,
    // });

    return NextResponse.json({
      success: true,
      reference: ref,
      amount: amount / 100, // kobo → Naira
      currency,
      email: customer.email,
      paidAt: paid_at,
      metadata,
    });
  } catch (err) {
    console.error("Paystack verify error:", err);
    return NextResponse.json(
      { error: "Verification failed. Please try again or contact support." },
      { status: 500 },
    );
  }
}
