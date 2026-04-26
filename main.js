// 요소 가져오기...
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
const SOLAR_TERMS = { 1: { 소한: 5, 대한: 20 }, 2: { 입춘: 4, 우수: 19 }, 3: { 경칩: 5, 춘분: 20 }, 4: { 청명: 5, 곡우: 20 }, 5: { 입하: 5, 소만: 21 }, 6: { 망종: 5, 하지: 21 }, 7: { 소서: 7, 대서: 22 }, 8: { 입추: 7, 추분: 23 }, 9: { 백로: 7, 추분: 23 }, 10: { 한로: 8, 상강: 23 }, 11: { 입동: 7, 소설: 22 }, 12: { 대설: 7, 동지: 21 }};
const OHANG_INFO = {
    '갑':{ohaeng:'목',eumyang:'양'},'을':{ohaeng:'목',eumyang:'음'},'병':{ohaeng:'화',eumyang:'양'},'정':{ohaeng:'화',eumyang:'음'},'무':{ohaeng:'토',eumyang:'양'},'기':{ohaeng:'토',eumyang:'음'},'경':{ohaeng:'금',eumyang:'양'},'신':{ohaeng:'금',eumyang:'음'},'임':{ohaeng:'수',eumyang:'양'},'계':{ohaeng:'수',eumyang:'음'},
    '인':{ohaeng:'목',eumyang:'양'},'묘':{ohaeng:'목',eumyang:'음'},'사':{ohaeng:'화',eumyang:'양'},'오':{ohaeng:'화',eumyang:'음'},'진':{ohaeng:'토',eumyang:'양'},'술':{ohaeng:'토',eumyang:'양'},'축':{ohaeng:'토',eumyang:'음'},'미':{ohaeng:'토',eumyang:'음'},'신':{ohaeng:'금',eumyang:'양'},'유':{ohaeng:'금',eumyang:'음'},'해':{ohaeng:'수',eumyang:'양'},'자':{ohaeng:'수',eumyang:'음'}
};
const MONTH_JIJI_ORDER = ['인','묘','진','사','오','미','신','유','술','해','자','축'];
const HOUR_JIJI_ORDER = ['자','축','인','묘','진','사','오','미','신','유','술','해'];

// --- 신살 및 궁합 데이터 ---
const SAMHAP_GROUP = { '해': '해묘미', '묘': '해묘미', '미': '해묘미', '인': '인오술', '오': '인오술', '술': '인오술', '사': '사유축', '유': '사유축', '축': '사유축', '신': '신자진', '자': '신자진', '진': '신자진' };
const SINSAL_INFO = { /* ... Sinsal data from previous step ... */ };
const JIJI_RELATIONS = {
    합: { desc: "서로 잘 맞고 이끌리는 긍정적인 관계입니다.", pairs: { 자: '축', 인: '해', 묘: '술', 진: '유', 사: '신', 오: '미' } },
    충: { desc: "부딪히고 다툼이 발생하기 쉬운 관계입니다.", pairs: { 자: '오', 축: '미', 인: '신', 묘: '유', 진: '술', 사: '해' } },
    원진: { desc: "이유 없이 미워하고 원망하기 쉬운 관계입니다.", pairs: { 자: '미', 축: '오', 인: '유', 묘: '신', 진: '해', 사: '술' } },
};

// --- 이벤트 리스너 설정 ---
document.addEventListener('DOMContentLoaded', populateHourOptions);
// ... other listeners ...

