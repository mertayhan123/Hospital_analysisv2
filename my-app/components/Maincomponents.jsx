"use client"; // Dosyayı Client Component olarak işaretliyoruz

import React from "react";
import { useRouter } from "next/navigation"; // next/navigation'dan useRouter kullanıyoruz
import { IoIosAlert } from "react-icons/io";
import { CiSquareAlert } from "react-icons/ci";
import { MdOutlineInput } from "react-icons/md";
import doktor from "../public/image/doktor.png";
import arrowdoctor from "../public/image/arrowdoctor.png";
import Image from "next/image";
import { useState } from "react";

export const Maincomponents = () => {
  const router = useRouter(); // useRouter'u next/navigation'dan alıyoruz

  const handleButtonClick = () => {
    router.push("/main"); // '/' sayfasına yönlendirme
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-between
        bg-antep-200
        px-4
        pt-8
        pb-6
        gap-6
        font-smooch
        md:px-8
        md:pt-12
        md:pb-8
        lg:gap-8
      "
    >
      {/* Metinler (Sol kısım) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 py-6 bg-peach-200 rounded-xl px-4 md:px-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold">Akıllı Tahlil</h1>
          <p className="text-base md:text-lg lg:text-2xl leading-relaxed text-lacivert-200">
            “Hoş geldiniz! Bu platform, e-Nabız tahlillerinizi güvenli bir şekilde yükleyerek yapay zeka desteğiyle analiz edilmesini sağlar. Tahlilleriniz detaylı bir şekilde değerlendirilerek, sonuçlarınız hakkında bilgi sahibi olmanızı sağlayacak açıklamalar sunulacaktır. Unutmayın, burada yapılan yorumlar yalnızca bilgilendirme amaçlıdır ve uzman bir hekime danışmanız önerilir. Sağlığınızı daha iyi anlamak ve bilinçli adımlar atmak için bu yenilikçi çözümü kullanabilirsiniz.”
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-red-700">
            <div className="flex h-16 items-center gap-2 border-4 border-dashed border-lacivert-200 p-4 rounded-md">
              <IoIosAlert className="text-2xl md:text-3xl" />
              <div>
                <span>Yorumlar doktor yorumu değildir.</span>
                <br />
                <span>Lütfen bir uzman hekime danışınız.</span>
              </div>
            </div>
            <div className="flex h-16 items-center gap-2 border-4 border-dashed border-lacivert-200 p-4 rounded-md">
              <CiSquareAlert className="text-2xl md:text-3xl" />
              <span>Yorumlar kesinlik ifade etmemektedir.</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full h-auto object-cover rounded"
            src={doktor}
            alt="Akıllı Tahlil"
          />
        </div>
      </div>
     <div className="absolute left-10 top-[60%] w-full max-w-md  ">
  {/* Diğer içeriğiniz burada olabilir */}

  <div className="relative flex w-100 h-48 bg-peach-200 border-2 border-peach-200 rounded-lg shadow-md">
    {/* Zarf Kapak */}
    <div
      className={`absolute w-full h-24 bg-peach-200 top-0 left-0 rounded-t-lg transform transition-transform duration-500 ${
        isOpen ? "-translate-y-24" : ""
      }`}
    ></div>

    {/* Kart */}
    <div
      className={`absolute w-100 h-32 bg-blush-200 top-6 left-4 shadow-lg rounded-lg border-2 border-gray-300 transition-transform duration-500 ${
        isOpen ? "-translate-y-40" : "opacity-0"
      }`}
    >
      <div className="p-4 text-gray-800  ">
        <h2 className="text-xl font-bold">Hoşgeldiniz!</h2>
        <p className="mt-2 text-sm">
          Tahlil sonuçlarınızı yorumlatmak için Hadi Başlayalım butonuna
          tıklayın ve Pdf yükleyerek yapay zekaya sonuçlarınızı yorumlatın.
        </p>
      </div>
    </div>

    {/* Zarf Alt */}
    <div
      className={`absolute w-full h-24 bg-peach-200 bottom-0 left-0 rounded-b-lg`}
    ></div>

    {/* Zarfın Üzerine Tıklama Alanı */}
    <button
      className="absolute w-full h-full top-0 left-0 rounded-lg focus:outline-none"
      onClick={handleToggle}
    >
      <span className="text-gray-700 font-medium text-lg">Buraya tıklayın</span>
    </button>
  </div>
</div>


      {/* Tahlil Sonucu Yükleme Kutusu */}
      <div className="absolute right-8 top-[60%] w-full max-w-md">
  <div className="flex flex-col items-center border-2 border-dashed border-lacivert-200 rounded-md p-4 ">
    <span className="text-lg md:text-xl text-lacivert-200 text-center">Tahlil Sonucu Yükleme</span>
    <MdOutlineInput className="text-lacivert-200 text-2xl md:text-3xl mt-2" />
  </div>
  <div className="flex justify-center mt-4">
    <button
      onClick={handleButtonClick} // Yönlendirme işlemi burada
      className="bg-lacivert-200 text-white font-bold py-3 px-6 rounded transition-colors duration-300 hover:bg-antep-200 hover:text-white"
    >
      Hadi Başlayalım
    </button>
  </div>
  <div className="mt-6">
    <Image
      className="w-[200px] h-auto object-contain rounded mx-auto"
      src={arrowdoctor}
      alt="Akıllı Tahlil"
    />
  </div>





      </div>
    </div>
  );
};
