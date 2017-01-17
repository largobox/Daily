import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component{

	close(){
		this.props.onClose()
	}

	render(){
		return(
			<div className = { this.props.notification.show ? 'ntf_cnt active' : 'ntf_cnt' }>
				<div className = 'ntf_cnt_inner'>
					<div className = 'ntf_header'>
						<span>{ this.props.notification.message }</span>
						<a className = 'svg_hlp' onClick = {this.close.bind(this)} >
							<object data = './dist/img/icons/icon.svg'></object>					
						</a>					
					</div>
				</div>			
			</div>
		)
	}
}

export default connect(
	state => ({
		notification: state.notifications
	}),
	dispatch => ({
		onClose: () => {
			dispatch({ type: 'CLOSE_NOTIFICATION' })
		}
	})
)(Notification)