calculateBtn.addEventListener('click', () => {
    const person1 = getPersonInfo('1');
    if (!person1) return;

    resultContainer.style.display = 'block';

    const sajuData1 = calculateSaju(person1.year, person1.month, person1.day, person1.hour);
    document.getElementById('basic').innerHTML = generateBasicSajuHTML(sajuData1, '나', person1);

    const daewoonData = calculateDaewoon(sajuData1, person1);
    document.getElementById('daewoon').innerHTML = generateDaewoonHTML(daewoonData);

    const sinsalData = calculateSinsal(sajuData1);
    document.getElementById('sinsal').innerHTML = generateSinsalHTML(sinsalData);

    const isGunghapMode = person2Container.style.display === 'block';
    document.querySelector('[data-tab="gunghap"]').style.display = isGunghapMode ? 'inline-block' : 'none';
    if (isGunghapMode) {
        const person2 = getPersonInfo('2');
        if (!person2) {
             document.getElementById('gunghap').innerHTML = `<p style="color:red; text-align:center;">상대방 정보를 모두 입력해주세요.</p>`;
             return;
        }
        const sajuData2 = calculateSaju(person2.year, person2.month, person2.day, person2.hour);
        const gunghapData = calculateGunghap(sajuData1, sajuData2);
        document.getElementById('gunghap').innerHTML = generateGunghapHTML(gunghapData, person1, person2);
    }
});

// --- 궁합 계산 함수 ---
function calculateGunghap(saju1, saju2) {
    const ohaeng1 = getOhaengCount(saju1);
    const ohaeng2 = getOhaengCount(saju2);

    // 1. 오행 궁합 점수
    let score = 50; // 기본 점수
    const ohaengs = ['목', '화', '토', '금', '수'];
    ohaengs.forEach(o => {
        // 내가 부족한 오행을 상대가 가졌을 때
        if (ohaeng1[o] === 0 && ohaeng2[o] > 0) score += 10;
        // 상대가 부족한 오행을 내가 가졌을 때
        if (ohaeng2[o] === 0 && ohaeng1[o] > 0) score += 10;
        // 내가 과한 오행을 상대가 조절해줄 때 (설기)
        // (간단한 로직: 목다 -> 화, 화다 -> 토, 토다 -> 금, 금다 -> 수, 수다 -> 목)
    });
    score = Math.min(100, score); // 최대 100점

    // 2. 지지 관계 분석
    const relations = [];
    const pillars = ['년주', '월주', '일주', '시주'];
    const jiji1 = [saju1.yearPillar[1], saju1.monthPillar[1], saju1.dayPillar[1], saju1.hourPillar[1]];
    const jiji2 = [saju2.yearPillar[1], saju2.monthPillar[1], saju2.dayPillar[1], saju2.hourPillar[1]];

    for (let i = 0; i < 4; i++) {
        for (const type in JIJI_RELATIONS) {
            const pair = JIJI_RELATIONS[type].pairs[jiji1[i]];
            if (pair && pair === jiji2[i]) {
                relations.push({ type, pillar: pillars[i], jiji: `${jiji1[i]}-${jiji2[i]}` });
            }
             // 반대 케이스도 체크 (e.g. 축-자 합)
            const reversePair = Object.keys(JIJI_RELATIONS[type].pairs).find(key => JIJI_RELATIONS[type].pairs[key] === jiji1[i]);
            if (reversePair && reversePair === jiji2[i] && !relations.some(r => r.jiji === `${jiji2[i]}-${jiji1[i]}`)) {
                 relations.push({ type, pillar: pillars[i], jiji: `${jiji1[i]}-${jiji2[i]}` });
            }
        }
    }

    return { ohaengScore: score, ohaeng1, ohaeng2, relations };
}

