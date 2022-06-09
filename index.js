// Write your code in this file!
let currentUser = "Ken Muyesu";
// let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; //using string interpolation

// let excitedWelcomeMessage =
//   "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!";
// let excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`; //using string interpolation
let excitedWelcomeMessage = welcomeMessage.toUpperCase();

// let shortGreeting = "Welcome, " + currentUser[0] + "!";
// let shortGreeting = `Welcome, ${currentUser[0]}!`; //using string interpolation
let shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`; //using string interpolation
