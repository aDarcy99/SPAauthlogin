import React,{ useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { ThemeProvider, createMuiTheme , CssBaseline } from "@material-ui/core";
import auth from "./functions/clientAuth.js";

const theme = createMuiTheme({
    palette: {
        background: {
            main: "#FFE56E"
        }
    }
});
//axios authentication middleware
import "./functions/axiosMiddleware.js";
//context
import UserProvider, {useUser} from "./providers/UserProvider.jsx";
//pages
    import IndexPage from "./pages/IndexPage.jsx";
    import Page401 from "./pages/errors/Page401.jsx";
    import AboutPage from "./pages/AboutPage";
    import AuthorizedPage from "./pages/AuthorizedPage"

function App(){
    const userContext = useUser();

    useEffect(() => {
        auth.refreshLogin((token) => {
            userContext.setUser(auth.getUserFromToken());
        });
    }, []) 
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <BrowserRouter>
                    <Route exact path="/">
                        <IndexPage />
                    </Route>
                    <ProtectedRoute exact path="/authorized-page" accessLevelRequired={2}>
                        <AuthorizedPage />
                    </ProtectedRoute>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                    <Route exact path="/401">
                        <Page401 />
                    </Route>
                </BrowserRouter>
        </ThemeProvider>
    )
}
// FIX that atrocious shit down there later V 
ReactDOM.render(<UserProvider><App /></UserProvider>, document.querySelector("#page-content"));