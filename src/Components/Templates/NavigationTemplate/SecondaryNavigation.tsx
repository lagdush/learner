import { useDispatch } from 'react-redux';
import { logout } from '../../../store/reducer';
import { studentNavigationTextsTopNav } from '../../helpers/studentNavigationTexts/studentNavigationTexts';
import { ScndNavigation, StyledNavLink } from './NavigationTemplate-style';

const SecondaryNavigation = () => {
  const dispatch = useDispatch();
  return (
    <ScndNavigation>
      {studentNavigationTextsTopNav.map((nav) => {
        return (
          <StyledNavLink
            key={nav.route}
            exact
            to={nav.route}
          >
            {nav.name}
          </StyledNavLink>
        );
      })}
      <StyledNavLink
        exact
        to="/login"
        onClick={() => dispatch(logout())}
      >
        Wyloguj się
      </StyledNavLink>
    </ScndNavigation>
  );
};

export default SecondaryNavigation;
