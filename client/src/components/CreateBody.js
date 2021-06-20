
function NewGame() {
    return <div className="new-game">create new Game</div>
}

function Ranks() {
    return <div className="rank">Ranks</div>
}

export default function CreateBody() {
    return (
        <div>
            <NewGame></NewGame>
            <Ranks></Ranks>
        </div>
    )
}
