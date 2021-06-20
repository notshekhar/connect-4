function socketHandler(s) {
    s.on("join-room", (uid, room_id) => {
        s.join(room_id)
        s.join(uid)
        console.log(uid, "-> joined the room", room_id)
    })
}

module.exports = socketHandler
