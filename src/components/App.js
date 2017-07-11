import React, {Component} from 'react';
import './link.css'
import {
    //BrowserRouter as Router,//浏览器路由容器
    HashRouter as Router,//浏览器路由容器
    Route,//单条路由 app.get()
   Link//菜单导航 超链接
} from 'react-router-dom'

import Home from './Home'
import User from './User'
import Profile from './Profile'

import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
    render(){
        return (
            <Router>
                <div >
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <div className="navbar-brand"><Link to="/">我的课堂</Link></div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">首页</Link></li>
                                <li><Link to="/user">用户管理</Link></li>
                                <li><Link to="/profile">个人设置</Link></li>
                            </ul>
                        </div>
                    </nav>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <Route exact={true} path="/" component={Home}/>
                                <Route path="/user" component={User}/>
                                <Route path="/profile" component={Profile}/>
                            </div>
                        </div>

                    </div>
                </div>
            </Router>
        )
    }
}

