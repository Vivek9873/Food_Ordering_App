import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name+" Child Constructor is called")
        this.state={
            count:0,
            count2:1,
            userInfo:{
                login:"Dummy",
                public_repos:0,
                avatar_url:""
            }
        }
    }
    
    async componentDidMount(){
        console.log(this.props.name+" Child Did Mount is called")
        const data = await fetch("https://api.github.com/users/Vivek9873")
        const json = await data.json()
        this.setState({
            userInfo:json
        })
        console.log(json)
    }

    componentDidUpdate(prevProps,prevState){
        // like in useEffect() 
        // if(this.state.count!==prevState.count || this.state.count2!==prevState.count2){

        // }
        // if(this.state.count2!==prevState.count2){}
        // console.log("Child is updated ")
    }

    componentWillUnmount(){
        console.log("Component will unmount")
    }

    render(){
        console.log(this.props.name+" Child Render is called")
        const {login,public_repos,avatar_url} = this.state.userInfo;
        const {count} = this.state
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h1>count:{count}</h1>
                <button onClick={()=>{
                    // Never update the state variable by this.state.count +=1 directly
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Count Increased</button>
                <h2>Name:{login}</h2>
                <h3>public_repos:{public_repos}</h3>
                <h4>Contact:Nhi ho paega </h4>
               
            </div>
        )


    }
}
export default UserClass;