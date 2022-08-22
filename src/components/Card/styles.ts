import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)<{ width?: number }>(({ width }) => ({
  width: width || '100%',
  borderRadius: '25px'
}));
