# RPThreadTrackerV3.FrontEnd

> Front-end client code for RPThreadTracker V3.
>
> If you are looking for the C# web service API, please see [http://www.github.com/blackjackkent/RPThreadTrackerV3.BackEnd](http://www.github.com/blackjackkent/RPThreadTrackerV3.BackEnd).
>
> If you are looking for the Tumblr thread status microservice API, please see [http://www.github.com/blackjackkent/RPThreadTracker.BackEnd.TumblrClient](http://www.github.com/blackjackkent/RPThreadTracker.BackEnd.TumblrClient).

[![Build status](https://ci.appveyor.com/api/projects/status/r4fylvaq1gmepf82?svg=true)](https://ci.appveyor.com/project/blackjackkent/rpthreadtrackerv3-frontend)
[![codecov](https://codecov.io/gh/blackjackkent/RPThreadTrackerV3.FrontEnd/branch/development/graph/badge.svg)](https://codecov.io/gh/blackjackkent/RPThreadTrackerV3.FrontEnd)
[![Discord](https://img.shields.io/discord/375365160057176064?color=7389D8&label=Discord&logo=discord)](https://discord.gg/k4gDad5)

This is a React Javascript application which makes up the client-side portion of RPThreadTracker V3, a web application for members of the Tumblr collaborative writing community.

## Running the Application Locally

You will need to have NodeJS and NPM installed on your local machine to run this application.

1. Create a fork of this repository to your own GitHub account (<https://github.com/blackjackkent/RPThreadTrackerV3.FrontEnd/fork>).
2. Clone the forked repository to your local machine.
3. Check out a new feature branch in your local copy of the code.
4. Install NPM dependencies with `npm install` or `yarn`.
5. Run the application with `npm run start` or `yarn start`.

The application uses [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) to run its code locally. It may take a few minutes to build, and will rebuild (more quickly) when changes are made to the code while it is running.

Once running, the application will be available at `http://localhost:8080`.

## Running Unit Tests

Unit tests for this codebase are currently in the process of being refactored; updates to follow.

## External Dependencies

This application communicates with a back-end API for Tracker account information and a Tumblr client microservice. The URLs for these services are set for development purposes in the file `src/config/config.dev.json`, and by default are set to a remote staging server URL in both cases. If you are running these services locally, you can update the values in `config.dev.json`, then stop and restart the application.

## Submitting a Change

1. Commit your changes to your feature branch and push it to your forked repository.
2. Open a pull request to the repository at https://github.com/blackjackkent/RPThreadTrackerV3.FrontEnd.

## Meta

Rosalind Wills - [@blackjackkent](https://twitter.com/blackjackkent) – rosalind@blackjack-software.com

[https://github.com/blackjackkent/RPThreadTrackerV3.FrontEnd](https://github.com/blackjackkent/RPThreadTrackerV3.FrontEnd/)
