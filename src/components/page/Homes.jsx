import React from "react";
import orgganteng from "../assets/orangganteng.png";
import Reja from "../assets/Ketumomagat.png";
export default function Homes() {
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
    <div className="w-full h-full carousel rounded-box overflow-x-hidden ">
      <div id="1" className="carousel-item w-full">
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
              Kamu sudah pernah dengar eskul IT3 belum ?
            </div>
          </div>
          <div className="chat chat-end"></div>
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
      </div>
      <div id="2" className="carousel-item w-full">
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
                Hallo!, saya Muhammad Farel Alphareza. saya mengajak kalian
                semua untuk bergabung dengan eskul kami!
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble max-w-sm">Hmmm, okok , terus??</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar"></div>
              <div className="chat-bubble max-w-sm">
                Baik jadi eskul IT3 ini dibuat agar siswa siswi yang ada di SMAN
                3 Bandung bisa berkreasi lewat Programing dan coding.
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
      </div>
      <div id="3" className="carousel-item w-full">
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
                Kebetulan untuk sekarang divisi di IT3 baru ada satu divisi
                yaitu divisi web ini
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble">
                Di dalam divisi ini kita akan mempelajari dasar web yaitu HTML,
                CSS dan Javascript
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
      </div>
      <div id="4" className="carousel-item w-full">
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
      </div>
      <div id="5" className="carousel-item w-full">
        <div className=" w-full p-3 ">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeY9qpEhfC0P0d1-DzNgpyRONR593YOZWY-XHw0MDwgdTuk-A/viewform?embedded=true"
            allowFullScreen
            className=" w-full h-full rounded-lg border"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
