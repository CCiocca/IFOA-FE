import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import ErrorMessage from "../molecules/ErrorMessage404";


const NotFound = () => {
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
        <ErrorMessage/>
        </>
)
}

export default NotFound