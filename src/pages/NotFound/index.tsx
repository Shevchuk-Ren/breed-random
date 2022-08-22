import React from 'react';
import { useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { routes } from 'shared/constants/routes';
import { IconButton } from 'components';
import { CommonWrapper } from 'styles';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
      <CommonWrapper>
        <h1>This page not found</h1>
        <IconButton onClick={()=> navigate(routes.home)}>
          Return HOME
        <PetsIcon />
        </IconButton>
      </CommonWrapper>
    );
  };