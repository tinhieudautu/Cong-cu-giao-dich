// 1. ĐIỀN LINK WEB APP GOOGLE SHEETS CỦA BẠN VÀO ĐÂY
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyVbwDQMmmzRPtNucw28-A0COZGz6If4hJ8oIvBHWgVt1dMjqLTcEfPRsKIcPqdn31GOw/exec';

// =========================================================================
// 2. TỪ ĐIỂN DỊCH THUẬT GIAO DIỆN (ĐÃ TÍCH HỢP ĐỦ 10 CỘT ĐỘNG)
// =========================================================================
const dictionary = {
    vi: {
        pageTitle: "FINtechDATA - Hệ Thống Tiện Ích & Dữ Liệu Đầu Tư Tự Động",
        metaDesc: "Truy cập phân tích kỹ thuật crypto, vàng nâng cao (MACD, Stoch RSI), và máy tính tài chính đa tiền tệ tính ROI, hoàn vốn, lãi kép.",
        navCrypto: "Thị Trường Crypto", navGold: "Giá Vàng & Kim Loại", navNews: "Tin Tức Tài Chính", navCalc: "Máy Tính Đầu Tư", navKnowledge: "Cẩm Nang Kiến Thức",
        heroTitle: "Hệ Thống Tiện Ích & Dữ Liệu Đầu Tư Phân Tích Tự Động", heroDesc: "Cập nhật chỉ số thời gian thực • Công cụ tính toán hiệu suất dòng tiền • Phân tích hệ thống Rule-Based",
        titleCrypto: "📊 Dữ Liệu Chỉ Báo Crypto (Thời Gian Thực - Khung H1)", titleGold: "🏆 Chỉ Báo Xu Hướng Vàng & Kim Loại Quý (Khung H1)", titleCalc: "🧮 Máy Tính Hiệu Suất Đầu Tư Bất Động Sản & Dòng Tiền",
        titleNews: "📰 Tin Tức Tài Chính Toàn Cầu", titleKnowledge: "📚 Cẩm Nang Phân Tích Kỹ Thuật & Tối Ưu Hóa Vốn Đầu Tư", textLoading: "Đang kết nối API cơ sở dữ liệu...",
        
        // Từ điển tiêu đề các cột
        thAsset: "Tài Sản", thPrice: "Giá Hiện Tại", thSignal: "Tín Hiệu Hệ Thống", thEntry: "Entry", thTp: "Chốt Lời (TP)", thSl: "Cắt Lỗ (SL)",
        thMacd: 'MACD <span class="tooltip-icon" data-tooltip="Xác định xu hướng chính. Cắt lên = Xu hướng Tăng, Cắt xuống = Xu hướng Giảm.">i</span>',
        thStoch: 'Stoch RSI <span class="tooltip-icon" data-tooltip="Đo sức mạnh giá. Dưới 20 là vùng Quá bán (Sắp tăng), Trên 80 là vùng Quá mua (Sắp giảm).">i</span>',
        thAtr: 'Chỉ số ATR <span class="tooltip-icon" data-tooltip="Đo lường mức độ biến động giá nến H1. Dùng làm căn cứ tính khoảng cách Entry và điểm TP/SL an toàn.">i</span>',
        thStruct: 'Cấu Trúc Thị Trường <span class="tooltip-icon" data-tooltip="Phân tích hành vi giá. FVG (Vùng mất cân bằng) giúp định vị dòng tiền lớn (Cá mập) đang gom hàng.">i</span>',
        
        calcDesc: "Nhập thông số dự án hoặc bất động sản để hệ thống tự động tính toán tỷ suất sinh lời ROI và chu kỳ hoàn vốn.",
        labelIn1: "Vốn đầu tư ban đầu (VND):", labelIn2: "Thu nhập ròng từ sản phẩm hàng năm (VND):", labelIn3: "Tốc độ tăng giá trị tài sản kỳ vọng (%/năm):", btnCalcAction: "Kích Hoạt Tính Toán",
        titleCalcRes: "Kết Quả Phân Tích Dòng Tiền:", labelRes1: "Tỷ suất lợi nhuận dòng tiền:", labelRes2: "Dự kiến giá trị tài sản sau 3 năm:", labelRes3: "Thời gian hoàn vốn ròng:",
        titleAff: "Bắt đầu hành trình đầu tư của bạn với các nền tảng uy tín:", btnAffCrypto: "Mở Tài Khoản Giao Dịch Crypto", btnAffGold: "Đăng Ký Sàn Giao Dịch Vàng",
        fPrivacy: "Chính Sách Bảo Mật (Privacy Policy)", fTerms: "Điều Khoản Sử Dụng", fContact: "Liên Hệ Hợp Tác", unitYear: "năm",
        tagMap: { "Crypto": "Tiền Số", "Finance": "Tài Chính", "Gold & Metals": "Vàng & Đầu Tư", "Real Estate": "Bất Động Sản" },
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH", "FVG Giảm / BOS": "Bearish FVG / BOS", "Theo xu hướng": "Trend Following", "Cấu trúc H1 chuẩn": "Standard H1 Struct" },
        articles: `
    <div class="knowledge-card">
        <div class="knowledge-badge">Hệ Thống</div>
        <h3>1. Giao dịch dựa trên quy tắc (Rule-Based Trading) là gì?</h3>
        <p>Hệ thống hoạt động hoàn toàn dựa trên các công thức toán học khắt khe và bộ chỉ báo kỹ thuật cố định (MACD, Stoch RSI, ATR). Phương pháp này loại bỏ hoàn toàn yếu tố cảm xúc, tâm lý fomo hay nỗi sợ hãi của con người – những tác nhân cốt lõi dẫn đến 90% thất bại trong đầu tư. Khi các điều kiện hàm (if-else) được thỏa mãn cùng lúc, tín hiệu Mua/Bán sẽ tự động kích hoạt.</p>
    </div>

    <div class="knowledge-card">
        <div class="knowledge-badge">Chỉ Báo</div>
        <h3>2. Ứng dụng MACD kết hợp Stoch RSI để lọc tín hiệu nhiễu</h3>
        <p>Trên khung thời gian H1, MACD đóng vai trò định vị xu hướng chủ đạo (Đường MACD cắt lên đường Tín hiệu thể hiện đà Tăng trưởng). Tuy nhiên, MACD thường có độ trễ. Để tối ưu điểm vào lệnh, hệ thống kết hợp thêm <strong>Stoch RSI dưới vùng 25 (Quá bán)</strong>. Sự kết hợp này giúp bẫy được các nhịp điều chỉnh ngắn hạn trong một xu hướng tăng tổng thể, mang lại điểm Entry có tỷ lệ chiến thắng cao.</p>
    </div>

    <div class="knowledge-card">
        <div class="knowledge-badge">Quản Trị Vốn</div>
        <h3>3. Quản trị rủi ro tối ưu theo biên độ biến động ATR</h3>
        <p>Hệ thống không đặt điểm Chốt lời (TP) và Cắt lỗ (SL) theo cảm tính hoặc theo một số phần trăm cố định. Mỗi tài sản có một biên độ dao động khác nhau. Chỉ số <strong>ATR (Average True Range)</strong> đo lường chính xác độ biến động của 14 cây nến H1 gần nhất. Công thức cốt lõi của hệ thống thiết lập: Cắt lỗ tại mốc <code>Entry - 2*ATR</code> và Chốt lời tại mốc <code>Entry + 4*ATR</code>, đảm bảo tỷ lệ Risk:Reward (Rủi ro:Lợi nhuận) luôn đạt mức 1:2 chuẩn quốc tế.</p>
    </div>

    <div class="knowledge-card">
        <div class="knowledge-badge">Dòng Tiền</div>
        <h3>4. Hiểu về vùng mất cân bằng giá (Fair Value Gap - FVG)</h3>
        <p>Cấu trúc thị trường FVG xuất hiện khi có một lực mua hoặc bán cực mạnh đột ngột từ các tổ chức tài chính lớn (Cá mập), tạo ra khoảng trống thanh khoản giữa nến số 1 và nến số 3. Hệ thống Rule-Based nhận diện các vùng FVG này kết hợp với sự thay đổi cấu trúc xu hướng (CHoCH/BOS) để xác định xem dòng tiền thông minh đang tham gia gom hàng hay phân phối, từ đó đưa ra định hướng chiến lược chính xác.</p>
    </div>
`
    },
    en: {
        pageTitle: "Real-time Crypto & Gold Signals | Financial Calculator",
        metaDesc: "Access advanced crypto and gold technical analysis (MACD, Stoch RSI), real-time precious metals prices, and a multi-currency financial calculator.",
        navCrypto: "Crypto Market", navGold: "Gold & Metals", navNews: "Financial News", navCalc: "Investment Calculator", navKnowledge: "Knowledge Base",
        heroTitle: "Automated Investment Utility & Data Analytics System", heroDesc: "Real-time index updates • Cash flow performance tools • Rule-Based analytics system",
        titleCrypto: "📊 Crypto Indicator Data (Real-Time - H1 Timeframe)", titleGold: "🏆 Gold & Precious Metals Indicator Trend (H1)", titleCalc: "🧮 Real Estate & Cash Flow Performance Calculator",
        titleNews: "📰 Global Financial News Feed", titleKnowledge: "📚 Technical Analysis & Capital Optimization Guide", textLoading: "Connecting to database API...",
        
        thAsset: "Asset", thPrice: "Current Price", thSignal: "System Signal", thEntry: "Entry", thTp: "Take Profit", thSl: "Stop Loss",
        thMacd: 'MACD <span class="tooltip-icon" data-tooltip="Determines primary trend. Cross Up = Bullish momentum, Cross Down = Bearish momentum.">i</span>',
        thStoch: 'Stoch RSI <span class="tooltip-icon" data-tooltip="Momentum strength. Below 20 is Oversold (Buy signal), Above 80 is Overbought (Sell signal).">i</span>',
        thAtr: 'ATR Index <span class="tooltip-icon" data-tooltip="Measures H1 candlestick price volatility. Used to calculate optimal entry points and safe TP/SL parameters.">i</span>',
        thStruct: 'Market Structure <span class="tooltip-icon" data-tooltip="Price Action analysis. FVG (Fair Value Gap) identifies institutional liquidity imbalances.">i</span>',
        
        calcDesc: "Enter project or real estate metrics (land plots, apartments) to automatically calculate ROI and payback period.",
        labelIn1: "Initial Investment Capital (USD):", labelIn2: "Annual Net Rental/Product Income (USD):", labelIn3: "Expected Asset Growth Rate (%/year):", btnCalcAction: "Trigger Calculations",
        titleCalcRes: "Cash Flow Analysis Results:", labelRes1: "Cash Flow Yield Rate:", labelRes2: "Projected Asset Value (3 Years):", labelRes3: "Net Payback Period:",
        titleAff: "Start your investment journey with trusted platforms:", btnAffCrypto: "Open Crypto Trading Account", btnAffGold: "Register Gold Trading Account",
        fPrivacy: "Privacy Policy", fTerms: "Terms of Service", fContact: "Contact Partnership", unitYear: "years",
        tagMap: { "Crypto": "Crypto", "Finance": "Finance", "Gold & Metals": "Gold & Metals", "Real Estate": "Real Estate" },
        dataMap: { "Mua": "Buy", "Bán": "Sell", "Theo dõi": "Watch", "Cắt lên (Tăng)": "Cross Up (Bullish)", "Cắt xuống (Giảm)": "Cross Down (Bearish)", "FVG Tăng / CHoCH": "Bullish FVG / CHoCH", "FVG Giảm / BOS": "Bearish FVG / BOS", "Theo xu hướng": "Trend Following", "Cấu trúc H1 chuẩn": "Standard H1 Struct" },
        articles: `
    <div class="knowledge-card">
        <div class="knowledge-badge">System</div>
        <h3>1. What is Rule-Based Trading?</h3>
        <p>The system operates strictly on explicit mathematical rules and mechanical technical indicators (MACD, Stoch RSI, ATR), completely eliminating human emotional bias, FOMO, or panic. Signals are generated only when all algorithmic parameters align simultaneously.</p>
    </div>

    <div class="knowledge-card">
        <div class="knowledge-badge">Indicators</div>
        <h3>2. Combining MACD and Stoch RSI to Filter Noise</h3>
        <p>On the H1 timeframe, MACD identifies the primary momentum. To optimize entry points, the system pairs it with <strong>Stoch RSI below 25 (Oversold)</strong>. This consensus catches minor pullbacks within a major uptrend, securing high-probability entries.</p>
    </div>

    <div class="knowledge-card">
        <div class="knowledge-badge">Risk Management</div>
        <h3>3. Capital Optimization Based on ATR Volatility</h3>
        <p>Instead of arbitrary percentage targets, the system uses the <strong>Average True Range (ATR)</strong> of the last 14 hourly candles. Stop Loss is mechanically set at <code>Entry - 2*ATR</code>, and Take Profit at <code>Entry + 4*ATR</code>, locking in a strict 1:2 Risk:Reward ratio.</p>
    </div>

    <div class="knowledge-card">
        <div class="knowledge-badge">Market Structure</div>
        <h3>4. Deciphering Fair Value Gaps (FVG) and Liquidity</h3>
        <p>A Fair Value Gap occurs when aggressive institutional order flow creates a liquidity imbalance between the 1st and 3rd candles. The system detects these zones alongside Market Structure Shifts (CHoCH/BOS) to track where smart money is accumulating assets.</p>
    </div>
`
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';
let masterData = { trading: [], news: [] }; 
let currentExchangeRate = 25400; 
let isFirstLoad = true;

async function fetchExchangeRate() {
    try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await res.json();
        if (data && data.rates && data.rates.VND) { currentExchangeRate = data.rates.VND; }
    } catch (e) { console.error('Lỗi API cập nhật tỷ giá:', e); }
}

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
    document.title = lang.pageTitle;
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) { metaDescriptionTag.setAttribute('content', lang.metaDesc); }
    
    document.getElementById('nav-crypto').innerText = lang.navCrypto;
    document.getElementById('nav-gold').innerText = lang.navGold;
    document.getElementById('nav-news').innerText = lang.navNews;
    document.getElementById('nav-calc').innerText = lang.navCalc;
    document.getElementById('nav-knowledge').innerText = lang.navKnowledge;
    
    document.getElementById('hero-title').innerText = lang.heroTitle;
    document.getElementById('hero-desc').innerText = lang.heroDesc;
    document.getElementById('title-crypto').innerText = lang.titleCrypto;
    document.getElementById('title-gold').innerText = lang.titleGold;
    document.getElementById('title-calc').innerText = lang.titleCalc;
    document.getElementById('title-news').innerText = lang.titleNews;
    document.getElementById('title-knowledge').innerText = lang.titleKnowledge;
    
    // Khớp tiêu đề cột động cho cả 2 bảng
    document.querySelectorAll('.th-asset').forEach(el => el.innerText = lang.thAsset);
    document.querySelectorAll('.th-price').forEach(el => el.innerText = lang.thPrice);
    document.querySelectorAll('.th-signal').forEach(el => el.innerHTML = lang.thSignal);
    document.querySelectorAll('.th-macd').forEach(el => el.innerHTML = lang.thMacd);
    document.querySelectorAll('.th-stoch').forEach(el => el.innerHTML = lang.thStoch);
    document.querySelectorAll('.th-atr').forEach(el => el.innerHTML = lang.thAtr);
    document.querySelectorAll('.th-struct').forEach(el => el.innerHTML = lang.thStruct);
    document.querySelectorAll('.th-entry').forEach(el => el.innerText = lang.thEntry);
    document.querySelectorAll('.th-tp').forEach(el => el.innerText = lang.thTp);
    document.querySelectorAll('.th-sl').forEach(el => el.innerText = lang.thSl);
    
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

    renderTables();
    renderNewsFeed();
    calculateROI();
    renderKnowledgeBase();
}

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

