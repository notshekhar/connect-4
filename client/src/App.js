import ProctectedRoute from "./components/ProtectedRoute"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./views/Home"
import Create from "./views/Create"
import NotFound from "./views/NotFound"
import "./css/index.css"
import Login from "./views/Login"

function Routers() {
    return (
        <Switch>
            <ProctectedRoute
                exact
                authRedirect="/"
                path="/login"
                component={Login}
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
