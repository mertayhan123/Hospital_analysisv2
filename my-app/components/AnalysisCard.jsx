import React from 'react'

const AnalysisCard = ({analysisResult}) => {
  return (
    <div className='container  mx-auto mt-8'>
      {analysisResult && (
        <div className="max-w-md mx-auto bg-peach-200 p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Yapay Zeka Analizi</h2>
          <p className="text-sm whitespace-pre-wrap">{analysisResult}</p>
          <div className="alert alert-warning mt-4">
            Bu analiz bir doktor görüşü değildir. Kesin teşhis için uzman bir
            doktora danışın.
          </div>
        </div>
      )}
    </div>
  )
}

export default AnalysisCard