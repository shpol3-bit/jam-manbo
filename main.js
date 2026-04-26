// 요소 가져오기
const calculateBtn = document.getElementById('calculate-btn');
const gunghapToggleBtn = document.getElementById('gunghap-toggle-btn');
const person2Container = document.getElementById('person2-container');
const resultContainer = document.getElementById('result-container');
const tabNav = document.querySelector('.tab-nav');
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// --- 데이터 정의 ---
const CHEONGAN = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const JIJI = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const GABJA_CYCLE = ["갑자", "을축", "병인", "정묘", "무진", "기사", "경오", "신미", "임신", "계유", "갑술", "을해", "병자", "정축", "무인", "기묘", "경진", "신사", "임오", "계미", "갑신", "을유", "병술", "정해", "무자", "기축", "경인", "신묘", "임진", "계사", "갑오", "을미", "병신", "정유", "무술", "기해", "경자", "신축", "임인", "계묘", "갑진", "을사", "병오", "정미", "무신", "기유", "경술", "신해", "임자", "계축", "갑인", "을묘", "병진", "정사", "무오", "기미", "경신", "신유", "임술", "계해"];

const OHANG_INFO = {
    '갑':{ohaeng:'목',eumyang:'양'},'을':{ohaeng:'목',eumyang:'음'},'병':{ohaeng:'화',eumyang:'양'},'정':{ohaeng:'화',eumyang:'음'},'무':{ohaeng:'토',eumyang:'양'},'기':{ohaeng:'토',eumyang:'음'},'경':{ohaeng:'금',eumyang:'양'},'신':{ohaeng:'금',eumyang:'음'},'임':{ohaeng:'수',eumyang:'양'},'계':{ohaeng:'수',eumyang:'음'},
    '인':{ohaeng:'목',eumyang:'양'},'묘':{ohaeng:'목',eumyang:'음'},'사':{ohaeng:'화',eumyang:'양'},'오':{ohaeng:'화',eumyang:'음'},'진':{ohaeng:'토',eumyang:'양'},'술':{ohaeng:'토',eumyang:'양'},'축':{ohaeng:'토',eumyang:'음'},'미':{ohaeng:'토',eumyang:'음'},'신':{ohaeng:'금',eumyang:'양'},'유':{ohaeng:'금',eumyang:'음'},'해':{ohaeng:'수',eumyang:'양'},'자':{ohaeng:'수',eumyang:'음'}
};

const SINSAL_INFO = {
    '역마살': '활동력이 왕성하고 이동이 많은 기운입니다. 변화를 통해 성장할 기회가 많습니다.',
    '도화살': '타인에게 매력을 주고 주목받는 기운입니다. 대인관계나 예술적 분야에서 강점이 있습니다.',
    '화개살': '예술적 감수성과 종교적, 철학적 깊이가 있는 기운입니다. 내면의 성찰이 깊습니다.',
    '백호살': '강한 추진력과 기백이 있는 기운입니다. 어려운 상황도 돌파하는 힘이 있습니다.',
    '문창귀인': '학문과 예술에 재능이 있고 지혜로운 기운입니다. 습득력이 빠릅니다.'
};

const JIJI_RELATIONS = {
    합: { desc: "서로 잘 맞고 이끌리는 긍정적인 관계입니다.", pairs: { 자: '축', 인: '해', 묘: '술', 진: '유', 사: '신', 오: '미' } },
    충: { desc: "부딪히고 다툼이 발생하기 쉬운 관계입니다.", pairs: { 자: '오', 축: '미', 인: '신', 묘: '유', 진: '술', 사: '해' } },
    원진: { desc: "이유 없이 미워하고 원망하기 쉬운 관계입니다.", pairs: { 자: '미', 축: '오', 인: '유', 묘: '신', 진: '해', 사: '술' } },
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
    if (!isVisible) {
        document.querySelector('[data-tab="gunghap"]').style.display = 'inline-block';
    } else {
        document.querySelector('[data-tab="gunghap"]').style.display = 'none';
        if (document.querySelector('[data-tab="gunghap"]').classList.contains('active')) {
            switchTab('basic');
        }
    }
});

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        switchTab(link.dataset.tab);
    });
});

