import React from 'react'
import s from './Profile.module.css'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div>
            <div className={s.wallImg}>
                <img src="https://www.norberteder.com/wp-content/uploads/2018/01/development-header-1600x500.jpg"
                     alt="wallImg"/>
            </div>
            <div className={s.user}>
                <div className={s.userAvatar}>
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.infoName}>
                        <p>Nick Kor</p>
                    </div>
                    <div className={s.infoDate}>
                        <p>Date Of Birthday: <span>Nov. 26, 2003</span></p>
                    </div>
                    <div>
                        <p>City: <span>Saint-Petersburgr</span></p>
                    </div>
                    <div>
                        <p>Education: <span>ITMO</span></p>
                    </div>
                    <div>
                        <p>Website: <span>https:/nickkor.com</span></p>
                    </div>
                </div>

            </div>
            <Posts/>
        </div>
    )
}

export default Profile