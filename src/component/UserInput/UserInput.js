import './UserInput.css'
import React,{useState} from 'react'
function UserInput(props){

const [userName,setUserName]=useState('')
const[userAge,setUserAge]=useState()
    function InpustObject(event){
       // console.log('hi')
     event.preventDefault()
       const inputObject=
        {name:userName,
        age:userAge,
        key:Math.random().toString(),
        id:'sam'}
       
      // console.log(inputObject)
      props.onInput(inputObject)
    }
   
    function NameHandler(event){
       setUserName(event.target.value)
       
        console.log(event.target.value)
    }
    function AgeHandler(event){
        
        setUserAge(event.target.value)
    }
return(
    <div className="User-input">
        <form onSubmit={InpustObject} className='form'>
            <div>
            <label>Username</label>
            </div>
            <div>
              <input type='text' id='name' onChange={NameHandler}></input>
            </div>
            <div>
            <label>Age</label>
             </div>
           <div>
           <input type='text' id='age' onChange={AgeHandler}></input>
           </div>
           
            <div>
            <button type="submit"  >Submit</button>
            </div>
        </form>
    </div>
)
}
export default UserInput