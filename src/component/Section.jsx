import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

class Section extends Component {

    componentDidMount = async () => {

        let response = await fetch("http://www.omdbapi.com/?apikey=a6236011&s=" + this.props.category)
        let data = await response.json()
        console.log(data)

    }

    render(){
        return(
            <Row>
                <SingleCard img=""/>
            </Row>
        )
    }

}

export default Section