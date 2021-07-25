import { useHistory } from "react-router-dom"

function Logo() {
    return <div className="logo"></div>
}
function HeaderAuthElement() {
    const history = useHistory()

    function openLoginPage() {
        history.push("/login?auth=login")
    }
    function openSignupPage() {
        history.push("/login?auth=signup")
    }
    return (
        <div className="auth">
            <button className="login btn" onClick={openLoginPage}>
                LogIn
            </button>
            <button className="signup btn" onClick={openSignupPage}>
                SignUp
            </button>
        </div>
    )
}

export default function Header() {
    return (
        <div className="header">
            <Logo></Logo>
            <HeaderAuthElement></HeaderAuthElement>
        </div>
    )
}
