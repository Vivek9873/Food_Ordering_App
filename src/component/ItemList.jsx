import { useDispatch } from "react-redux"
import { addItems } from "../utilities/cartSlice"

const CDN_URL =
 "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
export default function ItemList({items}){
    const dispatch = useDispatch()
    const handleAddItems = (item)=>{
        dispatch(addItems(item))
    }
    return (
        <div>
            <div>
                {
                    items.map(item=><div key={item.card.info.id} data-testid="foodItems"
                     className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="text-gray-800">{item.card.info.name}</span>
                                <span className="text-gray-800"> - ₹ {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs text-gray-400">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 " >
                            <div className="absolute">
                                <button onClick={()=>handleAddItems(item)} className="px-2 py-1 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer ">Add+</button>
                            </div>
                            <img src={CDN_URL+ item.card.info.imageId} />

                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}