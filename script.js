// 1. ĐIỀN LINK WEB APP GOOGLE SHEETS CỦA BẠN VÀO ĐÂY
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzTvvEHdZVD4un5B3-FoelJbmXPVw7o4rrcfTY4nEr1HoIStI9oZqGQgC2gGoxjflqe9A/exec';

// =========================================================================
// 2. TỪ ĐIỂN DỊCH THUẬT (ĐÃ BỔ SUNG TOOLTIP HTML)
// =========================================================================
const dictionary = {
    vi: {
        navCrypto: "Thị Trường Crypto", navGold: "Giá Vàng & Kim Loại", navCalc: "Máy Tính Đầu Tư", navKnowledge: "Cẩm Nang Kiến Thức",
        heroTitle: "Hệ Thống Tiện Ích & Dữ Liệu Đầu Tư Phân Tích Tự Động", heroDesc: "Cập nhật chỉ số thời gian thực • Công cụ tính toán hiệu suất dòng tiền • Phân tích hệ thống Rule-Based",
        titleCrypto: "📊 Dữ Liệu Chỉ Báo Crypto (Thời Gian Thực)", titleGold: "🏆 Tra Cứu Giá Vàng & Kim Loại Quý", titleCalc: "🧮 Máy Tính Hiệu Suất Đầu Tư Bất Động Sản & Dòng Tiền",
        titleKnowledge: "📚 Cẩm Nang Phân Tích Kỹ Thuật & Tối Ưu Hóa Vốn Đầu Tư", textLoading: "Đang kết nối API cơ sở dữ liệu...",
        thAsset: "Tài Sản", thPrice: "Giá Hiện Tại", thSignal: "Tín Hiệu Hệ Thống",
        
        // CÁC CHỈ BÁO KÈM TOOLTIP TIẾNG VIỆT
        thMacd: 'MACD <span class="tooltip-icon" data-tooltip="Xác định xu hướng chính. Cắt lên = Xu hướng Tăng, Cắt xuống = Xu hướng Giảm.">i</span>',
        thStoch: 'Stoch RSI <span class="tooltip-icon" data-tooltip="Đo sức mạnh giá. Dưới 20 là vùng Quá bán (Sắp tăng), Trên 80 là vùng Quá mua (Sắp giảm).">i</span>',
        thAtr: 'Chỉ số ATR <span class="tooltip-icon" data-tooltip="Đo lường mức độ biến động giá. Hỗ trợ đặt mức Cắt lỗ (Stop Loss) an toàn để tránh bị quét râu nến.">i</span>',
        thStruct: 'Cấu Trúc Thị Trường <span class="tooltip-icon" data-tooltip="Phân tích hành vi giá. FVG (Vùng mất cân bằng) giúp định vị dòng tiền lớn (Cá mập) đang gom hàng.">i</span>',
        
        labelGold: "Vàng Thế Giới (XAU/USD)", labelSilver: "Bạc Thế Giới (XAG/USD)", titleNews: "📰 Tin Tức Tài Chính Toàn Cầu",
        calcDesc: "Nhập thông số dự án hoặc bất động sản (đất nền, chung cư) để hệ thống tự động tính toán tỷ suất sinh lời ROI và chu kỳ hoàn vốn.",
        labelIn1: "Vốn đầu tư ban đầu (VND):", labelIn2: "Thu nhập ròng từ sản phẩm hàng năm (VND):", labelIn3: "Tốc độ tăng giá trị tài sản kỳ vọng (%/năm):", btnCalcAction: "Kích Hoạt Tính Toán",
        titleCalcRes: "Kết Quả Phân Tích Dòng Tiền:", labelRes1: "Tỷ suất lợi nhuận dòng tiền:", labelRes2: "Dự kiến giá trị tài sản sau 3 năm:", labelRes3: "Thời gian hoàn vốn ròng:",
        titleAff: "Bắt đầu hành trình đầu tư của bạn với các nền tảng uy tín:", btnAffCrypto: "Mở Tài Khoản Giao Dịch Crypto", btnAffGold: "Đăng Ký Sàn Giao Dịch Vàng",
        fPrivacy: "Chính Sách Bảo Mật (Privacy Policy)", fTerms: "Điều Khoản Sử Dụng", fContact: "Liên Hệ Hợp Tác", unitYear: "năm",
        tagMap: { "Crypto": "Tiền Số", "Finance": "Tài Chính", "Gold & Metals": "Vàng & Đầu Tư", "Real Estate": "Bất Động Sản" },
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH" },
        articles: `<div class="article"><h3>1. Hệ thống tín hiệu toán học cố định (Rule-Based Trading) là gì?</h3><p>Hệ thống hoạt động hoàn toàn dựa trên các quy tắc toán học khắt khe và các chỉ báo kỹ thuật có sẵn, loại bỏ hoàn toàn yếu tố cảm xúc nhiễu của con người.</p></div>`
    },
    en: {
        navCrypto: "Crypto Market", navGold: "Gold & Metals", navCalc: "Investment Calculator", navKnowledge: "Knowledge Base",
        heroTitle: "Automated Investment Utility & Data Analytics System", heroDesc: "Real-time index updates • Cash flow performance tools • Rule-Based analytics system",
        titleCrypto: "📊 Crypto Indicator Data (Real-Time)", titleGold: "🏆 Gold & Precious Metals Lookup", titleCalc: "🧮 Real Estate & Cash Flow Performance Calculator",
        titleKnowledge: "📚 Technical Analysis & Capital Optimization Guide", textLoading: "Connecting to database API...",
        thAsset: "Asset", thPrice: "Current Price", thSignal: "System Signal",
        
        // CÁC CHỈ BÁO KÈM TOOLTIP TIẾNG ANH
        thMacd: 'MACD <span class="tooltip-icon" data-tooltip="Determines primary trend. Cross Up = Bullish momentum, Cross Down = Bearish momentum.">i</span>',
        thStoch: 'Stoch RSI <span class="tooltip-icon" data-tooltip="Momentum strength. Below 20 is Oversold (Buy signal), Above 80 is Overbought (Sell signal).">i</span>',
        thAtr: 'ATR Index <span class="tooltip-icon" data-tooltip="Measures price volatility. Used to set safe Stop Loss (SL) levels avoiding market noise.">i</span>',
        thStruct: 'Market Structure <span class="tooltip-icon" data-tooltip="Price Action analysis. FVG (Fair Value Gap) identifies institutional liquidity imbalances.">i</span>',
        
        labelGold: "Gold Spot (XAU/USD)", labelSilver: "Silver Spot (XAG/USD)", titleNews: "📰 Global Financial News Feed",
        calcDesc: "Enter project or real estate metrics (land plots, apartments) to automatically calculate ROI and payback period.",
        labelIn1: "Initial Investment Capital (USD):", labelIn2: "Annual Net Rental/Product Income (USD):", labelIn3: "Expected Asset Growth Rate (%/year):", btnCalcAction: "Trigger Calculations",
        titleCalcRes: "Cash Flow Analysis Results:", labelRes1: "Cash Flow Yield Rate:", labelRes2: "Projected Asset Value (3 Years):", labelRes3: "Net Payback Period:",
        titleAff: "Start your investment journey with trusted platforms:", btnAffCrypto: "Open Crypto Trading Account", btnAffGold: "Register Gold Trading Account",
        fPrivacy: "Privacy Policy", fTerms: "Terms of Service", fContact: "Contact Partnership", unitYear: "years",
        tagMap: { "Crypto": "Crypto", "Finance": "Finance", "Gold & Metals": "Gold & Metals", "Real Estate": "Real Estate" },
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH" },
        articles: `<div class="article"><h3>1. What is Rule-Based Trading?</h3><p>The system operates strictly on explicit mathematical rules and mechanical technical indicators, completely eliminating human emotional bias.</p></div>`
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';
let masterData = { trading: [], news: [] }; 
let currentExchangeRate = 25400; 
let isFirstLoad = true;

// =========================================================================
// 3. API TỶ GIÁ THỜI GIAN THỰC
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
// 4. ĐIỀU HƯỚNG GIAO DIỆN NGÔN NGỮ
// =========================================================================
function setLanguage(lang) {
    if (lang === currentLang) return;

    let investInput = document.getElementById('invest-amount');
    let incomeInput = document.getElementById('annual-income');
    let investVal = parseFloat(investInput.value) || 0;
    let incomeVal = parseFloat(incomeInput.value) || 0;

    if (lang === 'en' && currentLang === 'vi') {
        investInput.value = Math.round(investVal / currentExchangeRate);
        incomeInput.value = Math.round(incomeVal / currentExchangeRate);
    } else if (lang === 'vi' && currentLang === 'en') {
        investInput.value = Math.round(investVal * currentExchangeRate);
        incomeInput.value = Math.round(incomeVal * currentExchangeRate);
    }

    currentLang = lang;
    localStorage.setItem('siteLang', lang);
    applyLanguage();
}

function applyLanguage() {
    const lang = dictionary[currentLang];
    
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
    document.getElementById('th-signal').innerText = lang.thSignal;
    
    // Sử dụng innerHTML để hiển thị thẻ Tooltip HTML
    document.getElementById('th-macd').innerHTML = lang.thMacd;
    document.getElementById('th-stoch').innerHTML = lang.thStoch;
    document.getElementById('th-atr').innerHTML = lang.thAtr;
    document.getElementById('th-struct').innerHTML = lang.thStruct;
    
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
// 5. MÁY TÍNH DÒNG TIỀN
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
// 6. RENDER DỮ LIỆU ĐỘNG
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
            <td style="color: ${row.signal === 'Mua' ? '#02c076' : (row.signal === 'Bán' ? '#f44336' : '#eaecef')}">
                <strong>${transSignal}</strong>
            </td>
            <td>${transMacd}</td>
            <td>${row.stochRsi}</td>
            <td>${row.atr}</td>
            <td>${transStruct}</td>
        `;
        tableBody.appendChild(tr);
    });
}

function renderNewsFeed() {
    const newsContainer = document.getElementById('news-container');
    if (!masterData.news || masterData.news.length === 0) return;
    newsContainer.innerHTML = '';
    
    const filteredNews = masterData.news.filter(item => item.lang === currentLang);
    const langMap = dictionary[currentLang].tagMap;

    filteredNews.forEach(item => {
        const displayTag = langMap[item.category] || item.category;
        
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
        console.error('Lỗi nạp dữ liệu hệ thống Crypto & Tin tức:', error);
    }
}

// =========================================================================
// 7. API GIÁ KIM LOẠI
// =========================================================================
async function fetchMetalsData() {
    try {
        const myHeaders = new Headers();
        // Điền API Key của GoldAPI.io vào dòng dưới đây
        myHeaders.append("x-access-token", "goldapi-fg1fa19mo2uhtas-io"); 

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const resGold = await fetch("https://www.goldapi.io/api/XAU/USD", requestOptions);
        if (resGold.ok) {
            const dataGold = await resGold.json();
            document.getElementById('gold-world').innerText = "$" + dataGold.price.toLocaleString() + " / oz";
        }

        const resSilver = await fetch("https://www.goldapi.io/api/XAG/USD", requestOptions);
        if (resSilver.ok) {
            const dataSilver = await resSilver.json();
            document.getElementById('silver-world').innerText = "$" + dataSilver.price.toLocaleString() + " / oz";
        }
    } catch (error) {
        console.error('Lỗi tải API giá kim loại:', error);
    }
}

// =========================================================================
// 8. KHỞI CHẠY HỆ THỐNG ĐỒNG BỘ
// =========================================================================
fetchExchangeRate().then(() => {
    applyLanguage();
    fetchMasterData();
    fetchMetalsData();
});

setInterval(fetchMasterData, 60000); 
setInterval(fetchMetalsData, 60000);