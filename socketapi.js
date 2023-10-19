const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
   socket.on('message',(msg)=>{
    console.log(msg);
    io.emit('message','Hello from server')
   })
});
// end of socket.io logic

module.exports = socketapi;