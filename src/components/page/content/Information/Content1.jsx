import React from "react";

export default function Content1() {
  return (
    <>
      <div className="w-full p-3">
        <h1 className=" mt-2 shadow-xl h-12 py-1 text-xl w-full text-center font-medium mb-2 rounded-xl"> INFORMASI SEPUTAR IT3</h1>
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
          <div className="collapse-title text-xl font-medium mb-2">Mentor</div>
          <div className="collapse-content">
            <p>• M. Farel (web)</p>
            <p>• Arya Faisal (web)</p>
          </div>
        </div>
      </div>
    </>
  );
}
