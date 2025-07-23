const { app, BrowserWindow } = require('electron');

// ฟังก์ชันสำหรับสร้างหน้าต่าง
function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('views/index.html'); // โหลด HTML เข้าไปในหน้าต่าง
}

app.whenReady().then(() => {
  createWindow(); // สร้างหน้าต่างเมื่อพร้อม
});
