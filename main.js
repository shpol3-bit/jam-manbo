// 요소 가져오기
const calculateBtn = document.getElementById('calculate-btn');
const gunghapToggleBtn = document.getElementById('gunghap-toggle-btn');
const person2Container = document.getElementById('person2-container');
const resultContainer = document.getElementById('result-container');
const tabNav = document.querySelector('.tab-nav');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// --- 데이터 정의 (명리학 전문 데이터) ---
const CHEONGAN = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const JIJI = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const GABJA_CYCLE = ["갑자", "을축", "병인", "정묘", "무진", "기사", "경오", "신미", "임신", "계유", "갑술", "을해", "병자", "정축", "무인", "기묘", "경진", "신사", "임오", "계미", "갑신", "을유", "병술", "정해", "무자", "기축", "경인", "신묘", "임진", "계사", "갑오", "을미", "병신", "정유", "무술", "기해", "경자", "신축", "임인", "계묘", "갑진", "을사", "병오", "정미", "무신", "기유", "경술", "신해", "임자", "계축", "갑인", "을묘", "병진", "정사", "무오", "기미", "경신", "신유", "임술", "계해"];

const OHANG_INFO = {
    '갑':{ohaeng:'목',eumyang:'양',desc:'하늘로 솟구치는 거목의 기운으로 추진력과 리더십이 강합니다.'},
    '을':{ohaeng:'목',eumyang:'음',desc:'담장을 넘는 넝쿨 식물처럼 유연하며 환경 적응력이 뛰어납니다.'},
    '병':{ohaeng:'화',eumyang:'양',desc:'세상을 밝히는 태양처럼 화려하고 열정적이며 공명정대한 성품입니다.'},
    '정':{ohaeng:'화',eumyang:'음',desc:'밤길을 비추는 등불처럼 은은하지만 내면의 응집된 열기가 뜨겁습니다.'},
    '무':{ohaeng:'토',eumyang:'양',desc:'광활한 대지나 산처럼 묵직하고 신뢰감을 주며 포용력이 넓습니다.'},
    '기':{ohaeng:'토',eumyang:'음',desc:'작물을 키우는 옥토처럼 자기 관리에 철저하며 현실적인 지혜가 있습니다.'},
    '경':{ohaeng:'금',eumyang:'양',desc:'가공되지 않은 원석이나 칼처럼 결단력이 날카롭고 정의를 중시합니다.'},
    '신':{ohaeng:'금',eumyang:'음',desc:'정교하게 다듬어진 보석처럼 섬세하고 완성도를 지향하는 성향입니다.'},
    '임':{ohaeng:'수',eumyang:'양',desc:'끝없는 바다처럼 깊은 지혜와 수용성을 지녔으며 통이 크고 시원합니다.'},
    '계':{ohaeng:'수',eumyang:'음',desc:'대지를 적시는 단비처럼 유연하고 창의적이며 영리한 지혜가 돋보입니다.'},
    '인':{ohaeng:'목',eumyang:'양'},'묘':{ohaeng:'목',eumyang:'음'},'사':{ohaeng:'화',eumyang:'양'},'오':{ohaeng:'화',eumyang:'음'},
    '진':{ohaeng:'토',eumyang:'양'},'술':{ohaeng:'토',eumyang:'양'},'축':{ohaeng:'토',eumyang:'음'},'미':{ohaeng:'토',eumyang:'음'},
    '신':{ohaeng:'금',eumyang:'양'},'유':{ohaeng:'금',eumyang:'음'},'해':{ohaeng:'수',eumyang:'양'},'자':{ohaeng:'수',eumyang:'음'}
};

const SINSAL_DATABASE = {
    '역마살': '활동 반경이 매우 넓고 이동을 통해 발복하는 기운입니다. 능동적인 변화가 행운을 부릅니다.',
    '도화살': '대중의 시선을 끄는 강력한 매력의 소유자입니다. 예술, 방송, 영업 등 대인 활동에 유리합니다.',
    '화개살': '문예와 철학적 깊이가 남다른 기운입니다. 내면의 성찰이 깊고 독창적인 재능을 발휘합니다.',
    '백호살': '강력한 기백과 돌파력을 의미합니다. 위기 상황에서 타의 추종을 불허하는 집중력을 발휘합니다.',
    '문창귀인': '학문적 재능과 문장력이 뛰어난 길신입니다. 두뇌 회전이 빠르고 지적인 성취도가 높습니다.'
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

    showExpertLoading();

    setTimeout(() => {
        const sajuData1 = calculateSaju(person1.year, person1.month, person1.day, person1.hour);
        const report1 = generateExpertReport(sajuData1, person1);
        
        displayResults(report1);

        const isGunghapMode = person2Container.style.display === 'block';
        if (isGunghapMode) {
            const person2 = getPersonInfo('2');
            if (person2) {
                const sajuData2 = calculateSaju(person2.year, person2.month, person2.day, person2.hour);
                const gunghapReport = generateExpertGunghapReport(sajuData1, sajuData2);
                document.getElementById('gunghap').innerHTML = gunghapReport;
            }
        }
        
        resultContainer.style.display = 'block';
        hideExpertLoading();
        switchTab('basic');
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }, 1800);
});

