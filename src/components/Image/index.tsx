import React, { useEffect, useState } from "react";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderImg?: string;
  errorImg?: string;
}
export default ({ src, placeholderImg, errorImg, ...props }: ImageProps) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", () => {
      setSrc(src);
    });
    img.addEventListener("error", () => {
      setSrc(errorImg || placeholderImg);
    });
  }, [src, placeholderImg, errorImg]);
  return <img {...props} src={imgSrc} />;
};
