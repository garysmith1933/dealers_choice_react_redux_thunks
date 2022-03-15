import store, {getMeats} from "../store"
import React, {Component} from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import Meats from "./Meats"
import {Provider} from "react-redux"




export default class App extends Component {
    async componentDidMount(props) {
        // const response = await axios.get("/api/meats").data
      await store.dispatch(getMeats())
    }
    
    render() {
        return (
            <div>
                <h1 className = 'title'> We love all kinds of meats! </h1>
                <Meats/>
            </div>
            )
    }
}
render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));