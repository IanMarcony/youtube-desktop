const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon:'./assets/youtube.ico',
    title:'Youtube',
    autoHideMenuBar: true
  })
  // win.loadURL("https://clio-tcc.herokuapp.com/")
  win.loadURL("https://www.youtube.com/")
  // win.loadURL("https://www.twitch.tv/")
  // win.loadURL("https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal")
  // win.loadURL("https://www.youtube.com/")
  // win.loadFile("index.html")
}

app.whenReady().then(()=>{
  createWindow()  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}).catch((err)=>{
  console.error(err)
})

app.on('window-all-closed',  ()=>{
  if(process.platform!=='darwin')app.quit()
})