# Welcome
Good Day, My name is Oginni Mobolaji Richard, thanks for giving me the opportunity to showcase myself.

------------------------------------------------------------------------------------
listed belows are information about this app and instructions to run this application
-------------------------------------------------------------------------------------

# App details
This app was created using React Native Cli, listed below are the dependencies used and their purpose
   - "@react-navigation/native"  - For Navigation,
   -  "@react-navigation/native-stack" - For Navigation ,
   -  "@react-navigation/stack": - For Navigation ,'
   - "@react-navigation/bottom-tabs" - For Bottom Tab Navigation,
   - "react-native-heroicons" - For icons,
   - "react-native-safe-area-context": "^4.7.1" - React Navigation dependency,
   - "react-native-screens": "^3.24.0" - React Navigation dependency,
   -  "react-native-svg": "13.4.0" - heroicon dependency,
   - "typescript": "4.8.4"  - For Type checking

# Project Strcuture

**assets**
This contains static data like images, fonts e.t.c

**components**
This is where the React components lives. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**constant**
This is where the themes/colors  and static reusable data lives. 

**context**
This is the app context provider lives, The context provider allows all the children in the tree to access and update data directly avoiding the concepts of props drilling. 

**ios**
Automatically IOS boilerplate codes

**navigation**
This is where the `react-navigation` navigators lives.

**screens**
This is where the screen components lives. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.


**types**
Here lives the static types for the app (Typescript).


**app.tsx** This is the entry point to the app. This is where you will find the main App component which renders the rest of the application.


# Starting App
To run app, after succcessfully cloning or downloading the source code on github, run the following code on the terminal:
(Please a working enviroment is required to successfully run the app)
- cd client
- npm install
- cd ios
- pod install
- cd ..
- npm start
- i (opens on iOS simulator) 
- a (opens onAndroid simulator)

# App Workflow
- On successful lanuch,
- Users are shown to the Home screen, where they can navigate to the menu / products screen
- On the menu tab, Products are displayed and onClick on the add to cart button, users are taken to the product details apge
- On the product details page, users can see the details, add product to cart 
- Cart Tab, Users will see all the products which the've selectd here and can then proceed to checkout

# NB
- The image in the product details screen is blurry, this is due to the low quality of image gotten from the figma design.
    