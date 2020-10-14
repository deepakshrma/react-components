import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Img = styled.img``;
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderImg?: string;
}
export default ({ src, placeholderImg, ...props }: ImageProps) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", () => {
      setSrc(src);
    });
    img.addEventListener("error", () => {
      setSrc(placeholderImg);
    });
  }, [src, placeholderImg]);
  return <Img {...props} src={imgSrc} />;
};
