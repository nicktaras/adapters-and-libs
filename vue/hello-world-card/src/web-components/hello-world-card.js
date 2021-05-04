// Usage:
// <hello-world-card></hello-world-card>

(function () {
  const template = document.createElement('template');

  template.innerHTML = `
    <style></style>
    <div>
      Hello World Card
    </div>
  `;

  class HelloWorldCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

  }

  window.customElements.define('hello-world-card', HelloWorldCard);
})();
