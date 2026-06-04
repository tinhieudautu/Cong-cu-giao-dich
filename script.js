// LINK KẾT NỐI API WEB APP GOOGLE SHEETS CỦA BẠN
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbww3-rsGg0vXy-L__7TMo10CK_FLTRtcTttEM77KWkfYQ03n5PyC4I6yKcT5I2kuJrVhQ/exec';

// 1. TỪ ĐIỂN DỊCH THUẬT (Bao gồm tĩnh và động)
const dictionary = {
    vi: {
        navCrypto: "Thị Trường Crypto", navGold: "Giá Vàng & Kim Loại", navCalc: "Máy Tính Đầu Tư", navKnowledge: "Cẩm Nang Kiến Thức",
        heroTitle: "Hệ Thống Tiện Ích & Dữ Liệu Đầu Tư Phân Tích Tự Động", heroDesc: "Cập nhật chỉ số thời gian thực • Công cụ tính toán hiệu suất dòng tiền • Phân tích hệ thống Rule-Based",
        titleCrypto: "📊 Dữ Liệu Chỉ Báo Crypto (Thời Gian Thực)", titleGold: "🏆 Tra Cứu Giá Vàng & Kim Loại Quý", titleCalc: "🧮 Máy Tính Hiệu Suất Đầu Tư Bất Động Sản & Dòng Tiền",
        titleKnowledge: "📚 Cẩm Nang Phân Tích Kỹ Thuật & Tối Ưu Hóa Vốn Đầu Tư", textLoading: "Đang kết nối API cơ sở dữ liệu...",
        thAsset: "Tài Sản", thPrice: "Giá Hiện Tại", thMacd: "MACD", thStoch: "Stoch RSI", thAtr: "Chỉ số ATR", thStruct: "Cấu Trúc Thị Trường", thSignal: "Tín Hiệu Hệ Thống",
        labelGold: "Vàng Thế Giới (XAU/USD)", labelSilver: "Bạc Thế Giới (XAG/USD)",
        calcDesc: "Nhập thông số dự án hoặc bất động sản (đất nền, chung cư) để hệ thống tự động tính toán tỷ suất sinh lời ROI và chu kỳ hoàn vốn.",
        labelIn1: "Vốn đầu tư ban đầu (VND):", labelIn2: "Thu nhập ròng từ sản phẩm hàng năm (VND):", labelIn3: "Tốc độ tăng giá trị tài sản kỳ vọng (%/năm):", btnCalcAction: "Kích Hoạt Tính Toán",
        titleCalcRes: "Kết Quả Phân Tích Dòng Tiền:", labelRes1: "Tỷ suất lợi nhuận dòng tiền:", labelRes2: "Dự kiến giá trị tài sản sau 3 năm:", labelRes3: "Thời gian hoàn vốn ròng:",
        titleAff: "Bắt đầu hành trình đầu tư của bạn với các nền tảng uy tín:", btnAffCrypto: "Mở Tài Khoản Giao Dịch Crypto", btnAffGold: "Đăng Ký Sàn Giao Dịch Vàng",
        fPrivacy: "Chính Sách Bảo Mật (Privacy Policy)", fTerms: "Điều Khoản Sử Dụng", fContact: "Liên Hệ Hợp Tác",
        unitYear: "năm",
        // Từ điển dịch dữ liệu động từ Google Sheets sang Tiếng Anh
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH" },
        // Nội dung bài viết tiếng Việt
        articles: `
            <div class="article"><h3>1. Hệ thống tín hiệu toán học cố định (Rule-Based Trading) là gì?</h3><p>Hệ thống hoạt động hoàn toàn dựa trên các quy tắc toán học khắt khe và các chỉ báo kỹ thuật có sẵn, loại bỏ hoàn toàn yếu tố cảm xúc nhiễu của con người.</p></div>
            <div class="article"><h3>2. Ý nghĩa của các chỉ báo MACD, Stoch RSI và chỉ số ATR</h3><p>MACD giúp xác định xu hướng chính. Stoch RSI đo lường vùng quá mua hoặc quá bán sâu. ATR dùng để đo lường mức độ biến động mạnh yếu của thị trường.</p></div>
            <div class="article"><h3>3. Phân tích Cấu trúc thị trường và Vùng mất cân bằng (FVG)</h3><p>Cấu trúc thị trường thông qua BOS hoặc CHoCH giúp định vị dòng tiền lớn. Vùng mất cân bằng giá (Fair Value Gaps) đóng vai trò như một thỏi nam châm hút giá quay trở lại lấp đầy thanh khoản.</p></div>
        `
    },
    en: {
        navCrypto: "Crypto Market", navGold: "Gold & Metals", navCalc: "Investment Calculator", navKnowledge: "Knowledge Base",
        heroTitle: "Automated Investment Utility & Data Analytics System", heroDesc: "Real-time index updates • Cash flow performance tools • Rule-Based analytics system",
        titleCrypto: "📊 Crypto Indicator Data (Real-Time)", titleGold: "🏆 Gold & Precious Metals Lookup", titleCalc: "🧮 Real Estate & Cash Flow Performance Calculator",
        titleKnowledge: "📚 Technical Analysis & Capital Optimization Guide", textLoading: "Connecting to database API...",
        thAsset: "Asset", thPrice: "Current Price", thMacd: "MACD", thStoch: "Stoch RSI", thAtr: "ATR Index", thStruct: "Market Structure", thSignal: "System Signal",
        labelGold: "Gold Spot (XAU/USD)", labelSilver: "Silver Spot (XAG/USD)",
        calcDesc: "Enter project or real estate metrics (land plots, apartments) to automatically calculate ROI and payback period.",
        labelIn1: "Initial Investment Capital (VND):", labelIn2: "Annual Net Rental/Product Income (VND):", labelIn3: "Expected Asset Growth Rate (%/year):", btnCalcAction: "Trigger Calculations",
        titleCalcRes: "Cash Flow Analysis Results:", labelRes1: "Cash Flow Yield Rate:", labelRes2: "Projected Asset Value (3 Years):", labelRes3: "Net Payback Period:",
        titleAff: "Start your investment journey with trusted platforms:", btnAffCrypto: "Open Crypto Trading Account", btnAffGold: "Register Gold Trading Account",
        fPrivacy: "Privacy Policy", fTerms: "Terms of Service", fContact: "Contact Partnership",
        unitYear: "years",
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH" },
        articles: `
            <div class="article"><h3>1. What is Rule-Based Trading?</h3><p>The system operates strictly on explicit mathematical rules and mechanical technical indicators, completely eliminating human emotional bias.</p></div>
            <div class="article"><h3>2. Significance of MACD, Stoch RSI, and ATR Index</h3><p>MACD determines the primary momentum. Stoch RSI measures extreme overbought or oversold territories. ATR acts as the definitive gauge for market volatility.</p></div>
            <div class="article"><h3>3. Market Structure and Fair Value Gaps (FVG) Analysis</h3><p>Market structure via BOS or CHoCH tracks institutional order blocks. Fair Value Gaps act as a liquidity magnet, drawing price back to rebalance inefficiencies.</p></div>
        `
    }
};

