import {Route, Navigate, useLocation} from "react-router-dom";

const authRoutes = ({component: Component, ...rest}) => {
    const isAuthenticated = localStorage.getItem("token") === null ? false : true;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation()
    return (
        <Route {...rest}>
            {isAuthenticated ? <Component/> : <Navigate to="/login" state={{from: location}}/>}
        </Route>
    )
}

export default authRoutes;