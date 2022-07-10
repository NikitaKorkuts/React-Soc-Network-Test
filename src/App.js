import React, {Suspense} from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import Messanger from "./components/Messanger/Messanger";
import FindFriendsContainer from "./components/Friends/FindFriends/FindFriendsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
//import LoginContainer from "./components/Login/LoginContainer";
import AsideContainer from "./components/Aside/AsideContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspence} from "./hoc/withSuspence";

const Messanger = React.lazy( () => import("./components/Messanger/Messanger"));
const ProfileContainer = React.lazy( () => import("./components/Profile/ProfileContainer"));
const LoginContainer = React.lazy( () => import("./components/Login/LoginContainer"));

const WithSuspenceProfileContainer = withSuspence(ProfileContainer);
const WithSuspenceMessanger = withSuspence(Messanger);
const WithSuspenceLoginContainer = withSuspence(LoginContainer);

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (this.props.initialized === false) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <AsideContainer/>
                <main>
                    <Routes>
                        <Route path='/profile' element={<WithSuspenceProfileContainer />}>
                            <Route path={':id'} element={<WithSuspenceProfileContainer />}/>
                        </Route>
                        <Route path='/messanger'
                               element={<WithSuspenceMessanger />}/>
                        <Route path='/news'
                               element={<News/>}/>
                        <Route path='/music'
                               element={<Music/>}/>
                        <Route path='/friends'
                               element={<FriendsContainer/>}/>
                        <Route path='/friends/findFriends'
                               element={<FindFriendsContainer/>}/>
                        <Route path='/settings'
                               element={<Settings/>}/>
                        <Route path='/login'
                               element={<WithSuspenceLoginContainer/>}/>

                    </Routes>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return (
        // <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer/>
            </BrowserRouter>
        </Provider>
        // </React.StrictMode>
    )
}

export default SamuraiJSApp