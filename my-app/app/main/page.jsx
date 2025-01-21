"use client";
import React from 'react';
import CardComponents from '@/components/CardComponents';
import AnalysisCard from '@/components/AnalysisCard';
import { useState } from 'react';
import Image from "next/image";
import nurse from "../../public/image/nurse.png";

const Page = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [parsedText, setParsedText] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showCardComponents, setShowCardComponents] = useState(true); // CardComponents görünürlüğünü kontrol eden state

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) return (setShowToast(true), setTimeout(() => setShowToast(false), 2000));

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
    setLoading(true); // Loading durumunu başlat

    console.log("Analiz yapılıyor:", parsedText);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userData: parsedText }),
      });

      const data = await res.json();
      if (res.ok) {
        setAnalysisResult(data.analysis);
        setShowCardComponents(false); // Analiz tamamlandıktan sonra CardComponents'i gizle
      } else {
        console.error("Analiz hatası:", data.error);
        alert("Analiz sırasında hata oluştu: " + data.error);
      }
    } catch (error) {
      console.error("Fetch hatası:", error);
      alert("API ile iletişimde bir hata oluştu: " + error.message);
    } finally {
      setAnalyzing(false);
      setLoading(false); // Loading durumunu durdur
    }
  };

  return (
    <div className="min-h-screen bg-antep-200 p-8">
      {showCardComponents && !loading && (
        <CardComponents
          loading={loading}
          handleFileChange={handleFileChange}
          handleUpload={handleUpload}
          parsedText={parsedText}
          handleAnalyze={handleAnalyze}
          analyzing={analyzing}
          showToast={showToast}
        />
      )}

      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full text-primary"></div>
        </div>
      )}

      {!loading && analysisResult && (
        <AnalysisCard analysisResult={analysisResult}  />
      )}

      {!analysisResult && (
        <div className='flex justify-center mt-5'>
          <Image
            src={nurse}
            alt="Doctor"
            width={500}
            height={500}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
