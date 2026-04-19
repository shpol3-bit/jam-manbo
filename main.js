// Multi-language Support (i18n)
const translations = {
    ko: {
        "nav-fortune": "운세/사주",
        "nav-psychology": "심리테스트",
        "nav-lotto": "로또",
        "home-title": "인사이트마스터",
        "home-subtitle": "당신의 삶에 깊은 통찰을 제공하는 운세와 심리 탐험의 공간입니다.",
        "home-fortune-desc": "생년월일 기반의 정밀한 사주 분석과 오늘의 운세를 확인하세요.",
        "home-psy-desc": "무의식 속 당신의 진정한 모습과 미래를 심리 테스트로 알아보세요.",
        "home-lotto-desc": "과학적 난수 알고리즘을 활용한 오늘의 행운 번호를 생성합니다.",
        "fortune-title": "오늘의 사주 & 운세",
        "fortune-subtitle": "태어난 정보를 입력하여 당신의 우주적 설계를 확인하세요.",
        "label-birthdate": "생년월일",
        "label-birthtime": "태어난 시간",
        "btn-fortune": "운명 확인하기",
        "btn-back": "뒤로 가기",
        "psy-title": "심리 통찰 테스트",
        "psy-subtitle": "시각적 선택을 통해 마음의 지도를 탐험하세요.",
        "test-ocean-title": "바다의 길",
        "test-ocean-desc": "당신이 선택한 바닷길은 커리어에 대해 무엇을 말해줄까요?",
        "test-forest-title": "숲의 선택",
        "test-forest-desc": "숲길을 걷는 상상을 통해 당신의 진정한 성격을 발견하세요.",
        "btn-start": "테스트 시작",
        "lotto-title": "로또 행운 번호",
        "lotto-subtitle": "추가 행운이 필요하신가요? 난수 생성 알고리즘으로 번호를 뽑아보세요.",
        "btn-lotto": "행운 번호 생성",
        "footer-tagline": "우주의 암호를 풀어 당신의 통찰을 돕습니다.",
        "footer-privacy": "개인정보처리방침",
        "footer-terms": "이용약관",
        "footer-about": "소개",
        "footer-contact": "문의하기",
        "footer-play-responsibly": "책임감 있게 즐겨주세요.",
        "academy-title": "통찰의 과학",
        "academy-saju-h": "사주와 만세력의 이해",
        "academy-saju-p": "사주(四柱)는 태어난 연, 월, 일, 시의 네 기둥을 의미하며, 동양 철학에서는 이를 통해 한 사람의 타고난 기운과 흐름을 분석합니다. 오행(목, 화, 토, 금, 수)의 균형을 맞추는 것은 단순히 미래를 점치는 것을 넘어, 자기 자신을 더 깊이 이해하고 조화로운 삶을 사는 지혜를 제공합니다.",
        "academy-psy-h": "심리 테스트의 가치",
        "academy-psy-p": "현대 심리학의 투사 검사(Projective Test)는 모호한 자극에 대한 개인의 선택을 분석하여 무의식적인 가치관과 감정 상태를 파악합니다. 인사이트마스터의 테스트들은 이러한 심리학적 원리를 바탕으로 재미와 자아 성찰의 기회를 동시에 제공합니다."
    },
    en: {
        "nav-fortune": "Fortune",
        "nav-psychology": "Psyche Test",
        "nav-lotto": "Lotto",
        "home-title": "InsightMaster",
        "home-subtitle": "Exploring your destiny through cosmic alignment and psychological depth.",
        "home-fortune-desc": "Get precise Saju analysis and daily fortune based on your birth details.",
        "home-psy-desc": "Discover your true subconscious self through curated psychological tests.",
        "home-lotto-desc": "Generate your lucky numbers using our scientific random algorithm.",
        "fortune-title": "Saju & Daily Fortune",
        "fortune-subtitle": "Unlock your cosmic blueprint by entering your birth information.",
        "label-birthdate": "Birth Date",
        "label-birthtime": "Birth Time",
        "btn-fortune": "Reveal Destiny",
        "btn-back": "Go Back",
        "psy-title": "Psychological Insights",
        "psy-subtitle": "Navigate your mind's map through visual choices.",
        "test-ocean-title": "The Ocean Path",
        "test-ocean-desc": "What does your choice of path say about your career future?",
        "test-forest-title": "Forest Selection",
        "test-forest-desc": "Discover your true personality through a journey in the woods.",
        "btn-start": "Start Test",
        "lotto-title": "Lotto Lucky Numbers",
        "lotto-subtitle": "Need extra luck? Generate sets using our scientific algorithm.",
        "btn-lotto": "Generate Numbers",
        "footer-tagline": "Decoding the universe for your personal growth.",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Service",
        "footer-about": "About Us",
        "footer-contact": "Contact Us",
        "footer-play-responsibly": "Play Responsibly.",
        "academy-title": "Science of Insight",
        "academy-saju-h": "Understanding Saju",
        "academy-saju-p": "Saju represents the four pillars of birth: Year, Month, Day, and Hour. In Eastern philosophy, it analyzes a person's life energy and flow. Balancing the Five Elements (Wood, Fire, Earth, Metal, Water) provides wisdom for self-understanding and a balanced life.",
        "academy-psy-h": "Value of Psyche Tests",
        "academy-psy-p": "Modern Projective Tests analyze individual choices to ambiguous stimuli to uncover subconscious values. InsightMaster's tests use these psychological principles to offer both fun and opportunities for self-reflection."
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'ko';
        this.langBtn = document.getElementById('lang-btn');
        this.init();
    }

    init() {
        this.updateText();
        this.langBtn.addEventListener('click', () => {
            this.currentLang = this.currentLang === 'ko' ? 'en' : 'ko';
            localStorage.setItem('lang', this.currentLang);
            this.updateText();
        });
    }

    updateText() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) {
                el.textContent = translations[this.currentLang][key];
            }
        });
        this.langBtn.textContent = this.currentLang === 'ko' ? 'English' : '한국어';
        document.documentElement.lang = this.currentLang;
        window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: this.currentLang } }));
    }
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
    window.scrollTo(0, 0);
}

