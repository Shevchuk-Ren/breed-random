import styled from 'styled-components';
import { breakpoints } from './constants';

export const CommonWrapper = styled.div`
  padding: 16px 16px 26px;
  min-height: calc(100vh - 52px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.md}) {
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 30px
  }
`;
