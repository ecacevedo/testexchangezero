import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import { item } from './services/items';

export default function ShowItems(props) {
  return (

    <div>
      
      {props.items.map(items => (
        <React.Fragment key={items.id}>{
          items.user_id == props.currentUser.id &&
        <>
          <p>{items.item_name} </p>
          <p>{items.locationdetails}</p>
          <img className="items-Image" src={items.image_url} />
          <Link to={`/items/${items.id}/edit`}><button>Edit</button></Link>

          <button onClick={() => props.handleItemDelete(items.id)}
            >Delete</button>
            </>
        }
          
        </React.Fragment>
      ))}
      <br></br>
      <Link to="/items/new"><button>Create Item</button></Link>
    </div>
  )
}
