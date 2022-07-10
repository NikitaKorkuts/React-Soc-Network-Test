const ADD_TO_FRIENDS = 'ADD_TO_FRIENDS';
const REMOVE_FROM_FRIENDS = 'REMOVE_FROM_FRIENDS';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [

    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FRIENDS:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: true};
                    } else {
                        return u
                    }
                })
            }
        case REMOVE_FROM_FRIENDS:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) {
                        return {...u, followed: false}
                    } else{
                        return u
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const addToFriendsAC = (id) => ({type: ADD_TO_FRIENDS, id});
export const removeFromFriendsAC = (id) => ({type: REMOVE_FROM_FRIENDS, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default friendsReducer;


//     props.setUsers([
//         {
//             id: 0,
//             imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxArYU5ItDIWiCs8hWhhXVjLCduot78KcJQ&usqp=CAU',
//             username: 'Pavel Flotski',
//             age: 38,
//             birthday: '18.09.1983',
//             city: 'Saint-Petersburg',
//             education: 'ITMO',
//             website: 'https://pavelflotski.com',
//             isFriend: false
//         },
//         {
//             id: 1,
//             imgUrl: 'http://130701.com/wp-content/uploads/2015/12/Dmitry_Evgrafov_Close-up.jpg',
//             username: 'Dmitry Peskov',
//             age: 22,
//             birthday: '22.01.2000',
//             city: 'Moscow',
//             education: 'MGU',
//             website: 'https://dmitrypeskov.com',
//             isFriend: true
//         },
//         {
//             id: 2,
//             imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_MD7Lprr-edCJmm-9dx2pfrYpMXqKJrFlQ&usqp=CAU',
//             username: 'Roman Zadorov',
//             age: 32,
//             birthday: '21.02.1990',
//             city: 'Ekaterinburg',
//             education: 'EkbUniversity',
//             website: 'https://zadorow.com',
//             isFriend: false
//         },
//         {
//             id: 3,
//             imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwAtctSXXpq4qISpAFMt5rJVh8VVW_tOCRg&usqp=CAU',
//             username: 'Artem Sverlov',
//             age: 30,
//             birthday: '02.11.1992',
//             city: 'Minsk',
//             education: 'MGU',
//             website: 'https://artemsverlow.com',
//             isFriend: false
//         },
//         {
//             id: 4,
//             imgUrl: 'https://alt.ranepa.ru/resampled/lect/lect_168_sq600.jpg',
//             username: 'Uriy Dvizko',
//             age: 52,
//             birthday: '20.03.1970',
//             city: 'Moscow',
//             education: 'MGU',
//             website: 'https://dvizkov.com',
//             isFriend: true
//         },
//         {
//             id: 5,
//             imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQechz0dDCLGYRKKU8V80rFQZXIa4UWCjs12A&usqp=CAU',
//             username: 'Kirill Dubrov',
//             age: 30,
//             birthday: '22.07.1992',
//             city: 'Saint-Petersburg',
//             education: 'SPBGU',
//             website: 'https://kirilldubrov.com',
//             isFriend: true
//         },
//         {
//             id: 6,
//             imgUrl: 'https://icdn.lenta.ru/images/2021/09/30/14/20210930141623108/square_320_23302bed9097f643d45840d7163a1d9e.jpg',
//             username: 'Andrey Delemov',
//             age: 36,
//             birthday: '14.05.1986',
//             city: 'Kemerovo',
//             education: 'Industrial College',
//             website: 'https://delemovandrey.com',
//             isFriend: false
//         },
//         {
//             id: 7,
//             imgUrl: 'https://im.kommersant.ru/Issues.photo/NEWS/2022/04/14/KMO_111307_42718_1_t222_193610.jpg',
//             username: 'Artem Utkin',
//             age: 28,
//             birthday: '10.12.1994',
//             city: 'Rostov',
//             education: 'school 55',
//             website: 'https://utkin.com',
//             isFriend: true
//         },
//         {
//             id: 8,
//             imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Fedor_Emelianenko_Dec_2015.jpg/1200px-Fedor_Emelianenko_Dec_2015.jpg',
//             username: 'Fedor Gubin',
//             age: 30,
//             birthday: '14.05.1992',
//             city: 'Mogilev',
//             education: 'school 2',
//             website: '-',
//             isFriend: false
//         },
//         {
//             id: 9,
//             imgUrl: 'https://roman.ua/wp-content/themes/roman-ua/assets/img/roman.jpg',
//             username: 'Roman Petrov',
//             age: 30,
//             birthday: '28.02.1992',
//             city: 'Moscow',
//             education: 'Informational Tech. University',
//             website: 'https://rpetrov.com',
//             isFriend: true
//         },
//         {
//             id: 10,
//             imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA45KxazqUmfPaAk31fYMTzuVZOhgFPJdzZw&usqp=CAU',
//             username: 'Dmitry Stolyarov',
//             age: 29,
//             birthday: '23.12.1992',
//             city: 'Moscow',
//             education: 'Foreign Languages College',
//             website: 'https://stolyarov.com',
//             isFriend: false
//         },
//         {
//             id: 11,
//             imgUrl: 'https://whoiswho.comnews.ru/sites/default/files/persons/color/rastopshin_pavel_gennadievich_kvad.jpg',
//             username: 'Michael Vazunov',
//             age: 29,
//             birthday: '13.05.1993',
//             city: 'Saint-Petersburg',
//             education: 'Idustrial College',
//             website: '-',
//             isFriend: false,
//         }
//     ])
//