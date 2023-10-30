import React from "react";

export default function Content1() {
  const arrow = (
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
        d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
      />
    </svg>
  );
  return (
    <div className="w-full h-full p-2 overflow-y-scroll">
      <div className="chat chat-start">
        <div className="chat-bubble">
          Apakah kamu tertarik dengan, hal-hal berbau coding?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">Ya!!!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          Kamu sudah pernah dengar 
          eskul IT3 belum ?
        </div>
      </div>
      <div className="chat chat-end">
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble">Yuk cari tau tentang IT3!!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">hayu!!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">
          <div className="flex w-full">
            <div className="flex flex-col w-full py-2 border-opacity-50">
              <a
                href="#5"
                className="grid h-8 m-auto flex-grow btn btn-success rounded-box place-items-center"
              >
                Skipp langusng otw Join!!!
              </a>

              <div className="divider">ATAU</div>
              <a
                href="#2"
                className="grid w-full h-8 m-auto flex-grow btn btn-warning rounded-box place-items-center"
              >
                Lanjut!!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
