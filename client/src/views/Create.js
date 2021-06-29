import Header from "../components/Header"
import CreateBody from "../components/CreateBody"

export default function Create({ history }) {
    return (
        <div>
            <Header history={history}></Header>
            <CreateBody></CreateBody>
        </div>
    )
}
