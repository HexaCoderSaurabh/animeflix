import { Size } from "@/constants";
import React, { memo } from "react";

export interface InputWithLabelProps {
  label?: string;
  placeholder?: string;
  size?: Size;
  type?: string;
  suggestion?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any,
  error?: string
}

const InputWithLabel: React.FC<InputWithLabelProps> = memo(({
  label = "",
  placeholder = "",
  size = Size.Full,
  type = "text",
  suggestion,
  onChange,
  error
}) => {
  const width = size;
  return (
    <div className="flex flex-col">
      <div className={`h-40px w-${width} pt-4 text-sm color`}>{label}</div>
      <input
        className={`h-40px w-${width} border rounded	border-grey-500 px-4 text-sm text-emerald-750`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
      {suggestion && (
        <div className={`h-40px w-${width} pt-2 text-xs color`}>{suggestion}</div>
      )}
      {
        error && (
          <div className={`h-20px w-${width} pt-2 text-xs text-red-500`}>{error}</div>
        )
      }
    </div>
  );
});

export default InputWithLabel;
