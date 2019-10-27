const { app, BrowserWindow, ipcMain } = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        minWidth: 1024,
        minHeight: 768,
        resizable: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/index.html`),
            protocol: "file:",
            slashes: true
        })
    );
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    if (mainWindow === null) createWindow()
});

ipcMain.on('close', (event, arg) => {
    mainWindow.close();
});

ipcMain.on('toggleMaximize', (event, arg) => {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
    } else {
        mainWindow.maximize();
    }
});

ipcMain.on('minimize', (event, arg) => {
    mainWindow.minimize();
});