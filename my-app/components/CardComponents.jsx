import React from "react";
import Image from "next/image";
import pdf from "../public/image/pdf.png";

const CardComponents = ({
  handleFileChange,
  handleUpload,
  loading,
  parsedText,
  handleAnalyze,
  analyzing,
}) => {
  return (
   
     <div className="card card-side bg-base-100 shadow-xl flex md:w-[900px] mx-auto h-64">
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
        <div className="card bg-primary text-primary-content md:w-[900px] h-64 ">
          <div className="card-body">
            <h2 className="card-title">Dosyanız Yüklendi</h2>
            <p>Lütfen analiz etmek için Analiz et butonuna basınız</p>
            <div className="card-actions justify-end">
              <button
                onClick={handleAnalyze}
                className={`btn btn-secondary w-full ${
                  analyzing ? "loading" : ""
                }`}
                disabled={analyzing}
              >
                {analyzing
                  ? "Analiz Ediliyor..."
                  : "Metni Yapay Zeka ile Analiz Et"}
              </button>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponents;
