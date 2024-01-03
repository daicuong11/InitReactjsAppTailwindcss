import { Link } from "react-router-dom";
import { actions, useGlobalContext } from "../../../context";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignOut, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Button from "../../../components/Button/Button";


const Header = (props) => {
    const [state, dispatch] = useGlobalContext();
    const { theme } = state;

    useEffect(() => {
        localStorage.theme = theme;
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme]);

    const handleChangeTheme = () => {
        dispatch(actions.setTheme(theme));
    }
    return (
        <header className="h-20 bg-red-500">
            <div className="container flex items-center justify-between h-full mx-auto">
                <div className="text-lg font-bold text-white">Logo</div>
                <nav className="space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/about" className="text-white">About</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                    {/* button change theme */}
                    <Button text >Register</Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />} rightIcon={<FontAwesomeIcon icon={faSignOut} />} >Login</Button>
                    <button onClick={handleChangeTheme} className="px-3 py-[6px] bg-zinc-300 text-gray-700 dark:bg-zinc-700 dark:text-gray-300 rounded-md">
                        {theme === 'dark' ? <FontAwesomeIcon className="transition-all rotate-45" size="xl" color="white" icon={faSun} /> : <FontAwesomeIcon className="transition-all" size="xl" color="dark" icon={faMoon} />}
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
