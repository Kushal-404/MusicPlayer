let {app, BrowserWindow}=require('electron')
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();
let mainWindow=null;

let createWindow=()=>{
mainWindow= new BrowserWindow({
 width:1280,
 height:780,
 webPreferences:{
 nodeIntegration:true,
 contextIsolation: false,
   enableRemoteModule:true,
        webSecurity: false
 },
 autoHideMenuBar:true,
});
remoteMain.enable(mainWindow.webContents);
mainWindow.loadFile(__dirname + '/ui/index.html')

mainWindow.on('ready-to-show', ()=>{
 mainWindow.show()
})
}

app.on('ready', ()=>{
 createWindow()
})

app.on('window-all-closed', ()=>{
 if (process.platform !=='darwin'){
 app.quit()
 }
})