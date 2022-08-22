import React from 'react';
import { IconButton as MuiIconButton } from './styles';

interface IProps {
  backgroundcolor?: string | undefined;
  bordercolor?: string;
  iconcolor?: string;
  children: React.ReactNode;
  padding?: string;
  onClick?: () => void;
  height?: string;
  width?: string;
}

export const IconButton = ({
  bordercolor,
  backgroundcolor,
  children,
  padding,
  onClick,
  width,
  height,
}: IProps) => {
  return (
    <MuiIconButton
      onClick={onClick}
      backgroundcolor={backgroundcolor}
      bordercolor={bordercolor}
      width={width}
      height={height}
      padding={padding}
      edge="start"
      aria-label="open drawer"
    >
      {children}
    </MuiIconButton>
  );
};