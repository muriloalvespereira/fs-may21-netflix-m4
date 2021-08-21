import { useEffect } from "react"
import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"


const ShowDetail = (props) => {
  console.log(props, "details")
  const [movie, setMovie] = useState(true)

  useEffect(() => {
    let id = props.match.params.id
    console.log(id)

    const fetchMovie = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_BE_PROD_URL}media?i=` + id
      );
      let data = await response.json();
      console.log(data)
      setMovie(data)
    };

    fetchMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container fluid>
      <Row>
        {console.log(props)}
        {movie &&
          <Col className="detail-page vh-100" style={{ backgroundImage: `url(${movie.Poster})` }}>
            <h1>Show Detail</h1>
          </Col>
        }
      </Row>
    </Container>
  )
}

export default ShowDetail