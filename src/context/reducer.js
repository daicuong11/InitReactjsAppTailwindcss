import { SET_THEME } from "./constants";

const initState = {
    theme: localStorage.theme ? localStorage.theme : 'dark',

}

function reducer(state, action) {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload === 'dark' ? 'light' : 'dark'
            }
        default:
            throw new Error('Invalid action.');
    }
}

export { initState }

export default reducer;