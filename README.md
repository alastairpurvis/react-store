# React Ecommerce

License MIT

## System requirements

* Mac OS X, Windows, or Linux
* Node.js v6.9.1 or newer
* Yarn package

## File structure

* **/node_modules** - External dependencies
* **/servers** - Servers source code
    * **/api** - API server
        * **/email** - Email templates
        * **/middleware** - API server middleware
    * **/static** - Static server
        * **/auth** - Authentication middleware
        * **/middleware** - Static server middleware
        * **/public** - Directory for static files
        * **/views** - Html templates for application pages
* **/src** - Application source code
    * **actions** - Flux actions
    * **components** - React templates for custom components
    * **constants** - Constants
    * **content** - Static content
    * **core** - Core utilities
    * **data** - GraphQL server schema
    * **dispatcher** - Flux dispatcher
    * **fonts** - Application fonts
    * **images** - Static images
    * **services** - Servers services
    * **stores** - Flux stores
    * **utils** - Utilities
    * **Context.js** - Application context. Implements Flux architecture, manages application environment.
    * **config.js** - Project configuration
    * **routes.js** - Application routes
    * **client.js** - Script running the application on client side
* **/tools** - Development tools (build, start, deploy, etc)

## Getting Started

Clone the project into your working directory:

    git clone *github url*


Edit /servers/api/config.js: paste your clientId and clientSecret in the clientId and clientSecret fields

Install external dependencies:

    yarn install
    
Run static devevelopment server (builds project and runs static server locally):

    yarn devmode

Build project for final production:

    yarn run build

Running production server (e.g. Heroku):

    yarn start

Available addresses:

    http://localhost:4000/ - Node.js server (build/static-server.js)
    http://localhost:4000/graphql - GraphQL server
    http://localhost:5000/ - BrowserSync proxy along with HMR, React Hot Transform
    http://localhost:5001/ - BrowserSync control panel

## Development tools

    yarn dev (/tools/start.js)

* Cleans up the output /build directory (clean.js)
* Copies static files to the output folder (copy.js)
* Launches Webpack compiler in a watch mode (via webpack-middleware)
* Launches Node.js server from the compiled output folder (runServer.js)
* Launches Browsersync, HMR, and React Transform

    yarn run build (/tools/build.js)

* Cleans up the output /build folder (clean.js)
* Copies static files to the output folder (copy.js)
* Creates application bundles with Webpack (bundle.js, webpack.config.js)

Flags:
* --release	Minimizes and optimizes the compiled output
* --verbose	Prints detailed information to the console

For example:

    yarn run build -- --release --verbose   # Build the app in production mode

or

    yarn devmode -- --release                 # Launch dev server in production mode

## Editing config

In our project we implemented login via Facebook, email notifications via Amazon Web Services etc.
To enable these features, you need to perform some actions on the service website and then edit the application config.

To enable login via Facebook, you'll need to:
* Create your Facebook Application (https://developers.facebook.com/docs/apps/register)
* Edit /servers/api/config.js auth.facebook property, edit /src/config.js facebook.APP_ID property

