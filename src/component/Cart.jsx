import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utilities/cartSlice";


export default function Cart(){
    const cartItems = useSelector((store)=>store.cart.items)

    // Less efficient code is 
    // const store = useSelector((store)=>store);
    // const cartItems = store.cart.items;
    // This code is also fine but this is less efficient as whenever store is updated in any other slice 
    // then this store updates hence we should only subscribe to required portion of the store 
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    return (
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart Page</h1> 
            <div className="w-6/12 mx-auto">
                <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer">Clear Cart</button>
                {cartItems.length===0?<h2>Cart is Empty. Please Add Items in the Cart!</h2>:
                <ItemList items={cartItems}/>
                }
            </div>
            
        </div>
    )
}