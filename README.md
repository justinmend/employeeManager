# Employee Manager
A mobile application for managing employee information such as their shift and schedule availability.

# MAC OS X INSTALLATION
## Installing XCode
- Package the code + the React Native library into an installable app and run it on the iOS simulator.
- Go to the app store and install XCode. Make sure you have the latest version of Xcode.

## Installing HomeBrew
- Used to install node. For more details go to https://brew.sh/
- In the terminal, copy and paste "/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"", and hit enter.
- If you already have HomeBrew, update brew to the latest version by running "brew update" in the terminal.

## Installing Node.js/NPM
- Node runs Javascript outside of the browser. NPM is used for installing and managing dependencies. Node and NPM come together.
- To install node, in the terminal, run "brew install node".
- To check if you have node installed, type "node -v". This should display which version of node you have installed.
- Once you have Node.js installed, you can now use NPM to install the dependencies.

## Installing watchman
- Watches files on the hard drive and waits for them to change.
- Run, "brew install watchman" to install watchman.

##Installing React Native CLI
- React Native Command Line Interface. Used to generate new React Native projects.
- To install, in the terminal, run "npm install -g react-native-cli".

# IMPORTANT! REGARDING SETTING UP WORKSPACE. You may run into an issue upon trying to build and run the application, with the error "Print: Entry, ":CFBundleIdentifier", Does Not Exist". For more details go here https://github.com/facebook/react-native/issues/14368
- To avoid this problem, make sure your workspace folder or project folder name contains no spaces.
- For example, "music player app" might give you an error. So, a proper workspace or project name would be "musicPlayerApp", which contains no spaces in the title.

# Installing Dependencies
- Make sure to install the required packages to properly run the application.
  - To do that, after cloning this repository, go inside the folder by executing "$cd employeeManager. You should be able to see the "package.json" file.
  - Once you find it, in the terminal, type "$ npm install". This will install all the required dependencies.

# Setting up FireBase
- Create a google account if you don't already have one. Go to https://firebase.google.com/
- Go to the console https://console.firebase.google.com/
- Create a new project and name it related to the theme of the project.
- In the "Authentication" section, enable "email/password".
- You can now add users and setup their email and password.
- In the top right, click "WEB SETUP" and copy the contents inside the script tag:
  - var config = {
      //... Sensitive information
    };
    firebase.initializeApp(config);
- Create an "App.js" file inside the src folder in your project folder and copy and paste the code below.
  - import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
class App extends Component {
  componentWillMount() {
    // PlACE COPIED CONTENTS HERE!
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1}}>
          <Router />
        </View>
      </Provider>
    );
  }
}
export default App;
- Place the the copied contents into the "componentWillMount" method.
- In the firebase website console, go to the "Database section", in "RULES", copy and paste the code below.
  - {
    "rules": {
  		"users": {
        "$uid": {
          ".read": "$uid === auth.uid",
          ".write": "$uid === auth.uid"
        }
      }
    }
  }
- Click "PUBLISH" to activate changes.

# Running and Testing the application
- In the terminal, inside the project folder, execute "react-native run-ios" to run the the application in the iOS simulator.
- You can test the application on local host by opening up http://localhost:8081/debugger-ui, and pressing "Command + D" and selecting "Debug JS Remotely" in the iOS simulator.
