# WEBPACK config.js 
>up to date ( 21. 05. 2022 )  :exclamation:
### How you can start using it?
1. You should have Node.js
2. Next, initialize your project and answer the questions by using the following command in you terminal: 
>npm init
3. Install the core elements of Webplack: 
>npm i -D webpack webpack-cli
4. Next use this "webpack.config.js" in your own project
5. All of core objects of your project should be in folder "src"
6. Install the dependecies: 
>npm install --save-dev babel-loader @babel/core

>npm install --save-dev @babel/preset-env

>npm install --save-dev @babel/preset-react

>npm install --save-dev @babel/preset-typescript

>npm install --save-dev clean-webpack-plugin

>npm install --save-dev copy-webpack-plugin

>npm install --save-dev cross-env

>npm install --save-dev css-loader

>npm install --save-dev css-minimizer-webpack-plugin

>npm install --save-dev file-loader

>npm install --save-dev html-webpack-plugin

>npm install --save-dev mini-css-extract-plugin

>npm install --save-dev node-sass

>npm install --save-dev sass-loader

>npm install --save-dev style-loader

>npm install --save-dev terser-webpack-plugin

>npm install --save-dev webpack-dev-server

>npm install --save @babel/polyfill
7. Your scripts in package.json should look like this: 
    

        "scripts": {
        "dev": "cross-env NODE_ENV=development webpack --mode development",
        "build": "cross-env NODE_ENV=production webpack --mode production",
        "watch": "cross-env NODE_ENV=development webpack --mode production --watch",
        "start": "cross-env NODE_ENV=development webpack-dev-server --mode development --open"
        }
--------------------
### So You can work with your webpack project with using the commands: 
> npm run dev (usual simple dev version of project)

> npm run build (version with production version)

> npm run watch (with non-stop process without wepack-dev-server)

> npm run start (non-stop process with wepack-dev-server):blush: recommended