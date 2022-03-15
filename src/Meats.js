import React from "react"
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {removeMeat} from '../store'


const Meats = ({meats, remove}) => {

    return (
         <div>
            <ul> 
            {
                meats.map(meat => {
                    return (
                        <li key={meat.id}> {meat.name} 
                          <button onClick={()=> remove(meat)}>x</button>
                        </li>
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

const MapDispatch = (dispatch) => {
    return {
        remove: async(meat) => {
            await dispatch(removeMeat(meat)) 
        }
    }
}




export default connect(MapState, MapDispatch)(Meats)