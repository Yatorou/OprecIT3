import React from "react";
export default function Information() {
  return (
    <div className=" bg-base-100 h-full w-full rounded-md carousel">
      <div className="carousel-item w-full">
        <div className="w-full p-3">
          <h1 className=" mt-2 shadow-xl h-12 py-1 text-xl w-full text-center font-medium mb-2 rounded-xl">
            {" "}
            INFORMASI SEPUTAR IT3
          </h1>
          <div className="collapse collapse-arrow bg-base-100 shadow-lg mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Pengurus</div>
            <div className="collapse-content">
              <p>• M.Farel Alphareza</p>
              <p>• Arya Faisal P</p>
              <p>• M. Lingga Anum</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow-lg mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Divisi</div>
            <div className="collapse-content">
              <ul>
                <li> • Web Developer</li>
                <li> • Internet Of Things (Belum Aktif)</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 shadow-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium mb-2">
              Mentor
            </div>
            <div className="collapse-content">
              <p>• M. Farel (web)</p>
              <p>• Arya Faisal (web)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item w-full">
        <div className=" p-3 w-full flex flex-col">
          <h1 className=" shadow-xl h-12 py-1 text-xl w-full text-center font-medium mb-2 rounded-xl">
            BERITA IT3
          </h1>
          <div className=" w-full h-full  bg-base-200 flex-1 rounded-lg">
            <h1 className="text-lg text-center">Belum ada data</h1>
          </div>
        </div>
      </div>
      <div className="carousel-item w-full">
        <div className=" p-3 w-full flex flex-col">
          <h1 className=" shadow-xl h-12 py-1 text-xl w-full text-center font-medium mb-2 rounded-xl">
            PRESTASI IT3
          </h1>
          <div className=" w-full h-full  bg-base-200 flex-1 rounded-lg">
            <h1 className="text-lg text-center">Belum ada data</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
