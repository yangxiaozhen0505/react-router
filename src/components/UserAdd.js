
import React,{Component} from 'react'
export default class UserAdd extends Component{
    handleSubmit = (event) =>{
        event.preventDefault();
        let username = this.refs.username.value;
        let usersStr = localStorage.getItem('users');
        let users = usersStr?JSON.parse(usersStr):[];
        users.push({id:Date.now(),username});
        localStorage.setItem('users',JSON.stringify(users));
        this.props.history.push('/user/list')
        //this.props -->
        // history可以操作路由的历史 跳转路径用的 this.props.history.push('/')往数组里添加新路径  goback 返回上一个 replace(state,
        // location  pathname  state自定义路径状态  search
        // match  isExact精确匹配 url path 路径 params 路径参数对象
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input type="text" ref="username" className="form-control" required={true}/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}