calculateBtn.addEventListener('click', () => {
    const person1 = getPersonInfo('1');
    if (!person1) {
        alert('나의 정보를 모두 입력해주세요.');
        return;
    }

    resultContainer.style.display = 'block';

    const sajuData1 = calculateSaju(person1.year, person1.month, person1.day, person1.hour);
    document.getElementById('basic').innerHTML = generateBasicSajuHTML(sajuData1, '나', person1);

    const daewoonData = calculateDaewoon(sajuData1, person1);
    document.getElementById('daewoon').innerHTML = generateDaewoonHTML(daewoonData);

    const sinsalData = calculateSinsal(sajuData1);
    document.getElementById('sinsal').innerHTML = generateSinsalHTML(sinsalData);

    const isGunghapMode = person2Container.style.display === 'block';
    if (isGunghapMode) {
        const person2 = getPersonInfo('2');
        if (!person2) {
             document.getElementById('gunghap').innerHTML = `<p style="color:red; text-align:center; padding:20px;">상대방 정보를 모두 입력해주세요.</p>`;
        } else {
            const sajuData2 = calculateSaju(person2.year, person2.month, person2.day, person2.hour);
            const gunghapData = calculateGunghap(sajuData1, sajuData2);
            document.getElementById('gunghap').innerHTML = generateGunghapHTML(gunghapData, person1, person2);
        }
    }
    
    switchTab('basic');
});

function switchTab(tabId) {
    tabLinks.forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
    tabContents.forEach(c => c.classList.toggle('active', c.id === tabId));
}

// --- 핵심 로직 함수 구현 ---

function populateHourOptions(id) {
    const select = document.getElementById(id);
    const times = [
        { label: "모름", value: "-1" },
        { label: "자시 (23:30~01:29)", value: "0" },
        { label: "축시 (01:30~03:29)", value: "2" },
        { label: "인시 (03:30~05:29)", value: "4" },
        { label: "묘시 (05:30~07:29)", value: "6" },
        { label: "진시 (07:30~09:29)", value: "8" },
        { label: "사시 (09:30~11:29)", value: "10" },
        { label: "오시 (11:30~13:29)", value: "12" },
        { label: "미시 (13:30~15:29)", value: "14" },
        { label: "신시 (15:30~17:29)", value: "16" },
        { label: "유시 (17:30~19:29)", value: "18" },
        { label: "술시 (19:30~21:29)", value: "20" },
        { label: "해시 (21:30~23:29)", value: "22" }
    ];
    times.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.value;
        opt.textContent = t.label;
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
    const date = new Date(year, month - 1, day);
    
    // 년주 계산 (입춘 기준 간략화)
    let yearIdx = (year - 4) % 60;
    if (month < 2 || (month === 2 && day < 4)) yearIdx = (yearIdx - 1 + 60) % 60;
    const yearPillar = GABJA_CYCLE[yearIdx];

    // 월주 계산 (절기 기준 간략화)
    const monthBase = [2, 14, 26, 38, 50, 2, 14, 26, 38, 50]; // 갑/기년은 병인월부터...
    const yearGanIdx = CHEONGAN.indexOf(yearPillar[0]);
    let startMonthIdx = (monthBase[yearGanIdx % 10] + (month - 2 + 12) % 12) % 60;
    // 실제로는 절입일에 따라 전달/다음달이 결정되나 여기서는 간략히 처리
    const monthPillar = GABJA_CYCLE[startMonthIdx];

    // 일주 계산 (기준일: 1900-01-01 갑술일 - 간략화된 일주 공식)
    const baseDate = new Date(1900, 0, 1);
    const diffDays = Math.floor((date - baseDate) / (24 * 60 * 60 * 1000));
    const dayIdx = (diffDays + 10) % 60; // 1900-01-01은 갑술(10)
    const dayPillar = GABJA_CYCLE[dayIdx];

    // 시주 계산
    let hourPillar = "모름";
    if (hour !== -1) {
        const dayGanIdx = CHEONGAN.indexOf(dayPillar[0]);
        const hourStartIdx = [(dayGanIdx % 5) * 12 + 0] % 60; // 갑/기일은 갑자시부터...
        const hourIdx = (hourStartIdx + Math.floor((hour + 1) / 2)) % 60;
        hourPillar = GABJA_CYCLE[hourIdx];
    }

    return { yearPillar, monthPillar, dayPillar, hourPillar };
}

function calculateDaewoon(sajuData, person) {
    const isYangYear = OHANG_INFO[sajuData.yearPillar[0]].eumyang === '양';
    const isMale = person.gender === 'male';
    const isForward = (isMale && isYangYear) || (!isMale && !isYangYear);
    
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
    if (jiji.includes('인') || jiji.includes('신') || jiji.includes('사') || jiji.includes('해')) results.push('역마살');
    if (jiji.includes('자') || jiji.includes('오') || jiji.includes('묘') || jiji.includes('유')) results.push('도화살');
    if (jiji.includes('진') || jiji.includes('술') || jiji.includes('축') || jiji.includes('미')) results.push('화개살');
    return results;
}

// --- HTML 생성 유틸리티 ---

