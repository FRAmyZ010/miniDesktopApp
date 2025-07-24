const {ipcRenderer} = require ('electron');
const ipc = ipcRenderer;

closeApp.addEventListener('click',()=>{
    console.log('Exit');
    ipc.send('closeTheApp');
})