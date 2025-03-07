## Igniting Our App

### **npm - Package Manager**

### \* **To Install dependencies(libraries) from npm** to an raw javascript file

- **npm init** - is a command used to initialize a new Node.js project by creating a package.json file, which stores metadata about the project, dependencies, scripts, and configurations.

- If we want skip some prompts and user default values can use - **npm init -y**

- After first command, it asks some configurations like test command, author, description, keywords ..etc.

- After clicking 'yes' it imports package.json file into folder i.e, that is **configuration for npm**.

- **To install dependency we need Bundler package**
- **Bundler - it packages our app and sends to production.**
- **There are multiple Bundlers such as, Vite, parcel, web pack etc.**

- Here, I want to install Parcel package into our project by the command:
- **npm install -D parcel** [_it is -D abbre -> Dev dependency, which means it is for development phase_], and other is normal dependency i.e, **npm install parcel**.

- After parcel bundler installed, there will be see some changes in package.json file that is parcel version can be seen like i.e, **version: "^2.13.3" So here in the string '^' is caret which upgrades minor version automatically** or **if we change that to '~' is tilde which upgrades major and minor automatically** which is not safe and not recommended. So, better to use **caret ^**.

- And, we can see **package-lock.json file which locks the current version and keeps record of it, maintains exact version of all dependencies.**

To Execute parcel, we have to run the command that is, **npx parcel index.html**

### Using CDN links in our code is not recommended because, if react version changes we keep changing it by every time.

### If we have react and react-dom inside the node_modules file it is easier to handle so, it can automatically upgrades.

- #### For React dependency, command: **npm install react**.
- #### For React-DOM dependency, command: **npm install react-dom**.

#### \* If we want to run the application by the command: **npx parcel index.html**.

### Parcel -

- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File watching algorithm - written in C++
- Caching - Faster Builds -> it caches the parcel in binary
- Image Optimization
- Minification of code
- Bundling all files
- Compress the files and makes the size in kb
- Consistency Hashing
- Code Splitting
- Differential bundling - generates nomodule and gives the support to older browsers
- Diagnostic - behind the scene
- Error handling
- To host on HTTPS server
- Tree Shaking - it removes unused code automatically

### Building Production build through the command: **npx parcel build index.html**

- Here, we could get error that is when we try to enter the command because our entry point is 'App.js' file so we have to remove the main object from package.json file.

```Javascript
"main": "index.html",  //remove from package.json
```

- When we run a command, 'production(prob) build' bundles, minimizes, compresses the code and creates new folder i.e, 'dist' which generates developement build of our project and hosted it.

#### Git Commit the changes that we made when files are added or modified in our code. Using the commands,

- **git status** - to know status of our files is there any change we did or not. If made changes then follow the next command.
- **git add filename** - that add the file into the repository with specific file name.
- **git commit -m "message"** - commit the changes
- **git push origin main** - it pushes into the repository (modified in github).

### Here in the package.json file, we can write scripts for run and build the project by our own.

```javascript
"scripts": {
  "start": "parcel file-name",
  "build": "parcel build file-name"
}
```

- ### Here in the above code, we can see that we have two scripts, start and build so in the terminal we can simply write the commands:

  - To run the project, **npm run start** or **npm start**.
  - To build the project, **npm run build**.
