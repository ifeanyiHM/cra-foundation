"use client";
import { useState } from "react";
import Script from "next/script";
import { RiLoader4Line } from "react-icons/ri";

interface PaystackButtonProps {
  email: string;
  amount: number; // in Naira — converted to kobo internally
  metadata?: Record<string, unknown>;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

export default function PaystackButton({
  email,
  amount,
  metadata = {},
  onSuccess,
  onClose,
  disabled,
  label = "Pay Now",
  className = "btn btn-primary btn-lg",
}: PaystackButtonProps) {
  const [loading, setLoading] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  const pay = () => {
    if (!scriptReady || !window.PaystackPop || !email || !amount) return;

    setLoading(true);

    const reference = `cra_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email,
      amount: Math.round(amount * 100), // Naira → kobo
      currency: "NGN",
      ref: reference,
      metadata,
      callback: (response: { reference: string }) => {
        setLoading(false);
        onSuccess(response.reference);
      },
      onClose: () => {
        setLoading(false);
        onClose?.();
      },
    });

    handler.openIframe();
  };

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="lazyOnload"
        onReady={() => setScriptReady(true)}
      />
      <button
        type="button"
        onClick={pay}
        disabled={disabled || loading || !scriptReady || !amount}
        className={className}
        style={{
          width: "100%",
          justifyContent: "center",
          opacity: disabled || !amount ? 0.45 : 1,
        }}
      >
        {loading ? (
          <>
            <RiLoader4Line
              style={{
                width: "1rem",
                height: "1rem",
                animation: "spin 1s linear infinite",
              }}
            />
            Processing…
          </>
        ) : !scriptReady ? (
          <>
            <RiLoader4Line
              style={{
                width: "1rem",
                height: "1rem",
                animation: "spin 1s linear infinite",
              }}
            />
            Loading…
          </>
        ) : (
          label
        )}
      </button>
    </>
  );
}
