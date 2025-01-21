// app/api/tahlil-tahmini-gemini/route.js

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

    // Prompt
    const prompt = `
    Bir hastadan gelen tahlil sonuçlarını analiz et ve bu sonuçları aşağıdaki gibi yapılandırılmış bir JSON formatında döndür:

    {
      "genelDurum": "Burada tahlillerin genel durumu özetlenir.",
      "normalDegerler": [
        { "isim": "Değer Adı", "deger": "Değer", "normalAralik": "Normal Aralık", "aciklama": "Bu değerin ne anlama geldiği." }
      ],
      "sapmalar": [
        { "isim": "Değer Adı", "deger": "Değer", "normalAralik": "Normal Aralık", "aciklama": "Bu sapmanın ne anlama geldiği.", "hastaliklar": ["Hastalık 1", "Hastalık 2"] }
      ],
      "oneriler": "Hastayı panikletmeden verilen genel öneriler."
    }

    Lütfen aşağıdaki verileri kullanarak bu formatta yanıt döndür:

    Veriler: ${JSON.stringify(userData)}
    `;

    // Gemini API çağrısı
    const result = await model.generateContent(prompt);

    // Yanıtı düz metin olarak al
    let responseText = result?.response?.text() || "";
    console.log("Ham Yanıt:", responseText);

    // Yanıtı temizle ve JSON formatına dönüştür
    // İlk önce yanıtın JSON olup olmadığını doğrulayın
    let analysis;

    try {
      // Yanıtı düzeltmeden önce olduğu gibi parse etmeyi deneyin
      analysis = JSON.parse(responseText);
    } catch (parseError) {
      // Eğer JSON parse hatası varsa, manuel temizleme
      console.warn("JSON Parse Hatası. Yanıt düzeltilecek.");
      responseText = responseText
        .replace(/```json/g, "") // ```json bloklarını kaldır
        .replace(/```/g, ""); // ``` kalanlarını kaldır
      analysis = JSON.parse(responseText); // Temizlenmiş JSON'u parse et
    }

    // Hastalıkları ayrı bir şekilde çekmek
    const hastaliklar = analysis?.sapmalar?.flatMap(sapma => sapma.hastaliklar || []) || [];

    // Yanıtı JSON olarak döndür
    return NextResponse.json({ analysis, hastaliklar });
  } catch (error) {
    console.error("Gemini API Hatası:", error);
    return NextResponse.json(
      { error: "Tahlil tahmini sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}



