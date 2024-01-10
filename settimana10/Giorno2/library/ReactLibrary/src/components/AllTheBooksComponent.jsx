// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import ButtonGroup from './ButtonGroup.jsx';
// import FantasyBooks from '../assets/books/fantasy.json'
import SingleCard from './SingleCard.jsx';

const AllTheBooksComponent = () => {
  const [list, setList] = useState([]);
  const [filteredList, setListFiltered] = useState([]);

  const handleSearch = (e) => {
    let value = e.target.value;
    const actualState = list;
    const result = actualState.filter((book) => {
      return book.title.toLowerCase().includes(value.toLowerCase())
    })
    setListFiltered(result)
  }

  //alternativa con regexp
//   function handleSearch(event) {
//     let value = new RegExp(event.target.value, 'i') // 'i' = 'case insensitive
//     const actualState = list
//     const result = actualState.filter((book) => {
//         return value.test(book.title)
//     })
//     setListFiltered(result)
// }

  // useEffect(() => {
  //   setListFiltered(list)
  //   retriveTitle(list[0] ? 'Categoria ' + list[0].category : 'Tutte le Categorie')
  // }, [list])


  return (
    <>
      <input type='text' onChange={handleSearch} />
      <ButtonGroup setList={setList} />

      <div className="d-flex flex-wrap justify-content-between">
        {filteredList.map((book) => (
          <SingleCard book={book} key={book.asin} />
        ))}
      </div>
    </>
  );
};

export default AllTheBooksComponent;
