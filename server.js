var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/board.html");
})


app.get("/admin", (req, res) => {
    res.sendFile(__dirname + "/public/admin.html");
})

http.listen(3000, () => {
    console.log("Connected to server");
})

io.on("connection", (socket) => {
    console.log("New socket connection established");

    socket.on("disconnect", () =>{
        console.log("Disconnected from socket");
    })
    socket.on("updatedText", function(txt) {
        console.log("Server: Received text->",txt);
        io.emit("boardText", txt);
        console.log("Broadcast this text:" ,txt);
    })
})
