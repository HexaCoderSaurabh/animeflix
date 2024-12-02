import Button from "@/components/Botton";
import React from "react";
import Image from "next/image";
import myImage from "@/icons/notFound.svg";
import { useRouter } from "next/router";

const PageNotFound: React.FC<{}> = (props) => {

  const router = useRouter()

  return (
    <div className="flex flex-row w-full h-80vh mx-auto bg-emerald-550">
      <div className="flex flex-col m-auto bg-emerald-550">
        <div className="flex flex-row h-200px">
          <Image
            className=""
            src={myImage}
            alt="sleeping zoro"
            width={200}
            height={200}
          />
          <span className="my-auto text-4xl">404</span>
          <div className="h-100px w-4px bg-white rounded my-auto ml-10"></div>
          <span className="my-auto text-4xl ml-10">Not Found</span>
        </div>
        <div className="h-60px">
          <Button
            label="Home"
            classes="mx-auto font-extrabold text-base"
            clickEvent={() => router.push('/')}
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
