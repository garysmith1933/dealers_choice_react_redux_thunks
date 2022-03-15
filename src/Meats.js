import React from "react"
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


const Meats = ({meats}) => {

    return (
         <div>
            <ul> 
            {
                meats.map(meat => {
                    return (
                        <li key={meat.id}> {meat.name} </li>
                    )
                })
            }
            </ul>
        </div>
        
        )
}




const MapState = (state) => {
   return {
       meats:state
   }
}


export default connect(MapState)(Meats)