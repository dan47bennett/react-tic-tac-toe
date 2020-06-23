# react-tic-tac-toe
A tic-tac-toe game built in React.js and hosted at https://tic-tac-toe-dfc67.web.app/. This project aims to host this as an online game with user accounts, invites and game history for each player.

Inspired by this [tutorial](https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial) and this [guide](https://www.youtube.com/watch?v=KsKcoQT_Qyo). Built from the React example, this implementation uses functional components in place of a class-based architecture.


CI is used here to deploy the site to firebase whenever changes are pushed to master.

Currently Firebase is being used purely for hosting but the next stage is to use it also for suthentication. In Index.js there is now a firebase config object and the app is initialised to allow it to talk to Firebase.

Google login will be added, using a pre-existing firebaseui. The MVP for this working will simply be a line of text reading 'Hello, {NAME}.'
