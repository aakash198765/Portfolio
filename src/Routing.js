import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteList from './RouteList';
import RouteNotFound from "./RouteNotFound";
import Home from "./pages/home";

class Routing extends React.Component {

    render(){
        return(
            <Router
            >
                <Routes>
                    {
                        Object.keys(RouteList).map((route) => {
                            const RouteComponent = RouteList[route];
                            return (
                                <Route
                                    path={route}
                                    element={<RouteComponent />}
                                />
                            )
                        })
                    }
                </Routes>
            </Router>
        )
    }
}

export default Routing;

