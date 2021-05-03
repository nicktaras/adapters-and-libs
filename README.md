# adapters-and-libs
A project to understand the commonalities between libraries and how one can make adapters for each to carry out the same function. 

## Development

1. CD into any of the libraries and run `yarn start`
2. Each Library should contain a component named `HelloWorldCard` as per stage 1.

Angular: http://localhost:4200/
React:   http://localhost:3000/
Svelte:  http://localhost:5000/
Vue:     http://localhost:8080/

Project Requirement:

- Stage 1

1. A component can be shown using any of the following libraries:

Svelte, Angular, react, Vue.

2. The component must look exactly the same across all libs "Hello World Card"

- Stage 2

1. The component must recieve dynamic data with new component "HelloWorldWithParams"

2. The component must look exactly the same across all libs

- Stage 3 

1. Review and document the commonalities beween the components and libraries

2. Determine is there are commonalities that can in fact be generated from a single implementation.

For example: Tony Token must develop logic with WebComponents, which can be generated into all libs.

## Notes (general/dev)

npx - downloads then exectutes an npm pacakge in a single command in the current location
npm - will install a package for later use (locally or globally)