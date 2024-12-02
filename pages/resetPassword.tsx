import Button from "@/components/Botton";
import InputWithLabel from "@/components/InputWithLabel";
import { Size } from "@/constants";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import zoro from '@/icons/zoroHangingSleepy.png'

const Login: React.FC<{}> = (props) => {
  return (
    <Fragment>
      <div className="relative flex flex-col w-[500px] h-460px bg-emerald-750 rounded-md mx-auto px-14 pt-10 mt-28">
        <div className="flex mb-[60px]">
          <Image
            className="ml-[85%] mt-[106px] block absolute inset-minus120"
            src={zoro}
            alt="Animeflix"
            width={190}
            height={20}
          />
          <span className="text-4xl font-semibold mb-2">Reset Password</span>
        </div>
        <InputWithLabel
          label="Email Address"
          placeholder="john.doe@email.com"
          size={Size.Full}
        />

        <Button
          label="Send Reset Link"
          classes="mt-12 mx-auto font-extrabold text-base"
        />

        <div className="flex flex-row text-sm font-normal mx-auto mt-2">
          <span className="mr-2">Want to sign in?</span>
          <Link href="/login" className="hover:text-green-500">Sign In</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
