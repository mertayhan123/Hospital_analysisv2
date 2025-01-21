import React from "react";
import Image from "next/image";
import pdf from "../public/image/pdf.png";
import { useState } from "react";

const CardComponents = ({
  handleFileChange,
  handleUpload,
  loading,
  parsedText,
  handleAnalyze,
  analyzing,
  showToast,
}) => {
    const [showCard, setShowCard] = useState(true); // Kartın görünürlüğünü kontrol eden state

    const handleCompleteAnalysis = () => {
      handleAnalyze(); // Analiz işlemini başlatır
      if (!analyzing) {
        setShowCard(false); // Analiz tamamlanınca kartı gizler
      }
    };

    
  
  return (
    <div className="card card-side bg-blush-200 shadow-xl flex md:w-[900px] mx-auto h-64">
       {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Lütfen önce bir PDF dosyası yükleyin.</span>
          </div>
        </div>
      )}
      {!parsedText ? (
        <>
          <div className="flex items-center justify-center">
            <figure className="w-36 h-36 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={pdf}
                  alt="PDF Icon"
                  layout="fill"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </div>
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">Tahlil Sonuçlarınızı Yükleyiniz</h2>
            <p>Şimdilik Yalnızca .Pdf uzantılı dosyaları kabul edebiliyoruz</p>
            <div className="card-actions justify-end">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full mb-4"
              />
              <button
                onClick={handleUpload}
                className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Yükleniyor..." : "PDF’yi Yükle"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="card bg-blush-200  text-black md:w-[900px] h-64 ">
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Dosyanız Yüklendi</h2>

            <div className="flex justify-center items-center">
            <p>Lütfen analiz etmek için Analiz et butonuna basınız</p>

            </div>
            <div className="card-actions justify-end rounded-sm mt-5">
                
              <button
                onClick={handleAnalyze}
                className={`btn btn-primary  w-full`}
                disabled={analyzing}
              >
                {analyzing ? (
                  <>
                    <span className="loading loading-spinner bg-slate-950 text-zinc-500"></span>
                    Analiz Ediliyor...
                  </>
                ) : (
                  "Metni Yapay Zeka ile Analiz Et"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponents;
