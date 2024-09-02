import { NavBar } from '../components';
const ErrorPage = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <NavBar />
                </div>
            </header>
            <main>
                <div className="error-message">
                    <h1>Oops! Looks like something went wrong!</h1>
                </div>
            </main>
        </>
    );
};

export default ErrorPage;