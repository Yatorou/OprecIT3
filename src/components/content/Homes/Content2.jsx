import React from "react";
import Reja from "../../../assets/Ketumomagat.png";

export default function Content2() {
  return (
    <div className=" w-full h-full rounded-2xl flex flex-col p-3">
      <div className="navbar bg-base-100 border sticky top-3 z-10 shadow-lg rounded-2xl mb-4 px-3">
        <a href="#1" className="m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </a>

        <div className="w-16 p-1 border rounded-full">
          <img className=" mask mask-circle" src={Reja} />
        </div>
        <div className="flex flex-col mx-3 just">
          <div className=" text-xl normal-case">Parel Alpareja</div>
        </div>
      </div>
      <div className=" px-4 overflow-y-scroll">
        <div className="chat chat-start">
          <div className="chat-image avatar"></div>
          <div className="chat-bubble max-w-sm">
            Hallo!, saya Muhammad Farel Alphareza. saya mengajak kalian semua
            untuk bergabung dengan eskul kami!
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble max-w-sm">Hmmm, okok , terus??</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar"></div>
          <div className="chat-bubble max-w-sm">
            Baik jadi eskul IT3 ini dibuat agar siswa siswi yang ada di SMAN 3
            Bandung bisa berkreasi lewat Programing dan coding.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble max-w-sm">
            Kira-kira bakal belajar apa aja ya?
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar"></div>
          <div className="chat-bubble max-w-sm">
            Nahh, kalau soal materi bisa langsung tanyain ke Arya saja
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble max-w-sm">
            <a href="#3" className="btn btn-success my-2">
              Lanjut ngobrol dengan Arya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
