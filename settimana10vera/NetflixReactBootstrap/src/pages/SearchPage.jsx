import CustomPageTitleSection from "../components/molecules/CustomPageTitleSection"
import { Form, Row, Col, Button, Container } from "react-bootstrap"

const SearchPage = ({page}) => {
    return(
      <>
      <CustomPageTitleSection page={page}/>
      <Container className="d-flex justify-content-center my-5" >

      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"

              name="search"
              value={}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Container>
      </>
)
}

export default SearchPage