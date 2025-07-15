import { useContext, useEffect, useState } from "react";
import Cards, { withPromoted } from "./Cards";
import { SWIGGY_API } from "../utilities/constants";
import Skimmer from "./Skimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "./UserContext";


const Body = ()=>{
    const [resList,setResList] = useState([])
    const [filteredlist,setFilteredList] = useState([])
    const [searchText,setSearchText] = useState("")
    const [rated,setRated] = useState("Top Rated Restaurants")
    const onlineStatus = useOnlineStatus();
    const {loggedInUser,setUserName} = useContext(UserContext);
    // If api works then use fetch data else use that mock.js file 
    useEffect(()=>{
        fetchData()
    },[])
    console.log("Body rendered")
    const fetchData = async ()=>{
        const data = await fetch(SWIGGY_API)
        const json = await data.json();
        console.log(json)
        // Optional Chaining
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(filteredlist);
    }
    if(onlineStatus===false){
        return (<h1>Looks like you're Offline. Please connect to the internet</h1>)
    }
    if(filteredlist.length===0){
        return <Skimmer/>
    }
    const RestaurantPromoted = withPromoted(Cards);
    return (
        <div className="body">
            <div className="search m-4 p-4">
                <input 
                data-testid = "searchInput"
                className="border border-solid"
                type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                    const filtering = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredList(filtering)
                }}>Search</button>
                <button className="btn px-4 py-2 bg-gray-100 rounded-lg m-4" onClick={()=>{
                    if(rated==="All Restaurants"){
                        setFilteredList(resList)
                        setRated("Top Rated Restaurants")
                    }
                    else{
                        setFilteredList(resList.filter((value)=> value.info.avgRating>4));
                        setRated("All Restaurants")
                    }
                }}>{rated}</button>
                <input 
                className="border border-solid"
                type="text" value={loggedInUser} onChange={(e)=>{
                    setUserName(e.target.value)
                }}/>
                
                
            </div>
            <div className="res-container flex flex-wrap ">
                
                {filteredlist.map((values)=>(
                    <Link key={values.info.id} to={"/restaurant/"+values.info.id}>
                        {values?.info?.avgRating>4.5?
                        <RestaurantPromoted resData={values}/>
                        :<Cards  resData={values}/>}</Link>
                ))}    
            </div>
        </div>
    )
}
export default Body;