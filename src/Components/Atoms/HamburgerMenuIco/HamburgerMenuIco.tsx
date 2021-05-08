import React, { useState } from 'react';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Container } from './HamburgerMenuIco-style';

type HamburgerMenuIcoProps = {};

const HamburgerMenuIco: React.FC<HamburgerMenuIcoProps> = () => {
  const [menu, showMenu] = useState(false);
  const handleClick = () => {
    showMenu((prev: boolean) => !prev);
  };
  return (
    <Container>
      <MenuOpenIcon
        onClick={handleClick}
        style={{ color: '#edf5e1' }}
        fontSize="large"
      />
      {menu && <span>JESTEM MENU</span>}
    </Container>
  );
};

export default HamburgerMenuIco;
