# Minimum React-Redux

## Technology stack

### Editors
- [Visual Studio Code](https://code.visualstudio.com/)
- [Atom](https://atom.io/)

### Development tools
- [Git](https://git-scm.com/)
- [Homebrew](https://brew.sh/)
- [Nodebrew](https://github.com/hokaccha/nodebrew)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Languages
- [EcmaScript 6](https://ja.wikipedia.org/wiki/ECMAScript)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)

### Build tools
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)

### JS Libraries
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

## Environment preparation

### Show hidden files

For OS X 10.9 or later:

```
defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder
```

For OS X 10.8 and earlier:

```
defaults write com.apple.finder AppleShowAllFiles TRUE ; killall Finder
```

### Install Homebrew

[Homebrew](https://brew.sh/) is useful to install and manage softwares by terminal.

Run below command on terminal:

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Install Nodebrew

[nodebrew](https://github.com/hokaccha/nodebrew) is useful to install and manage multiple versions of node.js within the same environment.

Install `nodebrew` by using homebrew:

```
$ brew install nodebrew
```

Add `PATH` setting your shell config file (.bashrc or .zshrc):

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

Reload config:

```
$ source ~/.bashrc
```

Install node.js by using nodebrew:

```
$ nodebrew install-binary stable
```

Check installed version:

```
$ nodebrew ls
v8.10.0

```

Use installed version:

```
$ nodebrew use v8.10.0
$ node -v
v8.10.0
```

## Repository preparation

### Clone training repository

Download the training repository from Github

```
git clone git@github.com:yamoo/minimum-react-redux.git
```

### Initialze node package

Generate `package.json` inside the folder by the following command:

```
npm init
```

### Install required packages by npm

Install dev dependencies:

```
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader webpack webpack-cli webpack-dev-server uglifyjs-webpack-plugin
```
 
Install dependencies:

```
npm install --save react react-dom redux redux react-redux
```

After the installation is complete, you can find additional folder named `node_modules` and updated `package.json` inside the folder.

### Add npm script

```
{
  ...
  "license": "MIT",
  "scripts": {
    "start": "webpack-dev-server",
    "build": "rm -rf ./dist && webpack && cp ./src/index.html ./dist"
  },
  ...
}
```

### Check configuration files

Those files are necesary to run webpack:

- [.babelrc](.babelrc)
- [webpack.confing.js](webpack.config.js)

## Folder structure

```
.
├── .babelrc
├── .gitignore
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── actions
│   ├── components
│   ├── containers
│   ├── helpers
│   ├── index.html
│   └── reducers
└── webpack.config.js
```
