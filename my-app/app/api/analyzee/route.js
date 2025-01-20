// app/api/tahlil-tahmini-gemini/route.js

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Google Generative AI client'ını API anahtarınızla oluşturun
// (API anahtarını .env dosyasında tutmanız önerilir, örneğin process.env.GOOGLE_GENAI_KEY)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Gemini model örneği oluşturma
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// GET metodu (opsiyonel)
export async function GET() {
  return NextResponse.json({ message: "Hello from the Gemini route" });
}

// POST metodu
export async function POST(request) {
  try {
    console.log("Gemini ile tahlil tahmini isteği alındı.");

    // İstek body'sinden verileri çek
    const { userData } = await request.json();
    console.log("Gelen veriler:", userData);

    // GPT kodunda olduğu gibi sistem mesajını prompt'a dahil ediyoruz
    // Gemini'de henüz "system" role kullanılmıyor, bu yüzden prompt'un içine gömüyoruz
    const prompt = `
      Sen bir tıbbi asistansın. Gönderilen tahlil verilerine göre yorum ve tahmin yap ardından olabileceği hastalıkların tahminini de 3ü geçmeyecek şekilde yap açıklama ile .
      Veriler: ${JSON.stringify(userData)}
    `;

    // Gemini API çağrısı
    // generateContent metodu prompt'u argüman olarak alır
    const result = await model.generateContent(prompt);

    // Gemini yanıtını al
    const analysis = result?.response?.text() || "";

    // Yanıtı JSON olarak döndür
    return NextResponse.json({ analysis });
    
  } catch (error) {
    console.error("Gemini API Hatası:", error);
    return NextResponse.json(
      { error: "Tahlil tahmini sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
