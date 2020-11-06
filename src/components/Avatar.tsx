import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 54px;
  height: 54px;
`;

type Props = {
  src: string;
  alt: string;
};

function Avatar({ src, alt }: Props) {
  return <Image src={src} alt={alt} />;
}

export default Avatar;
