import {Switch, Route} from "react-router-dom";

import Home from "../pages/Home";

const Router = () => {
    return(
        <Switch>
            <Route path="/"> <Home/> </Route>
        </Switch>
    )
}

export default Router