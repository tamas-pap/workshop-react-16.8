import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { NavLink } from 'react-router-dom';

export const SidebarListTitle = styled.span`
  display: block;
  margin: 0 0 10px 15px;
  font-weight: ${props => props.theme.fontWeightMedium};
  font-size: 16px;
  color: #10a2ca;
`;

export const SidebarListItem = styled(NavLink)`
  display: block;
  margin-bottom: 2px;
  padding: 3px 25px;
  line-height: 20px;
  font-size: 14px;

  &.active {
    color: #10a2ca;
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
  width: 400px;
  height: 100vh;
  padding: 20px 0;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 4px 16px ${transparentize(0.9, '#000')};
  transform: translateX(-420px);
  transition: transform 0.3s ease-out;
  font-family: ${props => props.theme.fontFamilyMonospace};

  ${props =>
    props.isOpen &&
    css`
      transform: none;
    `};
`;
