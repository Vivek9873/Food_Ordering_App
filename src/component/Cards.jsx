import { useContext } from "react";
import { CDN_URL } from "../utilities/constants";
import UserContext from "./UserContext";
const Cards = (props)=>{
    // console.log(props)
    const {loggedInUser} = useContext(UserContext)
    const {resData} = props
    const {
        cloudinaryImageId,
        name,
        areaName,
        avgRating,
        cuisines,
        costForTwo,
        sla,
      } = resData?.info;
    return (
        <div data-testid="resData" className="card m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-300" >
            <img className="card-logo rounded-lg" src={CDN_URL + cloudinaryImageId} alt="Res-logo" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{loggedInUser}</h4>
        </div>
    )
}

// Higher order components

// Takes a component and return an enhanced component

export const withPromoted = (Cards)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Cards {...props}/>
            </div>
        )
    }
}
export default Cards;