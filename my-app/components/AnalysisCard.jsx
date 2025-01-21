import React, { useState } from "react";

const AnalysisCard = ({ analysisResult }) => {
  const [step, setStep] = useState(0); // Adım sayacını tutar
  const [showAll, setShowAll] = useState(false); // Tüm bilgileri gösterme durumu
  console.log(analysisResult);
  const diseases = [
    ...new Set(
      analysisResult.sapmalar?.flatMap((sapma) => sapma.hastaliklar || [])
    ),
  ];
  const popups = [
    {
      title: "Genel Durum",
      content: analysisResult?.genelDurum,
    },
    {
      title: "Normal Değerler",
      content: (
        <ul className="list-disc list-inside space-y-1">
          {analysisResult?.normalDegerler?.map((deger, index) => (
            <li key={index}>
              <strong>{deger.isim}:</strong> {deger.deger} (Normal: {deger.normalAralik}) - {deger.aciklama}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Sapma Gösteren Değerler",
      content: (
        <ul className="list-disc list-inside space-y-1">
          {analysisResult?.sapmalar?.map((sapma, index) => (
            <li key={index}>
              <strong>{sapma.isim}:</strong> {sapma.deger} (Normal: {sapma.normalAralik}) - {sapma.aciklama}
              {sapma.hastaliklar?.length > 0 && (
                <ul className="list-disc list-inside pl-4 mt-1">
                  {sapma.hastaliklar.map((hastalik, i) => (
                    <li key={i} className="text-xs text-gray-700">
                      {hastalik}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Öneriler",
      content: analysisResult?.oneriler,
    },
    {
      title: "Uyarı",
      content: (
        <p>
          Bu analiz bir doktor görüşü değildir. Kesin teşhis için uzman bir doktora danışın.
        </p>
      ),
    },
  ];

  const handleNext = () => {
    if (step < popups.length - 1) {
      setStep(step + 1);
    } else {
      setShowAll(true); // Tüm bilgileri göster
    }
  };

  return (
    <div className="container mx-auto mt-8">
      {!showAll ? (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-lg font-bold">{popups[step].title}</h2>
            <div className="mt-4">{popups[step].content}</div>
            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={handleNext}
              >
                {step === popups.length - 1 ? "Sağlık Karneni Göster" : "Sonraki"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Sağlık Karnen</h1>

          {/* Genel Durum */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">Genel Durum</h2>
              <p>{analysisResult.genelDurum}</p>
            </div>
          </div>

          {/* Normal Değerler */}
          {analysisResult.normalDegerler?.length > 0 && (
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Normal Değerler</h2>
                <ul className="list-disc list-inside space-y-1">
                  {analysisResult.normalDegerler.map((deger, index) => (
                    <li key={index}>
                      <strong>{deger.isim}:</strong> {deger.deger} (Normal: {deger.normalAralik}) - {deger.aciklama}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Sapma Gösteren Değerler */}
          {analysisResult.sapmalar?.length > 0 && (
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Sapma Gösteren Değerler</h2>
                <ul className="list-disc list-inside space-y-1">
                  {analysisResult.sapmalar.map((sapma, index) => (
                    <li key={index}>
                      <strong>{sapma.isim}:</strong> {sapma.deger} (Normal: {sapma.normalAralik}) - {sapma.aciklama}
                      {sapma.hastaliklar?.length > 0 && (
                        <ul className="list-disc list-inside pl-4 mt-1">
                          {sapma.hastaliklar.map((hastalik, i) => (
                            <li key={i} className="text-xs text-gray-700">
                              {hastalik}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">Hastalıklar</h2>
          {diseases?.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {diseases.map((hastalik, index) => (
                <li key={index} className="text-sm">
                  {hastalik}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm">Hastalık bulunamadı.</p>
          )}
        </div>
      </div>

          {/* Öneriler */}
          {analysisResult.oneriler && (
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Öneriler</h2>
                <p>{analysisResult.oneriler}</p>
              </div>
            </div>
          )}

          {/* Uyarı */}
          <div className="card bg-warning shadow-md">
            <div className="card-body">
              <h2 className="card-title">Uyarı</h2>
              <p>Bu analiz bir doktor görüşü değildir. Kesin teşhis için uzman bir doktora danışın.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalysisCard;