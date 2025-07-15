import { useState } from "react"
import ItemList from "./ItemList"

export default function RestaurantCategory({data,showItems,setShowIndex}){
    console.log(data)
    
    // const showItems = true;
    const handleClick= ()=>{
        setShowIndex()
    }
    return (
        <div>
            {/* {header} */}
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {
                    showItems && <ItemList items={data?.itemCards}/>
                }
            </div>
            {/* {body} */}


        </div>
    )
}