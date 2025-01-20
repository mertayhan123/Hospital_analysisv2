import React from 'react'
import { IoIosAlert } from "react-icons/io";
import { CiSquareAlert } from "react-icons/ci";
import { MdOutlineInput } from "react-icons/md";
export const Maincomponents = () => {
  return (
    <div className='flex min-h-screen flex-col md:flex-row justify-between items-center bg-green-200 p-8 gap-8'>
        <div className='md:w-1/2 space-y-6' >
            <div>
                <h1 className='text-5xl font-bold mb-2' >Akıllı Tahlil</h1>
                <p className='text-lg leading-relaxed'>
                ONLINE MEDICINE DELIVERY IS THE PROCESS OF ORDERING MEDICATIONS
                THROUGH A WEBSITE OR APP AND HAVING THEM DELIVERED TO YOUR DOORSTEP.
                </p>
            </div>
            <div className='flex flex-wrap gap-8'>
                <div className='flex  items-center text-center'>
                    <span className='text-2xl mb-2'><IoIosAlert /></span>
                    <div className=' flex flex-col '>
                        <span>Yorumlar doktor yorumu değildir.</span>
                        <span>Lütfen bir uzman hekime danışınız.</span>
                    </div>
                </div>
                <div className='flex items-center text-center'>
                    <span className='text-2xl mb-2'><CiSquareAlert /></span>
                    <div className='flex flex-col'></div>
                    <span>Yorumlar kesinlik ifade etmemektedir.</span>
                </div>
            </div>
            <div className='flex flex-wrap items-center'>
                <div className='flex flex-col border-2 border-dashed border-gray-500 rounded-md p-3  '>
                    <span className='text-xl'>Tahlil Sonucu Yükleme</span>
                   <span className='justify-center flex'><MdOutlineInput /></span>
                </div>
                <button className='btn-btn-success'>Haydi Başlayalım</button>
            </div>

        </div>
    </div>
  )
}
