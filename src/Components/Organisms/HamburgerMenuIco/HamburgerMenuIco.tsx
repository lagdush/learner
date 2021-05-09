import React, { useState } from 'react';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Container } from './HamburgerMenuIco-style';
import NavigationTemplate from '../../Templates/NavigationTemplate/NavigationTemplate';
import { studentNavigationTexts } from '../../helpers/studentNavigationTexts/studentNavigationTexts';

type HamburgerMenuIcoProps = {};

const HamburgerMenuIco: React.FC<HamburgerMenuIcoProps> = () => {
  const [menu, showMenu] = useState(false);
  const handleClick = () => {
    showMenu((prev: boolean) => !prev);
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
        />
      )}
    </Container>
  );
};

export default HamburgerMenuIco;
