import React, { useState } from 'react';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Container } from './HamburgerMenuIco-style';
import NavigationTemplate from '../../Templates/NavigationTemplate/NavigationTemplate';
import { studentNavigationTexts } from '../../helpers/studentNavigationTexts/studentNavigationTexts';
import { useSpring } from '@react-spring/core';

type HamburgerMenuIcoProps = {};

const HamburgerMenuIco: React.FC<HamburgerMenuIcoProps> = () => {
  const [menu, showMenu] = useState(false);

  const menuStyles = useSpring({
    transform: menu ? `translateY(0)` : `translateY(-100%)`,
    opacity: menu ? 1 : 0
  });

  const handleClick = () => {
    showMenu(!menu);
  };

  const handleClose = () => {
    showMenu(false);
  };
  return (
    <Container>
      <MenuOpenIcon
        onClick={handleClick}
        style={{ color: '#edf5e1', zIndex: 2 }}
        fontSize="large"
      />
      {menu && (
        <NavigationTemplate
          createNavigation={studentNavigationTexts}
          showMenu={handleClose}
          style={menuStyles}
        />
      )}
    </Container>
  );
};

export default HamburgerMenuIco;
