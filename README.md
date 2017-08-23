# Start the app
```
npm install
npm start
```

# Assignment Description
## Point 1 - Setup
Hot LESS Reloading solved via less-watch-compiler. Needed dependencies and npm config:
```
"dependencies": {
    "less": "^2.7.2",
    "less-watch-compiler": "^1.7.0",
    "npm-run-all": "^4.0.2",
  }
```

```
"scripts": {
    "build-css": "lessc ./src/less/app.less ./src/App.css",
    "watch-css": "less-watch-compiler src/less src App.less",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build"
}
```