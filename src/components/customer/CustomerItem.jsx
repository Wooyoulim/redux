import { Link } from 'react-router-dom';

const CustomerItem = ({ item }) => {
    const { id, title, user, date } = item;
    return (
        <tr>
            <td> {id} </td>
            <td>
                <Link to={id}> {title} </Link>
            </td>
            <td> {user} </td>
            <td> {date} </td>
        </tr>
    );
};

export default CustomerItem;
