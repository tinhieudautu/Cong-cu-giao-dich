// Thay đường link bên dưới bằng link Web App bạn lấy được từ Google Apps Script (Bước 3)
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbww3-rsGg0vXy-L__7TMo10CK_FLTRtcTttEM77KWkfYQ03n5PyC4I6yKcT5I2kuJrVhQ/exec';

async function fetchData() {
    try {
        // Gọi dữ liệu từ Google Sheets
        const response = await fetch(WEB_APP_URL);
        const data = await response.json();
        
        const tableBody = document.getElementById('data-body');
        tableBody.innerHTML = ''; // Xóa dòng "Đang tải dữ liệu..."

        // Duyệt qua từng dòng dữ liệu và in ra bảng
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${row.asset}</strong></td>
                <td>${row.price}</td>
                <td>${row.macd}</td>
                <td>${row.stochRsi}</td>
                <td>${row.atr}</td>
                <td>${row.structure}</td>
                <td style="color: ${row.signal === 'Mua' ? '#4CAF50' : (row.signal === 'Bán' ? '#F44336' : '#e0e0e0')}">
                    <strong>${row.signal}</strong>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
        document.getElementById('data-body').innerHTML = '<tr><td colspan="7">Lỗi kết nối dữ liệu. Đang thử lại...</td></tr>';
    }
}

// Gọi hàm lấy dữ liệu ngay khi vừa mở web
fetchData();

// Thiết lập chạy tự động lặp lại mỗi 60 giây (60000 milliseconds)
setInterval(fetchData, 60000);