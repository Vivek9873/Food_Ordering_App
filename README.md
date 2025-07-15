import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement('h1',{id:"heading",xyz:"abc"},'Hello World from React!')
// object in createElement basically helps in providing attributes to the element h2
// if we print heading it will be an object
// props contains attributes and children
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading) // Converting the take this object convert it into h1 tag and put it into dom

// Now we want something like
/\*\*

- div
- div
-      h1 h1
- div
- div
  \*/

// const parent = React.createElement('div',{id:'child1'},
// React.createElement('h1',{id:'heading'},"This is h1 heading"
// )
// )
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

// Now we want something like
/\*\*

- div
- div child 1
-      h1 h1
- div
- div child 2
-      h1 h1
- div
- div
  \*/

const parent = [React.createElement('div',{id:'child1'},
React.createElement('h1',{id:'heading'},"This is h1 heading"
)
), React.createElement('div',{id:'child2'},
React.createElement('h1',{id:'heading2'},"This is h2 heading"
)
)]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent) // This will replace everything which is present in the root with the parent

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
  -HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles

For installing the package npm is used
for executing the package npx is used

/ Package.JSON is a configuration for npm. packages and dependencies are same

// This is the configuration of npm
// parcel is basically a bundle
// parcel: "^ or ~ 2.8.3" --> ^ is used when we want to update the parcel at every minor updates
// ~ is used when we want to update the parcel at every major update

// Transitive dependencies are basically after installing parcel other modules are also installed so
// basically all the modules are installed on which parcel depends and sooon
// package-lock.json keep the track of exact version of the dependencies
// package.json keeps the tract of approximate version of the dependencies
// -D for development dependencies, some are development dependencies and some
// are normal dependencies --> they are used in production
// with the help of package-lock or package.json we can recreate the node modules therefore
// we dont push them in the github

# Lecture 3

// DOM elements -> in html we have any tag that is dom element

// React.createElement => Object => when we render this to dom then it is a HTML element

const heading = React.createElement("h1",{id:"heading"},"Namaste React");

const root = ReactDOM.createRoot(document.getElementById('root')); // dealing with browser we have to use
// ReactDOM

// JSX and react both are different
// JSX is not HTML in JS. It is HTML or XML like syntax
// JSX ( transpiled before it reaches the JS engine) --> Parcel takes help of BABEL to complete this task
// Babel is a Transpiler/JS compiler
const myElement = (<h1 id="heading" className="alal">
I Love JSX!

</h1>);
// JS engine can't understand this code they only understand Ecma script
// Parcel transpiled this code into ES so that js engine can understand it
console.log(myElement)
console.log(heading)

// React Component
const myElement1 = (

<h1 id="heading" className="alal">I Love JSX!</h1>
);

// Class based component -- Old
// Functional component -- New is a normal js function which returns some jsx element

const fn = () => true ;
const fn1 = () => {return true} ;
const HeadingComponent = ()=>{
return (

<h1>Namaste React FUnctional Component</h1>
)
}

root.render(<HeadingComponent/>) //

// Component Composition is to use a functional component inside a functional component
// const HeadingComponent = ()=>{
// return (
// <Title/>
// <h1>Namaste React FUnctional Component</h1>
// )
// }

# Food Ordering APP

we can do export/ import in two ways
default export -- export default component / import component from "path"
named export -- export const component / import {component} from "path"

// Conflict Driven UI -- all the ui is driven by the conflict
// For eg we can make different ui's for different locations like in this case
// there is 50% off carousel in Banglore but no discount in gurgaon so this carousel will not appear

// Planning of Food Ordering App
/\*\*

- Header
- - Logo
- - Nav
- Body
- - Search
- - RestrauntContainer
- - RestrauntCard
- Footer
- - Copyright
- - Links
- - Address
    \*/

# HOOKs

HOOK -> is a normal js function which is a utility funciton or gives some utitlity
const [resList,setResList] = useState(["var"]) // this is super powerful react variable
we can't update resList = [] we have to update it with the help of function setResList()

# useState()

useState() is a hook which updates the state variable

let list = [] we can modify it but ui doesn't update

