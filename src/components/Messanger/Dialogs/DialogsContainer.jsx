import React from 'react'
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/Dialog";

const Dialogs = (props) => {

    let dialogsElements = (state.dialogs).map(d => <DialogItem id={d.id} name={d.name}/>);

    return (
        <div className={s.dialogs}>
            <h1 className={s.header}>Dialogs</h1>
            {dialogsElements}
        </div>
    )
}

export default Dialogs