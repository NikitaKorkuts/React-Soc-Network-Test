import React from 'react'
import s from './UserProfile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userImg from '../../../assets/images/user.png';
import defaultWallImg from '../../../assets/images/defaultWallImg.jpg'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const UserProfile = (props) => {

    if(!props.profile) {
        return <Preloader />
    } else {
        let getLookingForJobElement = () => {
            if (props.profile.lookingForAJob) {
                return (
                    <div className={s.lookingForJob}>
                        <h1>Looking For Job:</h1>
                        <p>{props.profile.lookingForAJobDescription}</p>
                    </div>
                )
            }
        }

        let getContactsElement = () => {
            let contacts = props.profile.contacts;
            let contactElements = [];

            for (let key in contacts) {
                if (contacts[key]) {
                    let contact = <div className={s.contact}><p>{`${key}: `}<a
                        href={contacts[key]}>{contacts[key]}</a></p></div>
                    contactElements.push(contact);
                }
            }
            if (contactElements.length > 0) {
                return (
                    <div className={s.contacts}>
                        <h1 className={s.contactsHeader}>Contacts</h1>
                        {contactElements}
                    </div>
                )
            }
        }

        let getAboutMeElement = () => {
            if(props.profile.aboutMe) {
                return (
                    <div className="aboutMe">
                        <h1>About Me</h1>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                )
            }
        }

        return (
            <div>
                <div>
                    <div className={s.wallImg}>
                        <img src={defaultWallImg} alt="wallImg"/>
                    </div>
                    <div className={s.user}>
                        <div className={s.userAvatar}>
                            <img src={props.profile.photos.large ? props.profile.photos.large : userImg} alt="avatar"/>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.infoName}>
                                <p>{props.profile.fullName}</p>
                            </div>
                            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                        </div>
                    </div>
                    {getAboutMeElement()}
                    {getLookingForJobElement()}
                    {getContactsElement()}
                </div>
            </div>
        )
    }
}

export default UserProfile