import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
// @ts-ignore
import { TweenMax } from 'gsap';
import { Container } from './LoginView-style';
import Header from '../../Atoms/Header/Header';
import Illustration from '../../Atoms/Illustration/Illustration';
import LoginBox from '../../Molecules/LoginBox/LoginBox';
import { HeaderGridPlacement } from './LoginView-style';

const LoginView: React.FC = () => {
  const [isTranstion, setIsTransition] = useState(true);

  const hasTransition = (arg: boolean) => {
    setIsTransition(arg);
  };

  return (
    <Transition
      unmountOnExit
      timeout={1000}
      in={isTranstion}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          y: isTranstion ? 0 : 100,
          autoAlpha: isTranstion ? 1 : 0,
          onComplete: done
        });
      }}
      onEntering={(node: any) =>
        TweenMax.fromTo(
          node,
          0.5,
          {
            y: -100,
            autoAlpha: isTranstion ? 0 : 1
          },
          {
            y: 0
          }
        )
      }
    >
      <Container>
        <Illustration />
        <HeaderGridPlacement>
          <Header /> <LoginBox startTransition={hasTransition} />
        </HeaderGridPlacement>
      </Container>
    </Transition>
  );
};

export default LoginView;
