import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from 'pages/Home';
import Login from 'pages/Login';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.LOGIN} element={<Login />}></Route>
            <Route path = {RoutePath.HOME} element = {<Home />}></Route>
        </Routes>
     );
};
 
export default Router;