// Lấy ngôn ngữ mặc định (nếu đã lưu) hoặc mặc định là tiếng Việt 'vi'
let currentLang = localStorage.getItem('siteLang') || 'en';
let rawCryptoData = []; // Lưu trữ dữ liệu thô phục vụ dịch nhanh

// 2. HÀM CHUYỂN ĐỔI NGÔN NGỮ VÀ CẬP NHẬT GIAO DIỆN
function applyLanguage() {
    const lang = dictionary[currentLang];
    
    // Dịch các thẻ tĩnh bằng ID
    document.getElementById('nav-crypto').innerText = lang.navCrypto;
    document.getElementById('nav-gold').innerText = lang.navGold;
    document.getElementById('nav-calc').innerText = lang.navCalc;
    document.getElementById('nav-knowledge').innerText = lang.navKnowledge;
    document.getElementById('hero-title').innerText = lang.heroTitle;
    document.getElementById('hero-desc').innerText = lang.heroDesc;
    document.getElementById('title-crypto').innerText = lang.titleCrypto;
    document.getElementById('title-gold').innerText = lang.titleGold;
    document.getElementById('title-calc').innerText = lang.titleCalc;
    document.getElementById('title-knowledge').innerText = lang.titleKnowledge;
    document.getElementById('th-asset').innerText = lang.thAsset;
    document.getElementById('th-price').innerText = lang.thPrice;
    document.getElementById('th-macd').innerText = lang.thMacd;
    document.getElementById('th-stoch').innerText = lang.thStoch;
    document.getElementById('th-atr').innerText = lang.thAtr;
    document.getElementById('th-struct').innerText = lang.thStruct;
    document.getElementById('th-signal').innerText = lang.thSignal;
    document.getElementById('label-gold-world').innerText = lang.labelGold;
    document.getElementById('label-silver-world').innerText = lang.labelSilver;
    document.getElementById('calc-desc').innerText = lang.calcDesc;
    document.getElementById('label-in-1').innerText = lang.labelIn1;
    document.getElementById('label-in-2').innerText = lang.labelIn2;
    document.getElementById('label-in-3').innerText = lang.labelIn3;
    document.getElementById('btn-calc-action').innerText = lang.btnCalcAction;
    document.getElementById('title-calc-res').innerText = lang.titleCalcRes;
    document.getElementById('label-res-1').innerText = lang.labelRes1;
    document.getElementById('label-res-2').innerText = lang.labelRes2;
    document.getElementById('label-res-3').innerText = lang.labelRes3;
    document.getElementById('title-aff').innerText = lang.titleAff;
    document.getElementById('btn-aff-crypto').innerText = lang.btnAffCrypto;
    document.getElementById('btn-aff-gold').innerText = lang.btnAffGold;
    document.getElementById('footer-privacy').innerText = lang.fPrivacy;
    document.getElementById('footer-terms').innerText = lang.fTerms;
    document.getElementById('footer-contact').innerText = lang.fContact;

    // Đổ nội dung bài viết theo ngôn ngữ tương ứng
    document.getElementById('knowledge-content').innerHTML = lang.articles;

    // Cập nhật trạng thái nút bấm
    document.getElementById('btn-lang-vi').classList.remove('active');
    document.getElementById('btn-lang-en').classList.remove('active');
    document.getElementById(`btn-lang-${currentLang}`).classList.add('active');

    // Vẽ lại bảng dữ liệu Crypto theo ngôn ngữ mới
    renderCryptoTable();
    calculateROI();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang); // Lưu vào bộ nhớ máy
    applyLanguage();
}

