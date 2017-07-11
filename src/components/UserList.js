import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class UserList extends Component {
    constructor() {
        super();
        this.state = {users: []}
    }
componentWillMount(){
    let usersStr = localStorage.getItem('users');
    let users = usersStr?JSON.parse(usersStr):[];
    this.setState({users});
}
    render() {

        return (
            <ul>
                {
                    this.state.users.map((user,index)=>(
                        <li className="list-group-item" key={index}><Link to={"/user/detail/"+user.id}>{user.username}</Link></li>
                    ))
                }
            </ul>
        )
    }
}
