const electron = require("electron");
const ipc = electron.ipcRenderer;

const errorBtn = document.getElementById('errorBtn');
const syncBtn = document.getElementById('syncBtn');

errorBtn.addEventListener('click', function(event){
    console.log('async msg 1');
    ipc.send('async-message');
    console.log('async msg 2');
})
syncBtn.addEventListener('click', function(event){
    console.log('sync msg 1');
    const reply = ipc.sendSync('sync-message');
    console.log(reply);
    console.log('sync msg 2');
})
ipc.on('async-reply', function(event, arg){
    console.log(arg);
})