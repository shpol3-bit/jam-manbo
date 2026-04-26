// 요소 가져오기
const calculateBtn = document.getElementById('calculate-btn');
const gunghapToggleBtn = document.getElementById('gunghap-toggle-btn');
const person2Container = document.getElementById('person2-container');
const resultContainer = document.getElementById('result-container');
const tabNav = document.querySelector('.tab-nav');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// --- 명리학 지식 엔진 (수천 가지 조합 생성용) ---
const KNOWLEDGE_BASE = {
    nature: {
        '갑': ['강인한 생명력을 지닌 거목', '시작과 전진을 상징하는 기운', '우두머리 기질과 명예심'],
        '을': ['유연한 적응력의 넝쿨', '외유내강의 전형적인 모습', '실속과 환경 적응력이 뛰어남'],
        '병': ['만물을 비추는 강렬한 태양', '공정하고 화려한 카리스마', '숨김없는 솔직함과 열정'],
        '정': ['어둠을 밝히는 따뜻한 촛불', '사려 깊은 배려와 내면의 지혜', '헌신적이고 예술적인 감성'],
        '무': ['무게감 있는 거대한 산맥', '신의와 뚝심의 상징', '포용력이 넓고 중립적인 성품'],
        '기': ['만물을 기르는 비옥한 대지', '현실적이고 꼼꼼한 관리 능력', '안정감과 신용을 중시함'],
        '경': ['가공 전의 단단한 바위나 칼', '정의롭고 결단력이 독보적임', '시비를 분명히 가리는 강직함'],
        '신': ['정교하게 빛나는 보석', '섬세한 감각과 완벽주의', '자존심이 강하고 깔끔한 성정'],
        '임': ['끝없이 흐르는 바다', '지혜가 깊고 수용성이 큼', '자유롭고 스케일이 큰 포부'],
        '계': ['대지를 적시는 단비', '영특하고 유연한 순발력', '창의적이고 지적인 탐구심']
    },
    status: {
        strong: '기운이 왕성하여 주도적으로 인생을 개척해 나가는 형국입니다.',
        weak: '기운이 섬세하여 주변의 도움과 조화를 통해 발복하는 형국입니다.',
        balanced: '기운이 중화되어 큰 풍파 없이 평탄하게 성공에 이르는 형국입니다.'
    },
    advice: [
        '단기적인 성과보다 장기적인 신용 구축에 힘쓰십시오.',
        '자신의 고집을 내려놓고 타인의 의견을 수용할 때 더 큰 기회가 옵니다.',
        '현재는 내실을 다질 때이니 성급한 투자는 금물입니다.',
        '귀하의 독창적인 아이디어를 구체적인 문서로 남기는 습관이 필요합니다.'
    ]
};

// --- 초기화 및 이벤트 리스너 ---
document.addEventListener('DOMContentLoaded', () => {
    populateHourOptions('hour1');
    populateHourOptions('hour2');
});

gunghapToggleBtn.addEventListener('click', () => {
    const isVisible = person2Container.style.display === 'block';
    person2Container.style.display = isVisible ? 'none' : 'block';
    gunghapToggleBtn.textContent = isVisible ? '궁합 보기' : '궁합 닫기';
    document.querySelector('[data-tab="gunghap"]').style.display = isVisible ? 'none' : 'inline-block';
});

tabLinks.forEach(link => {
    link.addEventListener('click', () => switchTab(link.dataset.tab));
});

calculateBtn.addEventListener('click', async () => {
    const person1 = getPersonInfo('1');
    if (!person1) { alert('나의 정보를 모두 입력해주세요.'); return; }

    // 1단계: 검색 및 분석 시퀀스 시작
    await runSearchSequence(person1);

    const sajuData1 = calculateSaju(person1.year, person1.month, person1.day, person1.hour);
    const report = generateDynamicReport(sajuData1, person1);
    
    displayResults(report);

    const isGunghapMode = person2Container.style.display === 'block';
    if (isGunghapMode) {
        const person2 = getPersonInfo('2');
        if (person2) {
            const sajuData2 = calculateSaju(person2.year, person2.month, person2.day, person2.hour);
            document.getElementById('gunghap').innerHTML = generateGunghapReport(sajuData1, sajuData2);
        }
    }
    
    resultContainer.style.display = 'block';
    switchTab('basic');
    
    // 2단계: 타이핑 효과 적용
    typeWriteReport();
});

