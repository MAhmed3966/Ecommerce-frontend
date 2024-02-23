import './assets/css/style.css'
import Navbar from './Components/Navbar'
import Banner from './Components/banner'
import ProductCategory from './Components/ProductCategory'
import Routing from "./Routes/routes.jsx";


function App() {

    return (
        <>
            <Navbar/>
            <Routing/>
            {/*<Banner/>*/}
            {/*<ProductCategory/>*/}
        </>
    )
}

export default App