// --- 명리학 정밀 분석 엔진 ---

function generateExpertReport(saju, person) {
    const ilgan = saju.dayPillar[0];
    const info = OHANG_INFO[ilgan];
    const counts = getOhaengCount(saju);
    const sinsal = calculateSinsal(saju);

    return {
        basic: `
            <div class="expert-feedback-header">
                <span class="expert-badge">정밀 사주 감명</span>
                <h3>${person.year}년 ${person.month}월 ${person.day}일생 운명 분석 리포트</h3>
            </div>
            <p class="expert-summary">귀하는 <strong>${info.ohaeng}</strong>의 기운을 바탕에 둔 <strong>${ilgan}</strong>(日干) 성향을 타고났습니다. ${info.desc}</p>
            <div class="expert-section">
                <h4>선천적 성정 및 기운 분석</h4>
                <p>사주 원국 내 오행의 분포를 보면 ${getOhaengAnalysisText(counts)} 이러한 구성은 귀하가 ${getPersonalityText(ilgan, counts)} 성향을 지니게 됨을 명리학적으로 시사합니다.</p>
            </div>
            <div class="saju-table-container">
                <table class="saju-table">
                    <tr><th>구분</th><th>시주(時柱)</th><th>일주(日柱)</th><th>월주(月柱)</th><th>년주(年柱)</th></tr>
                    <tr><td>천간</td><td>${formatOhaeng(saju.hourPillar[0])}</td><td>${formatOhaeng(saju.dayPillar[0])}</td><td>${formatOhaeng(saju.monthPillar[0])}</td><td>${formatOhaeng(saju.yearPillar[0])}</td></tr>
                    <tr><td>지지</td><td>${formatOhaeng(saju.hourPillar[1])}</td><td>${formatOhaeng(saju.dayPillar[1])}</td><td>${formatOhaeng(saju.monthPillar[1])}</td><td>${formatOhaeng(saju.yearPillar[1])}</td></tr>
                </table>
            </div>
        `,
        daewoon: `
            <div class="expert-feedback-header"><span class="expert-badge">대운 흐름 분석</span></div>
            <h3>인생의 주기 및 대운(大運) 해석</h3>
            <p>귀하의 대운 흐름을 정밀 분석한 결과, 10년 주기로 변화하는 에너지의 흐름이 ${person.gender === 'male' ? '양(陽)' : '음(陰)'}의 기운과 상호작용하며 ${getDaewoonText(saju, person)} 방향으로 전개되고 있습니다.</p>
            ${generateDaewoonHTML(calculateDaewoon(saju, person))}
            <div class="expert-advice">
                <strong>전문가 제언:</strong> 대운은 인생의 계절과 같습니다. 현재의 운을 미리 알고 대비하는 것이 삶의 지혜입니다.
            </div>
        `,
        sinsal: `
            <div class="expert-feedback-header"><span class="expert-badge">신살 및 길신 분석</span></div>
            <h3>인생의 특이점 (주요 신살)</h3>
            <div class="sinsal-container">
                ${sinsal.map(s => `
                    <div class="sinsal-item expert-item">
                        <h4>${s}</h4>
                        <p>${SINSAL_DATABASE[s]}</p>
                    </div>
                `).join('')}
            </div>
            ${sinsal.length === 0 ? '<p style="text-align:center;">원국 내 기운이 비교적 평온하여 특별히 편중된 신살이 없습니다.</p>' : ''}
        `
    };
}

function getOhaengAnalysisText(counts) {
    let text = "";
    if (counts['목'] >= 3) text += "목(木)의 기운이 왕성하여 강한 추진력을 지니고 있으나 때로는 독단적일 수 있으며, ";
    if (counts['화'] >= 3) text += "화(火)의 기운이 치열하여 열정적이고 외향적이나 감정 기복이 발생할 수 있고, ";
    if (counts['토'] >= 3) text += "토(土)의 기운이 두터워 신의가 깊고 안정적이나 변화에 다소 보수적일 수 있습니다. ";
    if (counts['금'] >= 3) text += "금(金)의 기운이 예리하여 결단력이 있고 원칙적이나 융통성이 부족할 수 있으며, ";
    if (counts['수'] >= 3) text += "수(水)의 기운이 깊어 지혜롭고 수용력이 좋으나 생각이 깊어 실천이 늦어질 수 있습니다. ";
    if (text === "") text = "오행의 기운이 고루 분포되어 있어 삶의 균형과 조화를 중시하는 편이며, ";
    return text;
}

