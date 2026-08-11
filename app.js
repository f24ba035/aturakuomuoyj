const karutaData = [
    { id: 'あ', text: '<ruby>浅間<rt>あさま</rt></ruby>のいたずら <ruby>鬼<rt>おに</rt></ruby>の<ruby>押出<rt>おしだ</rt></ruby>し' },
    { id: 'い', text: '<ruby>伊香保<rt>いかほ</rt></ruby><ruby>温泉<rt>おんせん</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>の<ruby>名湯<rt>めいとう</rt></ruby>' },
    { id: 'う', text: '<ruby>碓氷峠<rt>うすいとうげ</rt></ruby>の<ruby>関所跡<rt>せきしょあと</rt></ruby>' },
    { id: 'え', text: '<ruby>縁起<rt>えんぎ</rt></ruby>だるまの<ruby>少林山<rt>しょうりんざん</rt></ruby>' },
    { id: 'お', text: '<ruby>太田<rt>おおた</rt></ruby><ruby>金山<rt>かなやま</rt></ruby> <ruby>子育<rt>こそだて</rt></ruby><ruby>呑龍<rt>どんりゅう</rt></ruby>' },
    { id: 'か', text: '<ruby>関東<rt>かんとう</rt></ruby>と<ruby>信越<rt>しんえつ</rt></ruby>つなぐ <ruby>高崎市<rt>たかさきし</rt></ruby>' },
    { id: 'き', text: '<ruby>桐生<rt>きりゅう</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>の<ruby>機<rt>はた</rt></ruby>どころ' },
    { id: 'く', text: '<ruby>草津<rt>くさつ</rt></ruby>よいとこ <ruby>薬<rt>くすり</rt></ruby>の<ruby>温泉<rt>いでゆ</rt></ruby>' },
    { id: 'け', text: '<ruby>県都<rt>けんと</rt></ruby><ruby>前橋<rt>まえばし</rt></ruby> <ruby>生糸<rt>いと</rt></ruby>の<ruby>市<rt>まち</rt></ruby>' },
    { id: 'こ', text: '<ruby>心<rt>こころ</rt></ruby>の<ruby>燈台<rt>とうだい</rt></ruby> <ruby>内村<rt>うちむら</rt></ruby><ruby>鑑三<rt>かんぞう</rt></ruby>' },
    { id: 'さ', text: '<ruby>三波石<rt>さんばせき</rt></ruby>と<ruby>共<rt>とも</rt></ruby>に<ruby>名高<rt>なだか</rt></ruby>い <ruby>冬桜<rt>ふゆざくら</rt></ruby>' },
    { id: 'し', text: 'しのぶ<ruby>毛<rt>け</rt></ruby>の<ruby>国<rt>くに</rt></ruby> <ruby>二子塚<rt>ふたごづか</rt></ruby>' },
    { id: 'す', text: '<ruby>裾野<rt>すその</rt></ruby>は<ruby>長<rt>なが</rt></ruby>し <ruby>赤城山<rt>あかぎやま</rt></ruby>' },
    { id: 'せ', text: '<ruby>仙境<rt>せんきょう</rt></ruby><ruby>尾瀬沼<rt>おぜぬま</rt></ruby> <ruby>花<rt>はな</rt></ruby>の<ruby>原<rt>はら</rt></ruby>' },
    { id: 'そ', text: 'そろいの<ruby>仕度<rt>したく</rt></ruby>で <ruby>八木節<rt>やぎぶし</rt></ruby><ruby>音頭<rt>おんど</rt></ruby>' },
    { id: 'た', text: '<ruby>滝<rt>たき</rt></ruby>は<ruby>吹割<rt>ふきわれ</rt></ruby> <ruby>片品<rt>かたしな</rt></ruby><ruby>渓谷<rt>けいこく</rt></ruby>' },
    { id: 'ち', text: '<ruby>力<rt>ちから</rt></ruby>あわせる <ruby>百九十万<rt>ひゃくきゅうじゅうまん</rt></ruby>' },
    { id: 'つ', text: 'つる<ruby>舞<rt>ま</rt></ruby>う<ruby>形<rt>かたち</rt></ruby>の <ruby>群馬県<rt>ぐんまけん</rt></ruby>' },
    { id: 'て', text: '<ruby>天下<rt>てんか</rt></ruby>の<ruby>義人<rt>ぎじん</rt></ruby> <ruby>茂左衛門<rt>もざえもん</rt></ruby>' },
    { id: 'と', text: '<ruby>利根<rt>とね</rt></ruby>は<ruby>坂東一<rt>ばんどういち</rt></ruby>の<ruby>川<rt>かわ</rt></ruby>' },
    { id: 'な', text: '<ruby>中山道<rt>なかせんどう</rt></ruby>しのぶ <ruby>安中<rt>あんなか</rt></ruby><ruby>杉並木<rt>すぎなみき</rt></ruby>' },
    { id: 'に', text: '<ruby>日本<rt>にほん</rt></ruby>で<ruby>最初<rt>さいしょ</rt></ruby>の <ruby>富岡<rt>とみおか</rt></ruby><ruby>製糸<rt>せいし</rt></ruby>' },
    { id: 'ぬ', text: '<ruby>沼田<rt>ぬまた</rt></ruby><ruby>城下<rt>じょうか</rt></ruby>の <ruby>塩原<rt>しおばら</rt></ruby><ruby>太助<rt>たすけ</rt></ruby>' },
    { id: 'ね', text: 'ねぎとこんにゃく <ruby>下仁田<rt>しもにた</rt></ruby><ruby>名産<rt>めいさん</rt></ruby>' },
    { id: 'の', text: '<ruby>登<rt>のぼ</rt></ruby>る<ruby>榛名<rt>はるな</rt></ruby>の キャンプ<ruby>村<rt>むら</rt></ruby>' },
    { id: 'は', text: '<ruby>花山<rt>はなやま</rt></ruby><ruby>公園<rt>こうえん</rt></ruby> つつじの<ruby>名所<rt>めいしょ</rt></ruby>' },
    { id: 'ひ', text: '<ruby>白衣<rt>びゃくえ</rt></ruby><ruby>観音<rt>かんのん</rt></ruby> <ruby>慈悲<rt>じひ</rt></ruby>の<ruby>御手<rt>みて</rt></ruby>' },
    { id: 'ふ', text: '<ruby>分福<rt>ぶんぶく</rt></ruby><ruby>茶釜<rt>ちゃがま</rt></ruby>の <ruby>茂林寺<rt>もりんじ</rt></ruby>' },
    { id: 'へ', text: '<ruby>平和<rt>へいわ</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い <ruby>新島<rt>にいじま</rt></ruby><ruby>襄<rt>じょう</rt></ruby>' },
    { id: 'ほ', text: '<ruby>誇<rt>ほこ</rt></ruby>る<ruby>文豪<rt>ぶんごう</rt></ruby> <ruby>田山<rt>たやま</rt></ruby><ruby>花袋<rt>かたい</rt></ruby>' },
    { id: 'ま', text: '<ruby>繭<rt>まゆ</rt></ruby>と<ruby>生糸<rt>きいと</rt></ruby>は <ruby>日本一<rt>にほんいち</rt></ruby>' },
    { id: 'み', text: '<ruby>水上<rt>みなかみ</rt></ruby>、<ruby>谷川<rt>たにがわ</rt></ruby> スキーと<ruby>登山<rt>とざん</rt></ruby>' },
    { id: 'む', text: '<ruby>昔<rt>むかし</rt></ruby>を<ruby>語<rt>かた</rt></ruby>る <ruby>多胡<rt>たご</rt></ruby>の<ruby>古碑<rt>こひ</rt></ruby>' },
    { id: 'め', text: '<ruby>銘仙<rt>めいせん</rt></ruby><ruby>織出<rt>おりだ</rt></ruby>す <ruby>伊勢崎市<rt>いせさきし</rt></ruby>' },
    { id: 'も', text: '<ruby>紅葉<rt>もみじ</rt></ruby>に<ruby>映<rt>は</rt></ruby>える <ruby>妙義山<rt>みょうぎさん</rt></ruby>' },
    { id: 'や', text: '<ruby>耶馬溪<rt>やばけい</rt></ruby>しのぐ <ruby>吾妻峡<rt>あがつまきょう</rt></ruby>' },
    { id: 'ゆ', text: 'ゆかりは<ruby>古<rt>ふる</rt></ruby>し <ruby>貫前<rt>ぬきさき</rt></ruby><ruby>神社<rt>じんじゃ</rt></ruby>' },
    { id: 'よ', text: '<ruby>世<rt>よ</rt></ruby>のちり<ruby>洗<rt>あら</rt></ruby>う <ruby>四万<rt>しま</rt></ruby><ruby>温泉<rt>おんせん</rt></ruby>' },
    { id: 'ら', text: '<ruby>雷<rt>らい</rt></ruby>と<ruby>空<rt>から</rt></ruby>っ<ruby>風<rt>かぜ</rt></ruby> <ruby>義理<rt>ぎり</rt></ruby><ruby>人情<rt>にんじょう</rt></ruby>' },
    { id: 'り', text: '<ruby>理想<rt>りそう</rt></ruby>の<ruby>電化<rt>でんか</rt></ruby>に <ruby>電源<rt>でんげん</rt></ruby><ruby>群馬<rt>ぐんま</rt></ruby>' },
    { id: 'る', text: 'ループで<ruby>名高<rt>なだか</rt></ruby>い <ruby>清水<rt>しみず</rt></ruby>トンネル' },
    { id: 'れ', text: '<ruby>歴史<rt>れきし</rt></ruby>に<ruby>名高<rt>なだか</rt></ruby>い <ruby>新田<rt>にった</rt></ruby><ruby>義貞<rt>よしさだ</rt></ruby>' },
    { id: 'わ', text: '<ruby>和算<rt>わさん</rt></ruby>の<ruby>大家<rt>たいか</rt></ruby> <ruby>関<rt>せき</rt></ruby><ruby>孝和<rt>たかかず</rt></ruby>' },
    { id: 'ろ', text: '<ruby>老農<rt>ろうのう</rt></ruby> <ruby>船津<rt>ふなつ</rt></ruby><ruby>伝次平<rt>でんじへい</rt></ruby>' }
];

