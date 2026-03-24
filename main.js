let {app, BrowserWindow}=require('electron')

let mainWindow=null;

let createWindow=()=>{
mainWindow= new BrowserWindow({
    width:1280,
    height:780,
    webPreferences:{
        nodeIntegration:true,
        enableRemoteModule:true
    },
    autoHideMenuBar:true,
});
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