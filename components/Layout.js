import Footer from "./Footer"
import Navbar from "./NavBar";

const Layoyt = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>        
     );
}
 
export default Layoyt;