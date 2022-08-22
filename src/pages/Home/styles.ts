
import styled from 'styled-components';
import { breakpoints } from 'styles';

export const StyledWrapper = styled.div`
padding: 20px;
margin: 20px auto;
@media (min-width: ${breakpoints.xs}) {
    padding: 0;
margin: 10px auto;
  }
`