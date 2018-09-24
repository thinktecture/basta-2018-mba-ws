const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  const mainWindowConfig = {
    width: 1000,
    height: 700,
    center: true,
    title: 'BASTA! MBA Workshop',
  };
  const mainWindowUrl = url.format({
    pathname: path.join(__dirname, 'web', 'index.html'),
    protocol: 'file:',
    slashes: true,
  });

  mainWindow = new BrowserWindow(mainWindowConfig);
  mainWindow.loadURL(mainWindowUrl);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
