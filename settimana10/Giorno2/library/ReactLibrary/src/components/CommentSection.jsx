import { Alert, Spinner } from "react-bootstrap"
import NewBookRate from "./NewBookRate"
import SingleComment from "./SingleComment"
import { useState, useEffect } from "react"

const CommentSection = ({asin}) => {

    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [comments, setComments] = useState([])

    const postData = async (newComment) => {
        setLoading(true)
        try {
            const res = await fetch ('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify({...newComment, elementId: asin}),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
                },
            })
            if (res.ok) {
                console.log('ok');
                fetchData()
            } else {
                console.log('error')
                setLoading(false)
                setError(true)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }

    const deleteComment = async (commentId) => {
        setLoading(true)
        try {
            const res = await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + commentId, {
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
                },
            })
            if (res.ok) {
                console.log('ok');
                fetchData()
            } else {
                console.log('error')
                setLoading(false)
                setError(true)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }




    const fetchData = async() => {
        setLoading(true)
        setError(false)
        try {
            const res = await fetch ('https://striveschool-api.herokuapp.com/api/books/' + asin + '/comments', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE',
                },
            })
            if (res.ok) {
                let data = await res.json()
                setComments(data)
                setLoading(false)
            } else {
                console.log('error')
                setLoading(false)
                setError(true)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() =>{
        fetchData()
    }, [])


    return (
        <div style={divStyle} className={'rounded mx-auto'}>
            {isLoading && <Spinner animation="grow" />}
            {isError && <Alert variant="danger">
                This is a {variant} alert - check it out!
            </Alert>}

            <h3>Commenti</h3>
            {comments.length > 0
                ? comments.map((comment, index) =>
                <SingleComment 
                    comment={comment} 
                    key={index}
                    deleteComment={deleteComment} />)
                : <small> Non ci sono ancora commenti </small>}
        
            <NewBookRate
                postData={postData}/>
        </div>
    )
}

const divStyle = {
    width: '280px', 
    backgroundColor: '##E4E6E7',
    padding: '10px',
    border: '1px solid #ccc',
}

export default CommentSection