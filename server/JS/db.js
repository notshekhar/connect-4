const nedb = require("nedb-promise")
let rooms = nedb({ filename: "rooms.db", autoload: true })
let users = nedb({ filename: "users.db", autoload: true })

async function InsertUser(username, password) {
    if (FindUser(username, password)) throw new Error("username Already exist")
    users.insert({
        username,
        password,
    })
}
async function FindUser(username, password) {
    return !!users.findOne({ $and: [{ username }, { password }] })
}
function randomId() {
    return "xxx-xx-xx".replace(
        /x/g,
        () =>
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
                Math.floor(Math.random() * 52)
            ]
    )
}
async function InsertRoom() {
    let id = randomId()
    let f = await FindRoom(id)
    if (f) return InsertRoom()
    await rooms.insert({ id })
    return id
}

async function FindRoom(id) {
    let room = await rooms.findOne({ id })
    return room
}

module.exports = {
    InsertUser,
    FindUser,
    InsertRoom,
    FindRoom,
}
