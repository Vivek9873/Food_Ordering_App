import { useState } from "react";

const User = (props)=>{
    const {name,location} = props;
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:Nhi ho paega </h4>
           
        </div>
    )
}
export default User;