import Button from "@/components/Botton";
import InputWithLabel from "@/components/InputWithLabel";
import { Size } from "@/constants";
import React, { Fragment, useEffect } from "react";
import Image from "@/components/Image";
import Link from "next/link";
import zoroHanging from "@/icons/zoroHanging.png";
import { useFrom } from "@/hooks/useForm";
import { signup } from "@/services/auth";
import { useRouter } from "next/router";

const Login: React.FC<{}> = (props) => {
  const router = useRouter();
  const handleSignUp = (values: any) => {
    signup({ ...values, username: values.email }).then(() => {
      router.push("/login");
    });
  };

  const { register, onSubmit, values } = useFrom({});

  return (
    <Fragment>
      <div className="relative flex flex-col w-[500px] bg-emerald-750 rounded-md mx-auto px-14 pt-10 mt-8">
        <form>
          <div className="flex mb-[20px]">
            <Image
              className="ml-[280px] mt-[-50px] block absolute"
              src={zoroHanging}
              alt="Animeflix"
              width={180}
              height={20}
            />
            <span className="text-4xl mx-auto font-semibold mb-2">Sign Up</span>
          </div>
          <div className="flex-1 overflow-auto">
            <InputWithLabel
              label="First Name"
              placeholder="John"
              size={Size.Full}
              {...register("firstName", { isRequired: true })}
            />
            <InputWithLabel
              label="Last Name"
              placeholder="Doe"
              size={Size.Full}
              {...register("lastName", { isRequired: true })}
            />
            <InputWithLabel
              label="Email Address"
              placeholder="john.doe@email.com"
              size={Size.Full}
              {...register("email", {
                isRequired: true,
                regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
              })}
            />
            <InputWithLabel
              label="Password"
              placeholder="john.doe@email.com"
              size={Size.Full}
              type="password"
              {...register("password", {
                isRequired: true,
                regex:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}",
              })}
            />
            <InputWithLabel
              label="Confirm Password"
              placeholder="john.doe@email.com"
              size={Size.Full}
              type="password"
              {...register("confirmPassword", {
                isRequired: true,
                regex:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}",
                validator: (value, formState) =>
                  value === formState?.password
                    ? null
                    : "Password does not match",
              })}
            />
          </div>

          <Button
            label="Sign Up"
            classes=" mt-8 mx-auto font-extrabold text-base"
            clickEvent={() => {
              onSubmit(handleSignUp);
            }}
          />
        </form>

        <div className="flex flex-row text-sm font-normal mx-auto mt-2 mb-8">
          <span className="mr-2">Already have an account?</span>
          <Link href="/login" className="hover:text-green-500">
            Sign In
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
