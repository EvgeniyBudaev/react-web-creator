import React from "react";
import { GithubServiceConsumer } from "../github-server-context";

const withGithubService = () => Wrapped => {
  return props => {
    return (
      <GithubServiceConsumer>
        {(githubService) => {
          return <Wrapped {...props} githubService={githubService} />;
        }}
      </GithubServiceConsumer>
    );
  };
};

export default withGithubService;