super powerful variable keeps the ui insync with the data layer
as soon as this var changes it will automatically refresh our component
FORMAL DEFINITION --> useState() hook -> whenever a state variable updates react will re-rendering the component

logic of updating the ui is re-rendering
react is best at dom manipulation --> keeps the ui insync with data layer

as soon as we call the update function of the useState() which is setVAR_NAME it will update the value of VAR_NAME reference and then render the component once again It will find diff between old and new version and it will find only the btn is changed and update the dom

# Declaration of useState()

- always call useState() in the component not outside of it.
- Call it in the top of the component
- Never create it inside if-else for loop as it will creates inconsistency in the program

# React uses Reconciliation Algorithm which is also known as React Fiber in React 16

consider res-container has 15 res-Cards
now if the ui changes from filtering the 15 to 3 res-Cards

# what react do and how it is fast

When we have a ui, React creates a Virtual DOM
Virtual DOM is not an actual DOM
Virtual DOm is a representation of actual dom
When we try to print the React.createELement it gives the object, that object is the virtual DOM

Actual DOM are the tags or the HTML code which contains div,h1,p tags

# Diff Algorithm

finds out the difference between the updated virtual DOM (which is created after clicking any button)and previous virtual DOM and then it will actually update the DOM on every render cycle.

7 res-Cards => Clicked on button => 3 res-Cards are formed
React find the difference in both the virtual DOMs and update the real DOM
Updating the Real DOM without the virtual DOM is expensive and takes a lot of time

# in formal way

React is faster because it does efficient dom manipulation as it is having virtual DOM. Virtual DOM is basically an object.

Reconciliation -> a high level description of React's reconciliation algorithm

# Monolith and Micro service Architecture

Monilith service architecture in which all the services like backend, ui, authentication,
databases, sms, email notification present in the same project so whenever we had to do a small color change of the button we have to build the whole project or all the teams have to work on same github repository

Micro Service --> all these services are present in different projects and if we combine together it makes the whole app. We don't have to build all projects this is known as separation of concerns / single responsibility principle. These differnet services have to interact with each other.

# 2 approches how web apps fetches data from backend

1. in this approch as soon as the page load we will made an api call and wait for data to come and then render it Load -> APi call -> Render
2. Load -> Render -> Api -> Render
   asa page load we will render the skeleton then call the api and asa data come we render it on the page

React uses 2nd approach as it gives better user experience

# useEffect ()

useEffect(()=>{},[])

this hook's call back function will be called after the rendering of the component(every render)
because of dependency array the behaviour of useEffect changes

- If no dependency array => use effect is called on every render of the component
- If D.A. is empty then useEffect is called on initial render (just once)
- If D.A. is not empty then useEffect is called when the dependency changes or if any variable present in the D.A. changes

# Shimmer Ui is used when to show the black cards which will be shown on the website till api is not able to fetch the data

# Conditional rendering -> Rendering on the basis of condition like shimmer is rendered till data is fetched from the api

# For handling cors error

go to corsproxy.io and copy paste the link ahead of the api link.

# React-router-dom

- RouterProvider -> will provide the routing configuration to the app
- createBrowserRouter will make routing configuration

# For link

we can use <a href=""></a> but this will refresh the whole page on clicking the link
instead of this we should <Link> this will help in navigating to different page without reloading

# 2 Types of routing in web apps

- Client side routing --> Here we are doing is client side routing. Because our app has code for differnt pages
  and does not make any network call and we are fetching any new page. Hence it is a single page routing 2
- Server side routing --> you make a network call and the page about.html is coming from server

# Class based component

extends React.Component will tell that it is class based component
React.Component is a class which is present in Reat
CBC is a class which has a render method which returns the piece of jsx

# super(props)

is used to access this keyword and hence it will help in accessing the props

whenver instance of the class is created constructor is called and props is extracted

Loading a class based comp on webpage this means we are making an instance of the class and giving some props
Never update the state variable by this.state.count +=1 directly
this.setState({
count:this.state.count+1,
})

this is will update only count state variable not any other state varible
if we want to update any other state varible also then
this.setState({
count:this.state.count+1,
count2:this.state.count2+1,

})

# Lifecycle of CBC or how a component mounted

(Loading ==== Mounting)
whenever a class is called

