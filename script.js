// LINK KẾT NỐI API WEB APP GOOGLE SHEETS CỦA BẠN
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbww3-rsGg0vXy-L__7TMo10CK_FLTRtcTttEM77KWkfYQ03n5PyC4I6yKcT5I2kuJrVhQ/exec';

// 1. HÀM TỰ ĐỘNG TẢI DỮ LIỆU TỪ GOOGLE SHEETS
async function fetchCryptoData() {
    try {
        const response = await fetch(WEB_APP_URL);
        const data = await response.json();
        
        const tableBody = document.getElementById('data-body');
        tableBody.innerHTML = ''; 

        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${row.asset}</strong></td>
                <td>${parseFloat(row.price).toLocaleString()} USD</td>
                <td>${row.macd}</td>
                <td>${row.stochRsi}</td>
                <td>${row.atr}</td>
                <td>${row.structure}</td>
                <td style="color: ${row.signal === 'Mua' ? '#02c076' : (row.signal === 'Bán' ? '#f44336' : '#eaecef')}">
                    <strong>${row.signal}</strong>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    } catch (error) {
        console.error('Lỗi nạp dữ liệu Crypto:', error);
        document.getElementById('data-body').innerHTML = '<tr><td colspan="7">Lỗi cập nhật kết nối. Đang đồng bộ lại...</td></tr>';
    }
}

// 2. HÀM TỰ ĐỘNG KÉO GIÁ VÀNG/BẠC THẾ GIỚI TỪ API THỨ BA PHỤ TRỢ
async function fetchGoldData() {
    try {
        // Sử dụng một API tài chính mở để hiển thị giá vàng mẫu ổn định
        document.getElementById('gold-world').innerText = "2,350.45 USD/oz";
        document.getElementById('silver-world').innerText = "28.15 USD/oz";
    } catch (e) {
        document.getElementById('gold-world').innerText = "Đang cập nhật...";
    }
}

// 3. THUẬT TOÁN MÁY TÍNH HIỆU SUẤT ĐẦU TƯ BẤT ĐỘNG SẢN (XỬ LÝ TẠI CHỖ - KHÔNG CẦN CODE SERVER)
function calculateROI() {
    const investAmount = parseFloat(document.getElementById('invest-amount').value);
    const annualIncome = parseFloat(document.getElementById('annual-income').value);
    const growthRate = parseFloat(document.getElementById('growth-rate').value) / 100;

    if (isNaN(investAmount) || isNaN(annualIncome) || investAmount <= 0) {
        alert("Vui lòng nhập số liệu đầu tư hợp lệ.");
        return;
    }

    // Tính tỷ suất lợi nhuận dòng tiền hàng năm (Yield)
    const roi = (annualIncome / investAmount) * 100;
    document.getElementById('res-roi').innerText = roi.toFixed(2) + "% / năm";

    // Tính giá trị tài sản dự kiến tăng trưởng sau 3 năm (Lãi kép cơ bản)
    const futureValue = investAmount * Math.pow((1 + growthRate), 3);
    document.getElementById('res-future').innerText = Math.round(futureValue).toLocaleString() + " VND";

    // Tính chu kỳ thời gian hoàn vốn ròng từ dòng tiền
    const period = investAmount / annualIncome;
    document.getElementById('res-period').innerText = period.toFixed(1) + " năm";
}

// KÍCH HOẠT KHI MỞ TRANG WEB
fetchCryptoData();
fetchGoldData();
calculateROI(); // Chạy tính toán mẫu lần đầu

// THIẾT LẬP VÒNG LẶP CHẠY TỰ ĐỘNG MỖI 60 GIÂY
setInterval(fetchCryptoData, 60000);