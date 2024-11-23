import User from "./User";
import UserClass from "./UserClass";
import React from "react"




class About extends React.Component{

  constructor(props){
    super(props)
    console.log("parent constructor")
  }

  render(){
    console.log("parent render")
    return(
      <div>
         <h1>About</h1>
         <p>this is about page for the application</p>
         <UserClass name={"sriram from class comp"} location={"ramapuram to melss"} contact={"mail@mail.com"} />
      </div>
    )
  }
}




export default About;
