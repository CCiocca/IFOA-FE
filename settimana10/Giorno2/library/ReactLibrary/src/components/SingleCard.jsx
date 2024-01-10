import { Button, Card}  from 'react-bootstrap';
import { useState } from 'react'
// import Card from 'react-bootstrap/Card';

const SingleCard = ({book}) => {

    const [selected, setSelected] = useState(false);

    const cardSelected ={
        border: '4px solid black',
        borderRadius: '10px',
        width: '18rem'
    }

    return (
        <Card key={book.asin} style={selected? cardSelected : {width: '18rem'}} className="mb-3 p-0" onClick={()=> setSelected(!selected)}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.asin + ' ' + book.price}</Card.Text>
              <Button variant="primary">Acquista</Button>
            </Card.Body>
        </Card>
        )
    }

export default SingleCard