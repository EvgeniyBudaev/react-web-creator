import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import ErrorBoundry from './components/error-boundry';
import { GithubServiceProvider } from './components/github-server-context';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/app';
import GithubService from './services/github-service';
const githubService = new GithubService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <GithubServiceProvider value={githubService}>
        <Router>
          <App />
        </Router>
      </GithubServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);


