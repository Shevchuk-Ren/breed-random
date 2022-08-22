import { AppBar as MuiAppBar, Box,  ThemeProvider, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import { darkTheme } from './theme';
import { IconButton } from 'components/iuKit/IconButton';

export const AppBar = () => {

    return (
      <>
         <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" color="primary">
        <Toolbar>
          <IconButton width={'38'} height={'38'}>
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            BREED
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find breed"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </MuiAppBar>
    </Box>
    </ThemeProvider>
      </>
    );
  };