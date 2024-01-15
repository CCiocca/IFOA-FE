import { Container, Row } from 'react-bootstrap'
import JumbotronComponent from './JumbotronComponent'
import AllTheBooksComponent from './AllTheBooksComponent'

const Main = ({setPageTitle}) => {

    const retriveTitle = (newTitle) => {
        setPageTitle(newTitle)
    }

    return (
        <Container style={{ minHeight: '85vh' }}>
            <Row>
                <JumbotronComponent />
            </Row>
            <Row>
                <AllTheBooksComponent retriveTitle={retriveTitle}/>
            </Row>
      </Container>
    )
}

export default Main