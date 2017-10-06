# Employee Manager
A mobile application for managing employee information such as their shift and schedule availability.

# WINDOWS INSTALLATION
## 1. Installing Java SDK
- Go to the Java SE Development Kit 8 Downloads http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
- Download the "Windows x64" version in "Java SE Development Kit 8u144"
- Run the installation to install the SDK in your system.

## 2. Installing Node.js/NPM
- Node runs Javascript outside of the browser. NPM is used for installing and managing dependencies. Node and NPM come together.
- Go to https://nodejs.org/en/ and download the latest node version for windows.
- Run the installation file.
- To check if you have node installed, type "node -v" in the command prompt. This should display which version of node you have installed.
- Once you have Node.js installed, you can now use NPM to install the dependencies.

## 3. Installing Python Version 2
- Download the Version 2 of python
  - Example: Correct "2.7.14" NOT "3.6.3".
- Go to https://www.python.org/downloads/ to download.
- Run the installation file.

## 4. Installing Android Studio
- Download the Android Studio IDE.
  - Go to https://developer.android.com/studio/index.html to download.
- Run the installation file.
  - Select all components "Android Studio, Android SDK, and Android Virtual Device" to install.

## 5. Installing React Native CLI
- React Native Command Line Interface. Used to generate new React Native projects.
- To install, in the command prompt, run "npm install -g react-native-cli".

# 6. IMPORTANT! REGARDING SETTING UP WORKSPACE. You may run into an issue upon trying to build and run the application, with the error "Print: Entry, ":CFBundleIdentifier", Does Not Exist". For more details go here https://github.com/facebook/react-native/issues/14368
- To avoid this problem, make sure your workspace folder or project folder name contains no spaces.
- For example, "music player app" might give you an error. So, a proper workspace or project names would be "musicPlayerApp", which contains no spaces in the title.

# 7. Cloning the repository
- To clone this Android version of this mobile application's project repository, in the command prompt go inside your workspace folder and copy and paste the command below in the command prompt :
  - git clone https://github.com/justinmend/YelpCampDeployed.git
  - Press enter to then execute

# 8. Installing Dependencies
- Make sure to install the required packages to properly run the application.
  - To do that, in the command prompt, while inside the project folder where the "package.json" file should be located, type "npm install".
  - This will install all the required dependencies.

# 9. Setting up FireBase
- Create a google account if you don't already have one. Go to https://firebase.google.com/
- Go to the console https://console.firebase.google.com/
- Create a new project and name it related to the theme of the project.
- In the "Authentication" section, enable "email/password".
- You can now add users and setup their email and password.
- In the top right, click "WEB SETUP" and copy the contents inside the script tag like below:
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

# NOTE: IMPORTANT! Installing Genymotion for Android Simulator if you have an AMD CPU.
- You will need to install Genymotion Application if you have an AMD CPU to avoid running into complications trying to use the built in Android simulator in Android Studio.
- Android Studio Simulator only works well with Intel CPU.
- To install Genymotion for personal use, go to https://www.genymotion.com/fun-zone/.
- After installing Genymotion, Genymotion should be good to go and working with Android Studio.

# 10. Running and Testing the application
- Open up Android Studio and open the existing project of the location of this project you cloned.
- IMPORTANT! You might get the error message "Failed to sync Gradle project 'android'".
  - Go ahead and click the "install missing platform(s) and sync project" and "install build tools 23.0.1 and sync project" or other suggested error links that pop up.

## 10.1A For Genymotion simulator
- In Genymotion, create your choice of Android Simulator to use if you haven't already.
- In the command prompt, inside the project folder, execute "npm start" keeping it open in the background the whole time.
- In the Genymotion application, run the Android simulator you created.

## 10.1B For Android Studio simulator
- In Android Studio, in "Tools", click "AVD Manager"
  - Create a virtual device of your choice with screen size right around 5 inches.
  - For system image, download and install "Marshmallow" with API Level 23.
  - Click next then click finish.
  - Click the play button under Actions to run the simulator.
- IMPORTANT Make sure to run the command prompt as an Administrator to avoid any problems with user rights when running the application,
  - Inside the project folder, simply execute "react-native run-android" to run the project application for Android Simulator.

## 10.2 Setting up Environment Variables
- In Start Menu for Windows, in "search programs and files" type "system settings", and click "view advance system settings"
- While in System Properties, in "Advanced" tab, click "Environment Variables".
  - For "User variables for Computer" add a new user variable of "JAVA_HOME" if it doesn't exist. If "JAVA_HOME" already exists, modify it's "Variable value" to the location in your system of where you installed Java jdk.
    - For example: "C:\Program Files\Files\Java\jdk1.8.0_101"
  - Add another value to the variable "Path", with the location of your sdk platform tools.
    - For example: "C:\Users\Computer\AppData\Local\Android\sdk\platform-tools"
  - Click Ok to finish and exit out.

## 10.3 Running the application in the simulator
- The build should be successful in the command prompt when you try to run the application, and you should see the application working in the simulator if you did everything right.

## 10.4 React Native Debugger-UI
- You can also test the project application on local host by opening up http://localhost:8081/debugger-ui, and pressing "Ctrl + M" and selecting "Debug JS Remotely" in the Android simulator.
