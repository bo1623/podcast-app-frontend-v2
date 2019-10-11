import React,{Component} from 'react'
import {connect} from 'react-redux'
import login from '../actions/login'

class Login extends Component{

  state={
    username:''
  }

  handleOnChange=event=>{
    this.setState({
      username: event.target.value
    })
  }

  handleOnSubmit=event=>{
    event.preventDefault()
    this.props.login(this.state.username)
    const el=document.getElementById('login')
    el.remove()
    const login_form=document.querySelector('.login-form')
    login_form.innerHTML+=`<h3>Current User: ${this.state.username}</h3>`
  }

  render(){
    return(
      <div className='login-form'>
        <form id="login" onSubmit={this.handleOnSubmit}>
          <label>Username: </label>
            <input onChange={this.handleOnChange} type="text" name="username" placeholder="Enter username" value={this.state.username} />
            <input className="login-submit" type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: username => dispatch(login(username))
})


export default connect(null,mapDispatchToProps)(Login)
