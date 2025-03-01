// const heading =  React.createElement('h1',{id:"heading",xyz:"abc"},'Hello World from React!')
// object in createElement basically helps in providing attributes to the element h2 
// if we print heading it will be an object 
// props contains attributes and children 
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading) // Converting the take this object convert it into h1 tag and put it into dom 


// Now we want something like 
/**
 * div
 *  div
 *      h1 h1
 *  div
 * div
 */

// const parent = React.createElement('div',{id:'child1'},
//     React.createElement('h1',{id:'heading'},"This is h1 heading"
//     )
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

// Now we want something like 
/**
 * div
 *  div child 1
 *      h1 h1
 *  div
 *  div child 2
 *      h1 h1
 *  div
 * div
 */

const parent = [React.createElement('div',{id:'child1'},
    React.createElement('h1',{id:'heading'},"This is h1 heading"
    )
), React.createElement('div',{id:'child2'},
    React.createElement('h1',{id:'heading2'},"This is h2 heading"
    )
)]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent) // This will replace everything which is present in the root with the parent 



