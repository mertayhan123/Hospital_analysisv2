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
    <div className="card card-side bg-blush-200 shadow-xl flex md:w-[900px] mx-auto h-64">
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
            <p>Lütfen analiz etmek için Analiz et butonuna basınız</p>
            <div className="card-actions justify-end bg-white rounded-sm">
              <button
                onClick={handleAnalyze}
                className={`btn  w-full`}
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