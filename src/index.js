import store, {getMeats} from "../store"
import React, {Component} from 'react';
import { render } from 'react-dom';
import axios from 'axios'
import Meats from "./Meats"
import {Provider} from "react-redux"
import AddAndRemove from "./add-delete"




export default class App extends Component {
    async componentDidMount(props) {

      await store.dispatch(getMeats())
    }
    
    render() {
        return (
            <div>
                <h1 className = 'title'> We love all kinds of meats! </h1>
                <h2> Here are some of our favorites </h2>
                <AddAndRemove/>
                <Meats/>
            </div>
            )
    }
}
render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));