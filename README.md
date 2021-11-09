# The Social Bunch
> The Social Bunch is...

## Live link
Hosted at [thesocialbunch.netlify.app](https://thesocialbunch.netlify.app)


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

## Features


## UI mockups
You can interact with a [click-through mid-fidelity prototype](https://www.figma.com/proto/E33mvqDCpBA52xNVNYGWnJ/A3?page-id=598%3A3940&node-id=598%3A4077&starting-point-node-id=598%3A4077) of The Social Bunch, created using Figma.

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
