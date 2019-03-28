import styled, { css } from 'styled-components';
import { transparentize, darken } from 'polished';
import { NavLink } from 'react-router-dom';

export const SidebarListTitle = styled.span`
  display: block;
  margin: 0 0 10px 15px;
  font-weight: ${props => props.theme.fontWeightMedium};
  color: #61dafb;
`;

export const SidebarListItem = styled(NavLink)`
  display: block;
  padding: 3px 25px;
  line-height: 20px;
  font-size: 13px;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #61dafb;
  }
`;

export const SidebarList = styled.div`
  margin-bottom: 20px;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 300px;
  height: 100vh;
  padding: 20px 0;
  overflow-y: auto;
  background-color: ${props => darken(0.07, props.theme.grayBase)};
  box-shadow: 0 4px 16px ${transparentize(0.9, '#000')};
  color: ${transparentize(0.2, '#fff')};
  transform: translateX(-320px);
  transition: transform 0.3s ease-out;

  ${props =>
    props.isOpen &&
    css`
      transform: none;
    `};
`;