function renderTables() {
    const cryptoBody = document.getElementById('data-body');
    const metalsBody = document.getElementById('metals-body');
    if (!masterData.trading || masterData.trading.length === 0) return;
    
    cryptoBody.innerHTML = '';
    metalsBody.innerHTML = '';
    const lang = dictionary[currentLang];

    masterData.trading.forEach(row => {
        const transMacd = currentLang === 'en' ? (lang.dataMap[row.macd] || row.macd) : row.macd;
        const transStruct = currentLang === 'en' ? (lang.dataMap[row.structure] || row.structure) : row.structure;
        const transSignal = currentLang === 'en' ? (lang.dataMap[row.signal] || row.signal) : row.signal;
        
        const isMetal = row.asset.includes("XAU") || row.asset.includes("XAG");
        const priceDisplay = isMetal 
            ? "$" + parseFloat(row.price).toLocaleString() + " / oz"
            : parseFloat(row.price).toLocaleString() + " USD";

        // Định dạng hiển thị dấu cho Entry, TP, SL dựa trên loại tài sản
        const formatValue = (val) => {
            if (!val || val === "-") return "-";
            const num = parseFloat(val);
            if (isNaN(num)) return val;
            return isMetal ? "$" + num.toLocaleString() : num.toLocaleString() + " USD";
        };

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.asset}</strong></td>
            <td>${priceDisplay}</td>
            <td style="color: ${row.signal === 'Mua' ? '#02c076' : (row.signal === 'Bán' ? '#f44336' : '#eaecef')}">
                <strong>${transSignal}</strong>
            </td>
            <td>${transMacd}</td>
            <td>${row.stochRsi}</td>
            <td>${row.atr}</td>
            <td>${transStruct}</td>
            <td style="color: #f0b90b; font-weight: bold;">${formatValue(row.entry)}</td>
            <td style="color: #02c076; font-weight: bold;">${formatValue(row.tp)}</td>
            <td style="color: #f44336; font-weight: bold;">${formatValue(row.sl)}</td>
        `;
        
        if (isMetal) {
            metalsBody.appendChild(tr);
        } else {
            cryptoBody.appendChild(tr);
        }
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
        
        // CẬP NHẬT: Thêm target="_blank" để mở tab mới và rel="..." để bảo mật hiệu năng
        div.innerHTML = `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer"><h3>${item.title}</h3></a>
            <div class="news-meta">
                <span class="news-tag">${displayTag}</span>
                <span class="news-time">${item.time}</span>
            </div>
        `;
        newsContainer.appendChild(div);
    });
}

// Hàm tự động vẽ bài viết Kiến thức từ Google Sheets
function renderKnowledgeBase() {
    const knowledgeContainer = document.getElementById('knowledge-content');
    // Nếu chưa load được dữ liệu thì bỏ qua
    if (!masterData.knowledge || masterData.knowledge.length === 0) {
        knowledgeContainer.innerHTML = '<p style="text-align:center; color:#848e9c;">Đang tải dữ liệu cẩm nang...</p>';
        return;
    }
    
    knowledgeContainer.innerHTML = '';
    
    // Chỉ lọc và hiển thị bài viết khớp với ngôn ngữ người dùng đang chọn (vi hoặc en)
    const filteredKnowledge = masterData.knowledge.filter(item => item.lang === currentLang);
    
    if (filteredKnowledge.length === 0) {
        knowledgeContainer.innerHTML = '<p style="text-align:center; color:#848e9c;">Chưa có bài viết nào cho ngôn ngữ này.</p>';
        return;
    }

    // Tự động tạo mã HTML cho từng bài viết có trong Sheet
    filteredKnowledge.forEach(item => {
        const div = document.createElement('div');
        div.className = 'knowledge-card';
        div.innerHTML = `
            <div class="knowledge-badge">${item.badge}</div>
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        `;
        knowledgeContainer.appendChild(div);
    });
}

async function fetchMasterData() {
    try {
        const response = await fetch(WEB_APP_URL);
        masterData = await response.json();
        renderTables();
        renderNewsFeed();
        renderKnowledgeBase();
    } catch (error) { console.error('Lỗi nạp dữ liệu Master:', error); }
}

fetchExchangeRate().then(() => {
    applyLanguage();
    fetchMasterData();
});
setInterval(fetchMasterData, 60000);

