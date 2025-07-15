import React, {lazy,Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/component/Header"
import Body from "./src/component/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import About from "./src/component/About"
import Contact from "./src/component/Contact"
import Error from "./src/component/Error"
import RestaurantMenu from "./src/component/RestaurantMenu"
import UserContext from "./src/component/UserContext"
// import Grocery from "./src/component/Grocery"
import { Provider } from "react-redux"
import appStore from "./src/utilities/appStore"
import Cart from "./src/component/Cart"


const Grocery = lazy(()=>import("./src/component/Grocery"))
const AppLayout = ()=>{
    const [userName,setUserName] = useState("");
    useEffect(()=>{
        setUserName("Vivek Sharma");
    },[])



    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/> 
                    {/** Outlet will be replaced by the any other component according to the path */}
                </div>

            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<About/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resID",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
// root.render(<AppLayout/>)

