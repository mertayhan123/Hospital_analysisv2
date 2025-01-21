"use client"; // Dosyayı Client Component olarak işaretliyoruz

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // next/navigation'dan useRouter kullanıyoruz
import { IoIosAlert } from "react-icons/io";
import { CiSquareAlert } from "react-icons/ci";
import { MdOutlineInput } from "react-icons/md";
import Image from "next/image";
import doktor from "../public/image/doktor.png";
import arrowdoctor from "../public/image/arrowdoctor.png";

export const Maincomponents = () => {
  const router = useRouter(); // useRouter'u next/navigation'dan alıyoruz
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    router.push("/main"); // '/main' sayfasına yönlendirme
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-antep-200 px-4 pt-8 pb-6 gap-6 font-smooch md:px-8 md:pt-12 md:pb-8 lg:gap-8 relative">
      {/* Metinler ve Görüntü (Üst Bölüm) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 py-6 bg-peach-200 rounded-xl px-4 md:px-8 w-full">
        {/* Metinler (Sol Kısım) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold">Akıllı Tahlil</h1>
          <p className="text-base md:text-lg lg:text-2xl leading-relaxed text-lacivert-200">
            “Hoş geldiniz! Bu platform, e-Nabız tahlillerinizi güvenli bir şekilde yükleyerek yapay zeka desteğiyle analiz edilmesini sağlar. Tahlilleriniz detaylı bir şekilde değerlendirilerek, sonuçlarınız hakkında bilgi sahibi olmanızı sağlayacak açıklamalar sunulacaktır. Unutmayın, burada yapılan yorumlar yalnızca bilgilendirme amaçlıdır ve uzman bir hekime danışmanız önerilir. Sağlığınızı daha iyi anlamak ve bilinçli adımlar atmak için bu yenilikçi çözümü kullanabilirsiniz.”
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-red-700 w-full">
            <div className="flex items-center gap-2 border-4 border-dashed border-lacivert-200 p-4 rounded-md flex-1">
              <IoIosAlert className="text-2xl md:text-3xl" />
              <div>
                <span>Yorumlar doktor yorumu değildir.</span>
                <br />
                <span>Lütfen bir uzman hekime danışınız.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-4 border-dashed border-lacivert-200 p-4 rounded-md flex-1">
              <CiSquareAlert className="text-2xl md:text-3xl" />
              <span>Yorumlar kesinlik ifade etmemektedir.</span>
            </div>
          </div>
        </div>
        {/* Görüntü (Sağ Kısım) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            className="max-w-xs md:max-w-sm lg:max-w-md h-auto object-cover rounded"
            src={doktor}
            alt="Akıllı Tahlil"
            priority
          />
        </div>
      </div>

      {/* Zarf Yapısı ve Sonuç Yükleme Kutusu */}
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full max-w-4xl px-4">
        {/* Bilgilendirme Kartı (Zarf Yapısı) */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative flex flex-col items-center justify-center bg-peach-200 border-2 border-lacivert-200 rounded-lg shadow-md overflow-hidden">
            {/* Zarf Kapak (Üçgen) */}
            <div className="absolute top-0 left-0 w-full h-12">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
              >
                <polygon points="0,0 100,0 50,50" className="fill-peach-200 stroke-lacivert-200 stroke-2" />
              </svg>
            </div>

            {/* Kart İçeriği */}
            <div
              className={`w-full bg-blush-200 rounded-lg border-2 border-gray-300 transition-transform duration-500 transform ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } mb-11 p-4 text-gray-800`}
            >
              <h2 className="text-xl font-bold">Hoşgeldiniz!</h2>
              <p className="mt-2 text-sm">
                Tahlil sonuçlarınızı yorumlatmak için Hadi Başlayalım butonuna
                tıklayın ve PDF yükleyerek yapay zekaya sonuçlarınızı yorumlatın.
              </p>
            </div>

            {/* Zarf Alt */}
            <div className="absolute bottom-0 left-0 w-full h-12">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
              >
                <polygon points="0,50 100,50 50,0" className="fill-peach-200 stroke-lacivert-200 stroke-2" />
              </svg>
            </div>
          </div>
          {/* "Buraya tıklayın" Butonu - Zarftan Çıkıyormuş Gibi */}
          <button
            className={`absolute left-1/2 transform -translate-x-1/2 ${
              isOpen ? "-top-6 opacity-0 pointer-events-none" : "-top-6 opacity-100"
            } bg-white border-2 border-lacivert-200 text-gray-700 font-medium text-lg py-1 px-4 rounded shadow-md hover:bg-peach-200 transition-all duration-500 cursor-pointer`}
            onClick={handleToggle}
          >
            Buraya tıklayın
          </button>
          {/* "Basınız" Mesajı */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 ${
              isOpen ? "-translate-y-[30px] opacity-100" : "translate-y-0 opacity-0"
            } bg-white border-2 border-lacivert-200 text-gray-700 font-medium text-lg py-1 px-4 rounded shadow-md transition-all duration-500 cursor-pointer`}
            onClick={handleToggle}
          >
            Basınız
          </div>
        </div>

        {/* Tahlil Sonucu Yükleme Kutusu */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center border-2 border-dashed border-lacivert-200 rounded-md p-6 bg-white">
            <span className="text-lg md:text-xl text-lacivert-200 text-center">Tahlil Sonucu Yükleme</span>
            <MdOutlineInput className="text-lacivert-200 text-3xl mt-4" />
            <div className="flex justify-center mt-6 w-full">
              <button
                onClick={handleButtonClick} // Yönlendirme işlemi burada
                className="bg-lacivert-200 text-white font-bold py-3 px-6 rounded transition-colors duration-300 hover:bg-antep-200 hover:text-white w-full sm:w-auto"
              >
                Hadi Başlayalım
              </button>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                className="w-48 h-auto object-contain rounded mx-auto"
                src={arrowdoctor}
                alt="Akıllı Tahlil"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
