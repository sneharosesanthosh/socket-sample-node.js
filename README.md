Here I'm attempting to bring real time commiunication using socket.

-> Admin.html creates a text
-> Click Update Board button
-> The created text passed through socket to the server
-> Server receives it and broadcasts it
-> Board.html receives this text through socket and updates the innerHTML of the element
