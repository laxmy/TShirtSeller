# Solution

The solution was bootstrapped with React and ASP.Net core template project available in Visual Studio
It has 2 main folders

## reactapp

The client react app written with typescript and React

## webapi

The backend Api in (ASP.NETCore) that the client can connect to for CRUD operations on TShirt entities

# Running the app locally

1. Clone the repo locally

2. The `reactapp` client will need its dependencies to run locally.
   So run `npm install` on this subfolder

3. Open the solution in Visual Studio and running Start/F5 will start both the server and client
   Note: The client is set up to proxy the requests to the server that will also run locally that is specified in `setupProxy.js`
   If your server is running on a different port than the one specified here, you will need to update this file, so that your client can connect to it.

# Test

Unit tests set up with jest and ts-jest

### `npm test`

# Build

### `npm run build`

Builds the app for production to the `build` folder.

# Assumptions

1. The backend is built with in-memory db in the interest of time as well as for ease of sharing
2. Material UI is used for UI components for ease of use and consistency
3. The layout of the UI is best suited for desktops. While it still gives a usable layout in smaller devices, it is not catering to these specifically.
4. The UI tests are added only for one component and for demonstration purpose and do not have full coverage.
5. Backend API written in ASP.NETCore 7.0, as I was facing some installation issues with version 5
