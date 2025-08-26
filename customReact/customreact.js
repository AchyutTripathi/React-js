// this is a custom implementation of a simple React-like rendering function
// it takes a react element object and a container DOM element and appends the rendered element to the container
function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttributes('href', reactElement.props.href)
    domElement.setAttributes('target', reactElement.props.target)

    container.appendChild(domElement)
    */


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


// Example usage of the customRender function to render a simple anchor element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to go to Google'
}

// selecting the main container where the element will be rendered
const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)

