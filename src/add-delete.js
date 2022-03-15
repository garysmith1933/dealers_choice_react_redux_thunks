import React from 'react'
import { connect } from 'react-redux';
import {addMeats} from "../store"


    const AddAndRemove = ({add}) => {
        return (
            <button onClick={add}>+</button>
            
            // <button onClick={}>+</button>
            )
    }


const mapDispatchToProps = (dispatch) => {
    return {
        add: async() => {
            await dispatch(addMeats())
        }
    }
}

export default connect(null,mapDispatchToProps)(AddAndRemove)