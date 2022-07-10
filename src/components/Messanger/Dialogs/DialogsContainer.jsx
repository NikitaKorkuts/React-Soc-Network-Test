import React from 'react'
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.messanger.dialogs
    }
}

export default compose(connect(mapStateToProps), withAuthRedirect)(Dialogs)