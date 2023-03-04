Why there exists two CDN Links ? - React and ReactDOM are both libraries for building user interfaces in JavaScript, but they

      serve different purposes.

    - React is a JavaScript library for building user interfaces.

    - It provides a way to define and render components,

      which are reusable pieces of code that represent a part of the UI.

    - React components can be nested inside each other to create complex UIs.

    - React also provides a declarative syntax for updating the UI, where the developer specifies

      what the UI should look like based on the application's state,

      and React takes care of updating the actual UI.

    - **There are other areas of Development where React can be used, hence ReactDOM separately exists.**

    - ReactDOM, on the other hand, is a library that provides the bindings between React and the

      browser's DOM (Document Object Model).

    - It enables React to render components to the browser's DOM and manage the component lifecycle.

    - ReactDOM provides the methods for rendering React components, such as ReactDOM.render() and

    - ReactDOM.hydrate(), and manages the interaction between React components and the browser's DOM.

    In summary, React is a library for defining and rendering components, while ReactDOM provides the bindings between React and the browser's DOM, enabling React components to be rendered to the screen and manage the component lifecycle. Without ReactDOM, React components cannot be rendered to the browser's DOM, and without React, ReactDOM does not have anything to render.
