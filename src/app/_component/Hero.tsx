import React from "react";
import { Button } from "@/components/ui/button";
import { BsTelephone } from "react-icons/bs";

const hero = () => {
  return (
    <section
      className="w-screen h-screen flex justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/heroBackground.jpg'), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))", // Menambahkan gradien gelap
      }}
    >
      <div className="flex flex-col justify-center ">
        <h1 className="text-[90px] text-yellow-400 font-bold drop-shadow-[30px_20px_40px_black] flex flex-col">
          Jasa Pembuatan<span>Website</span> 
        </h1>
        <div className="flex justify-center">
          <Button className="mt-20 flex items-center text-md" variant="outline">
            <span className="mr-1">
              <BsTelephone size={25} />
            </span>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default hero;