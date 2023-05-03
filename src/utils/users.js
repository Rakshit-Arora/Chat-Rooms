const users= []

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if(!username || ! room)
    {
        return {
            error: 'Username & Room are required'
        }
    }

    //Check for Existing User
    const ExistingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if(ExistingUser){
        return {
            error: 'Username is in Use'
        }
    }

    //store User
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1)
    {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}