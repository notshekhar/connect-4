import auth from "../js/auth"
import { useHistory } from "react-router-dom"

function NewGame() {
    const history = useHistory()

    function createRoom() {
        if (!auth.auth) history.push("/login?auth=login")
        
        //else fetch a room from server and redirect to room page
    }
    return (
        <div className="new-game-wrap">
            <div className="wrap">
                <div className="icon"></div>
                <div className="actions">
                    <button className="disabled-btn" disabled>
                        Find Random Oponant
                    </button>
                    <button className="btn" onClick={createRoom}>
                        Play with friend
                    </button>
                </div>
            </div>
        </div>
    )
}

function Ranks() {
    return <div className="rank">Ranks</div>
}
export default function CreateBody() {
    return (
        <div className="body">
            <NewGame></NewGame>
            <Ranks></Ranks>
        </div>
    )
}