function generateBasicSajuHTML(saju, title, person) {
    const p = [saju.hourPillar, saju.dayPillar, saju.monthPillar, saju.yearPillar];
    const labels = ['시주', '일주', '월주', '년주'];
    
    let html = `<h3>${title}의 사주팔자</h3>`;
    html += `<div class="saju-table-container"><table class="saju-table"><thead><tr><th>구분</th>`;
    labels.forEach(l => html += `<th>${l}</th>`);
    html += `</tr></thead><tbody><tr><td>천간</td>`;
    p.forEach(pillar => html += `<td>${formatOhaeng(pillar[0])}</td>`);
    html += `</tr><tr><td>지질</td>`;
    p.forEach(pillar => html += `<td>${formatOhaeng(pillar[1])}</td>`);
    html += `</tr></tbody></table></div>`;
    
    const counts = getOhaengCount(saju);
    html += `<div class="ohaeng-summary">`;
    Object.entries(counts).forEach(([o, c]) => {
        html += `<span class="ohaeng-item ohaeng-${o}">${o}: ${c}</span>`;
    });
    html += `</div>`;
    return html;
}

function generateDaewoonHTML(data) {
    let html = `<h3>대운 흐름 (10년 주기)</h3><div class="daewoon-container">`;
    data.forEach(d => {
        html += `
            <div class="daewoon-cycle">
                <div class="daewoon-pillar-info">
                    <div class="daewoon-age">${d.age}세~</div>
                    <div class="daewoon-pillar">${formatOhaeng(d.pillar[0])}${formatOhaeng(d.pillar[1])}</div>
                </div>
            </div>
        `;
    });
    html += `</div>`;
    return html;
}

function generateSinsalHTML(data) {
    let html = `<h3>주요 신살 분석</h3><div class="sinsal-container">`;
    data.forEach(s => {
        html += `
            <div class="sinsal-item">
                <h4>${s}</h4>
                <p>${SINSAL_INFO[s] || '상세 정보가 없습니다.'}</p>
            </div>
        `;
    });
    if (data.length === 0) html += `<p style="text-align:center;">특별히 강하게 나타나는 신살이 없습니다.</p>`;
    html += `</div>`;
    return html;
}

function formatOhaeng(char) {
    if (!char || char === '모') return char;
    const info = OHANG_INFO[char];
    if (!info) return char;
    return `<span class="ohaeng-${info.ohaeng}">${char}</span>`;
}

function getOhaengCount(sajuData) {
    const chars = (sajuData.yearPillar + sajuData.monthPillar + sajuData.dayPillar + (sajuData.hourPillar !== '모름' ? sajuData.hourPillar : '')).split('');
    const counts = { '목': 0, '화': 0, '토': 0, '금': 0, '수': 0 };
    chars.forEach(c => {
        if (OHANG_INFO[c]) counts[OHANG_INFO[c].ohaeng]++;
    });
    return counts;
}

function calculateGunghap(saju1, saju2) {
    const ohaeng1 = getOhaengCount(saju1);
    const ohaeng2 = getOhaengCount(saju2);
    let score = 70;
    const relations = [];
    const jiji1 = saju1.dayPillar[1];
    const jiji2 = saju2.dayPillar[1];

    for (const type in JIJI_RELATIONS) {
        if (JIJI_RELATIONS[type].pairs[jiji1] === jiji2 || JIJI_RELATIONS[type].pairs[jiji2] === jiji1) {
            relations.push({ type, jiji: `${jiji1}-${jiji2}` });
            if (type === '합') score += 15;
            if (type === '충') score -= 15;
            if (type === '원진') score -= 10;
        }
    }
    return { score: Math.min(100, Math.max(0, score)), ohaeng1, ohaeng2, relations };
}

function generateGunghapHTML(data, p1, p2) {
    let html = `<h3>궁합 분석 결과</h3>`;
    html += `<div class="gunghap-summary"><h4>종합 점수: ${data.score}점</h4><p>두 분의 일지 관계를 바탕으로 분석한 결과입니다.</p></div>`;
    
    html += `<h4>지지(地支) 관계</h4><div class="jiji-relations-container">`;
    data.relations.forEach(rel => {
        html += `
            <div class="jiji-relation-item rel-${rel.type}">
                <span class="rel-type">${rel.type}</span>
                <span class="rel-jiji">(${rel.jiji})</span>
                <span class="rel-desc">${JIJI_RELATIONS[rel.type].desc}</span>
            </div>
        `;
    });
    if (data.relations.length === 0) html += `<p style="text-align:center;">일지 사이에 특별한 관계가 없습니다. 무난한 궁합입니다.</p>`;
    html += `</div>`;
    return html;
}
