import ProctectedRoute from "./components/ProtectedRoute"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "./views/Main"
import Home from "./views/Home"
import Create from "./views/Create"
import NotFound from "./views/NotFound"
import "./css/index.css"

function randomId() {
    return "xxx-xx-xx".replace(
        /x/g,
        () =>
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
                Math.floor(Math.random() * 52)
            ]
    )
}

function Routers() {
    return (
        <Switch>
            <ProctectedRoute
                exact
                authRedirect="/"
                path="/login"
                component={Main}
            ></ProctectedRoute>
            <Route exact path="/" component={Create}></Route>
            <ProctectedRoute
                exact
                path="/:id"
                component={Home}
            ></ProctectedRoute>
            <Route component={NotFound} />
        </Switch>
    )
}

function App() {
    return (
        // <div>hh</div>
        <BrowserRouter>
            <Routers></Routers>
        </BrowserRouter>
    )
}

export default App
