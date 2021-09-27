# WebdriverIO-Jasmine sample
This project is a sample project to show how to use Jasmine with WebdriverIO.

## Install dependencies
You can install all dependencies by running the following command

    npm install

This will install all needed dependencies that are listed in the `package.json`-file

## Run tests on Sauce Labs
You can run your tests on Sauce Labs with this command

    npm run saucelabs

You will need to set the user and api key variables with:

    export SAUCELABS_USER={YOUR_USERNAME}
    export SAUCELABS_AUTH_KEY={YOUR_AUTHKEY}

It will spin up multiple browsers which you can find [here](test/configs/wdio.saucelabs.conf.js).

