import Header from './Header';
import Footer from './Footer';

const HomeLayout = ({children}) => {


    return (
        <>
            <Header />
            <div className="">
                {children}
            </div>
            <Footer />
        </>
    );
}


export default HomeLayout;