// --- HTML 생성 함수 ---
function generateGunghapHTML(data, p1, p2) {
    let html = `<h3>궁합 분석 결과</h3>`;

    // 1. 오행 분석
    html += `<h4>오행 궁합 (점수: ${data.ohaengScore}점)</h4>`;
    html += `<p class="gunghap-summary">서로에게 부족한 오행을 채워주고, 넘치는 기운을 조절해주는 관계일수록 좋은 궁합입니다.</p>`;
    html += `<div class="gunghap-ohaeng-container">`;
    html += generateOhaengTable('나', data.ohaeng1);
    html += generateOhaengTable('상대', data.ohaeng2);
    html += `</div>`;

    // 2. 지지 관계
    html += `<h4>지지(地支) 관계</h4>`;
    if (data.relations.length > 0) {
        html += `<div class="jiji-relations-container">`;
        data.relations.forEach(rel => {
            html += `
                <div class="jiji-relation-item rel-${rel.type}">
                    <span class="rel-pillar">${rel.pillar}</span>
                    <span class="rel-type">${rel.type}</span>
                    <span class="rel-jiji">(${rel.jiji})</span>
                    <span class="rel-desc">${JIJI_RELATIONS[rel.type].desc}</span>
                </div>
            `;
        });
        html += `</div>`;
    } else {
        html += `<p style="text-align:center;">두 사람의 지지(地支) 사이에 특별한 합, 충, 원진 관계가 없습니다.</p>`;
    }

    // 3. 종합 총평
    html += `<h4>종합 총평</h4>`;
    let summaryText = `오행 궁합 점수는 ${data.ohaengScore}점입니다. `; 
    if (data.relations.some(r => r.type === '합')) summaryText += "서로 이끌리는 긍정적인 기운(합)이 있네요. ";
    if (data.relations.some(r => r.type === '충')) summaryText += "하지만 때로는 부딪히는 부분(충)도 있을 수 있습니다. ";
    if (data.relations.some(r => r.type === '원진')) summaryText += "이유 없이 서운한 감정(원진)이 생길 수 있으니, 서로의 마음을 잘 헤아려주는 노력이 필요합니다. ";
    if (data.relations.length === 0) summaryText += "지지 관계에서 특별한 충돌은 없지만, 그만큼 강하게 이끌리는 힘도 약할 수 있습니다. "
    summaryText += "서로를 이해하고 배려하는 마음이 가장 중요합니다."
    html += `<p class="gunghap-summary">${summaryText}</p>`;
    
    return html;
}

function generateOhaengTable(title, ohaengCount) {
    let table = `<table class="gunghap-ohaeng-table"><caption>${title}</caption><thead><tr><th>목</th><th>화</th><th>토</th><th>금</th><th>수</th></tr></thead><tbody><tr>`;
    ['목', '화', '토', '금', '수'].forEach(o => {
        table += `<td>${ohaengCount[o]}</td>`;
    });
    table += `</tr></tbody></table>`;
    return table;
}

// --- 유틸리티 함수 ---
function getOhaengCount(sajuData) {
    const pillars = [sajuData.hourPillar, sajuData.dayPillar, sajuData.monthPillar, sajuData.yearPillar];
    const ohaengCount = { '목': 0, '화': 0, '토': 0, '금': 0, '수': 0 };
    pillars.forEach(pillar => {
        ohaengCount[OHANG_INFO[pillar.charAt(0)].ohaeng]++;
        ohaengCount[OHANG_INFO[pillar.charAt(1)].ohaeng]++;
    });
    return ohaengCount;
}

// ... (rest of the functions: getPersonInfo, populateHourOptions, calculateSaju, etc.) ...
// Note: The SINSAL_INFO object should be filled in from the previous step's code.

function getPersonInfo(num) { /* ... */ }
function populateHourOptions() { /* ... */ }
function formatOhaeng(char) { /* ... */ }
function calculateSaju(year, month, day, hour) { /* ... */ }
function getYearPillar(year, month, day) { /* ... */ }
function getMonthPillar(year, month, day) { /* ... */ }
function getDayPillar(year, month, day) { /* ... */ }
function getHourPillar(dayPillar, hour) { /* ... */ }
function getJeolipDate(year, month) { /* ... */ }
function calculateDaewoon(sajuData, person) { /* ... */ }
function generateBasicSajuHTML(sajuData, title, person) { /* ... */ }
function generateDaewoonHTML(daewoonData) { /* ... */ }
function calculateSinsal(sajuData) { /* ... */ }
function generateSinsalHTML(sinsalData) { /* ... */ }
