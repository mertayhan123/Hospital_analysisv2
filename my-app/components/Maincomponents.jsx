"use client"; // Dosyayı Client Component olarak işaretliyoruz

import React from 'react';
import { useRouter } from 'next/navigation'; // next/navigation'dan useRouter kullanıyoruz
import { IoIosAlert } from "react-icons/io";
import { CiSquareAlert } from "react-icons/ci";
import { MdOutlineInput } from "react-icons/md";
import doktor from "../public/image/doktor.png";
import Image from 'next/image';

export const Maincomponents = () => {
  const router = useRouter(); // useRouter'u next/navigation'dan alıyoruz

  const handleButtonClick = () => {
    router.push('/'); // '/' sayfasına yönlendirme
  };

  return (
    <div
      className="
        relative
        min-h-screen
        flex
        flex-col md:flex-row
        items-start 
        justify-between
        bg-antep-200
        px-8
        pt-12
        pb-8
        gap-8
        font-smooch
      "
    >
      {/* Metinler (Sol kısım) */}
      <div className="md:w-1/2 space-y-6 py-10">
        <div>
          {/* Başlık boyutunu büyüttük */}
          <h1 className="text-6xl text-peach-200 font-bold mb-4 py-5">Akıllı Tahlil</h1>
          <p className=" leading-relaxed text-2xl text-lacivert-200">
          “Hoş geldiniz! Bu platform, e-Nabız tahlillerinizi güvenli bir şekilde yükleyerek yapay zeka desteğiyle analiz edilmesini sağlar. Tahlilleriniz detaylı bir şekilde değerlendirilerek, sonuçlarınız hakkında bilgi sahibi olmanızı sağlayacak açıklamalar sunulacaktır. Unutmayın, burada yapılan yorumlar yalnızca bilgilendirme amaçlıdır ve uzman bir hekime danışmanız önerilir. 
          Sağlığınızı daha iyi anlamak ve bilinçli adımlar atmak için bu yenilikçi çözümü kullanabilirsiniz.”
          </p>
        </div>
        <div className='h-40'></div>
   

        {/* Uyarı İkon ve Metinleri */}
        <div className="flex flex-wrap gap-8 pt-3 text-lacivert-200">
          <div className="flex items-start gap-2 border-4 border-dashed border-lacivert-200 p-2 rounded-md">
            <IoIosAlert className="text-3xl mt-1" />
            <div className="flex flex-col">
              <span>Yorumlar doktor yorumu değildir.</span>
              <span>Lütfen bir uzman hekime danışınız.</span>
            </div>
          </div>
          <div className="flex items-center gap-2 border-4 border-dashed border-lacivert-200 p-2 rounded-md">
            <span className="text-2xl">
              <CiSquareAlert />
            </span>
            <span className="items-center justify-center">Yorumlar kesinlik ifade etmemektedir.</span>
          </div>
        </div>
      </div>

      {/* Doktor Görseli (Sağ kısım) */}
      <div className="relative w-[400px] h-[450px]">
        <Image
          className="w-full h-full object-cover rounded"
          src={doktor}
          alt="Akıllı Tahlil"
        />
      </div>

      {/* Tahlil Sonucu Yükleme Kutusu (Sağ-Alta Sabit) */}
      <div className="w-72 absolute bottom-8 right-8">
        <div className="flex flex-col w-72 items-center border-2 border-dashed border-lacivert-200 rounded-md p-3">
          <span className="text-xl text-lacivert-200">Tahlil Sonucu Yükleme</span>
          <MdOutlineInput className="text-lacivert-200 text-2xl" />
        </div>
        <div className="flex justify-center p-3">
          <button
            onClick={handleButtonClick} // Yönlendirme işlemi burada
            className="bg-lacivert-200 text-white font-bold py-4 px-6 rounded transition-colors duration-300 hover:bg-antep-200 hover:text-white"
          >
            Hadi Başlayalım
          </button>
        </div>
      </div>
    </div>
  );
};