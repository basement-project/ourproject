import React from "react";
import { Button } from "@/components/ui/button";
import { BsTelephone } from "react-icons/bs";

const hero = () => {
  return (
    <section
      className="w-screen h-screen flex justify-center items-center text-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/heroBackground.jpg')",
      }}
    >
      <div className="flex flex-col justify-center">
        {/* Judul Responsif */}
        <h1 className="text-yellow-400 font-bold drop-shadow-[30px_20px_40px_black] flex flex-col text-[40px] sm:text-[60px] md:text-[90px]">
          Jasa Pembuatan<span>Website</span>
        </h1>
        
        {/* Tombol Responsif */}
        <div className="flex justify-center">
          <Button
            className="mt-10 sm:mt-16 flex items-center text-sm sm:text-md px-4 py-2"
            variant="outline"
          >
            <span className="mr-1">
              <BsTelephone size={20} />
            </span>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default hero;
