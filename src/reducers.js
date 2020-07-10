import { CHANGE_SEARCH_FIELD } from './constants.js';
import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

// create initial state
const initialStateSearch = {
    searchField: ''
};

// create Reducer, the function 
// takes in state (search), what action just happened (objects)
// if we care about the action, it will do something
// single source of truth, state read only, pure function (return one thing)
export const searchRobots = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false})
            default:
                return state;
    }
}

// // did change CHANGE_SEARCH_FIELD happen? run console log
// export const searchRobots = (state=intialState, action={}) => {
//     console.log(action.type)
//     switch (action.type) {
//         case CHANGE_SEARCH_FIELD:
//             return Object.assign({}, state, { searchField: action.payload })
//         default:
//             return state;
//     }
// }



