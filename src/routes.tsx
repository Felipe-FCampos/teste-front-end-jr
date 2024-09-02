import { Route, Routes } from 'react-router-dom';
import Home from './page/home';

function Router(){
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    ) 
}

export default Router;