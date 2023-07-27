Proposed Level of Achievement: 
Gemini

Motivation:
We want to create a fitness tracking app that helps users monitor their daily exercise routines and stay motivated to achieve their fitness goals. 

Aim: 
Our project aims to create a simple fitness tracking app. The app will allow users to input and track their daily exercise routines and display progress towards their fitness goals.

User Stories: 
1. As a fitness enthusiast, I want to be able to track my workouts, set goals, and monitor my progress.
2.  As a beginner, I want to be able to get guidance on how to perform exercises correctly and safely.
3. As a busy professional, I want to be able to track my fitness activities on the go and get reminders to stay on track. 

Scope of Project:
“Our Fitness Tracking App aims to provide users with a comprehensive platform to monitor and improve their fitness activities and progress.”

Our Fitness Tracking App is a comprehensive mobile application designed to empower users in their fitness journey by providing a robust platform for monitoring, tracking, and improving their fitness activities and progress. The app offers a range of features, including exercise tracking, goal setting, progress visualization, and personalized recommendations. By leveraging the power of technology, the app aims to enhance users' fitness experiences, promote healthy habits, and support them in achieving their fitness goals. With its user-friendly interface, insightful analytics, and seamless integration with various fitness devices and platforms, the Fitness Tracking App aims to be a trusted companion for individuals seeking to optimize their fitness routines, maintain accountability, and lead healthier lifestyles.

Features:
1) Task List: This feature empowers users to stay organized and focused on their fitness goals by providing a comprehensive list where they can create, manage, and track their workout tasks, ensuring a structured and efficient fitness routine.
2) Journal:  This feature serves as a personal fitness diary, allowing users to document their fitness progress, achievements, and challenges by recording entries with specific dates and detailed descriptions, enabling self-reflection and providing a valuable tool for motivation and tracking their fitness journey.
3) Habit Tracker: This feature serves as a powerful tool for users to meticulously log daily habits and activities, empowering them to cultivate positive routines, stay motivated, and achieve personal growth in pursuit of their fitness and wellness goals.



Tech Stack: 
1) React Native:
React Native was chosen as the primary technology stack for developing the fitness app due to its ability to create cross-platform mobile applications efficiently. With React Native, developers can write code in JavaScript and share a single codebase to build apps for both iOS and Android platforms. This significantly reduced development time and cost while ensuring a consistent user experience across devices. The component-based architecture of React Native facilitated reusability, allowing the team to create modular components and maintain a coherent design throughout the app. Additionally, React Native offered native-like performance, ensuring a smooth and responsive user interface, crucial for a fitness tracking app that involves real-time user interactions and data updates.

2) Expo Go:
We utilized Expo Go to test our app during development. Expo Go provides a suite of tools and services built around React Native, facilitating rapid prototyping and app testing. With Expo Go, we could easily preview our app on real devices without the need for complex setups or app store submissions. It allowed us to test and debug our app efficiently, ensuring a smooth user experience across different platforms and device configurations. 

Note:
We initially considered implementing Firebase into our app, however after careful consideration we decided against it. Since the fitness app primarily involves storing and managing text-based data, implementing a full-fledged user authentication system and database using Firebase seemed unnecessary and would have introduced complexity. Instead, we opted for a simpler data management approach using async storage, which was well-suited for storing small amounts of data locally on the user's device. This approach allowed the app to work offline, ensuring users could access their task lists and habit data even without an internet connection. Additionally, async storage aligned perfectly with the app's intention to clear data periodically, ensuring efficient storage management and maintaining app performance over time.


SE practices
As a team working on the fitness app project, we have implemented various software engineering practices to create a robust and user-friendly application. Let's elaborate on each of these practices with respect to our project:

Reusable Components: In our fitness app, we've embraced React Native's reusability, allowing us to create highly modular and reusable components. We've followed React Native's core principle of building UI components as isolated entities that can be combined to create complex interfaces. Some of the components we’ve reused quite significantly in our app include the buttons, the text entries etc. By doing so, we've efficiently managed and scaled our app while ensuring consistent design and behavior across different screens. The use of reusable components has enhanced our code organization and reduced redundancy.

Iterative Development: Throughout the development process, we've adopted an iterative approach, enabling us to continuously evolve the app through incremental improvements. Rather than trying to build the entire app at once, we've worked in phases, adding, modifying, and optimizing features in successive iterations. This methodology has allowed us to gather valuable user feedback from our advisor, the milestone evaluations and other users, identify potential issues, and make necessary adjustments. By iteratively refining features like our Task List, Habit Tracker, etc we've ensured that our app aligns closely with user expectations and requirements, resulting in a polished and user-centric application.

Version Control using GitHub: GitHub has been a crucial tool in managing our project's source code and facilitating collaborative development. By using version control with GitHub, we've been able to meticulously track changes to the codebase, collaborate on features, and manage different versions of the app. This has ensured transparency and organization in our development process. Version control with GitHub has been fundamental to preserving code integrity, promoting effective teamwork, and ensuring the successful development and deployment of our fitness app.

Some of the bugs that were fixed include:
1) In the journal and habit tracker features, anything could be entered in the date input. Now, it is only possible to input the date in “DD-MM-YYYY” format
2) In the task list feature, if a task added is striked by mistake it is not possible to unstrike it. This has been fixed. If a task has been striked by mistake, it can be undone by click the task again
3) Corrected the spelling of the “Submit” buttons
4) Appearance of the tab navigator has been changed slightly in order to make the appearance more centralized

Future plans:
1) Implementation of the Exercise Timer feature (which we couldn’t fully complete by milestone 3 due to time constraints unfortunately) 
2) Improve habit tracker by suggesting  previous habits regularly focused by user for a better user experience
3) Better visuals of user data


Technical proof of concept:
User Instructions:
1) Download Expo Go on your phone
2) Open the app and enter the link “exp://exp.host/@kisheng314/milestone1?release-channel=default” under “Enter URL manually”
3) Click the “Connect” button

