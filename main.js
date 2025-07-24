const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    titleBarStyle:"hidden",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools:true,
      nodeIntegration:true,
      contextIsolation:false
    }
  })

  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})