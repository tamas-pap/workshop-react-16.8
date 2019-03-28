import React from 'react';
import PropTypes from 'prop-types';
import { SLIDES_BY_GROUPS } from '../constants';
import { Sidebar as SidebarContainer, SidebarList, SidebarListTitle, SidebarListItem } from './styled';

const Sidebar = ({ isOpen, close }) => (
  <SidebarContainer isOpen={isOpen} onMouseLeave={close}>
    {SLIDES_BY_GROUPS.map(({ title, slides }) => (
      <SidebarList key={title}>
        <SidebarListTitle>{title}</SidebarListTitle>
        {slides.map(({ id, title }) => (
          <SidebarListItem key={id} to={`/${id}`}>
            {title}
          </SidebarListItem>
        ))}
      </SidebarList>
    ))}
  </SidebarContainer>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default Sidebar;
