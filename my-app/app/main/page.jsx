"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import nurse from "../../public/image/nurse.png";
import CardComponents from "@/components/CardComponents";
import AnalysisCard from "@/components/AnalysisCard";
import Loading from "@/components/Loading";

const Page = () => {
  const router = useRouter();
  const [pdfFile, setPdfFile] = useState(null);
  const [parsedText, setParsedText] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showCardComponents, setShowCardComponents] = useState(true);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }

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
    setLoading(true);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userData: parsedText }),
      });

      const data = await res.json();
      if (res.ok) {
        setAnalysisResult(data.analysis);
        setShowCardComponents(false);
      } else {
        console.error("Analiz hatası:", data.error);
        alert("Analiz sırasında hata oluştu: " + data.error);
      }
    } catch (error) {
      console.error("Fetch hatası:", error);
      alert("API ile iletişimde bir hata oluştu: " + error.message);
    } finally {
      setAnalyzing(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-antep-200 p-8 flex flex-col items-center justify-start gap-8">
      {/* Header */}
      <header className="w-full text-center">
        <h1 className="text-5xl font-bold text-peach-600">Akıllı Tahlil</h1>
        <p className="mt-2 text-lg text-lacivert-500">
          Sağlığınızı daha iyi anlayın ve bilinçli adımlar atın.
        </p>
      </header>

      {/* Card Components */}
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

      {/* Loading */}
      {loading && <Loading />}

      {/* Analysis Result */}
      {!loading && analysisResult && <AnalysisCard analysisResult={analysisResult} />}

      {/* Default Image */}
      {!analysisResult && !loading && (
        <div className="flex justify-center mt-5">
          <Image
            src={nurse}
            alt="Doctor"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}

      
    </div>
  );
};

export default Page;
