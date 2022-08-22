import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { StyledCard } from './styles';


type IProps = {
  width?: number;
  height?: number;
  breed?: string;
  data: string;
};

export const Card = ({ width, height, breed, data }: IProps) => {
  return (
    <StyledCard width={width}>
    <CardActionArea>
      <CardMedia
        component="img"
        height={height}
        image={data}
        alt={data}
      />
     {breed && 
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {breed}
        </Typography>
      </CardContent>
     } 
    </CardActionArea>
  </StyledCard>
  );
};