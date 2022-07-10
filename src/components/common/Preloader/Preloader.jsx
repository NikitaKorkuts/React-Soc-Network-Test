import React from 'react'
import s from './Preloader.module.css'
import preloader from '../../../assets/images/Rolling.svg';

let Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img className={s.preloaderImg} src={preloader}/>
        </div>
    )
}

export default Preloader;