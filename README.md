# adapters-and-libs
A project to understand the commonalities between libraries and how one can make adapters for each to carry out the same function. 

## Development

1. CD into any of the libraries and run `yarn start`
2. Each Library should contain a component named `HelloWorldCard` as per stage 1.

Angular: http://localhost:4200/
React:   http://localhost:3000/
Svelte:  http://localhost:5000/
Vue:     http://localhost:8080/

### Project Plan:

#### Summary: To create a single web-component source (made by Tony Token) that can be generated and included within any modern library or framework (by Webster). 

- Stage 1 (deliverable)

1. A component can be shown using any of the following libraries:

Svelte, Angular, react, Vue.

- Stage 2 (deliverable)
 
1. Create a single web-component
2. Import the web-component into each of the libraries; Svelte, Angular, React and Vue Js. 

Notes: As shown in the reference links below, use a wrapper for each Webcomponent. Which will allow for the components to seemlessly integrate into the libraries application life cycle.

- Stage 3 (deliverable)

1. Review the implementation required to wrap the web-components into each library
2. Create a proof of concept of how Tony Token could use a tool to generate the wrappers for Webster. 

- Stage 4 (deliverable)

1. Add some level of smarts to the web-component e.g. params, events, real-life example. 
2. Connect the components to the libraries event / digest life cycle (Svelte, Angular, React and Vue Js). 
3. Update the proof of concept to allow for full interaction between the webcomponents and the libraries (Svelte, Angular, React and Vue Js).

## Notes (general/dev)

npx - downloads then exectutes an npm pacakge in a single command in the current location
npm - will install a package for later use (locally or globally)

## References / Reading

- https://medium.com/@spkamboj/web-components-basics-and-performance-benefits-f7537c908075 (benefits of using Web-Components for development)
- https://vaadin.com/learn/tutorials/using-web-components-in-angular - (using web-components inside Angular)
- https://www.digitalocean.com/community/tutorials/vuejs-vue-integrate-web-components (using web-components inside Vue)
- https://dev.to/silvio/how-to-create-a-web-components-in-svelte-2g4j (using web-components inside Svelte)
- NPM
- https://www.youtube.com/watch?v=N_-Cu9_2YAA (Github Packages)

  
