# The Social Bunch
> The Social Bunch is an intuitive platform for connecting community groups, with a focus on designing for older women aging in place. As we’ve seen through COVID, these groups and their members are often the most affected by enforced periods of isolation. While there are other platforms available to connect groups, our approach has been targeted at minimising barriers to entry for users with low tech literacy and helping them feel empowered to take control of their digital social engagement. This repository contains a hi-fidelity prototype of our concept, designed as part of DECO4200: Advanced Product Design Studio at USYD.

## Table of Contents  
- [Live Link](#link)  
- [Local set up instructions](#setup)  
- [Features](#features)  
- [UI Mockups](#figma)  
- [Known Issues](#issues)  


<a name="link"/>

## Live link
Hosted at [thesocialbunch.netlify.app](https://thesocialbunch.netlify.app)


<a name="setup"/>

## Local set up instructions

1. Open up the folder or location where you want to clone the project in a text editor and open your terminal
2. Clone our git repository with the terminal command: 
```
git clone https://github.com/DECO4200-VETOED/social-bunch.git
```
3. Change directories to open the newly cloned repository using the command: 
```
cd social-bunch
```
4. Install project dependencies using the command: 
```
npm install
```
5. Run the project locally using the command: 
```
npm run serve
```
6. View the project by visiting the localhost link and port displayed and opening Chrome DevTools to view it in landscape iPad view

<a name="features"/>

## Features

### Home Page ```/home```

<img height="350" src="/src/assets/tut1.png">

### Group Page ```/group/:id```

<img height="350" src="/src/assets/tut2.gif">

### Group Message Board ```/group/:id/messages```

<img height="350" src="/src/assets/tut3.gif">

### Contacts Page ```/contacts```

<img height="350" src="/src/assets/tut4.gif">

### My Profile Page ```/profile```

<img height="350" src="/src/assets/tut5.gif">

### Other pages/routes

- Welcome page (sign in, join call, create an account) ```/```
- Onboarding tutorial ```/tutorial```
- Create a group ```/create```

<a name="figma"/>

## UI mockups
You can interact with a [click-through mid-fidelity prototype](https://www.figma.com/proto/E33mvqDCpBA52xNVNYGWnJ/A3?page-id=598%3A3940&node-id=598%3A4077&starting-point-node-id=598%3A4077) of The Social Bunch, created using Figma.

<a name="issues"/>

## Known issues
### Platform-related issues
- The UI is well scaled and laid out when viewed in a landscape iPad resolution (approximately 1024 x 768 px) but is not designed to be adaptable to other resolutions. It works fairly well on a similarly proportioned laptop but very large or very small devices are not supported. Other UI features such as custom scroll bars also only work 100% on Google Chrome.
- The prototype uses vue router to route between different pages, meaning the back and next buttons on your browser work as expected. Because of this though, the site doesn’t work as a standalone fullscreen iPad app when added to the homescreen. It can be downloaded, but a large toolbar shows up after navigating away from the sign in screen.

### Backend-related issues (mostly due to no database or APIs being used)
- Searching within the app is not intelligent, it just checks if search terms exist in a few parts of what is being searched.
- The prototype is not integrated with Zoom or any other video calling clients, meaning the ‘Dial me in!’ buttons when joining a call do nothing. 
- The prototype also doesn’t support scheduling a call, so the ‘schedule a meeting’ button shown in the group page when you’re an admin also doesn’t work. 
- While we have the UI for inviting new group members, this doesn’t have any backend functionality. So, newly created groups in the prototype will always have no members other than the founder. 
- There is no functional authentication or verification built into the text boxes throughout the prototype.

### Image upload-related issues
- You can’t upload a local image anywhere on the prototype. We have added support for linking to an online image when making a message board post, but in the future this (and profile pictures) would be replaced with local media uploads. 
- The scaling and previewing/zooming in on images in the message board is also not implemented, instead just cropping them all to a standard size and allowing only one image per post.
