import React from 'react';
import { StyledGallery, StyledItem, Title } from 'components/CardList/styles';
import { Card } from 'components';


type IProps = {
  title: React.ReactNode;
  rows: string[];
  height?: number;
};

export const CardList = ({ title, rows, height }: IProps) => {
  return (
    <>
     <Title>{title + 'BREED'}</Title>
    <StyledGallery> 
      {rows.map((image: string, index: number) => {
        return <StyledItem key={index} index={rows.length === 1 ? 'true' : 'false'} ><Card height={height}  data={image} 
      ></Card></StyledItem>;
      })}
    </StyledGallery>
    </>
  );
};