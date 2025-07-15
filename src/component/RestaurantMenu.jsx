import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utilities/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu= ()=>{
    const {resID} = useParams()
    const [resInfo,menuInfo] = useRestaurantMenu(resID)
    const [showIndex,setShowIndex] = useState(null);
    
    
    const{name,cuisines,avgRatingString} = resInfo;
    // if(resInfo.length===0) return <Skimmer/>
    console.log(resInfo)
    console.log(menuInfo)
    // console.log(cuisines)
    const category = menuInfo.filter((item)=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(category)
    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {/* {cuisines.join(", ")} */}
            </p>
            {
                category.map((category,index)=><RestaurantCategory key={category?.card?.card?.title} 
                data={category?.card?.card} showItems={index===showIndex?true:false} setShowIndex={()=>index===showIndex?setShowIndex(null):setShowIndex(index)}/>)
            }
            
        </div>
    )
}
export default RestaurantMenu;