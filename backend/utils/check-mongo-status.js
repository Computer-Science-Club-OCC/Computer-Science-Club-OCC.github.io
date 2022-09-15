const mongoose = require("mongoose")

function getStatus() {
    const dbConnectionStatus = mongoose.connection.readyState
    switch (dbConnectionStatus) {
        case 0:
            console.log("MongoDB status:", "\x1b[31mDisconnected\x1b[0m")
            break
        case 1:
            console.log("MongoDB status:", "\x1b[36mConnected\x1b[0m")
            console.log("\x1b[36mcs_club Collection is available\x1b[0m")
            break
        case 2:
            console.log("MongoDB status:", "\x1b[32mConnecting\x1b[0m")
            break
        case 3:
            console.log("MongoDB status:", "\x1b[35mDisconnecting\x1b[0m")
            break
    }
}

exports.getStatus = getStatus
