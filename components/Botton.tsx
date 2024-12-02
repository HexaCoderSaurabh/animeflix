import { Size } from "@/constants";
import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  label: string;
  size?: Size;
  classes?: string;
  clickEvent?: MouseEventHandler<HTMLDivElement>
}

const Button: React.FC<ButtonProps> = ({ label, size, classes, clickEvent }) => {
  return (
    <div className={`${classes} border cursor-pointer rounded-md flex h-40px w-150px bg-white text-emerald-750`} onClick={clickEvent}>
      <div className="m-auto">{label}</div>
    </div>
  );
};

export default Button