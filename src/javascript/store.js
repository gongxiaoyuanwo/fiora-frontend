'use strict'

const Action = require('./action.js');
import { combineReducers, createStore } from 'redux';

function reducer(state = {}, action) {
    switch (action.type) {
        case Action.types.SetUser: {
            return Object.assign({}, state, {user: action.user});
        }
        case Action.types.SetUserInfo: {
            state.user.nickname = action.user.nickname;
            state.user.avatar = action.user.avatar;
            return Object.assign({}, state);
        }
        case Action.types.SetCurrentLinkman: {
            state.currentLinkman = action.user;
            return Object.assign({}, state);
        }
        case Action.types.SetLoginStatus: {
            state.isLogged = action.status;
            return Object.assign({}, state);
        }
        case Action.types.AddGroupMessage: {
            let group = state.user.groups.find(x => x.id === action.group.id);
            group.messages = group.messages || [];
            group.messages.push(action.message);
            return Object.assign({}, state);
        }
        case Action.types.SetWindowVisible: {
            state.windowVisible = action.status;
            return Object.assign({}, state);
        }
        case Action.types.SetComments: {
            state.comments = action.comments;
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}
let reducers = combineReducers({ reducer });

module.exports = createStore(reducers);

// let unsubscribe = Store.subscribe(() =>
//     console.log('store监控', store.getState())
// );