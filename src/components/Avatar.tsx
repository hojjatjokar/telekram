import React from 'react';
import styled from 'styled-components';

const SmallImage = styled.img`
  width: 27px;
  height: 27px;
`;

const DefaultImage = styled.img`
  width: 54px;
  height: 54px;
`;

type Props = {
  src: string;
  alt: string;
  size: 'small' | 'medium';
};

function Avatar({ src, alt, size }: Props) {
  if (size === 'small') {
    return <SmallImage src={src} alt={alt} />;
  }
  return <DefaultImage src={src} alt={alt} />;
}

Avatar.defaultProps = {
  size: 'medium',
};
export default Avatar;