class FortuneManager {
    constructor() {
        this.form = document.getElementById('fortune-form');
        this.resultsContainer = document.getElementById('fortune-results');
        this.yearSelect = document.getElementById('birth-year');
        this.monthSelect = document.getElementById('birth-month');
        this.daySelect = document.getElementById('birth-day');
        this.meridiemSelect = document.getElementById('birth-meridiem');
        this.hourSelect = document.getElementById('birth-hour');
        this.minuteSelect = document.getElementById('birth-minute');
        this.currentReport = null;
        this.init();
    }

    init() {
        this.populateBirthControls();
        [this.yearSelect, this.monthSelect].forEach(select => {
            if (select) select.addEventListener('change', () => this.populateDays());
        });
        window.addEventListener('languagechange', () => {
            this.populateBirthControls(true);
            if (this.currentReport) {
                const birthInfo = this.getBirthInfo();
                if (birthInfo) {
                    this.currentReport = this.calculate(birthInfo);
                    this.displayResults(this.currentReport);
                }
            }
        });
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.generateFortune();
            });
        }
    }

    generateFortune() {
        const birthInfo = this.getBirthInfo();
        if (!birthInfo) return;
        const results = this.calculate(birthInfo);
        this.currentReport = results;
        this.displayResults(results);
    }

    populateBirthControls(keepValues = false) {
        if (!this.yearSelect || !this.monthSelect || !this.daySelect) return;

        const lang = document.documentElement.lang || 'ko';
        const currentYear = new Date().getFullYear();
        const previousValues = keepValues ? {
            year: this.yearSelect.value,
            month: this.monthSelect.value,
            day: this.daySelect.value,
            meridiem: this.meridiemSelect.value,
            hour: this.hourSelect.value,
            minute: this.minuteSelect.value
        } : {};

        this.yearSelect.innerHTML = `<option value="">${lang === 'ko' ? '연도' : 'Year'}</option>`;
        for (let year = currentYear; year >= 1920; year--) {
            this.yearSelect.insertAdjacentHTML('beforeend', `<option value="${year}">${year}${lang === 'ko' ? '년' : ''}</option>`);
        }

        this.monthSelect.innerHTML = `<option value="">${lang === 'ko' ? '월' : 'Month'}</option>`;
        for (let month = 1; month <= 12; month++) {
            this.monthSelect.insertAdjacentHTML('beforeend', `<option value="${month}">${month}${lang === 'ko' ? '월' : ''}</option>`);
        }

        this.meridiemSelect.innerHTML = `
            <option value="am">${lang === 'ko' ? '오전' : 'AM'}</option>
            <option value="pm">${lang === 'ko' ? '오후' : 'PM'}</option>
        `;

        this.hourSelect.innerHTML = '';
        for (let hour = 1; hour <= 12; hour++) {
            this.hourSelect.insertAdjacentHTML('beforeend', `<option value="${hour}">${hour}${lang === 'ko' ? '시' : ''}</option>`);
        }

        this.minuteSelect.innerHTML = '';
        for (let minute = 0; minute < 60; minute += 10) {
            const padded = String(minute).padStart(2, '0');
            this.minuteSelect.insertAdjacentHTML('beforeend', `<option value="${minute}">${padded}${lang === 'ko' ? '분' : ''}</option>`);
        }

        this.yearSelect.value = previousValues.year || '1990';
        this.monthSelect.value = previousValues.month || '1';
        this.populateDays(previousValues.day || '1');
        this.meridiemSelect.value = previousValues.meridiem || 'am';
        this.hourSelect.value = previousValues.hour || '9';
        this.minuteSelect.value = previousValues.minute || '0';
    }

    populateDays(preferredDay) {
        if (!this.daySelect) return;
        const lang = document.documentElement.lang || 'ko';
        const year = parseInt(this.yearSelect.value, 10) || new Date().getFullYear();
        const month = parseInt(this.monthSelect.value, 10) || 1;
        const previousDay = preferredDay || this.daySelect.value || '1';
        const lastDay = new Date(year, month, 0).getDate();

        this.daySelect.innerHTML = `<option value="">${lang === 'ko' ? '일' : 'Day'}</option>`;
        for (let day = 1; day <= lastDay; day++) {
            this.daySelect.insertAdjacentHTML('beforeend', `<option value="${day}">${day}${lang === 'ko' ? '일' : ''}</option>`);
        }
        this.daySelect.value = String(Math.min(parseInt(previousDay, 10) || 1, lastDay));
    }

    getBirthInfo() {
        const year = parseInt(this.yearSelect.value, 10);
        const month = parseInt(this.monthSelect.value, 10);
        const day = parseInt(this.daySelect.value, 10);
        if (!year || !month || !day) return null;

        const meridiem = this.meridiemSelect.value;
        const hour12 = parseInt(this.hourSelect.value, 10) || 12;
        const minute = parseInt(this.minuteSelect.value, 10) || 0;
        let hour = hour12 % 12;
        if (meridiem === 'pm') hour += 12;

        return { year, month, day, hour, minute, meridiem, hour12 };
    }

    calculate(birthInfo) {
        const { year, month, day, hour, minute } = birthInfo;
        const seed = day + month + (year % 100) + hour + minute;

        const lang = document.documentElement.lang || 'ko';
        const stems = [
            { ko: '갑', en: 'Gap', element: 'wood', yinYang: '양' },
            { ko: '을', en: 'Eul', element: 'wood', yinYang: '음' },
            { ko: '병', en: 'Byeong', element: 'fire', yinYang: '양' },
            { ko: '정', en: 'Jeong', element: 'fire', yinYang: '음' },
            { ko: '무', en: 'Mu', element: 'earth', yinYang: '양' },
            { ko: '기', en: 'Gi', element: 'earth', yinYang: '음' },
            { ko: '경', en: 'Gyeong', element: 'metal', yinYang: '양' },
            { ko: '신', en: 'Sin', element: 'metal', yinYang: '음' },
            { ko: '임', en: 'Im', element: 'water', yinYang: '양' },
            { ko: '계', en: 'Gye', element: 'water', yinYang: '음' }
        ];
        const branches = [
            { ko: '자', en: 'Ja', element: 'water' }, { ko: '축', en: 'Chuk', element: 'earth' },
            { ko: '인', en: 'In', element: 'wood' }, { ko: '묘', en: 'Myo', element: 'wood' },
            { ko: '진', en: 'Jin', element: 'earth' }, { ko: '사', en: 'Sa', element: 'fire' },
            { ko: '오', en: 'O', element: 'fire' }, { ko: '미', en: 'Mi', element: 'earth' },
            { ko: '신', en: 'Sin', element: 'metal' }, { ko: '유', en: 'Yu', element: 'metal' },
            { ko: '술', en: 'Sul', element: 'earth' }, { ko: '해', en: 'Hae', element: 'water' }
        ];
        const elementNames = {
            wood: lang === 'ko' ? '목(木)' : 'Wood',
            fire: lang === 'ko' ? '화(火)' : 'Fire',
            earth: lang === 'ko' ? '토(土)' : 'Earth',
            metal: lang === 'ko' ? '금(金)' : 'Metal',
            water: lang === 'ko' ? '수(水)' : 'Water'
        };
        const elementTone = {
            wood: lang === 'ko' ? '성장, 기획, 확장성' : 'growth, planning, expansion',
            fire: lang === 'ko' ? '표현, 추진력, 인정욕구' : 'expression, drive, recognition',
            earth: lang === 'ko' ? '안정, 책임, 조율능력' : 'stability, duty, coordination',
            metal: lang === 'ko' ? '판단, 원칙, 실행력' : 'judgment, principle, execution',
            water: lang === 'ko' ? '지혜, 유연성, 학습력' : 'wisdom, flexibility, learning'
        };
        const mod = (number, divisor) => ((number % divisor) + divisor) % divisor;

        const yearStem = stems[mod(year - 4, 10)];
        const yearBranch = branches[mod(year - 4, 12)];
        const monthStem = stems[mod(year * 12 + month + 3, 10)];
        const monthBranch = branches[mod(month + 1, 12)];
        const dayIndex = Math.floor(new Date(year, month - 1, day).getTime() / 86400000);
        const dayStem = stems[mod(dayIndex + 4, 10)];
        const dayBranch = branches[mod(dayIndex + 2, 12)];
        const hourBranchIndex = Math.floor(((hour + 1) % 24) / 2);
        const hourStem = stems[mod(dayIndex * 12 + hourBranchIndex, 10)];
        const hourBranch = branches[hourBranchIndex];

        const scores = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
        [yearStem, monthStem, dayStem, hourStem].forEach(stem => scores[stem.element] += 2);
        [yearBranch, monthBranch, dayBranch, hourBranch].forEach(branch => scores[branch.element] += 1);
        const sortedElements = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        const mainElement = sortedElements[0];
        const supportElement = sortedElements[1];
        const weakElement = sortedElements[4];

        const pillars = [
            { key: 'year', ko: '년주', en: 'Year Pillar', stem: yearStem, branch: yearBranch },
            { key: 'month', ko: '월주', en: 'Month Pillar', stem: monthStem, branch: monthBranch },
            { key: 'day', ko: '일주', en: 'Day Pillar', stem: dayStem, branch: dayBranch },
            { key: 'hour', ko: '시주', en: 'Hour Pillar', stem: hourStem, branch: hourBranch }
        ];

        const formatPillar = pillar => `${lang === 'ko' ? pillar.stem.ko : pillar.stem.en}${lang === 'ko' ? pillar.branch.ko : pillar.branch.en}`;
        const birthLabel = lang === 'ko'
            ? `${year}년 ${month}월 ${day}일 ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
            : `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

        if (lang === 'ko') {
            return {
                birthLabel,
                pillars,
                scores,
                categories: [
                    {
                        id: 'saju',
                        title: '사주 원국',
                        summary: `${formatPillar(pillars[0])}·${formatPillar(pillars[1])}·${formatPillar(pillars[2])}·${formatPillar(pillars[3])}의 흐름으로 봅니다.`,
                        paragraphs: [
                            `입력한 출생 정보는 ${birthLabel}이며, 간이 만세력 기준으로 년주는 ${formatPillar(pillars[0])}, 월주는 ${formatPillar(pillars[1])}, 일주는 ${formatPillar(pillars[2])}, 시주는 ${formatPillar(pillars[3])}로 해석됩니다. 년주는 바깥 환경과 성장 배경, 월주는 사회적 역할과 생활 리듬, 일주는 나의 중심 기질, 시주는 후반부의 관심사와 내면의 방향을 보여줍니다.`,
                            `이 사주는 ${elementNames[mainElement]} 기운이 가장 강하게 드러나고, ${elementNames[supportElement]}이 보조 축을 이룹니다. 강한 기운은 장점이 가장 빨리 발현되는 통로이지만 과하면 고집, 조급함, 피로감으로 나타날 수 있습니다. 반대로 ${elementNames[weakElement]} 기운은 의식적으로 보완할 때 전체 균형이 좋아지는 지점입니다.`,
                            `일간은 ${dayStem.ko}(${elementNames[dayStem.element]})의 성향을 띠므로, 중요한 선택을 할 때 스스로 납득할 수 있는 기준을 세우는 것이 핵심입니다. 주변의 기대에 맞추기보다 내가 감당할 수 있는 속도와 방식으로 움직일 때 운의 흐름이 안정됩니다.`
                        ]
                    },
                    {
                        id: 'personality',
                        title: '성향과 강점',
                        summary: `${elementTone[mainElement]}이 성격의 중심축입니다.`,
                        paragraphs: [
                            `${elementNames[mainElement]}이 강한 사람은 ${elementTone[mainElement]}이 뚜렷합니다. 첫인상보다 시간이 지날수록 실력이 드러나는 편이며, 본인이 책임진 영역에서는 쉽게 손을 놓지 않습니다. 그래서 단기적인 칭찬보다 장기적으로 신뢰가 쌓이는 환경에서 더 큰 힘을 발휘합니다.`,
                            `${elementNames[supportElement]}이 보조하기 때문에 생각만 하고 멈추기보다 실제 행동으로 옮기는 힘도 함께 있습니다. 다만 결정이 빨라질수록 감정의 잔여물을 놓치기 쉬우므로, 중요한 대화에서는 결론보다 과정 설명을 먼저 해주는 것이 좋습니다.`,
                            `약한 ${elementNames[weakElement]} 기운은 삶의 균형을 잡는 힌트입니다. 이 기운을 보완하려면 낯선 사람, 새로운 장소, 다른 방식의 공부처럼 평소 회피하던 영역을 조금씩 경험하는 것이 좋습니다. 운을 바꾸는 가장 현실적인 방법은 큰 사건을 기다리는 것이 아니라 매일의 선택 패턴을 조정하는 데 있습니다.`
                        ]
                    },
                    {
                        id: 'career',
                        title: '일과 재능',
                        summary: '성과가 나는 방식과 피해야 할 업무 리듬을 봅니다.',
                        paragraphs: [
                            `이 사주는 혼자 몰입하는 시간과 사람 사이에서 조율하는 시간이 모두 필요합니다. 월주의 ${formatPillar(pillars[1])} 흐름은 사회적 역할에서 책임감이 커지는 구조를 보여주며, 맡은 일을 체계화하거나 흩어진 문제를 정리할 때 능력이 잘 드러납니다.`,
                            `잘 맞는 업무 방식은 기준을 세우고, 우선순위를 정하고, 결과물을 눈에 보이게 만드는 일입니다. 기획, 운영, 분석, 교육, 상담, 콘텐츠, 관리 업무처럼 경험이 쌓일수록 깊이가 생기는 분야에서 안정적인 성취가 가능합니다.`,
                            `주의할 점은 모든 문제를 혼자 떠안는 습관입니다. 책임감이 강한 사주는 일을 잘해서 일이 더 몰리는 패턴이 생기기 쉽습니다. 역할 범위를 문서화하고, 거절해야 할 일과 위임할 일을 구분하면 커리어 운이 훨씬 부드럽게 풀립니다.`
                        ]
                    },
                    {
                        id: 'wealth',
                        title: '금전운',
                        summary: seed % 2 === 0 ? '축적형 재물운이 강합니다.' : '변동형 수익 기회가 들어옵니다.',
                        paragraphs: [
                            seed % 2 === 0
                                ? '금전 흐름은 한 번에 크게 들어오기보다 꾸준히 쌓이는 축적형에 가깝습니다. 고정 수입, 반복 매출, 장기 저축, 안정적인 투자 원칙이 잘 맞고, 빠른 수익을 좇을수록 판단 피로가 커질 수 있습니다.'
                                : '금전 흐름은 새로운 제안, 부업, 프로젝트성 수익처럼 변동성이 있는 형태와 인연이 있습니다. 다만 들어오는 속도만큼 나가는 속도도 빨라질 수 있으므로 수익이 생긴 즉시 목적별로 분리해두는 습관이 필요합니다.',
                            `${elementNames[weakElement]}이 약한 구조라 금전 판단에서 빠지기 쉬운 부분은 정보 검증입니다. 남의 말, 분위기, 급한 제안에 바로 반응하기보다 숫자와 조건을 다시 확인해야 합니다. 특히 계약, 대출, 투자성 지출은 하루를 넘겨 재검토하는 편이 안전합니다.`,
                            `재물운을 키우는 핵심은 돈을 벌 방법보다 돈이 새는 구멍을 먼저 찾는 것입니다. 월별 고정비, 감정 소비, 체면 지출을 줄이면 같은 수입에서도 체감 운이 크게 좋아집니다.`
                        ]
                    },
                    {
                        id: 'romance',
                        title: '연애와 인간관계',
                        summary: '신뢰가 쌓일수록 깊어지는 관계운입니다.',
                        paragraphs: [
                            `관계에서는 가볍게 시작해도 마음이 열리면 오래 책임지려는 성향이 강합니다. 상대가 내 진심을 알아주지 않는다고 느끼면 말수가 줄거나 혼자 정리해버릴 수 있으므로, 서운함을 결론처럼 말하기보다 현재 감정과 원하는 행동을 구체적으로 표현하는 것이 좋습니다.`,
                            `잘 맞는 사람은 속도를 존중하고 약속을 가볍게 여기지 않는 사람입니다. 화려한 이벤트보다 일상의 안정감, 반복되는 배려, 생활 습관의 조화가 관계 만족도를 크게 좌우합니다.`,
                            `인간관계에서는 모든 사람에게 좋은 사람이 되려는 부담을 내려놓아야 합니다. 가까운 사람과 적당한 거리를 유지하는 사람을 구분하면 관계 피로가 줄고, 정말 중요한 인연에 더 깊게 집중할 수 있습니다.`
                        ]
                    },
                    {
                        id: 'today',
                        title: '오늘의 운세',
                        summary: seed % 3 === 0 ? '정리와 결정에 유리한 날입니다.' : seed % 3 === 1 ? '사람을 통해 기회가 열리는 날입니다.' : '속도보다 균형이 중요한 날입니다.',
                        paragraphs: [
                            seed % 3 === 0
                                ? '오늘은 미뤄둔 일을 정리하고 기준을 다시 세우기에 좋습니다. 특히 일정, 돈, 약속처럼 흐트러져 있던 부분을 바로잡으면 다음 기회가 들어올 자리가 생깁니다.'
                                : seed % 3 === 1
                                    ? '오늘은 혼자 해결하려던 문제에 사람의 도움이 들어올 수 있습니다. 짧은 연락, 회의, 우연한 대화에서 실마리가 생기므로 너무 닫힌 태도보다 질문을 던지는 태도가 유리합니다.'
                                    : '오늘은 무리하게 밀어붙이기보다 몸과 마음의 속도를 맞추는 것이 중요합니다. 해야 할 일을 줄이는 것이 게으름이 아니라 결과의 질을 높이는 선택이 될 수 있습니다.',
                            `행운을 끌어올리는 행동은 ${elementNames[weakElement]} 기운을 보완하는 일입니다. 정리, 산책, 기록, 물 마시기, 조용한 대화처럼 단순하지만 반복 가능한 행동을 하나 정해 실천해보세요.`,
                            `주의할 점은 감정이 올라온 상태에서 바로 결정하는 것입니다. 오늘의 판단은 잠깐 멈춘 뒤 다시 보면 더 정확해집니다.`
                        ]
                    }
                ]
            };
        }

        return {
            birthLabel,
            pillars,
            scores,
            categories: [
                {
                    id: 'saju',
                    title: 'Birth Chart',
                    summary: `Read through ${formatPillar(pillars[0])}, ${formatPillar(pillars[1])}, ${formatPillar(pillars[2])}, and ${formatPillar(pillars[3])}.`,
                    paragraphs: [
                        `Your birth data is ${birthLabel}. In this simplified Saju reading, the year pillar is ${formatPillar(pillars[0])}, the month pillar is ${formatPillar(pillars[1])}, the day pillar is ${formatPillar(pillars[2])}, and the hour pillar is ${formatPillar(pillars[3])}.`,
                        `The strongest element is ${elementNames[mainElement]}, supported by ${elementNames[supportElement]}. Your weaker balancing element is ${elementNames[weakElement]}, so consciously building that quality helps stabilize the whole chart.`,
                        `The day stem, ${dayStem.en}, points to the way you make core choices. You do best when your decisions match a standard you can personally accept.`
                    ]
                },
                {
                    id: 'personality',
                    title: 'Personality',
                    summary: `${elementTone[mainElement]} shapes your main temperament.`,
                    paragraphs: [
                        `A strong ${elementNames[mainElement]} pattern emphasizes ${elementTone[mainElement]}. Your strengths show more clearly over time than at first glance.`,
                        `${elementNames[supportElement]} adds practical momentum, helping you turn ideas into visible results.`,
                        `To balance weaker ${elementNames[weakElement]}, intentionally try unfamiliar routines, people, places, or study topics.`
                    ]
                },
                {
                    id: 'career',
                    title: 'Career',
                    summary: 'This section reads your best working rhythm.',
                    paragraphs: [
                        `The month pillar ${formatPillar(pillars[1])} suggests strong responsibility in social roles. You are effective when organizing scattered problems and making standards clear.`,
                        `Planning, operations, analysis, education, counseling, content, and management can suit this chart because depth grows through repeated experience.`,
                        `Avoid taking on every problem alone. Clear role boundaries and delegation will improve your career flow.`
                    ]
                },
                {
                    id: 'wealth',
                    title: 'Wealth',
                    summary: seed % 2 === 0 ? 'Your wealth pattern favors accumulation.' : 'Your money pattern includes variable opportunities.',
                    paragraphs: [
                        seed % 2 === 0
                            ? 'Your money flow is closer to steady accumulation than sudden windfalls. Stable income, recurring revenue, savings, and disciplined investing fit well.'
                            : 'Your money flow can come through new proposals, side projects, or project-based income. Separate income by purpose as soon as it arrives.',
                        `Because ${elementNames[weakElement]} is weaker, verification matters. Review contracts, loans, and investment-like expenses after a pause.`,
                        `The best way to strengthen wealth luck is to find leaks first: fixed costs, emotional spending, and status purchases.`
                    ]
                },
                {
                    id: 'romance',
                    title: 'Relationships',
                    summary: 'Trust grows gradually and deeply.',
                    paragraphs: [
                        `You may start lightly, but once committed you tend to act with responsibility. Say what you feel and what you need before silently withdrawing.`,
                        `The best match respects your pace and treats promises seriously. Daily stability matters more than dramatic gestures.`,
                        `Separate close relationships from casual ones. This reduces fatigue and lets you invest in people who matter.`
                    ]
                },
                {
                    id: 'today',
                    title: 'Today',
                    summary: seed % 3 === 0 ? 'A good day for decisions and cleanup.' : seed % 3 === 1 ? 'Opportunities may come through people.' : 'Balance matters more than speed.',
                    paragraphs: [
                        seed % 3 === 0
                            ? 'Today favors clearing overdue tasks and resetting standards around schedules, money, or commitments.'
                            : seed % 3 === 1
                                ? 'A conversation, message, or meeting can reveal a practical clue today. Ask good questions.'
                                : 'Do not force speed today. Reducing the task list can improve the quality of your results.',
                        `Strengthen your weaker ${elementNames[weakElement]} through one simple repeatable action.`,
                        `Avoid making decisions while emotionally charged. A short pause will improve accuracy.`
                    ]
                }
            ]
        };
    }

    displayResults(data) {
        const lang = document.documentElement.lang || 'ko';
        const firstCategory = data.categories[0];
        this.resultsContainer.innerHTML = `
            <div class="result-card wide fortune-intro">
                <h3>${lang === 'ko' ? '정밀 사주풀이 항목 조회' : 'Detailed Saju Reading'}</h3>
                <p>${lang === 'ko' ? '출생 정보' : 'Birth info'}: ${data.birthLabel}</p>
                <p class="fortune-guide">${lang === 'ko' ? '아래 항목을 눌러 필요한 풀이를 하나씩 조회하세요.' : 'Select a topic below to view each reading one by one.'}</p>
            </div>
            <div class="fortune-query-tabs">
                ${data.categories.map((category, index) => `
                    <button type="button" class="fortune-query-btn ${index === 0 ? 'active' : ''}" data-section="${category.id}">
                        <span>${category.title}</span>
                        <small>${lang === 'ko' ? '조회' : 'View'}</small>
                    </button>
                `).join('')}
            </div>
            <div id="fortune-detail-panel" class="result-card wide fortune-detail-panel">
                ${this.renderCategory(firstCategory)}
            </div>
        `;
        this.resultsContainer.querySelectorAll('.fortune-query-btn').forEach(button => {
            button.addEventListener('click', () => this.showSection(button.dataset.section));
        });
        this.resultsContainer.classList.remove('hidden');
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    showSection(sectionId) {
        if (!this.currentReport) return;
        const category = this.currentReport.categories.find(item => item.id === sectionId);
        if (!category) return;

        this.resultsContainer.querySelectorAll('.fortune-query-btn').forEach(button => {
            button.classList.toggle('active', button.dataset.section === sectionId);
        });

        const panel = document.getElementById('fortune-detail-panel');
        panel.innerHTML = this.renderCategory(category);
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    renderCategory(category) {
        return `
            <h3>${category.title}</h3>
            <p class="fortune-summary">${category.summary}</p>
            ${category.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
        `;
    }
}

class PsycheTestManager {
    constructor() {
        this.modal = document.getElementById('test-modal');
        this.content = document.getElementById('test-content');
        this.closeBtn = document.querySelector('.close-modal');
        this.init();
    }
    init() {
        document.querySelectorAll('.start-test-btn').forEach(btn => {
            btn.addEventListener('click', () => this.start(btn.dataset.test));
        });
        if (this.closeBtn) this.closeBtn.onclick = () => this.modal.classList.add('hidden');
        window.onclick = (e) => { if (e.target == this.modal) this.modal.classList.add('hidden'); };
    }
    start(testType) {
        this.modal.classList.remove('hidden');
        const lang = document.documentElement.lang || 'ko';
        if (testType === 'ocean') {
            this.content.innerHTML = `
                <h3>${lang === 'ko' ? '바다의 길' : 'The Ocean Path'}</h3>
                <p>${lang === 'ko' ? '당신은 광활한 바다 앞에 서 있습니다. 어떤 길을 따라 걷고 싶나요?' : 'You are standing before a vast ocean. Which path do you choose?'}</p>
                <div class="choice-grid">
                    <div class="choice-item" onclick="psycheTest.showResult('ocean', 1)">
                        <div class="choice-img" style="background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);"></div>
                        <p>${lang === 'ko' ? '잔잔하고 고운 모래사장' : 'A calm, sandy beach'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('ocean', 2)">
                        <div class="choice-img" style="background: linear-gradient(to top, #30cfd0 0%, #330867 100%);"></div>
                        <p>${lang === 'ko' ? '웅장한 절벽 위 산책로' : 'A grand cliffside trail'}</p>
                    </div>
                </div>
            `;
        } else {
            this.content.innerHTML = `
                <h3>${lang === 'ko' ? '숲의 선택' : 'Forest Selection'}</h3>
                <p>${lang === 'ko' ? '깊은 숲속으로 들어왔습니다. 무엇이 가장 먼저 눈에 띄나요?' : 'You enter a deep forest. What is the first thing you notice?'}</p>
                <div class="choice-grid">
                    <div class="choice-item" onclick="psycheTest.showResult('forest', 1)">
                        <div class="choice-img" style="background: #2d5a27;"></div>
                        <p>${lang === 'ko' ? '하늘을 찌를 듯한 고목' : 'Towering ancient trees'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('forest', 2)">
                        <div class="choice-img" style="background: #a8dadc;"></div>
                        <p>${lang === 'ko' ? '반짝이는 작은 연못' : 'A sparkling small pond'}</p>
                    </div>
                </div>
            `;
        }
    }
    showResult(type, choice) {
        const lang = document.documentElement.lang || 'ko';
        const results = {
            ocean: lang === 'ko' ? [
                "평화와 안정을 중시하는 타입입니다. 갈등이 적고 명확하고 안정적인 커리어 경로를 선호합니다. 주변 사람들과 조화를 이루며 꾸준히 성장하는 것에 큰 가치를 둡니다.",
                "도전과 성취를 즐기는 모험가 타입입니다. 위험이 따르더라도 큰 보상이 있는 환경에서 능력을 발휘합니다. 남들이 가지 않은 길을 개척하며 자신의 존재감을 증명하고 싶어 합니다."
            ] : [
                "You value peace and stability. You prefer a clear and stable career path with minimal conflict. You find great value in growing steadily while harmonizing with those around you.",
                "You are an adventurer who enjoys challenges and achievements. You thrive in environments with high risk and high reward. You want to prove your presence by pioneering paths that others have not taken."
            ],
            forest: lang === 'ko' ? [
                "지혜롭고 신중하며 신뢰를 주는 타입입니다. 사람들은 당신의 묵직한 존재감과 장기적인 시야에 의지합니다. 어떤 상황에서도 흔들리지 않는 뿌리 깊은 가치관을 가지고 있습니다.",
                "감수성이 풍부하고 내면 세계가 깊은 타입입니다. 직관력이 뛰어나며 자기 성찰을 중요하게 생각합니다. 눈에 보이는 것 너머의 본질을 꿰뚫어 보는 통찰력을 지녔습니다."
            ] : [
                "You are wise, cautious, and trustworthy. People rely on your solid presence and long-term vision. You have deep-rooted values that do not waver in any situation.",
                "You have rich sensibility and a deep inner world. You are highly intuitive and value self-reflection. You possess the insight to see through the essence beyond what is visible."
            ]
        };
        this.content.innerHTML = `
            <h3>${lang === 'ko' ? '당신의 분석 결과' : 'Your Analysis Result'}</h3>
            <p class="test-result-text">${results[type][choice - 1]}</p>
            <button onclick="psycheTest.modal.classList.add('hidden')" style="margin-top:20px;">${lang === 'ko' ? '닫기' : 'Close'}</button>
        `;
    }
}

class LottoBall extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
    static get observedAttributes() { return ['number']; }
    attributeChangedCallback() { this.render(); }
    render() {
        const number = this.getAttribute('number');
        if (!number) return;
        const color = parseInt(number) <= 10 ? '#f44336' : parseInt(number) <= 20 ? '#ff9800' : parseInt(number) <= 30 ? '#ffc107' : parseInt(number) <= 40 ? '#4caf50' : '#2196f3';
        this.shadowRoot.innerHTML = `<style>.ball{width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:bold;color:white;background:radial-gradient(circle at 15px 15px, ${color}, #333);box-shadow:0 4px 8px rgba(0,0,0,0.2);transition:0.3s;}.ball:hover{transform:scale(1.1);}</style><div class="ball">${number}</div>`;
    }
}
customElements.define('lotto-ball', LottoBall);

const langManager = new LanguageManager();
const fortuneManager = new FortuneManager();
window.psycheTest = new PsycheTestManager();

document.getElementById('generate-btn').addEventListener('click', () => {
    const container = document.getElementById('lotto-balls-container');
    container.innerHTML = '';
    const setRow = document.createElement('div');
    setRow.className = 'lotto-row';
    const numbers = new Set();
    while (numbers.size < 6) numbers.add(Math.floor(Math.random() * 45) + 1);
    Array.from(numbers).sort((a, b) => a - b).forEach(number => {
        const ball = document.createElement('lotto-ball');
        ball.setAttribute('number', number);
        setRow.appendChild(ball);
    });
    container.appendChild(setRow);
});

const themeBtn = document.getElementById('theme-btn');
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';

themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    themeBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
});
