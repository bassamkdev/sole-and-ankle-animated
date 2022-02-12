/* eslint-disable no-unused-vars */
import React from 'react';
import styled, {keyframes} from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop/>
      <Content aria-label="Menu">
      <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
      </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0px);
  }
`

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;


const Content = styled(DialogContent)`
  --backfill: 16px;
  position: relative; /*to use html sequence of the elemnts*/
  background: white;
  width: calc(300px + var(--backfill));
  height: 100%;
  padding: 24px 32px;
  margin-right: calc(var(--backfill) * -1);
  animation: ${slideIn} 300ms both cubic-bezier(.02,.71,.08,1.11);
  animation-delay: 200ms;
  `;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 400ms both;
  animation-delay: 500ms;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--backfill);
  padding: 16px;

`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  &:nth-of-type(1) {--nth-child: 1} 
  &:nth-of-type(2) {--nth-child: 2} 
  &:nth-of-type(3) {--nth-child: 3} 
  &:nth-of-type(4) {--nth-child: 4} 
  &:nth-of-type(5) {--nth-child: 5} 
  &:nth-of-type(6) {--nth-child: 6} 

  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  animation: ${fadeIn} 300ms both;
  animation-delay: calc(var(--nth-child) * 100ms);
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  /* will-change: opacity;
  opacity: ${fadeIn} 500ms;
  animation-delay: 2000ms; */
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