function getPersonalityText(ilgan, counts) {
    const traits = {
        '갑': '진취적이고 책임감이 강한', '을': '부드러우면서도 끈기가 있는',
        '병': '밝고 사교적이며 열정적인', '정': '사려 깊고 내면이 따뜻한',
        '무': '신뢰감이 있고 중립적인', '기': '알뜰하며 현실에 충실한',
        '경': '강직하고 대의를 중시하는', '신': '세심하고 완벽을 지향하는',
        '임': '포용력이 넓고 지혜로운', '계': '유연하며 창의적인'
    };
    return traits[ilgan] || "개성이 뚜렷한";
}

function getDaewoonText(saju, person) {
    const isYang = OHANG_INFO[saju.yearPillar[0]].eumyang === '양';
    const isForward = (person.gender === 'male' && isYang) || (person.gender === 'female' && !isYang);
    return isForward ? "사회적 활동성이 강화되는 순행적(順行的)" : "내면의 내실을 다지는 역행적(逆行的)";
}

function generateExpertGunghapReport(s1, s2) {
    const score = calculateGunghap(s1, s2).score;
    return `
        <div class="expert-feedback-header"><span class="expert-badge">궁합 정밀 분석</span></div>
        <h3>두 사람의 기운적 합(合) 분석</h3>
        <div class="gunghap-score-circle">
            <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path class="circle" stroke-dasharray="${score}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <text x="18" y="20.35" class="percentage">${score}점</text>
            </svg>
        </div>
        <div class="expert-section">
            <h4>기운적 조화 분석</h4>
            <p>${score >= 80 ? '두 분은 서로의 일지가 상합(相合)하거나 오행의 조화가 뛰어나 매우 길한 관계입니다.' : score >= 60 ? '서로의 다름을 존중하고 부족한 부분을 채워주는 보완적인 관계입니다.' : '기운의 상충이 예상되므로 서로에 대한 각별한 배려와 인내가 필요합니다.'}</p>
        </div>
        <div class="expert-advice">
            <strong>명리학적 제언:</strong> 좋은 궁합이란 갈등이 없는 상태가 아니라, 갈등을 지혜롭게 풀 수 있는 기운적 조화를 의미합니다.
        </div>
    `;
}

// --- 유틸리티 및 로딩 관리 ---

function showExpertLoading() {
    const loader = document.createElement('div');
    loader.id = 'expert-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="expert-spinner"></div>
            <p>명리학 데이터를 바탕으로 정밀 분석 중입니다...</p>
            <small>만세력 산출 및 원국 해설 생성 중</small>
        </div>
    `;
    document.body.appendChild(loader);
}

function hideExpertLoading() {
    const loader = document.getElementById('expert-loader');
    if (loader) loader.remove();
}

function displayResults(report) {
    document.getElementById('basic').innerHTML = report.basic;
    document.getElementById('daewoon').innerHTML = report.daewoon;
    document.getElementById('sinsal').innerHTML = report.sinsal;
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

function calculateDaewoon(sajuData, person) {
    const isYangYear = OHANG_INFO[sajuData.yearPillar[0]].eumyang === '양';
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

function getOhaengCount(sajuData) {
    const chars = (sajuData.yearPillar + sajuData.monthPillar + sajuData.dayPillar + (sajuData.hourPillar !== '모름' ? sajuData.hourPillar : '')).split('');
    const counts = { '목': 0, '화': 0, '토': 0, '금': 0, '수': 0 };
    chars.forEach(c => { if (OHANG_INFO[c]) counts[OHANG_INFO[c].ohaeng]++; });
    return counts;
}

function formatOhaeng(char) {
    if (!char || char === '모') return char;
    const info = OHANG_INFO[char];
    return info ? `<span class="ohaeng-${info.ohaeng}">${char}</span>` : char;
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
    if (['자','축','인','해','묘','술','진','유','사','신','오','미'].includes(j1+j2)) score += 15;
    if (['자','오','축','미','인','신','묘','유','진','술','사','해'].includes(j1+j2)) score -= 20;
    return { score: Math.min(100, Math.max(10, score)) };
}
