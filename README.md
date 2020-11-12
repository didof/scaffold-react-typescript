# Scaffold React Typescript

This is my personal scaffold that I use as a starting point in the construction of a SPA. The minimal set (react + typescript) is present on the master.  Any new concept that has an application will be relegated to its own branch.

## Usage
Webpack is already configured. I have made available two commanders:
* `npm run dev` - starts with concurrently both the tsc (in watch mode) and the development server.
* `npm run build` - first compiles TypeScript files, then uses the output to build the project and places the output in a dist folder.

## Brances
* master (base)
   * webpack
   * react
   * typescript