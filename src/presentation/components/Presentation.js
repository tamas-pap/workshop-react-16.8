import React, { PureComponent, Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { findIndex, map } from 'lodash-es';
import { SplitColumn } from '../../core/components/styled';
import { Split, DocumentTitle } from '../../core/components';
import { SLIDES, MARKDOWN, CODE_SANDBOX } from '../constants';
import { Presentation as PresentationContainer, Slide } from './styled';
import history from '../../core/services/history';
import NavigationBar from './NavigationBar';
import CodeSandbox from './CodeSandbox';
import Markdown from './Markdown';
import Sidebar from './Sidebar';

class Presentation extends PureComponent {
  state = {
    isSidebarOpen: false,
    slide: undefined,
    nextSlide: undefined,
    previousSlide: undefined,
  };

  componentDidMount() {
    const { match } = this.props;
    const { slideId } = match.params;
    const slideIndex = findIndex(SLIDES, { id: slideId });

    if (slideIndex === -1) {
      history.push(`/${SLIDES[0].id}`);
      return;
    }

    const slide = SLIDES[slideIndex];
    const nextSlide = slideIndex < SLIDES.length ? SLIDES[slideIndex + 1] : undefined;
    const previousSlide = slideIndex > 0 ? SLIDES[slideIndex - 1] : undefined;

    this.setState({ slide, nextSlide, previousSlide });
  }

  componentWillReceiveProps({ match }) {
    const { slideId } = match.params;
    const slideIndex = findIndex(SLIDES, { id: slideId });
    const slide = SLIDES[slideIndex];
    const nextSlide = slideIndex < SLIDES.length ? SLIDES[slideIndex + 1] : undefined;
    const previousSlide = slideIndex > 0 ? SLIDES[slideIndex - 1] : undefined;

    this.setState({ slide, nextSlide, previousSlide });
  }

  openSidebar = () => {
    this.setState({ isSidebarOpen: true });
  };

  closeSidebar = () => {
    this.setState({ isSidebarOpen: false });
  };

  renderSection = ({ type, file: filename, codeSandboxId }) => {
    if (type === MARKDOWN) return <Markdown fileName={filename} />;
    if (type === CODE_SANDBOX) return <CodeSandbox id={codeSandboxId} />;
    return null;
  };

  render() {
    const { isSidebarOpen, slide, previousSlide, nextSlide } = this.state;

    if (!slide) return null;

    const { title, sections } = slide;
    const sectionSizes = sections.length > 1 ? map(sections, 'size') : undefined;

    return (
      <Fragment>
        <DocumentTitle>{title}</DocumentTitle>
        <PresentationContainer>
          <Sidebar isOpen={isSidebarOpen} close={this.closeSidebar} />

          <Slide>
            {sections.length > 1 && (
              <Split sizes={sectionSizes} minSize={0}>
                {map(sections, (section, sectionIndex) => (
                  <SplitColumn key={sectionIndex}>{this.renderSection(section)}</SplitColumn>
                ))}
              </Split>
            )}

            {sections.length === 1 && this.renderSection(sections[0])}
          </Slide>

          <NavigationBar
            title={title}
            previous={previousSlide && previousSlide.id}
            next={nextSlide && nextSlide.id}
            openSidebar={this.openSidebar}
          />
        </PresentationContainer>
      </Fragment>
    );
  }
}

Presentation.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Presentation;
