import SingleAppointment from "./SingleAppointment"

class List extends React.Component {
    render(){
        return
        <>
        <ul>
            {data.map((item) => (
                <li>
                    <SingleAppointment item={item} removeAppointment={removeAppointment} />
                </li>
            ))}
        </ul>
        </>
    }
}

export default List