- first thing is its constructor() is called
- Then render() is called
- componentDidMount() is called

- for one child
- parent constructor , parent render , child constructor , child render
  Parent Constructor is called
  Parent render is called
  Child Constructor is called
  Child Render is called

Child Did Mount is called
Parent Did Mount is called

# ComponentdidMount is used to make API calls why?

in functional component we make api call with the help of useEffect() and with empty dependency array
useEffect is called only once as react want to quickly render the component then make api call the fill the data or re-render the component

Similarly in CBC react does not wait for api to get data it render the component firstly and then call the api

for more than one child
Parent Constructor is called
Parent render is called
First Child Constructor is called
First Child Render is called
Second Child Constructor is called
Second Child Render is called

First Child Did Mount is called
Second Child Did Mount is called
Parent Did Mount is called

# React lifecycle diagram

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# This is mounting cycle

So in lifecycle first constructor then render and then dom is updated and then componentdidmount is called
render phase --> constructor ---> render
commit phase --> DOM updation ---> componentdidmount()

react batch render phase of all the cbc and the commit phase is batched

# Lifecycle of Updating

when we can this.setState() the updating cycle starts

- updates the state variable
- react triggers the render once again
- now dom will be updated
- componentdidupdate() is invoked

# Never compare useEffect () and componentDidMount() they are both different

componentDidUpdate(prevProps,prevState){
// like in useEffect() we have an array of dependency
if(this.state.count!==prevState.count || this.state.count2!==prevState.count2){
}
console.log("Child is updated ")
}

# Cons of single page applications

# useEffect for unmounting in useEffect

we use return ()=>{}

useEffect(()=>{
console.log("")
return ()=>{
console.log("unmount")
}
},[])

# why we can't use asyn in useEffect call back function

useEffect(async ()=>{})

# Optimizing our app

# single responsibility principle

Basically according to this principle if we break our whole code into small modules and if there is a bug in a particular module then we have to just test that particular module for that bug not the whole code.

- If we follow this principle then our code becomes more readable, maintable and testable

# Custom Hook make our code more readable, modular and maintainable

# Its not mandatory to start the custom hooks name with use but its recommended

# For further optimization we can use lazy loading

-lazy loading / Chunking / Code Splitting / Dynamic Bundling / On demand loading

# Higher Order Component

---> is a function that takes a component, enchances that component and return back the component

# Controlled and Uncontrolled component

if a component's state is changing with the help of its parent component then it is a controlled component
else its an uncontrolled component

# Lifting state up padh liyo bhai

# useContext()

basically a hook which helps in solving the problem of props drilling It is useful in small and medium projects for props drilling issue but large scale app where a lot of components are made Redux is used

we have to make a context then wrap in to main app then we can use it any of the component of the app

# Redux helps in easy debugging

Redux has a store which stores all the data and any component can access this store
Store contains the data in object format but it has many slices and store data according to the slices
For eg Cart slice will store cart data, User slice will store login credentials etc

// THis is basically write the data
We are taking example of cart feature and add button in the app for redux

- When we click on the add button ti dispatch an action.
- After dispatching an action it calls a function
- Function is basically a reducer function
- Reducer Function internally modifies the slice of the redux store

// Now for reading the data
Selector is used to read the data from the store and update the data in the ui
As the store changes react will automatically changes the ui this is basically -- subscribing to the store
(Subscribing to the store )

# steps are basiccaly

- iNstall the library
- build our own store
- connect the store to the app
- dispatch the action
- selector will used to update the ui

Redux is based on immerse.js library and earlier we have to make a separte store and we have to return that
store. We can't mutate the already present store

# Testing Methods

- Unit Testing
  THis is basically the testing individual components for testing
- Integration Testing

- End to end testing

# React testing

React testing library is made up on dom testing library

- React testing library uses jest
- Jest testing framework

install react testing library
install jest
install babel dependency
configure babel
configure parcel config file to disable default babel transpilation
jest configuration by npx create-jest
installing jest dom environment
npm install --save-dev jest-environment-jsdom
install @babel/preset-react to make jsx work in test cases
include @babel/preset-react inside my bable config
npm install -D @testing-library/jest-dom
