import { Button, Card}  from 'react-bootstrap';
import { useState } from 'react'
// import Card from 'react-bootstrap/Card';
import CommentSection from './CommentSection';

const SingleCard = ({book}) => {

    const [selected, setSelected] = useState(false);

    const cardSelected ={
        border: '4px solid black',
        borderRadius: '10px',
        width: '18rem'
    }

    return (
        <>
        <div className='d-flex flex-column'>
        <Card key={book.asin} style={selected? cardSelected : {width: '18rem'}} className="mt-3 mb-3 p-0" >
            <Card.Img variant="top" src={book.img} onClick={()=> setSelected(!selected)}/>
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.asin + ' ' + book.price}</Card.Text>
              <Button variant="primary">Acquista</Button>
            </Card.Body>
        </Card>
        {selected && <CommentSection asin={book.asin}/>}
        </div>
        </>
        )
    }

export default SingleCard