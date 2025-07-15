import React from "react";
// import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "./UserContext";
class About extends React.Component {
    constructor(props){
        super(props)
        console.log("Parent Constructor is called ")

    }
    componentDidMount(){
        console.log("Parent Did Mount is called")
    }
    render(){
        console.log("Parent render is called ")
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is the about us page of food ordering app</h2> 
                <div>
                    LoggedIn User 
                    {/* <UserContext.Consumer>
                        {(data)=>console.log(data)};
                    </UserContext.Consumer> */}

                </div>
                <UserClass name={"First "} location={"Gurgaon"}/>
                {/* <UserClass name={"Second "} location={"Gurgaon"}/> */}
            </div>
        )
    }
}

export default About;