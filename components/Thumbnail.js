import React from "react";
import Image from "next/dist/client/image";

function Thumbnail({ result }) {
  return (
    <div
      className="p-2 group cursor-pointer transition duration-200
     ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={result.thumbnailUrl}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <h2
          className="mt-1 text-2xl text-white translate-all duration-100
         ease-in-out group-hover:font-bold"
        >
          {result.title}
        </h2>
      </div>
    </div>
  );
}

export default Thumbnail;
