import './ListElements.css'
function ListElements(props){
  
    return(
        <div >
        <li className="List-Element">
           
            <div>{props.name}  {`(age:${props.age})`}</div>
          </li>
        </div>
    )
}

export default ListElements
