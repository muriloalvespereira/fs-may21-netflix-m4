import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";

class Section extends Component {
  state = {
    // searchedMovies: false,
    movies: [],
    category: this.props.category
  };

  componentDidMount = async () => {
    let response = await fetch(
      "http://www.omdbapi.com/?apikey=a6236011&s=" + this.props.category
    );
    let data = await response.json();
    this.setState({
      movies: data.Search,
    });
  };
 
  componentDidUpdate = async (previousProps, previousState) =>{
     if(this.props.category !== previousState.category && this.props.category.length > 5){
         this.setState({
             category: this.props.category
         })
         try{
      let response = await fetch(
       "http://www.omdbapi.com/?apikey=a6236011&s=" + this.state.category
          );
          let data = await response.json();
          this.setState({
              movies: data.Search,
            //   searchedMovies: true
            });
        }
        catch(err){
            console.log(err)
        }
        };
}
        
        

  render() {
    return (
      <>
        <Row style={{ display: "flex" }} className="mb-3 pl-3">
          {this.state.movies
            .map((movie) => (
              <Col key={movie.imdbID} className="pr-0">
                {/* {this.state.searchedMovies && <SingleCard imgPoster={movie.album.cover_medium} />} */}
                <SingleCard imgPoster={movie.Poster} />
              </Col>
            ))
            .slice(0, 6)}
        </Row>
      </>
    );
  }
}

export default Section;
