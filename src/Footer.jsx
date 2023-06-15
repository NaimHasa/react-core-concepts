import './App.css';

import { useEffect, useState } from "react";

function Footer() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h1>Total Users: {users.length}</h1>
            {
                users.map(user => <User title={user.title} body={user.body} key={user.id}></User>)
            }
        </div>
    )
}

function User(props) {
    return (
        <div className="users">

            <h3>Name: {props.title}</h3>
            <p>Dscription: {props.body}</p>

        </div>
    )
}



export default Footer;