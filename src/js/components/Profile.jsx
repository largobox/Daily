import React from 'react'

class Profile extends React.Component{
	render(){
		return(
			<div className = 'profile_cnt'>
				<img src = './dist/img/profile.jpg' />
				<p>Teddy Bear</p>
			</div>
		)
	}
}

export default Profile