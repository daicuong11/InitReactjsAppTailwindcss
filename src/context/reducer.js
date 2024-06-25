import { SET_THEME } from "./constants";

const initState = {
    theme: localStorage.theme ? localStorage.theme : 'light',

}

function reducer(state, action) {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: handleChangeTheme(action.payload),
            }
        default:
            throw new Error('Invalid action.');
    }
}

const handleChangeTheme = (theme) => {
    localStorage.theme = theme === 'light' ? 'dark' : 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    return localStorage.theme;
}

export { initState }

export default reducer;