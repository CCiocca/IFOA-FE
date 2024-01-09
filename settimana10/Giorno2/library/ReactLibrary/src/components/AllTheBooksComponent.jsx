import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
// import FantasyBooks from '../assets/books/fantasy.json'

const AllTheBooksComponent = () =>{
    const [list, setList] = useState([]);

  return (
    <>
    <ButtonGroup setList={setList} />

    <div className='d-flex flex-wrap justify-content-between'>
        {list.map((book) => 
            <Card key={book.asin} style={{ width: '18rem' }} className='mb-3 p-0'>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                {book.asin + ' ' + book.price}
                </Card.Text>
                <Button variant="primary">Acquista</Button>
            </Card.Body>
            </Card>
        )}
    </div>

    </>
  );
}

export default AllTheBooksComponent;

