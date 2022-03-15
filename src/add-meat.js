import React from 'react'
import { connect } from 'react-redux';
import {addMeats} from "../store"


    const Add = ({add, remove}) => {
        return (
            <div>
                <button onClick={add}>SEE MORE!</button>
            </div>
            )
    }


const mapDispatchToProps = (dispatch) => {
    return {
        add: async() => { 
          await dispatch(addMeats()) 
            
        }
    }
}



export default connect(null,mapDispatchToProps)(Add)