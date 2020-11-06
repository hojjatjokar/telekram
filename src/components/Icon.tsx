import React from "react";

type Props = {
  size?: number;
  name: string;
};

function Icon({ size, name }: Props) {
  return <i className={`icon-${name}`} style={{ fontSize: size }} />;
}

Icon.defaultProps = {
  size: 16,
};

export default Icon;
