const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { dialog } = require('electron');
const { Menu } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

//Executar arquivo externo via electron
// var exec = require('child_process').execFile;

// var fun =function(){
//    console.log("fun() start");
//    exec('c:\\cosmos\\exe\\Ecffl.exe', function(err, data) {  
//         console.log(err)
//         console.log(data.toString());                       
//     });  
// }
// fun();

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        //width: 900, height: 680 
        alwaysOnTop: true
    });

    const url = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;

    mainWindow.loadURL(url);
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
                {
                    label: 'Adjust Notification Value',

                    click() {

                        let child = new BrowserWindow({ parent: BrowserWindow.getFocusedWindow(), modal: true, show: false, maximizable: false, skipTaskbar: false })
                        child.loadURL('https://github.com')
                        child.once('ready-to-show', () => {
                            child.show()
                        })

                        //fun(); - executar prorama externo via electron

                    }

                },
                {
                    label: 'CoinMarketCap',
                    click() {
                        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), { message: 'teste' });
                    }

                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        },
        {
            label: 'Info',
            click() {

                let child = new BrowserWindow({ parent: BrowserWindow.getFocusedWindow(), modal: true, show: false, maximizable: false, skipTaskbar: false, movable: true })
                child.loadURL(`file://${__dirname}/modal.html`)
                child.once('ready-to-show', () => {
                    child.show()
                    child.removeMenu()
                })
            }

        },
        {
            label: 'Modal',
            click() {

                // let child = new BrowserWindow({ parent: BrowserWindow.getFocusedWindow(), modal: true, show: false, maximizable: false, skipTaskbar: false, movable: true })
                // child.loadURL(`file://${__dirname}/modal.html`)
                // child.once('ready-to-show', () => {
                //     child.show()
                //     child.removeMenu()
                // })

                mainWindow.loadURL(`${url}#modalFormGeral`)
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