import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Login() {
    const [authPage, setAuthPage] = useState("login")
    const location = useLocation()
    useEffect(() => {
        let auth_page = new URLSearchParams(location.search).get("auth")
        setAuthPage(auth_page)
    }, [])
    useEffect(() => {
        console.log(authPage)
    }, [authPage])
    return (
        <div className="body">
            <div className="login_wrap">l</div>
        </div>
    )
}
