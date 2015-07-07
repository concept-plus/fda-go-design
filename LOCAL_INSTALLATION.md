# FDA-GO Local Deployment Guide

## Prerequisite

To run the FDA Go prototype locally, you will need to make sure that you have [NodeJS](https://nodejs.org/) installed and that you can run NPM. Running the command below will verify that you can run NPM.

```
$ npm --version
```

## Installation

Install the [bower](http://bower.io) package manager and [grunt-cli](http://gruntjs.com/getting-started) task runner globally.

```
$ npm install -g bower grunt-cli
```
NOTE: You may receive EACCESS errors when executing the above command. Execute the commands with the 'sudo' command.
```
$ sudo npm install -g bower grunt-cli
```
Afterwards, you can also change your directory rights with:
```
sudo chown -R `whoami` ~/.npm
sudo chown -R `whoami` /usr/local/lib/node_modules
```

Clone this repository.
```
$ git clone https://github.com/concept-plus/fda-go-design.git
$ cd fda-go-design/prototype
```
Install the dependencies.

```
npm install
```

## Build & local deployment

Run `grunt serve` to preview the app locally at [http://localhost:9000/#/](http://localhost:9000/#/).
Run `grunt` for building a distribution package.

