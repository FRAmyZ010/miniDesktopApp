const { app, BrowserWindow } = require('electron');

// ฟังก์ชันสำหรับสร้างหน้าต่าง
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html'); // โหลด HTML เข้าไปในหน้าต่าง
}

app.whenReady().then(() => {
  createWindow(); // สร้างหน้าต่างเมื่อพร้อม
});
