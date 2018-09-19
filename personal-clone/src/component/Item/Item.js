import React, {Component} from 'react'
import axios from 'axios'

class Item extends Component{

componentDidMount(){
axios.get(`/api/item/${this.props.match.params.id}`).then((res) => console.log(res.data))
}

    render(){
        return(
            <h1>Item</h1>
        )
    }
}

export default Item;