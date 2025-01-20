"use client";
import React, { useState } from 'react';

export default function Home() {
  const [pdfFile, setPdfFile] = useState(null);
  const [parsedText, setParsedText] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!pdfFile) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    try {
      const res = await fetch('/api/up', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setParsedText(data.text);
      } else {
        alert('PDF parse hatası: ' + data.error);
      }
    } catch (error) {
      alert('Hata: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // ChatGPT ile analiz et
  const handleAnalyze = async () => {
    if (!parsedText) return;
    setAnalyzing(true);
    console.log('Analiz yapılıyor:', parsedText);
  
    try {
      const res = await fetch('/api/analyzee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userData: parsedText }), // userData key'ini ekledik
      });
  
      const data = await res.json();
      if (res.ok) {
        setAnalysisResult(data.analysis);
      } else {
        console.error('Analiz hatası:', data.error);
        alert('Analiz sırasında hata oluştu: ' + data.error);
      }
    } catch (error) {
      console.error('Fetch hatası:', error);
      alert('API ile iletişimde bir hata oluştu: ' + error.message);
    } finally {
      setAnalyzing(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-base-200 p-4">
      <div className="max-w-md mx-auto bg-white p-4 rounded shadow mb-6">
        <h1 className="text-xl font-bold mb-4">PDF Yükleme</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full mb-4"
        />
        <button
          onClick={handleUpload}
          className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Yükleniyor...' : 'PDF’yi Yükle ve Parse Et'}
        </button>
      </div>

      {parsedText && (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow mb-6">
          <h2 className="text-lg font-bold mb-2">PDF Metni</h2>
          <pre className="text-sm whitespace-pre-wrap mb-4">{parsedText}</pre>
          <button
            onClick={handleAnalyze}
            className={`btn btn-secondary w-full ${analyzing ? 'loading' : ''}`}
            disabled={analyzing}
          >
            {analyzing ? 'Analiz Ediliyor...' : 'Metni Yapay Zeka ile Analiz Et'}
          </button>
        </div>
      )}

      {analysisResult && (
        <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Yapay Zeka Analizi</h2>
          <p className="text-sm whitespace-pre-wrap">{analysisResult}</p>
          <div className="alert alert-warning mt-4">
            Bu analiz bir doktor görüşü değildir. Kesin teşhis için uzman bir doktora danışın.
          </div>
        </div>
      )}
    </div>
  );
}
