"use client";
import React, { useState } from "react";
import CardComponents from "@/components/CardComponents";
import { parse } from "dotenv";

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);
  const [parsedText, setParsedText] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("pdfFile", pdfFile);

    try {
      const res = await fetch("/api/up", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setParsedText(data.text);
      } else {
        alert("PDF parse hatası: " + data.error);
      }
    } catch (error) {
      alert("Hata: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!parsedText) return;
    setAnalyzing(true);
    console.log("Analiz yapılıyor:", parsedText);

    try {
      const res = await fetch("/api/analyzee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userData: parsedText }),
      });

      const data = await res.json();
      if (res.ok) {
        setAnalysisResult(data.analysis);
      } else {
        console.error("Analiz hatası:", data.error);
        alert("Analiz sırasında hata oluştu: " + data.error);
      }
    } catch (error) {
      console.error("Fetch hatası:", error);
      alert("API ile iletişimde bir hata oluştu: " + error.message);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <CardComponents loading={loading} handleFileChange={handleFileChange} handleUpload={handleUpload} parsedText={parsedText} handleAnalyze={handleAnalyze} analyzing={analyzing}/>

     

      {analysisResult && (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Yapay Zeka Analizi</h2>
          <p className="text-sm whitespace-pre-wrap">{analysisResult}</p>
          <div className="alert alert-warning mt-4">
            Bu analiz bir doktor görüşü değildir. Kesin teşhis için uzman bir
            doktora danışın.
          </div>
        </div>
      )}
    </div>
  );
}
