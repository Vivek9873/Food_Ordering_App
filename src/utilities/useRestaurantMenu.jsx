import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resID)=>{
    const [resInfo,setResInfo] = useState({})
    const [menuInfo,setMenuInfo] = useState([])

    useEffect(()=>{
        fetchMenu()
        console.log("useeffect called now")
    },[])
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resID);
        const json = await data.json()
        console.log(json)
        console.log("Mein json hoon")
        setResInfo(json?.data?.cards[2]?.card?.card?.info)
        setMenuInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((values)=> values?.card?.card?.itemCards))
        // console.log(resInfo)
  
    }
    return [resInfo,menuInfo];
}

export default useRestaurantMenu;