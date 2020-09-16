import React from 'react'
import logo from './logo-r.svg'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { email: '' }
	}
	myChangeHandler = (event) => {
		this.setState({ email: event.target.value })
	}
	render() {
		return (
			<div className='login'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
				</header>
				<br></br>
				<p className='welcome'>Welcome to Green.</p>
				<p className='text'>Please enter your email below</p>

				<form>
					<div className='email'>
						<label className='emailLabel' for='email'>
							Email Address
						</label>
						<input type='text' id='email' name='email'></input>
					</div>
					<div className='checkbox'>
						<input className='remember' id='checkbox' type='checkbox'></input>
						<label for='checkbox'>Remember this device</label>
					</div>

					<div className='signin'>
						<input type='button' name='signin' value='Sign In'></input>
					</div>
				</form>
			</div>
		)
	}
}

export default App