// 3. ĐỔ DỮ LIỆU CRYPTO VÀ TỰ ĐỘNG DỊCH THÔNG SỐ TỪ SHEET
function renderCryptoTable() {
    const tableBody = document.getElementById('data-body');
    if (rawCryptoData.length === 0) return;

    tableBody.innerHTML = '';
    const lang = dictionary[currentLang];

    rawCryptoData.forEach(row => {
        // Nếu chọn tiếng Anh, dò tìm từ trong bảng ánh xạ dataMap, không thấy thì giữ nguyên gốc
        const transMacd = currentLang === 'en' ? (lang.dataMap[row.macd] || row.macd) : row.macd;
        const transStruct = currentLang === 'en' ? (lang.dataMap[row.structure] || row.structure) : row.structure;
        const transSignal = currentLang === 'en' ? (lang.dataMap[row.signal] || row.signal) : row.signal;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.asset}</strong></td>
            <td>${parseFloat(row.price).toLocaleString()} USD</td>
            <td>${transMacd}</td>
            <td>${row.stochRsi}</td>
            <td>${row.atr}</td>
            <td>${transStruct}</td>
            <td style="color: ${row.signal === 'Mua' ? '#02c076' : (row.signal === 'Bán' ? '#f44336' : '#eaecef')}">
                <strong>${transSignal}</strong>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

async function fetchCryptoData() {
    try {
        const response = await fetch(WEB_APP_URL);
        rawCryptoData = await response.json();
        renderCryptoTable();
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('data-body').innerHTML = `<tr><td colspan="7">${dictionary[currentLang].textLoading}</td></tr>`;
    }
}

// 4. MÁY TÍNH HIỆU SUẤT ĐẦU TƯ
function calculateROI() {
    const investAmount = parseFloat(document.getElementById('invest-amount').value);
    const annualIncome = parseFloat(document.getElementById('annual-income').value);
    const growthRate = parseFloat(document.getElementById('growth-rate').value) / 100;

    if (isNaN(investAmount) || isNaN(annualIncome) || investAmount <= 0) return;

    const roi = (annualIncome / investAmount) * 100;
    document.getElementById('res-roi').innerText = roi.toFixed(2) + "% " + (currentLang === 'vi' ? "/ năm" : "/ year");

    const futureValue = investAmount * Math.pow((1 + growthRate), 3);
    document.getElementById('res-future').innerText = Math.round(futureValue).toLocaleString() + " VND";

    const period = investAmount / annualIncome;
    document.getElementById('res-period').innerText = period.toFixed(1) + " " + dictionary[currentLang].unitYear;
}

// KHỞI CHẠY HỆ THỐNG
applyLanguage();
fetchCryptoData();
setInterval(fetchCryptoData, 60000);