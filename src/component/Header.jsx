import { useContext, useState } from "react";
import { LOGO_URL } from "../utilities/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

export default Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const cart = useSelector((store)=>store.cart.items);
    return(
        <div className="header flex justify-between bg-pink-100 shadow-lg ">
            <div className="Logo-container">
                <div className="Logo w-26">
                    <img src= {LOGO_URL}/>
                </div>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        Online Status:{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/cart">Cart- ({cart.length} items)</Link>
                    </li>
                    <button className="LoginBtn"onClick={()=>{
                        btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
                    }}>{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}