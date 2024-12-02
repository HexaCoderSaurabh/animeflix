import React from "react";
import Image from "next/image";

interface BaseIconProps {
  name: string;
  width: number;
  height: number;
  fill: string;
  description?: string;
  classes?: string;
}

const BaseIcon: React.FC<BaseIconProps> = ({
  name,
  width,
  height,
  fill,
  description = "image",
  classes
}) => {
  return (
    <Image
      src={`@/icons/${name}`}
      alt={description}
      width={width}
      height={height}
      className={classes}
    />
  );
};
