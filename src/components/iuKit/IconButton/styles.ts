import styled from 'styled-components';
import { IconButton as MuiIconButton } from '@mui/material';

export const IconButton = styled(MuiIconButton)<{
  width?: string;
  height?: string;
  bordercolor?: string;
  backgroundcolor?: string;
  padding?: string;
}>(
  ({
    bordercolor,
    backgroundcolor,
    padding,
    width,
    height,
  }) => ({
    backgroundColor: backgroundcolor && `${backgroundcolor} !important`,
    border: `1px solid ${bordercolor} !important`,
    borderRadius: '4px !important',
    padding: padding && `${padding} !important`,
    width: width ? width : 'initial',
    height: height ? height : 'initial',
    marginRight: '5px !important'
  })
);
