import React, {useEffect, useState} from 'react'
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {!editMode &&
                <div><p className={s.aboutMeText} onClick={activateEditMode}>{props.status || 'no status'}</p></div>
            }
            {editMode &&
                <div>
                    <input type="text" onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;