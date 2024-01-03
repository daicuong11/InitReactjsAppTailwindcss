import Button from "../../components/Button/Button";

const HomePage = () => {

    return (
        <div className="container mx-auto mt-5">
            <div className="items-center justify-center row">
                <div className="col">
                    <h1 className="p-3 text-center text-red-800 bg-red-300 rounded cursor-pointer hover:bg-red-400">This is home page</h1>
                    <Button outline >
                        Login
                    </Button>
                    <div className="px-6 py-8 bg-white rounded-lg shadow-xl dark:bg-slate-800 ring-1 ring-slate-900/5">
                        <div>
                            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
                            </span>
                        </div>
                        <h3 className="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">Change theme</h3>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            For example to change theme website
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;