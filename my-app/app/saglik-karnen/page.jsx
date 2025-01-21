import React from 'react';

const SaglikKarnen = ({ analysisResult }) => {
  return (
    <div className="container mx-auto mt-8 space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sağlık Karnen</h1>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Genel Durum</h2>
          <p className="text-sm">{analysisResult.genelDurum}</p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Normal Değerler</h2>
          <ul className="list-disc list-inside text-sm">
            {analysisResult.normalDegerler.map((deger, index) => (
              <li key={index}>
                <strong>{deger.isim}:</strong> {deger.deger} (Normal: {deger.normalAralik}) - {deger.aciklama}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Sapma Gösteren Değerler</h2>
          <ul className="list-disc list-inside text-sm">
            {analysisResult.sapmalar.map((sapma, index) => (
              <li key={index}>
                <strong>{sapma.isim}:</strong> {sapma.deger} (Normal: {sapma.normalAralik}) - {sapma.aciklama}
                {sapma.hastaliklar?.length > 0 && (
                  <ul className="list-disc list-inside pl-4 mt-1">
                    {sapma.hastaliklar.map((hastalik, i) => (
                      <li key={i} className="text-xs text-gray-700">{hastalik}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Öneriler</h2>
          <p className="text-sm">{analysisResult.oneriler}</p>
        </div>
      </div>
    </div>
  );
};

export default SaglikKarnen;
