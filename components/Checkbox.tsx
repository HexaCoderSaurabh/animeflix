import { Size } from "@/constants";
import React from "react";

export interface CheckboxProps {
  size?: Size;
  label?: string;
  classes?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ size, label, classes }) => {
  return (
    <div className={`${classes} flex flex-row`}>
      <input className='mt-0 mb-auto w-20px h-20px accent-green-500 text-white border-white cursor-pointer' type="checkbox" />
      <div className="leading-4 ml-4">{label}</div>
    </div>
  );
};

export default Checkbox;
