# adapters-and-libs
A project to understand the commonalities between libraries in regard to web components. Creating a webcomponent that can function and be interacted with across all libraries.

## Development

1. Use Node version 16
1. CD into any of the libraries and run `npm run start`
2. Each Library should contain a component named `HelloWorldCard` as per stage 1.

Angular: http://localhost:4200/
React:   http://localhost:3000/
Svelte:  http://localhost:5000/
Vue:     http://localhost:8080/

## References / Reading

- https://medium.com/@spkamboj/web-components-basics-and-performance-benefits-f7537c908075 (benefits of using Web-Components for development)
- https://vaadin.com/learn/tutorials/using-web-components-in-angular - (using web-components inside Angular)
- https://www.digitalocean.com/community/tutorials/vuejs-vue-integrate-web-components (using web-components inside Vue)
- https://dev.to/silvio/how-to-create-a-web-components-in-svelte-2g4j (using web-components inside Svelte)
- https://reactjs.org/docs/web-components.html (react + web components)
- https://www.youtube.com/watch?v=N_-Cu9_2YAA (Github Packages)
- https://dzone.com/articles/create-amp-publish-web-components-with-vue-cli-3#:~:text=Creating%20web%20components%20is%20easy,attributes%2C%20events%2C%20and%20slots. (Vue > WebComponent Generator)
- https://vaadin.com/learn/tutorials/using-web-components-in-vue (web components inside Vue)
- https://indepth.dev/posts/1116/angular-web-components-a-complete-guide (NG components to Web Components - reverse version of what we're looking for, but maybe handy for Tony)
- https://medium.com/@jorgecasar/how-to-use-web-components-with-angular-41412f0bced8
- https://custom-elements-everywhere.com/ - Library/Framework Compatibility with Web Components

Utils:

- `<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.13/webcomponents-lite.js"></script>` Polyfill for Webcomponents
