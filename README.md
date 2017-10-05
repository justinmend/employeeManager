# Employee Manager
A mobile application for managing employee information such as their shift and schedule availability.

# MAC OS X INSTALLATION

# Installing XCode
- Package the code + the React Native library into an installable app and run it on the iOS simulator.
- Go to the app store and install XCode. Make sure you have the latest version of Xcode.

# Installing HomeBrew
- Used to install node. For more details go to https://brew.sh/
- In the terminal, copy and paste "/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"", and hit enter.
- If you already have HomeBrew, update brew to the latest version by running "brew update" in the terminal.

# Installing Node.js/NPM
- Node runs Javascript outside of the browser. NPM is used for installing and managing dependencies. Node and NPM come together.
- To install node, in the terminal, run "brew install node".
- To check if you have node installed, type "node -v". This should display which version of node you have installed.
- Once you have Node.js installed, you can now use NPM to install the dependencies.

# Installing watchman
- Watches files on the hard drive and waits for them to change.
- Run, "brew install watchman" to install watchman.

# Installing React Native CLI
- React Native Command Line Interface. Used to generate new React Native projects.
- To install, in the terminal, run "npm install -g react-native-cli".

# NOTE: IMPORTANT! You may run into an issue upon trying to run the application, with the error "Print: Entry, ":CFBundleIdentifier", Does Not Exist". https://github.com/facebook/react-native/issues/14368
- To avoid this problem, make sure your workspace folder or project folder name contains no spaces.
- For example, "music player app" might give you an error. So, a proper workspace or project name would be "musicPlayerApp", which contains no spaces in the title.

# Installing Dependencies
- Make sure to install the required packages to properly run the application.
  - To do that, after cloning this repository, go inside the folder by executing "$cd employeeManager. You should be able to see the "package.json" file.
  - Once you find it, in the terminal, type "$ npm install". This will install all the required dependencies.

# Setting up FireBase

# Running and Testing the application
- In the terminal, inside the project folder, execute "react-native run-ios" to run the the application in the iOS simulator.
- While in the simulator, you can test the application on local host by pressing "Command + D" and selecting "Debug JS Remotely" and then going to http://localhost:8081/debugger-ui.
