
function NewGame() {
    return (
        <div className="new-game-wrap">
            <div className="wrap">
                <div className="icon"></div>
                <div className="actions">
                    <button disabled>Find Random Oponant</button>
                    <button>Play with friend</button>
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
