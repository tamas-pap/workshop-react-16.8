import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/styles';
import { GlobalStyle } from './core/components/styled';
import { SLIDES } from './presentation/constants';
import { Presentation } from './presentation/components';
import history from './core/services/history';

render(
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/:slideId" component={Presentation} />
          <Redirect exact path="/" to={`/${SLIDES[0].id}`} />
        </Switch>
      </Router>
    </Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
);
