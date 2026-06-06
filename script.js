const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxyoTACI2-r7SBG5X1_-r_luqq0SsdnFwugEeLhkXzdIy4Ib4BjjJ57GW1jMsgnwgAUgA/exec';

// =========================================================================
// 1. TỪ ĐIỂN DỊCH THUẬT 
// =========================================================================
const dictionary = {
    vi: {
        navCrypto: "Thị Trường Crypto", navGold: "Giá Vàng & Kim Loại", navCalc: "Máy Tính Đầu Tư", navKnowledge: "Cẩm Nang Kiến Thức",
        heroTitle: "Hệ Thống Tiện Ích & Dữ Liệu Đầu Tư Phân Tích Tự Động", heroDesc: "Cập nhật chỉ số thời gian thực • Công cụ tính toán hiệu suất dòng tiền • Phân tích hệ thống Rule-Based",
        titleCrypto: "📊 Dữ Liệu Chỉ Báo Crypto (Thời Gian Thực)", titleGold: "🏆 Tra Cứu Giá Vàng & Kim Loại Quý", titleCalc: "🧮 Máy Tính Hiệu Suất Đầu Tư Bất Động Sản & Dòng Tiền",
        titleKnowledge: "📚 Cẩm Nang Phân Tích Kỹ Thuật & Tối Ưu Hóa Vốn Đầu Tư", textLoading: "Đang kết nối API cơ sở dữ liệu...",
        thAsset: "Tài Sản", thPrice: "Giá Hiện Tại", thMacd: "MACD", thStoch: "Stoch RSI", thAtr: "Chỉ số ATR", thStruct: "Cấu Trúc Thị Trường", thSignal: "Tín Hiệu Hệ Thống",
        labelGold: "Vàng Thế Giới (XAU/USD)", labelSilver: "Bạc Thế Giới (XAG/USD)", titleNews: "📰 Tin Tức Tài Chính Toàn Cầu",
        calcDesc: "Nhập thông số dự án hoặc bất động sản (đất nền, chung cư) để hệ thống tự động tính toán tỷ suất sinh lời ROI và chu kỳ hoàn vốn.",
        labelIn1: "Vốn đầu tư ban đầu (VND):", labelIn2: "Thu nhập ròng từ sản phẩm hàng năm (VND):", labelIn3: "Tốc độ tăng giá trị tài sản kỳ vọng (%/năm):", btnCalcAction: "Kích Hoạt Tính Toán",
        titleCalcRes: "Kết Quả Phân Tích Dòng Tiền:", labelRes1: "Tỷ suất lợi nhuận dòng tiền:", labelRes2: "Dự kiến giá trị tài sản sau 3 năm:", labelRes3: "Thời gian hoàn vốn ròng:",
        titleAff: "Bắt đầu hành trình đầu tư của bạn với các nền tảng uy tín:", btnAffCrypto: "Mở Tài Khoản Giao Dịch Crypto", btnAffGold: "Đăng Ký Sàn Giao Dịch Vàng",
        fPrivacy: "Chính Sách Bảo Mật (Privacy Policy)", fTerms: "Điều Khoản Sử Dụng", fContact: "Liên Hệ Hợp Tác", unitYear: "năm",
        tagMap: { "Crypto": "Tiền Số", "Finance": "Tài Chính", "Gold & Metals": "Vàng & Hàng Hóa" },
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH" },
        articles: `<div class="article"><h3>1. Hệ thống tín hiệu toán học cố định (Rule-Based Trading) là gì?</h3><p>Hệ thống hoạt động hoàn toàn dựa trên các quy tắc toán học khắt khe và các chỉ báo kỹ thuật có sẵn, loại bỏ hoàn toàn yếu tố cảm xúc nhiễu của con người.</p></div>`
    },
    en: {
        navCrypto: "Crypto Market", navGold: "Gold & Metals", navCalc: "Investment Calculator", navKnowledge: "Knowledge Base",
        heroTitle: "Automated Investment Utility & Data Analytics System", heroDesc: "Real-time index updates • Cash flow performance tools • Rule-Based analytics system",
        titleCrypto: "📊 Crypto Indicator Data (Real-Time)", titleGold: "🏆 Gold & Precious Metals Lookup", titleCalc: "🧮 Real Estate & Cash Flow Performance Calculator",
        titleKnowledge: "📚 Technical Analysis & Capital Optimization Guide", textLoading: "Connecting to database API...",
        thAsset: "Asset", thPrice: "Current Price", thMacd: "MACD", thStoch: "Stoch RSI", thAtr: "ATR Index", thStruct: "Market Structure", thSignal: "System Signal",
        labelGold: "Gold Spot (XAU/USD)", labelSilver: "Silver Spot (XAG/USD)", titleNews: "📰 Global Financial News Feed",
        calcDesc: "Enter project or real estate metrics (land plots, apartments) to automatically calculate ROI and payback period.",
        labelIn1: "Initial Investment Capital (USD):", labelIn2: "Annual Net Rental/Product Income (USD):", labelIn3: "Expected Asset Growth Rate (%/year):", btnCalcAction: "Trigger Calculations",
        titleCalcRes: "Cash Flow Analysis Results:", labelRes1: "Cash Flow Yield Rate:", labelRes2: "Projected Asset Value (3 Years):", labelRes3: "Net Payback Period:",
        titleAff: "Start your investment journey with trusted platforms:", btnAffCrypto: "Open Crypto Trading Account", btnAffGold: "Register Gold Trading Account",
        fPrivacy: "Privacy Policy", fTerms: "Terms of Service", fContact: "Contact Partnership", unitYear: "years",
        tagMap: { "Crypto": "Crypto", "Finance": "Finance", "Gold & Metals": "Gold & Metals" },
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH" },
        articles: `<div class="article"><h3>1. What is Rule-Based Trading?</h3><p>The system operates strictly on explicit mathematical rules and mechanical technical indicators, completely eliminating human emotional bias.</p></div>`
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';
let masterData = { trading: [], news: [] }; 
let currentExchangeRate = 25400; // Tỷ giá mặc định (chạy dự phòng nếu API lỗi)
let isFirstLoad = true; // Cờ kiểm tra lần đầu tải trang

// =========================================================================
// 2. GỌI API TỶ GIÁ TỰ ĐỘNG THỜI GIAN THỰC
// =========================================================================
async function fetchExchangeRate() {
    try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await res.json();
        if (data && data.rates && data.rates.VND) {
            currentExchangeRate = data.rates.VND;
        }
    } catch (e) {
        console.error('Lỗi API cập nhật tỷ giá:', e);
    }
}

// =========================================================================
// 3. HÀM CHUYỂN ĐỔI NGÔN NGỮ KÈM TÍNH TOÁN QUY ĐỔI TIỀN TỆ
// =========================================================================
function setLanguage(lang) {
    if (lang === currentLang) return; // Nếu bấm lại ngôn ngữ đang dùng thì bỏ qua

    // Lấy con số đang hiển thị trên màn hình hiện tại
    let investInput = document.getElementById('invest-amount');
    let incomeInput = document.getElementById('annual-income');
    let investVal = parseFloat(investInput.value) || 0;
    let incomeVal = parseFloat(incomeInput.value) || 0;

    // Chuyển đổi toán học dựa trên API tỷ giá
    if (lang === 'en' && currentLang === 'vi') {
        // Từ VND sang USD (Chia cho tỷ giá)
        investInput.value = Math.round(investVal / currentExchangeRate);
        incomeInput.value = Math.round(incomeVal / currentExchangeRate);
    } else if (lang === 'vi' && currentLang === 'en') {
        // Từ USD sang VND (Nhân với tỷ giá)
        investInput.value = Math.round(investVal * currentExchangeRate);
        incomeInput.value = Math.round(incomeVal * currentExchangeRate);
    }

    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    applyLanguage();
}

function applyLanguage() {
    const lang = dictionary[currentLang];
    
    // Dịch các nhãn văn bản
    document.getElementById('nav-crypto').innerText = lang.navCrypto;
    document.getElementById('nav-gold').innerText = lang.navGold;
    document.getElementById('nav-calc').innerText = lang.navCalc;
    document.getElementById('nav-knowledge').innerText = lang.navKnowledge;
    document.getElementById('hero-title').innerText = lang.heroTitle;
    document.getElementById('hero-desc').innerText = lang.heroDesc;
    document.getElementById('title-crypto').innerText = lang.titleCrypto;
    document.getElementById('title-gold').innerText = lang.titleGold;
    document.getElementById('title-calc').innerText = lang.titleCalc;
    document.getElementById('title-news').innerText = lang.titleNews;
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
    document.getElementById('knowledge-content').innerHTML = lang.articles;

    document.getElementById('btn-lang-vi').classList.remove('active');
    document.getElementById('btn-lang-en').classList.remove('active');
    document.getElementById(`btn-lang-${currentLang}`).classList.add('active');

    // Chỉ điền số mặc định khi mở web lần đầu
    if (isFirstLoad) {
        if (currentLang === 'en') {
            document.getElementById('invest-amount').value = "100000";
            document.getElementById('annual-income').value = "8000";
        } else {
            document.getElementById('invest-amount').value = "2000000000";
            document.getElementById('annual-income').value = "120000000";
        }
        isFirstLoad = false;
    }

    renderTradingTable();
    renderNewsFeed();
    calculateROI();
}

// =========================================================================
// 4. MÁY TÍNH HIỆU SUẤT ĐẦU TƯ
// =========================================================================
function calculateROI() {
    const investAmount = parseFloat(document.getElementById('invest-amount').value);
    const annualIncome = parseFloat(document.getElementById('annual-income').value);
    const growthRate = parseFloat(document.getElementById('growth-rate').value) / 100;

    if (isNaN(investAmount) || isNaN(annualIncome) || investAmount <= 0) return;

    const roi = (annualIncome / investAmount) * 100;
    document.getElementById('res-roi').innerText = roi.toFixed(2) + "% " + (currentLang === 'vi' ? "/ năm" : "/ year");

    const futureValue = investAmount * Math.pow((1 + growthRate), 3);
    
    if (currentLang === 'vi') {
        document.getElementById('res-future').innerText = Math.round(futureValue).toLocaleString() + " VND";
    } else {
        document.getElementById('res-future').innerText = "$" + Math.round(futureValue).toLocaleString() + " USD";
    }

    const period = investAmount / annualIncome;
    document.getElementById('res-period').innerText = period.toFixed(1) + " " + dictionary[currentLang].unitYear;
}

// =========================================================================
// 5. CÁC HÀM XỬ LÝ DỮ LIỆU ĐỘNG CRYPTO & TIN TỨC 
// =========================================================================
function renderTradingTable() {
    const tableBody = document.getElementById('data-body');
    if (!masterData.trading || masterData.trading.length === 0) return;
    tableBody.innerHTML = '';
    const lang = dictionary[currentLang];

    masterData.trading.forEach(row => {
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

function renderNewsFeed() {
    const newsContainer = document.getElementById('news-container');
    if (!masterData.news || masterData.news.length === 0) return;
    newsContainer.innerHTML = '';
    const lang = dictionary[currentLang];

    // LỌC TIN TỨC: Chỉ lấy các bản tin có nhãn ngôn ngữ (en/vi) khớp với ngôn ngữ đang chọn
    const filteredNews = masterData.news.filter(item => item.lang === currentLang);

    // Cập nhật tagMap dự phòng ngay trong hàm để hiển thị đẹp
    const fallbackTagMap = currentLang === 'vi' 
        ? { "Crypto": "Tiền Số", "Finance": "Tài Chính", "Gold & Metals": "Vàng & Đầu Tư", "Real Estate": "Bất Động Sản" }
        : { "Crypto": "Crypto", "Finance": "Finance", "Gold & Metals": "Gold & Metals", "Real Estate": "Real Estate" };

    filteredNews.forEach(item => {
        // Dịch nhãn danh mục
        const displayTag = fallbackTagMap[item.category] || item.category;
        
        const div = document.createElement('div');
        div.className = 'news-card';
        div.innerHTML = `
            <a href="${item.link}" target="_blank">
                <h3>${item.title}</h3>
            </a>
            <div class="news-meta">
                <span class="news-tag">${displayTag}</span>
                <span class="news-time">${item.time}</span>
            </div>
        `;
        newsContainer.appendChild(div);
    });
}

async function fetchMasterData() {
    try {
        const response = await fetch(WEB_APP_URL);
        masterData = await response.json();
        renderTradingTable();
        renderNewsFeed();
    } catch (error) {
        console.error('Lỗi nạp dữ liệu hệ thống:', error);
    }
}

// KHỞI ĐỘNG HỆ THỐNG ĐỒNG BỘ: LẤY TỶ GIÁ -> SAU ĐÓ MỚI RENDER GIAO DIỆN
fetchExchangeRate().then(() => {
    applyLanguage();
    fetchMasterData();
});
setInterval(fetchMasterData, 60000);