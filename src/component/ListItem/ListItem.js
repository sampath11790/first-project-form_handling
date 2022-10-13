import ListElements from "../ListElments/ListElements"
import './ListItem.css'

function ListItem(props){
return (
    <div>
        <ul className="list-item-container">
        {
        props.userDetails.map(items=>
         <ListElements name={items.name} age={items.age} id={items.id} key={Math.random().toString()}></ListElements>
        )
     }
        </ul>
    
    </div>
)
}
export default ListItem