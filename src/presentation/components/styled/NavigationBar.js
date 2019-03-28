import styled from 'styled-components';
import { transparentize, darken } from 'polished';
import { Link } from 'react-router-dom';
import { BareButtonStyle } from '../../../core/components/styled';
import { Icon } from '../../../core/components';

export const NavigationBarTitle = styled.button`
  ${BareButtonStyle};
  padding: 0 10px;
  font-weight: ${props => props.theme.fontWeightMedium};
  font-size: 12px;
  color: ${transparentize(0.4, '#fff')};

  &:active {
    background-color: ${props => darken(0.07, props.theme.grayBase)};
    color: ${transparentize(0.2, '#fff')};
  }
`;

export const NavigationBarLinkIcon = styled(Icon)`
  width: 12px;
  height: 12px;
`;

export const NavigationBarLink = styled(Link)`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 7px 0;
  text-align: center;
  color: ${transparentize(0.4, '#fff')};

  &:active {
    background-color: ${props => darken(0.07, props.theme.grayBase)};
    color: ${transparentize(0.2, '#fff')};
  }
`;

export const NavigationBarLinks = styled.div``;

export const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 28px;
  background-color: ${props => props.theme.grayBase};
`;
