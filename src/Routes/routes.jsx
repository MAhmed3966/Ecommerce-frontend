import {Routes, Route} from "react-router-dom";
import Login from "../Components/admin/Login.jsx"
import Register from "../Components/admin/Register.jsx"
import NoMatch from "../Components/NoMatch.jsx"


const Routing = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
    )
}

export default Routing;