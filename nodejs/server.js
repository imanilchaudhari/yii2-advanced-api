// Setup basic express server

var fs = require('fs');
var express = require('express');
var app = express();
var server = require('https').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'api.com'
});



connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});



server.listen(port, function () {
  console.log('Server on '+ server.address().address +'  listening at port %d', port);
});

// Chatroom

var numUsers = 0;

io.on('connection', function (socket) {


  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (id, data) {
    // we tell the client to execute 'new message'

    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });

    var post  = {sender_id: socket.user_id, message: data};

    connection.query('INSERT INTO message SET ?', post, function(err, rows, fields) {
      console.log(rows);


    });





  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });



});
