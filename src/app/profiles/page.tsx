import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-24 w-full h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Profil Perusahaan
        </h2>

        <div className="flex justify-center items-center gap-8 mb-8">
          {/* Logo Perusahaan */}
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src="/images/Daffa5.jpeg" // Ganti dengan logo perusahaan
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-xl text-left">
            <h3 className="text-2xl font-medium text-gray-800">Basement Co.</h3>
            <p className="text-gray-600 mt-2">Perusahaan Teknologi Inovatif</p>
            <p className="text-gray-500 mt-4">
              Basement Co. adalah perusahaan yang bergerak di bidang
              pengembangan perangkat lunak, layanan digital, dan teknologi
              inovatif yang mendukung bisnis untuk berkembang di dunia digital.
              Kami berfokus pada pengembangan website, aplikasi, dan solusi
              digital lainnya yang membantu bisnis dalam meningkatkan efisiensi
              dan visibilitas online.
            </p>
          </div>
        </div>

        <div className="text-left max-w-3xl mx-auto">
          <h4 className="text-2xl font-semibold text-gray-800">Visi Kami</h4>
          <p className="text-gray-600 mt-2">
            Menjadi penyedia solusi digital terbaik dan terdepan di Indonesia
            dengan memberikan inovasi terbaik yang memajukan bisnis klien kami.
          </p>

          <h4 className="text-2xl font-semibold text-gray-800 mt-6">
            Misi Kami
          </h4>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>
              Memberikan layanan terbaik dalam pengembangan website dan
              aplikasi.
            </li>
            <li>
              Menjadi mitra teknologi terpercaya bagi perusahaan kecil hingga
              besar.
            </li>
            <li>
              Terus berinovasi dengan teknologi terbaru untuk mendukung
              kesuksesan klien kami.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