// --- 검색 시퀀스 시뮬레이션 ---
async function runSearchSequence(person) {
    const loader = document.createElement('div');
    loader.id = 'search-sequence-loader';
    document.body.appendChild(loader);

    const steps = [
        `전통 명리학 데이터베이스 접속 중...`,
        `${person.year}년 ${person.month}월 천체 정렬 데이터 검색 중...`,
        `육십갑자 물상 결합 분석 중...`,
        `귀하의 고유한 기운 흐름 산출 중...`,
        `맞춤형 감명 리포트 합성 완료.`
    ];

    for (const step of steps) {
        loader.innerHTML = `
            <div class="loader-content">
                <div class="search-spinner"></div>
                <p class="search-text">${step}</p>
            </div>
        `;
        await new Promise(resolve => setTimeout(resolve, 600));
    }
    loader.remove();
}

// --- 다이내믹 리포트 생성기 (실시간 조합) ---
function generateDynamicReport(saju, person) {
    const ilgan = saju.dayPillar[0];
    const counts = getOhaengCount(saju);
    const natureArray = KNOWLEDGE_BASE.nature[ilgan];
    const natureIdx = (person.year + person.month + person.day) % natureArray.length;
    
    let statusText = KNOWLEDGE_BASE.status.balanced;
    if (counts['목'] + counts['화'] >= 5) statusText = KNOWLEDGE_BASE.status.strong;
    if (counts['금'] + counts['수'] >= 5) statusText = KNOWLEDGE_BASE.status.weak;

    const finalVerdict = `귀하의 명조는 ${natureArray[natureIdx]}의 형상을 띠고 있으며, 분석 결과 ${statusText} ${KNOWLEDGE_BASE.advice[person.day % 4]}`;

    return {
        basic: `
            <div class="expert-header">
                <span class="search-badge">실시간 정밀 감명 결과</span>
                <h3>${person.year}년 ${person.month}월 ${person.day}일생 분석 리포트</h3>
            </div>
            <div class="dynamic-verdict-box">
                <p id="typewriter-text" class="verdict-text"></p>
                <input type="hidden" id="raw-verdict" value="${finalVerdict}">
            </div>
            <div class="main-pillar-analysis">
                <div class="pillar-visual-container">
                    <div class="pillar-box"><span>년주</span><strong>${formatOhaeng(saju.yearPillar[0])}${formatOhaeng(saju.yearPillar[1])}</strong></div>
                    <div class="pillar-box"><span>월주</span><strong>${formatOhaeng(saju.monthPillar[0])}${formatOhaeng(saju.monthPillar[1])}</strong></div>
                    <div class="pillar-box highlighted"><span>일주</span><strong>${formatOhaeng(saju.dayPillar[0])}${formatOhaeng(saju.dayPillar[1])}</strong></div>
                    <div class="pillar-box"><span>시주</span><strong>${formatOhaeng(saju.hourPillar[0])}${formatOhaeng(saju.hourPillar[1])}</strong></div>
                </div>
            </div>
            <div class="ohang-analysis-card">
                <h4>에너지 분포(五行)</h4>
                <div class="ohang-grid">
                    ${Object.entries(counts).map(([k, v]) => `
                        <div class="ohang-bar-item">
                            <span class="ohang-label">${k}</span>
                            <div class="progress-bg"><div class="progress-fill ohaeng-${k}" style="width: ${v * 12.5}%"></div></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `,
        daewoon: `<h3>인생의 주기 (대운)</h3>${generateDaewoonHTML(calculateDaewoon(saju, person))}`,
        sinsal: `<h3>주요 신살</h3><div class="sinsal-detail-container">${calculateSinsal(saju).map(s => `<div class="sinsal-card"><h5>${s}</h5><p>해당 신살의 기운이 귀하의 삶에 특정한 변화와 재능을 부여합니다.</p></div>`).join('')}</div>`
    };
}

// --- 타이핑 효과 유틸리티 ---
function typeWriteReport() {
    const target = document.getElementById('typewriter-text');
    const text = document.getElementById('raw-verdict').value;
    let i = 0;
    target.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 30);
        }
    }
    type();
}

// --- 기존 만세력 로직 --- (생략 없이 유지)
function getPersonInfo(num) {
    const year = document.getElementById(`year${num}`).value;
    const month = document.getElementById(`month${num}`).value;
    const day = document.getElementById(`day${num}`).value;
    const hour = document.getElementById(`hour${num}`).value;
    const gender = document.getElementById(`gender${num}`).value;
    if (!year || !month || !day) return null;
    return { year: parseInt(year), month: parseInt(month), day: parseInt(day), hour: parseInt(hour), gender };
}

function calculateSaju(year, month, day, hour) {
    const CHEONGAN = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
    const JIJI = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
    const GABJA_CYCLE = ["갑자", "을축", "병인", "정묘", "무진", "기사", "경오", "신미", "임신", "계유", "갑술", "을해", "병자", "정축", "무인", "기묘", "경진", "신사", "임오", "계미", "갑신", "을유", "병술", "정해", "무자", "기축", "경인", "신묘", "임진", "계사", "갑오", "을미", "병신", "정유", "무술", "기해", "경자", "신축", "임인", "계묘", "갑진", "을사", "병오", "정미", "무신", "기유", "경술", "신해", "임자", "계축", "갑인", "을묘", "병진", "정사", "무오", "기미", "경신", "신유", "임술", "계해"];
    let yearIdx = (year - 4) % 60;
    if (month < 2 || (month === 2 && day < 4)) yearIdx = (yearIdx - 1 + 60) % 60;
    const yearPillar = GABJA_CYCLE[yearIdx];
    const monthBase = [2, 14, 26, 38, 50, 2, 14, 26, 38, 50];
    const yearGanIdx = CHEONGAN.indexOf(yearPillar[0]);
    let startMonthIdx = (monthBase[yearGanIdx % 10] + (month - 2 + 12) % 12) % 60;
    const monthPillar = GABJA_CYCLE[startMonthIdx];
    const baseDate = new Date(1900, 0, 1);
    const date = new Date(year, month - 1, day);
    const diffDays = Math.floor((date - baseDate) / (24 * 60 * 60 * 1000));
    const dayIdx = (diffDays + 10) % 60;
    const dayPillar = GABJA_CYCLE[dayIdx];
    let hourPillar = "모름";
    if (hour !== -1) {
        const dayGanIdx = CHEONGAN.indexOf(dayPillar[0]);
        const hourStartIdx = (dayGanIdx % 5) * 12;
        const hourIdx = (hourStartIdx + Math.floor((parseInt(hour) + 1) / 2)) % 60;
        hourPillar = GABJA_CYCLE[hourIdx];
    }
    return { yearPillar, monthPillar, dayPillar, hourPillar };
}

function getOhaengCount(sajuData) {
    const chars = (sajuData.yearPillar + sajuData.monthPillar + sajuData.dayPillar + (sajuData.hourPillar !== '모름' ? sajuData.hourPillar : '')).split('');
    const counts = { '목': 0, '화': 0, '토': 0, '금': 0, '수': 0 };
    const map = { '갑':'목','을':'목','인':'목','묘':'목','병':'화','정':'화','사':'화','오':'화','무':'토','기':'토','진':'토','술':'토','축':'토','미':'토','경':'금','신':'금','유':'금','임':'수','계':'수','해':'수','자':'수' };
    chars.forEach(c => { if (map[c]) counts[map[c]]++; });
    return counts;
}

function calculateDaewoon(sajuData, person) {
    const yearGan = sajuData.yearPillar[0];
    const isYangYear = ['갑','병','무','경','임'].includes(yearGan);
    const isForward = (person.gender === 'male' && isYangYear) || (person.gender === 'female' && !isYangYear);
    const startIdx = GABJA_CYCLE.indexOf(sajuData.monthPillar);
    const daewoons = [];
    for (let i = 1; i <= 8; i++) {
        const idx = isForward ? (startIdx + i) % 60 : (startIdx - i + 60) % 60;
        daewoons.push({ age: i * 10, pillar: GABJA_CYCLE[idx] });
    }
    return daewoons;
}

function calculateSinsal(sajuData) {
    const jiji = [sajuData.yearPillar[1], sajuData.monthPillar[1], sajuData.dayPillar[1], sajuData.hourPillar[1]];
    const results = [];
    if (jiji.some(j => ['인','신','사','해'].includes(j))) results.push('역마살');
    if (jiji.some(j => ['자','오','묘','유'].includes(j))) results.push('도화살');
    if (jiji.some(j => ['진','술','축','미'].includes(j))) results.push('화개살');
    return results;
}

function formatOhaeng(char) {
    if (!char || char === '모') return char;
    const map = { '갑':'목','을':'목','인':'목','묘':'목','병':'화','정':'화','사':'화','오':'화','무':'토','기':'토','진':'토','술':'토','축':'토','미':'토','경':'금','신':'금','유':'금','임':'수','계':'수','해':'수','자':'수' };
    return map[char] ? `<span class="ohaeng-${map[char]}">${char}</span>` : char;
}

function generateDaewoonHTML(data) {
    let html = '<div class="daewoon-container">';
    data.forEach(d => {
        html += `<div class="daewoon-cycle"><div class="daewoon-pillar-info"><div class="daewoon-age">${d.age}세</div><div class="daewoon-pillar">${formatOhaeng(d.pillar[0])}${formatOhaeng(d.pillar[1])}</div></div></div>`;
    });
    html += '</div>';
    return html;
}

function calculateGunghap(saju1, saju2) {
    let score = 75;
    const j1 = saju1.dayPillar[1];
    const j2 = saju2.dayPillar[1];
    const hap = ['자축','인해','묘술','진유','사신','오미','축자','해인','술묘','유진','신사','미오'];
    if (hap.includes(j1+j2)) score += 15;
    return { score: Math.min(100, Math.max(10, score)) };
}

function generateGunghapReport(s1, s2) {
    const score = calculateGunghap(s1, s2).score;
    return `<h3>궁합 분석</h3><p class="expert-text">두 분의 기운적 합산 점수는 ${score}점입니다. 서로의 기운이 ${score >= 70 ? '조화롭게 상생하는' : '배려가 필요한'} 관계입니다.</p>`;
}

function switchTab(tabId) {
    tabLinks.forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
    tabContents.forEach(c => c.classList.toggle('active', c.id === tabId));
}

function populateHourOptions(id) {
    const select = document.getElementById(id);
    const times = [
        { label: "모름", value: "-1" }, { label: "자시 (23:30~01:29)", value: "0" }, { label: "축시 (01:30~03:29)", value: "2" },
        { label: "인시 (03:30~05:29)", value: "4" }, { label: "묘시 (05:30~07:29)", value: "6" }, { label: "진시 (07:30~09:29)", value: "8" },
        { label: "사시 (09:30~11:29)", value: "10" }, { label: "오시 (11:30~13:29)", value: "12" }, { label: "미시 (13:30~15:29)", value: "14" },
        { label: "신시 (15:30~17:29)", value: "16" }, { label: "유시 (17:30~19:29)", value: "18" }, { label: "술시 (19:30~21:29)", value: "20" },
        { label: "해시 (21:30~23:29)", value: "22" }
    ];
    select.innerHTML = '';
    times.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.value; opt.textContent = t.label;
        select.appendChild(opt);
    });
}

function displayResults(report) {
    document.getElementById('basic').innerHTML = report.basic;
    document.getElementById('daewoon').innerHTML = report.daewoon;
    document.getElementById('sinsal').innerHTML = report.sinsal;
}
