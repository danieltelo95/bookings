import { useState } from 'react';
import { AppBar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/ajugarlogo.png';
import { StyledToolbar, StyledImg, StyledInputBase, StyledStack } from './HeaderStyles';

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const displayMobile = () => {};
  const displayDesktop = () => (
    <StyledToolbar>
      <StyledImg src={logo} alt="logo" />
        <StyledStack>
            <StyledInputBase
            fullWidth
            placeholder="Buscar..."                
            />
            <SearchIcon />
        </StyledStack>
    </StyledToolbar>
  );

  return (
    <AppBar>
      {mobile ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

export default Header;
