import Button from "@/components/Botton";
import Checkbox from "@/components/Checkbox";
import InputWithLabel from "@/components/InputWithLabel";
import { Size } from "@/constants";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import zoro from "@/icons/zoro.png";
import { useFrom } from "@/hooks/useForm";
import { login } from "@/services/auth";
import { useRouter } from "next/router";

const Login: React.FC<{}> = (props) => {
  const { register, onSubmit, values } = useFrom({});
  const router = useRouter();

  const signin = (formData: any) => {
    login(formData).then(() => router.push("/home"))
  };

  return (
    <Fragment>
      <div className="relative flex flex-col w-[500px] h-460px bg-emerald-750 rounded-md mx-auto px-14 pt-10 mt-28">
        <Image
          className="mx-auto mb-m-25 block absolute inset-minus120"
          src={zoro}
          alt="Animeflix"
          width={190}
          height={20}
        />
        <span className="text-4xl font-semibold mb-2">Sign In</span>
        <InputWithLabel
          label="Email Address"
          placeholder="john.doe@email.com"
          size={Size.Full}
          {...register("username", {
            isRequired: true,
          })}
        />
        <InputWithLabel
          label="Password"
          placeholder="john.doe@email.com"
          size={Size.Full}
          type="password"
          suggestion="Use at least 6 characters, do not use spaces."
          {...register("password", {
            isRequired: true,
            regex:
              "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}",
          })}
        />
        <Checkbox
          label="I want to receive all the latest AnimeFlix info, offer and news."
          classes="text-sm font-normal"
        />

        <Button
          label="Sign In"
          classes="mt-4 mx-auto font-extrabold text-base"
          clickEvent={() => onSubmit(signin)}
        />

        <div className="flex flex-row text-sm font-normal mx-auto mt-2">
          <span className="mr-2">Don’t have an account?</span>
          <Link href="/signup" className="hover:text-green-500">
            Sign Up
          </Link>
        </div>
        <Link
          href="/resetPassword"
          className="text-sm font-normal mx-auto mt-2 hover:text-green-500"
        >
          Forgot Password?
        </Link>
      </div>
    </Fragment>
  );
};

export default Login;
