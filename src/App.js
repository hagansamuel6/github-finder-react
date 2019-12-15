import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/user/Users';
import Spinner from './component/layout/Spinner'
import Search from './component/user/Search'
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount(){
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users: res.data, loading: false})

  //   //console.log(res.data)
  // }

  if (loading) {
    return (
      <Spinner/>
    )
  }

  searchUsers = async text => {
    this.setState({loading: true})
    console.log(text);

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: res.data.items, loading: false})
  }

  //clear users from state
  clearUsers = () => {
      this.setState({users: [], loading: false});
  }

  render() { 
    const {users, loading} = this.state;
    return (
      <React.Fragment>
        <Navbar title='Find with Github'/>
        <div className="container">
        <Search searchUsers={this.searchUsers} 
        clearUsers={this.clearUsers}
        showClear={users.length> 0? true : false}/>
        <Users loading = {loading}  users = {users}/>
        </div>  
      </React.Fragment>
    );
  }
}


export default App;
