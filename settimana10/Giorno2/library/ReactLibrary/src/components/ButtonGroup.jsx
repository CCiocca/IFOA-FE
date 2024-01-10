import { Button } from 'react-bootstrap';
import FantasyBooks from '../assets/books/fantasy.json';
import HistoryBooks from '../assets/books/history.json';
import HorrorBooks from '../assets/books/horror.json';
import RomanceBooks from '../assets/books/romance.json';
import ScifiBooks from '../assets/books/scifi.json';

const ButtonGroup = ({ setList }) => {
  const categories = [
    { catName: 'Fantasy', catNameJson: FantasyBooks },

    { catName: 'History', catNameJson: HistoryBooks },

    { catName: 'Horror', catNameJson: HorrorBooks },

    { catName: 'Romance', catNameJson: RomanceBooks },

    { catName: 'Scifi', catNameJson: ScifiBooks },
  ];

  return (
    <div className="text-center py-3">
      {categories.map((category, index) => (
        <Button
          variant="success"
          onClick={() => setList(category.catNameJson)}
          key={index}
        >
          {category.catName}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
