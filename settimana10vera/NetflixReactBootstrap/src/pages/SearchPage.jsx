import { useNavigate } from "react-router-dom"
import CustomPageTitleSection from "../components/molecules/CustomPageTitleSection"
import { Form, Row, Col, Button, Container } from "react-bootstrap"
import { useState } from "react"

const SearchPage = ({page}) => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/search-results?search=' + search)
  }

    return(
      <>
      <CustomPageTitleSection page={page}/>
      <Container className="d-flex justify-content-center my-5" style={{minHeight: "20vh"}} >

      <Form >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"

              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button 
            type="button"
            variant="secondary"
            
            onClick={handleSearch}
            >Search</Button>
          </Col>
        </Row>
      </Form>
      </Container>
      </>
)
}

export default SearchPage