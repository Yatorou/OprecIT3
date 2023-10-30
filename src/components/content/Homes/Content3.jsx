import React from "react";
import orgganteng from "../../../assets/orangganteng.png";
export default function Content3() {
  return (
    <div className=" w-full h-full rounded-2xl flex flex-col p-3">
      <div className="navbar bg-base-100 border sticky top-3 z-10 shadow-lg rounded-2xl mb-4 px-3">
        <a href="#2" className="m-3">
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
          <img className=" mask mask-circle" src={orgganteng} />
        </div>
        <div className="flex flex-col mx-3 just">
          <div className=" text-xl normal-case">Arya</div>
        </div>
      </div>
      <div className=" px-4 overflow-y-scroll">
        <div className="chat chat-start">
          <div className="chat-bubble">
            Hi!!, saya Arya sebagai kepala divisi website
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            Kebetulan untuk sekarang divisi di IT3 baru ada satu divisi yaitu
            divisi web ini
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            Di dalam divisi ini kita akan mempelajari dasar web yaitu HTML, CSS
            dan Javascript
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble">owh baik-baik</div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble">
            <a href="#4" className="btn btn-success my-2">
              Apa saja yang perlu di siapkan ya?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
