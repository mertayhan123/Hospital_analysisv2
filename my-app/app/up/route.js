import { NextResponse } from "next/server";
import pdfParse from "pdf-parse";

// GET Method - Test Route
export async function GET() {
  return NextResponse.json({ message: "Hello from the /api/up route" });
}

// POST Method - PDF İşleme
export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("pdfFile");

    if (!file) {
      return new Response(
        JSON.stringify({ error: "No PDF file provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const arrayBuffer = await file.arrayBuffer(); // File içeriğini al
    const pdfBuffer = Buffer.from(arrayBuffer); // Buffer formatına çevir

    // PDF içeriğini çözümle
    const pdfData = await pdfParse(pdfBuffer);

    return new Response(
      JSON.stringify({ text: pdfData.text }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error reading PDF:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process PDF" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
