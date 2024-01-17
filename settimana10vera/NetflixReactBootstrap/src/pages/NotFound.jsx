import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { Link } from "react-router-dom";


const NotFoundMessage = () => {
    const navigate = useNavigate();

    let counter= 10

    // setInterval(()=>{
    //     counter = counter--}, 1000)      
    // }


    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 10000)
    }, [])


    return(
        <>
        <Container className="d-flex justify-content-center my-5" >
        <h1>Sorry, page not found!</h1>
        <p>You will be redirected to the homepage in {counter} seconds or <Link to="/">click here </Link></p>
        </Container>
        </>
)
}

export default NotFoundMessage