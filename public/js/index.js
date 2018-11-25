var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'ashwini',
        text: 'hey,hello how r u ?',
    });
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage',function(message) {
    console.log('newMessage',message);
});