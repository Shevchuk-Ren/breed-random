import styled from 'styled-components';
import { breakpoints, color } from 'styles';

export const Title = styled.div`
  padding: 12px;
  text-align: center;
  font-weight: 700;
  background-color: ${color.boxShadow};
`;
export const StyledGallery = styled.ul`
display: grid;
max-width: calc(100vw - 300px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${breakpoints.xs}) {
    max-width: 100%;
  }
`
export const StyledItem = styled.li<{ index?: string }>`
display: flex;
justify-content: center;
align-items: center;
background: black;
border-radius: 25px;

 grid-column:  ${props => props.index === 'true' ? 'span 1' : ''};
 grid-row: ${props => props.index === 'true' ? 'span 2' : ''};

`

// export const StyledItem = styled('li')<{ index?: string, error?: boolean; marginBottom?: number }>(({
//   error,
//   marginBottom,
//   index
// }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   background: 'black',
//   borderRadius: '25px',
//   gridColumn: index === 'true' ? 'span 3' : '',
//   gridRow: index === 'true' ? 'span 2' : '',
// }
// ));