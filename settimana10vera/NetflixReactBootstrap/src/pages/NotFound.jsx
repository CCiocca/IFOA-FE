import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NotFoundMessage = () => {
    const navigate = useNavigate();

    const [count, setCount] = useState(10);

    useEffect(() => {
      const timer = setInterval(() => setCount((oldCount) => oldCount - 1), 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);


    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 10000)
    }, [])


    return(
        <>
        <Container className="d-flex flex-column justify-content-center my-5" >
        <h1>Sorry, page not found!</h1>
        <p>You will be redirected to the homepage in {count} seconds or <Link to="/">click here </Link></p>
        </Container>
        </>
)
}

export default NotFoundMessage