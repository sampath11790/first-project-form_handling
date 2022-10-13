 import './WarningMessage.css'
 function WarningMessage(props){
    function DeleteHandler(){
        props.onClicked()
        console.log('am deleted')
    }
    
    return(
        <div className="Warning-message"  onClick={DeleteHandler}>
             <h1>WarningMessage</h1>
        
          <div className="inner-box">
          <h2>Please enter the valid input</h2>
         </div>
        </div>
    )
 }
 export default WarningMessage