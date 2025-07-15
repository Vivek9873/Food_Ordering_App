const MenuList = (props)=>{
    const {menuData} = props
    const {title,itemCards} = menuData?.card?.card
    return (
        <div>

            <h3>{title}</h3>
            <ul>
                {itemCards.map((res)=><li key={res?.card?.info?.id}>{res?.card?.info?.name} - Rs.{res?.card?.info?.price/100 || res?.card?.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}
export default MenuList;