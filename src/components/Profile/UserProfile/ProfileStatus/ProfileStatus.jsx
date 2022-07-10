import React from 'react'
import s from './ProfileAboutMe.module.css'

class ProfileAboutMe extends React.Component {
    state = {
        editMode: false
    }
    ativateEditMode() {
        this.setState( {
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div><p className={s.aboutMeText} onClick={this.ativateEditMode.bind(this)}>{this.props.status}</p></div>
                }
                {this.state.editMode &&
                    <div><input type="text" autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/></div>
                }
            </>
        )
    }
}

export default ProfileAboutMe;