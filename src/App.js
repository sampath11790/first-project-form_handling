import ListItem from "./component/ListItem/ListItem";
import UserInput from "./component/UserInput/UserInput";
import React,{useState} from "react";
import './app.css'
import WarningMessage from "./component/WarningMessage/WarningMessage";
  
const userObject=[
  {id:1,name:"sampath",age:32},
  {id:2,name:"vijay",age:31},
  {id:3,name:"kutty",age:24}
]
function App() {
  const [errorMessgae,setErrorMessage]=useState(true)
 const[updatedUser,setUpdatedUse]=useState(userObject)

function InputHandler(enteredInput){
  if(enteredInput.name!=='' && enteredInput.age!==undefined){
    setUpdatedUse((preData)=>{
      const newUser=[...preData]
      newUser.unshift(enteredInput)
      console.log(newUser)
      return newUser
     
    }
    )
  }else{
    console.log('am error')
    setErrorMessage(false)
  }
 
  
  //console.log([...updatedUser,resiveUser])
}
const WarningMessageHandler=()=>{
  setErrorMessage(true)
}
let warningMessgae=<ListItem userDetails={updatedUser}></ListItem>
if(errorMessgae===false){
  warningMessgae=<WarningMessage onClicked={WarningMessageHandler} ></WarningMessage>
}
console.log(updatedUser)
  return (
   

    
    <div >
      <div>
      <UserInput onInput={InputHandler}></UserInput>
      </div>
      <div >
      
      </div>
      {warningMessgae}
    </div>
  );
}

export default App;
