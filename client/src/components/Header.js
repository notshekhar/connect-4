function Logo() {
    return <div className="logo"></div>
}
function HeaderAuthElement({ history }) {
    function openLoginPage() {
        history.push("/login")
    }
    return (
        <div className="auth">
            <button className="login" onClick={openLoginPage}>
                LogIn
            </button>
            <button className="signup">SignUp</button>
        </div>
    )
}

export default function Header({ history }) {
    return (
        <div className="header">
            <Logo></Logo>
            <HeaderAuthElement history={history}></HeaderAuthElement>
        </div>
    )
}
