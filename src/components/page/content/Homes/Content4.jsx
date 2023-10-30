import React from "react";
import orgganteng from "../../assets/orangganteng.png";
export default function Content4() {
  return (
    <div className=" w-full h-full rounded-2xl flex flex-col p-3">
      <div className="navbar bg-base-100 border sticky top-3 z-10 shadow-lg rounded-2xl mb-4 px-3">
        <a href="#3" className="m-3">
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
            Sebenarnya sih tidak perlu mempersiapkan apa-apa
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-bubble">
            Kalau punya laptop itu bagus kalau tidak juga gapapa karena it3
            menggunakan labkom sebagai tempatnya
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble">
            Terimkasih...., saya pikirkan dulu..
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-bubble">
            <div className="flex flex-col w-full py-2 border-opacity-50">
              <div className="grid h-8 m-auto flex-grow btn btn-success rounded-box place-items-center">
                Tanya lebih lanjut
              </div>

              <div className="divider">ATAU</div>
              <a
                href="#5"
                className="grid w-full h-8 m-auto flex-grow btn btn-error rounded-box place-items-center"
              >
                Form Daftar Eskul
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
