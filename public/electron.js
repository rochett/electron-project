const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { dialog } = require('electron');
const { Menu } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        //width: 900, height: 680 
        alwaysOnTop:true 
    });
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    if (isDev) {
        // Open the DevTools.
        //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.maximize();
     //mainWindow.setFullScreen(true)

     var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {label:'Adjust Notification Value',
              
                click() {
    
                  let child = new BrowserWindow({ parent: BrowserWindow.getFocusedWindow(), modal: true, show: false, maximizable:false, skipTaskbar:false })
                  child.loadURL('https://github.com')
                  child.once('ready-to-show', () => {
                    child.show()
                  })
    
                }
                
                },
                {label:'CoinMarketCap',
                click() { 
                  dialog.showMessageBox(BrowserWindow.getFocusedWindow(),{message:'teste'});                           
                }
    
                },
                {type:'separator'},
                {label:'Exit', 
                click() { 
                    app.quit() 
                } 
              }
            ]
        },
        {
            label: 'Info',        
            click() { 
                    
              let child = new BrowserWindow({ parent: BrowserWindow.getFocusedWindow(), modal: true, show: false, maximizable:false, skipTaskbar:false, movable:true })
                  child.loadURL(`file://${__dirname}/modal.html`)
                  child.once('ready-to-show', () => {
                    child.show()
                    child.removeMenu()
                  })
            } 
        
        }
    ])

    Menu.setApplicationMenu(menu); 

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