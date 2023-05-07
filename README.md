# ERC721-Quickstart
Quick start template for ERC721

### Getting started

#### Requirements

You will need [nvm](https://github.com/nvm-sh/nvm) and yarn installed. 

If you don't have them installed, this setup usually works

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
$ nvm install
$ nvm use
$ npm i -g yarn
```

#### Setup
Clone repo and change directory into it. Run:

```shell
$ yarn setup
```

This only needs to be run once, then populate .env file with details (if you want to deploy to a remote network).

#### Compiling and deploying
In separete terminal start your local blockchain
```shell
$ yarn start-chain
```

Then in another terminal run (to compile and deploy):
```shell
$ yarn compile
$ yarn deploy-local
```

