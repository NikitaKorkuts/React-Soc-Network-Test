import React from 'react'
import s from './User.module.css'

const User = () => {
    return (
        <div className={s.user}>
            <div className={s.userAvatar}>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"/>
            </div>
            <div className={s.userInfo}>
                <div className={s.infoName}>
                    <p>Artem Smirnov</p>
                </div>
                <div className={s.infoInfo}>
                    <p>Age: 29, City: Saint-Petersburg, Education: MGU</p>
                </div>
                <div className={s.infoAddBtn}>
                    <input type="submit" value="Add To Friends"/>
                </div>
            </div>
        </div>
    )
}

export default User;