// App State
let currentDeck = [];
let currentIndex = 0;
let score = 0;
let isFlipped = false;

// DOM Elements
const DOM = {
    gameView: document.getElementById('game-view'),
    statsView: document.getElementById('stats-view'),
    settingsView: document.getElementById('settings-view'),
    flashcard: document.getElementById('flashcard'),
    cardInitial: document.getElementById('card-initial'),
    cardInitialBack: document.getElementById('card-initial-back'),
    cardText: document.getElementById('card-text'),
    btnCardToggle: document.getElementById('btn-card-toggle'),
    btnCardToggleBack: document.getElementById('btn-card-toggle-back'),
    controls: document.getElementById('controls'),
    
    progressBar: document.getElementById('progress-bar'),
    currentCount: document.getElementById('current-count'),
    scoreCount: document.getElementById('score-count'),
    
    startScreen: document.getElementById('start-screen'),
    resultScreen: document.getElementById('result-screen'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    
    btnStart: document.getElementById('btn-start'),
    btnForgot: document.getElementById('btn-forgot'),
    btnRemembered: document.getElementById('btn-remembered'),
    btnRestart: document.getElementById('btn-restart'),
    btnViewStats: document.getElementById('btn-view-stats'),
    
    btnSettingsNav: document.getElementById('settings-btn'),
    btnSettingsBack: document.getElementById('btn-settings-back'),
    btnStatsNav: document.getElementById('stats-btn'),
    btnBackNav: document.getElementById('btn-back'),
    
    statTotalSessions: document.getElementById('stat-total-sessions'),
    statHighScore: document.getElementById('stat-high-score'),
    historyList: document.getElementById('history-list'),
    emptyHistory: document.getElementById('empty-history'),
    
    settingsCardList: document.getElementById('settings-card-list'),
    selectedCountBadge: document.getElementById('selected-count-badge'),
    btnSelectAll: document.getElementById('btn-select-all'),
    btnDeselectAll: document.getElementById('btn-deselect-all')
};

// Storage
const Storage = {
    getKey: () => 'jomokaruta_history',
    getSettingsKey: () => 'jomokaruta_enabled_ids',
    getHistory: () => {
        try {
            return JSON.parse(localStorage.getItem(Storage.getKey())) || [];
        } catch {
            return [];
        }
    },
    saveResult: (score, total) => {
        const history = Storage.getHistory();
        history.unshift({
            id: Date.now(),
            date: new Date().toISOString(),
            score,
            total
        });
        if (history.length > 50) history.length = 50;
        localStorage.setItem(Storage.getKey(), JSON.stringify(history));
    },
    getEnabledIds: () => {
        try {
            const saved = localStorage.getItem(Storage.getSettingsKey());
            if (saved) return new Set(JSON.parse(saved));
        } catch {}
        // Default: all cards enabled
        return new Set(karutaData.map(c => c.id));
    },
    saveEnabledIds: (enabledSet) => {
        localStorage.setItem(Storage.getSettingsKey(), JSON.stringify(Array.from(enabledSet)));
    }
};

let enabledCardIds = Storage.getEnabledIds();

// Utils
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function formatDate(date) {
    const d = new Date(date);
    const dateStr = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
    const timeStr = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    return { dateStr, timeStr };
}

// Game Logic
function initGame() {
    const activeCards = karutaData.filter(card => enabledCardIds.has(card.id));
    
    if (activeCards.length === 0) {
        alert('出題対象のかるたが1枚も選択されていません。設定画面で1枚以上選択してください。');
        showSettings();
        return;
    }
    
    currentDeck = shuffleArray(activeCards);
    currentIndex = 0;
    score = 0;
    
    DOM.scoreCount.textContent = score;
    DOM.startScreen.classList.remove('active');
    DOM.startScreen.classList.add('hidden');
    DOM.resultScreen.classList.add('hidden');
    DOM.resultScreen.classList.remove('active');
    
    updateCard();
}

function updateCard() {
    isFlipped = false;
    DOM.flashcard.classList.remove('is-flipped');
    DOM.controls.classList.add('hidden');
    
    const card = currentDeck[currentIndex];
    DOM.cardInitial.textContent = card.id;
    DOM.cardInitialBack.textContent = card.id;
    DOM.cardText.innerHTML = card.text;
    
    updateCardToggleState(card.id);
    
    // Update progress
    DOM.currentCount.textContent = `${currentIndex + 1} / ${currentDeck.length}`;
    const progressPercent = (currentIndex / currentDeck.length) * 100;
    DOM.progressBar.style.width = `${progressPercent}%`;
}

function updateCardToggleState(cardId) {
    const isEnabled = enabledCardIds.has(cardId);
    [DOM.btnCardToggle, DOM.btnCardToggleBack].forEach(btn => {
        if (!btn) return;
        if (isEnabled) {
            btn.className = 'card-toggle-btn plus';
            btn.textContent = '＋';
            btn.title = '出題リストに含まれています (タップで次回から除外)';
        } else {
            btn.className = 'card-toggle-btn minus';
            btn.textContent = 'ー';
            btn.title = '出題リストから外されています (タップで次回から追加)';
        }
    });
}

function toggleCurrentCard(e) {
    e.stopPropagation();
    if (currentIndex >= currentDeck.length) return;
    const card = currentDeck[currentIndex];
    if (enabledCardIds.has(card.id)) {
        enabledCardIds.delete(card.id);
    } else {
        enabledCardIds.add(card.id);
    }
    Storage.saveEnabledIds(enabledCardIds);
    updateCardToggleState(card.id);
}

function flipCard() {
    if (isFlipped) return;
    isFlipped = true;
    DOM.flashcard.classList.add('is-flipped');
    
    setTimeout(() => {
        DOM.controls.classList.remove('hidden');
    }, 150);
}

function nextCard(remembered) {
    if (remembered) {
        score++;
        DOM.scoreCount.textContent = score;
        
        DOM.scoreCount.style.transform = 'scale(1.5)';
        DOM.scoreCount.style.color = '#34d399';
        setTimeout(() => {
            DOM.scoreCount.style.transform = '';
            DOM.scoreCount.style.color = '';
        }, 300);
    }
    
    currentIndex++;
    
    if (currentIndex >= currentDeck.length) {
        endGame();
    } else {
        DOM.flashcard.classList.remove('is-flipped');
        DOM.controls.classList.add('hidden');
        setTimeout(() => {
            updateCard();
        }, 200);
    }
}

function endGame() {
    DOM.progressBar.style.width = '100%';
    Storage.saveResult(score, currentDeck.length);
    
    DOM.finalScore.textContent = score;
    
    const ratio = score / currentDeck.length;
    if (ratio === 1) {
        DOM.resultMessage.textContent = '完璧です！完全制覇！🎉';
    } else if (ratio >= 0.8) {
        DOM.resultMessage.textContent = '素晴らしい！あともう少し！👏';
    } else if (ratio >= 0.5) {
        DOM.resultMessage.textContent = '順調に覚えていますね！👍';
    } else {
        DOM.resultMessage.textContent = '自分のペースで頑張りましょう！💪';
    }
    
    setTimeout(() => {
        DOM.resultScreen.classList.remove('hidden');
        DOM.resultScreen.classList.add('active');
    }, 400);
}

// Settings Logic
function renderSettingsList() {
    DOM.settingsCardList.innerHTML = '';
    DOM.selectedCountBadge.textContent = `選択中: ${enabledCardIds.size} / ${karutaData.length}枚`;

    karutaData.forEach(card => {
        const isEnabled = enabledCardIds.has(card.id);
        const plainText = card.text.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1');
        
        const item = document.createElement('div');
        item.className = `setting-card-item ${isEnabled ? '' : 'disabled'}`;
        item.innerHTML = `
            <div class="setting-card-info">
                <span class="setting-card-initial">${card.id}</span>
                <span class="setting-card-text">${plainText}</span>
            </div>
            <button class="toggle-btn ${isEnabled ? 'plus' : 'minus'}" title="${isEnabled ? '出題に含める (+)' : '出題から外す (ー)'}">
                ${isEnabled ? '＋' : 'ー'}
            </button>
        `;

        const toggleBtn = item.querySelector('.toggle-btn');
        toggleBtn.addEventListener('click', () => {
            if (enabledCardIds.has(card.id)) {
                enabledCardIds.delete(card.id);
            } else {
                enabledCardIds.add(card.id);
            }
            Storage.saveEnabledIds(enabledCardIds);
            renderSettingsList();
        });

        DOM.settingsCardList.appendChild(item);
    });
}

DOM.btnSelectAll.addEventListener('click', () => {
    karutaData.forEach(c => enabledCardIds.add(c.id));
    Storage.saveEnabledIds(enabledCardIds);
    renderSettingsList();
});

DOM.btnDeselectAll.addEventListener('click', () => {
    enabledCardIds.clear();
    Storage.saveEnabledIds(enabledCardIds);
    renderSettingsList();
});

// Navigation Logic
function hideAllViews() {
    DOM.gameView.classList.remove('active');
    DOM.statsView.classList.remove('active');
    DOM.settingsView.classList.remove('active');
    DOM.gameView.style.display = 'none';
    DOM.statsView.style.display = 'none';
    DOM.settingsView.style.display = 'none';
}

function showStats() {
    loadStats();
    hideAllViews();
    DOM.statsView.style.display = 'flex';
    void DOM.statsView.offsetWidth;
    DOM.statsView.classList.add('active');
}

function showSettings() {
    renderSettingsList();
    hideAllViews();
    DOM.settingsView.style.display = 'flex';
    void DOM.settingsView.offsetWidth;
    DOM.settingsView.classList.add('active');
}

function showGame() {
    hideAllViews();
    DOM.gameView.style.display = 'flex';
    void DOM.gameView.offsetWidth;
    DOM.gameView.classList.add('active');
}

// Stats View Logic
function loadStats() {
    const history = Storage.getHistory();
    
    DOM.statTotalSessions.textContent = history.length;
    
    const highScore = history.length > 0 
        ? Math.max(...history.map(h => h.score))
        : 0;
    DOM.statHighScore.textContent = highScore;
    
    DOM.historyList.innerHTML = '';
    
    if (history.length === 0) {
        DOM.emptyHistory.style.display = 'block';
    } else {
        DOM.emptyHistory.style.display = 'none';
        
        history.forEach(item => {
            const { dateStr, timeStr } = formatDate(item.date);
            const li = document.createElement('li');
            li.className = 'history-item';
            li.innerHTML = `
                <div class="history-date">
                    <span class="date-text">${dateStr}</span>
                    <span class="time-text">${timeStr}</span>
                </div>
                <div class="history-score">${item.score} <span style="font-size:0.8em;color:var(--text-muted)">/ ${item.total}</span></div>
            `;
            DOM.historyList.appendChild(li);
        });
    }
}

// Event Listeners
DOM.btnStart.addEventListener('click', initGame);
DOM.btnRestart.addEventListener('click', initGame);

DOM.btnCardToggle.addEventListener('click', toggleCurrentCard);
DOM.btnCardToggleBack.addEventListener('click', toggleCurrentCard);

DOM.flashcard.addEventListener('click', () => {
    if (!isFlipped) flipCard();
});

DOM.btnRemembered.addEventListener('click', () => nextCard(true));
DOM.btnForgot.addEventListener('click', () => nextCard(false));

DOM.btnStatsNav.addEventListener('click', showStats);
DOM.btnViewStats.addEventListener('click', showStats);
DOM.btnBackNav.addEventListener('click', showGame);

DOM.btnSettingsNav.addEventListener('click', showSettings);
DOM.btnSettingsBack.addEventListener('click', showGame);

// Init UI State
showGame();
DOM.progressBar.style.width = '0%';

