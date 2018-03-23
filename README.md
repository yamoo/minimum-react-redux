# Minimum React-Redux

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

(https://github.com/hokaccha/nodebrew)[nodebrew] is useful to install and manage multiple versions of node.js within the same environment.

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
vx.x.x

```

Use installed version:

```
$ nodebrew use vx.x.x
$ node -v
vx.x.x
```

### Initialze node package

Generate `package.json` inside the folder by the following command:

```
npm init
```

### Install required packages by npm

Install dev dependencies:

```
npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader webpack webpack-cli webpack-dev-server
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
    "start": "nodemon --watch ./webpack.config.js -e webpack-dev-server",
    "build": "rm -rf ./dist && webpack && cp ./src/index.html ./dist"
  },
  ...
}
```

### Check configuration files

Those files are necesary to run webpack:

- [.babelrc](.babelrc)
- [webpack.confing.js](webpack.config.js)
