import { useState } from "react"
import { Container } from "react-bootstrap"


const HomeMain = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='

    // const url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + query + '&limit=40&appid=' + APIkey

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(url + query + '&limit=40&appid=' + APIkey);
            if (res.ok) {
                const data = await res.json();
                setResults(data.Search)
            } else {
                alert('No results')
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    return(
        <>
        <Container>
            <Row>
                <Col xs={10} className="mx-auto my-3">
                    <h1 className="display-1">Remote Jobs Search</h1>
                </Col>
                <Col xs={10} className="mx-auto my-3">
                    <Link to="/favourites">Favourites</Link>
                </Col>
            
                <Col xs={10} className="mx-auto">
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
                    </Form>
                </Col>
                <Col xs={10} className="mx-auto mb-5">
                    {jobs.map(jobData => (
                    <Job key={jobData._id} data={jobData} />
                ))}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default HomeMain