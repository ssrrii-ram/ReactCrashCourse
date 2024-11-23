import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
        console.log("child constructor")
    }



    render(){

        const {name, location, contact} = this.props
        console.log("child render")

        return(
            
            <div className="user-card">
                <h1>count: {this.state.count} </h1>
                <h1>{name}</h1>
                <h2>location:{location}</h2>
                <h2>contact:{contact}</h2>

                {/* NEVER UPDATE STATE VARIABLES DIRECTLY EX THIS.STATE.COUNT = 0 DO LIKE BELOW EX USE AS OBJECT */}
                <button onClick={()=>{this.setState({count:this.state.count +1})}} type="button">count++</button>
                <button onClick={()=>{this.setState({count:this.state.count = 0})}} type="button">--Reset++</button>
                
            </div>
        )
    }
}

export default UserClass
