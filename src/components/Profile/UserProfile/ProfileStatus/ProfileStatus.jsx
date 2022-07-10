import React from 'react'
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    ativateEditMode = () => {
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }
    render() {
        console.log('rednder')
        return (
            <>
                {!this.state.editMode &&
                    <div><p className={s.aboutMeText} onClick={this.ativateEditMode}>{this.props.status || 'no status'}</p></div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="text" onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;