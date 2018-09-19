import React, {Component} from 'react'
import axios from 'axios'

class Category extends Component{
   
    componentDidMount(){
        axios.get(`/api/products/${this.props.match.params.name}`).then((res) => console.log(res.data))
    }

    render(){
        return(
            <h1>Category</h1>
        )
    }
}

export default Category