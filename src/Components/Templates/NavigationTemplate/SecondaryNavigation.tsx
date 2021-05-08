import { useDispatch } from 'react-redux';
import { logout } from '../../../store/reducer';
import { studentNavigationTextsTopNav } from '../../helpers/studentNavigationTexts/studentNavigationTexts';
import { ScndNavigation, StyledNavLinkHover } from './NavigationTemplate-style';

const SecondaryNavigation = () => {
  const dispatch = useDispatch();
  return (
    <ScndNavigation>
      {studentNavigationTextsTopNav.map((nav) => {
        return (
          <StyledNavLinkHover
            key={nav.route}
            exact
            to={nav.route}
          >
            {nav.name}
          </StyledNavLinkHover>
        );
      })}
      <StyledNavLinkHover
        exact
        to="/login"
        onClick={() => dispatch(logout())}
      >
        Wyloguj się
      </StyledNavLinkHover>
    </ScndNavigation>
  );
};

export default SecondaryNavigation;
