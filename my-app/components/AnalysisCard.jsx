"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import { analysisAtom } from "../state/atoms/analysisAtom";

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8 },
};

const AnalysisCard = ({ analysisResult }) => {
  const [step, setStep] = useState(0);
  const setAnalysisResult = useSetAtom(analysisAtom); 
  const router = useRouter();

  const popups = [
    { title: "Genel Durum", content: analysisResult?.genelDurum },
    { title: "Öneriler", content: analysisResult?.oneriler },
    { title: "Uyarı", content: "Bu analiz bir doktor görüşü değildir." },
  ];

  const handleNext = () => {
    if (step < popups.length - 1) {
      setStep(step + 1);
    } else {
      // Son adımdayken veriyi saklayıp yönlendiriyoruz
      setAnalysisResult(analysisResult);
      router.push("/saglik-karnen");
    }
  };

  return (
    <AnimatePresence>
      {/* Arka plan overlay */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Popup kart */}
        <motion.div
          className="relative w-[90%] max-w-md rounded-xl
                     p-6 shadow-xl
                     backdrop-blur-md bg-white/10
                     ring-1 ring-white/20
                     text-white"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h2 className="text-xl font-bold neon-text mb-2">
            {popups[step].title}
          </h2>
          <p className="mb-4">{popups[step].content}</p>
          <button
            className="btn-futuristic w-full mt-4 py-2 text-lg font-semibold
                       bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-all
                       shadow-[0_0_10px_rgba(0,255,255,0.6),inset_0_0_10px_rgba(0,255,255,0.3)]
                       hover:shadow-[0_0_15px_rgba(0,255,255,0.8),inset_0_0_10px_rgba(0,255,255,0.4)]"
            onClick={handleNext}
          >
            {step === popups.length - 1
              ? "Sağlık Karneni Göster"
              : "Sonraki"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnalysisCard;
