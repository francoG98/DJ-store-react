import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const Layout = ({ children,id, className}) => {
    return (
        <div className={className} id={id}>
            <Header/>
            {children}
            <Footer/>
        </div>    
        
    );
}


export default Layout;