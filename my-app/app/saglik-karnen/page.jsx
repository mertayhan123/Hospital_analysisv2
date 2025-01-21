"use client";
import React, { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { analysisAtom } from "@/state/atoms/analysisAtom";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation"; // useRouter'ı doğru şekilde import et

// --- 1) İçerik render fonksiyonunu ekle veya import et ---
function renderContent(content) {
  if (!content) return "Veri bulunamadı.";
  if (typeof content === "string") {
    return content;
  }
  if (Array.isArray(content)) {
    return content.map((item, idx) => {
      if (typeof item === "object" && item !== null) {
        return (
          <div key={idx} className="my-2 p-2 border border-gray-600 rounded-md">
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {String(value)}
              </p>
            ))}
          </div>
        );
      }
      return <p key={idx}>{String(item)}</p>;
    });
  }
  if (typeof content === "object") {
    return (
      <div>
        {Object.entries(content).map(([key, val]) => (
          <p key={key}>
            <strong>{key}:</strong> {String(val)}
          </p>
        ))}
      </div>
    );
  }
  return String(content);
}

// --- 2) Ana Bileşen ---
const SaglikKarnen = () => {
  // analysisAtom içindeki veriyi çek
  const analysisData = useAtomValue(analysisAtom);
  const router = useRouter(); // useRouter hook'unu kullanarak yönlendirme işlemi yapılacak

  const [diseases, setDiseases] = useState([]);
  
  // Eğer analysisData boşsa, yönlendir
  useEffect(() => {
    if (!analysisData || Object.keys(analysisData).length === 0) {
      router.push("/"); // Yönlendirmek istediğiniz URL'yi yazın
    }
    else {
      const diseases = [
        ...new Set(
          analysisData.sapmalar?.flatMap((sapma) => sapma.hastaliklar || [])
        ),
      ];
      setDiseases(diseases); // diseases state'ini güncelle
    }
  }, [analysisData, router]);

  // Her satırda hangi alanı göstereceğimizi tanımla
  const timelineItems = [
    {
      title: "Genel Durum",
      icon: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
      content: analysisData?.genelDurum,
    },
    {
      title: "Normal Değerler",
      icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
      content: analysisData?.normalDegerler,
    },
    {
      title: "Sapma Gösteren Değerler",
      icon: <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" />,
      content: analysisData?.sapmalar,
    },
    {
      title: "Hastalıklar",
      icon: <LightBulbIcon className="h-6 w-6 text-cyan-400" />,
      content: diseases,
    },
    {
      title: "Uyarı",
      icon: <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />,
      content: "Bu analiz bir doktor görüşü değildir.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Sağlık Karnen</h1>

        {/* Timeline Container */}
        <div className="relative border-l border-gray-700 pl-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* İkon ve Dikey Çizgi */}
              <div className="absolute -left-10 flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full ring-4 ring-gray-700">
                {item.icon}
              </div>
              {/* Başlık ve İçerik */}
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <div className="text-gray-300">
                {/* 3) İçeriği düzgün şekilde render et */}
                {renderContent(item.content)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaglikKarnen;
