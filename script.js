// --- КОНФИГУРАЦИЯ АГЕНТОВ (ОБНОВЛЕНО) ---
// ВАЖНО: Убедитесь, что все файлы .png и .mp4 для новых агентов 
// (Sage, Sova, Skye, Viper, Clove, Tejo, Waylay, Veto) находятся в папке assets/
const agents = [
    // ДУЭЛЯНТЫ
    { 
        name: "Jett", 
        role: "Duelist", 
        image: "assets/jett.png", 
        video: "assets/JETT _ Valorant EDIT 4K.mp4", 
        description: "Ветер убережёт тебя от всего." 
    },
    { 
        name: "Phoenix", 
        role: "Duelist",
        image: "assets/phoenix.png", 
        video: "assets/phoenix.mp4", 
        description: "Сожги врагов силой света — в прямом смысле." 
    }, 
    { 
        name: "Reyna", 
        role: "Duelist", 
        image: "assets/reyna.png", 
        video: "assets/reyna.mp4", 
        description: "Прокладывая путь к победе, питайся страхом соперников." 
    },
    { 
        name: "Yoru", 
        role: "Duelist", 
        image: "assets/yoru.png", 
        video: "assets/Yoru - Vendetta! __ Valorant Agent __ Valorant Edit.mp4", 
        description: "Разрывай пространство и сбивай врагов с толку — они не узнают, что ты уже за их спиной." 
    },
    { 
        name: "Neon", 
        role: "Duelist", 
        image: "assets/neon.png", 
        video: "assets/neon.mp4", 
        description: "Быстрая как молния. Не дай врагам даже прицелиться." 
    }, 
    { 
        name: "Raze", 
        role: "Duelist", 
        image: "assets/raze.png", 
        video: "assets/Video Project.mp4", 
        description: "Бум-бах! Взрывай, прыгай, убивай — веселье не забывай." 
    },
    { 
        name: "Iso", 
        role: "Duelist", 
        image: "assets/iso.png", 
        video: "assets/iso.mp4", 
        description: "Страх всех снайперов. Щит вокруг тебя остановит любые пули." 
    },
    { 
        name: "Waylay", 
        role: "Duelist", // ИЗМЕНЕНО
        image: "assets/waylay.png", 
        video: "assets/waylay.mp4", 
        description: "С силой осколков света проникай на вражескую территорию за мгновение." 
    },

    // СТРАЖИ
    { 
        name: "Killjoy", 
        role: "Sentinel", 
        image: "assets/killjoy.png", 
        video: "assets/killjoy.mp4", 
        description: "Мозг команды. Техника ослабит врага, а ты добьёшь нежеланных гостей." 
    }, 
    { 
        name: "Cypher", 
        role: "Sentinel", 
        image: "assets/cypher.png", 
        video: "assets/cypher.mp4", 
        description: "Информация — и есть победа. Всё под твоим взором." 
    }, 
    { 
        name: "Chamber", 
        role: "Sentinel", 
        image: "assets/chamber.png", 
        video: "assets/Chamber _ Let's Play - Talk [VALORANT EDIT] _ 4K.mp4", 
        description: "Ослепи союзников красотой, а соперников — свинцом." 
    },
    { 
        name: "Deadlock", 
        role: "Sentinel", 
        image: "assets/deadlock.png", 
        video: "assets/I Know - Deadlock - Valorant Edit 4k.mp4", 
        description: "Постарайся ловить сетью соперников, а не союзников." 
    },
    { 
        name: "Sage", 
        role: "Sentinel", 
        image: "assets/sage.png", 
        video: "assets/sage.mp4", 
        description: "Ты — опора команды. Твоя смерть может изменить исход боя." 
    },
    { 
        name: "Vyse", 
        role: "Sentinel", // ИЗМЕНЕНО
        image: "assets/vyse.png", 
        video: "assets/Vyse.mp4", 
        description: "Стальной бутон розы, что справится с любой толпой." 
    },
    { 
        name: "Veto", 
        role: "Sentinel", // ИЗМЕНЕНО
        image: "assets/veto.png", 
        video: "assets/negr.mp4", 
        description: "Он меняет само понятие способностей — ему они ни по чём." 
    },

    // ИНИЦИАТОРЫ
    { 
        name: "Breach", 
        role: "Initiator", 
        image: "assets/breach.png", 
        video: "assets/breach.mp4", 
        description: "Руки-базуки. Сокруши врагов силой взрывных волн." 
    }, 
    { 
        name: "KAY/O", 
        role: "Initiator", 
        image: "assets/kayo.png", 
        video: "assets/O the Initiator Edit.mp4", 
        description: "Живая машина для убийств, создан чтобы помогать союзникам." 
    }, 
    { 
        name: "Fade", 
        role: "Initiator", 
        image: "assets/fade.png", 
        video: "assets/Nightmare Take Them [Fade Valorant Edit].mp4", 
        description: "Кошмар поглотил соперников, но настоящий кошмар — это ты." 
    }, 
    { 
        name: "Gekko", 
        role: "Initiator", 
        image: "assets/gekko.png", 
        video: "assets/Gekko.mp4", 
        description: "Сын фермера." 
    },
    { 
        name: "Sova", 
        role: "Initiator", 
        image: "assets/sova.png", 
        video: "assets/hunter.mp4", 
        description: "Старое и новое — в луке и стрелах, что находят любого врага." 
    },
    { 
        name: "Skye", 
        role: "Initiator", 
        image: "assets/skye.png", 
        video: "assets/skye.mp4", 
        description: "Без неё команде не сладко. Прокладывай путь силой зверей." 
    },
    { 
        name: "Tejo", 
        role: "Initiator", // ИЗМЕНЕНО
        image: "assets/tejo.png", 
        video: "assets/tejo.mp4", 
        description: "Разведчик, способный на многое — не только опытом, но и техникой." 
    },

    // СМОКЕРЫ (КОНТРОЛЛЕРЫ)
    { 
        name: "Brimstone", 
        role: "Smoker", // ИЗМЕНЕНО
        image: "assets/brimstone.png", 
        video: "assets/brimstone.mp4", 
        description: "Не дар, а сила. Защищай территорию, даже издалека." 
    }, 
    { 
        name: "Omen", 
        role: "Smoker", // ИЗМЕНЕНО
        image: "assets/Omen.PNG.png", 
        video: "assets/Omen _ video.mp4", 
        description: "Закрывай, слепи, убивай. Агент для скрытной игры и непредсказуемых действий." 
    },
    { 
        name: "Astra", 
        role: "Smoker", // ИЗМЕНЕНО
        image: "assets/astra.png", 
        video: "assets/astra.mp4", 
        description: "Позволь звёздам указать тебе путь к победе." 
    }, 
    { 
        name: "Harbor", 
        role: "Smoker", // ИЗМЕНЕНО
        image: "assets/harbor.png", 
        video: "assets/indus.mp4", 
        description: "Сила, повелевающая водой, поможет защитить всё, что тебе дорого." 
    },
    { 
        name: "Viper", 
        role: "Smoker", // ИЗМЕНЕНО
        image: "assets/viper.png", 
        video: "assets/viper.mp4", 
        description: "Токсичный газ медленно забирает жизнь. Смерть неизбежна." 
    },
    { 
        name: "Clove", 
        role: "Smoker", // ИЗМЕНЕНО
        image: "assets/clove.png", 
        video: "assets/clove.mp4", 
        description: "Она не знает, что такое смерть. Вставай и сражайся снова." 
    },
];

// --- СПИСКИ ЗАДАНИЙ И НАКАЗАНИЙ ---
const tasks = [
    "Сделай 5 убийств из Spectre за игру.",
    "Победи раунд, не потратив ни одной способности.",
    "Сделай 10 ассистов за матч.",
    "Убей врага, сидя в углу 10 секунд, как крысюга.",
    "Выиграй раунд только с Classic.",
    "Выиграй раунд, купив только броню и ничего больше.",
    "Сделай 3 убийства через стенку (wallbang).",
    "Открой спайк и сразу закрой — просто так.",
    "Найди и уничтожь 3 вражеских турели/утилити за игру.",
    "Попади 20 раз по врагу, не убивая его (потролль команду).",
    "Сделай 2 headshot-а подряд из Guardian.",
    "Выиграй раунд, не сделав ни одного выстрела (пусть тиммейты тащат).",
    "Сделай 3 убийства гранатами / абилками.",
    "Засади врага, сидя в дыму.",
    "Выживи в раунде с 10 хп.",
    "Выиграй пистолетку.",
    "Сломай 5 вражеских дроном/камер.",
    "Сделай 2 фрага с Shorty.",
    "Убей врага из Judge, сидя в прыжке.",
    "Переживи раунд, когда вся команда умерла.",
    "Сделай 5 headshot-ов за матч.",
    "Убей врага, когда вы оба в прыжке.",
    "Выиграй раунд без брони и без оружия выше пистолета.",
    "Заложи и разминируй спайк в одной игре.",
    "Убей врага на расстоянии 30+ метров.",
    "Найди врага через звук и убей его (sound detect kill).",
    "Попади 10 раз по врагам в прыжке.",
    "Убей врага в слепоте (полной или частичной).",
    "Выиграй раунд за 2 секунды до взрыва.",
    "Сделай 2 фрага с Bulldog.",
    "Сделай 4 убийства в одном раунде с любой ПП-шки.",
    "Соверши 3 удачных ниндзя-дефьюза за игру (когда враг рядом).",
    "Дай 3 убийства с одного барабана Judge.",
    "Убей врага, не промахнувшись ни разу.",
    "Победи раунд без использования мышки (только клавиатура — movement win).",
    "Убей врага гранатой, когда ты сам почти умер.",
    "Сделай 10 headshot-ов подряд в одной игре.",
    "Затащи клатч 1v3.",
    "Убей врага через смоук 3 раза.",
    "Ты должен убить толька Бомбаносца. Других нельзя.",
    "Сделай 20 попаданий из Sheriff за матч.",
    "Убей врага, находясь в воздухе после прыжка с высоты.",
    "Убей врага, не останавливаясь ни на секунду.",
    "Убей врага в момент, когда он ставит спайк.",
    "Сделай эйс с пистолета в последнем раунде.",
    "Дай 360 no-scope с Operator (1 раз).",
    "Вытащи клатч 1vs4.",
    "Сделай фликовый headshot с Sheriff.",
    "Убей двоих одной гранатой или абилкой.(Ульта не щитается)",
    "Сделай эйс только через стенку (полностью через wallbang — да, удачи 🤣)",
    "Дай 3 фрага в прыжке подряд.",
    "Сделай клатч 1v2, будучи полностью слепым.",
    "Выиграй раунд 1v5, не получив урона.",
    "Дай ноускоп из Operator через дым, убив врага, который движется.",
    "Сделай трипл-килл одной пулей из Marshal (когда враги стоят в линию)."
];

const punishments = [
    "Дать себе лёгкий лещ по щеке.",
    "Прочитать команде вслух: «Я официально бот и бомжара этой лучшей игры».",
    "Сказать в микрофон: «Мама, я в телевизоре!» в начале следующей игры.",
    "Играть следующию писталетку полностью стоя.(Если стол низкий можно стоя на каленях)",
    "Всю следующию игру говорить только шёпотом.",
    "10 раз быстро похлопать в ладоши перед началом раунда.",
    "Сделать один присед за всю сумму твоего K/D/A.",
    "Играть следующию полавину без прыжка (не нажимать space).",
    "Сказать фразу: «Я — лучший игрок, просто пока скрываю талант».",
    "Следующию игру полностью обеспечивать свою команду пушками.",
    "Сказать врагам в общий чат: «Я вас всех люблю».",
    "Включить в следующей игре «ходьбу маньяка» — ходить только на shift.",
    "Поставить крестик на своей руке ручкой — «метка позора».",
    "Играть писталетку, постоянно кружась (делать маленькие 360).",
    "Попросить у каждого тиммейта «благословение на убийство» перед началом игры.",
    "В следующем раунде встать на месте и сказать: «Мой дом — моя крепость», затем сесть на Ctrl и не вставть один раунд сказав противником своё местоположение,",
    "5 раз подпрыгнуть в началеигры.(Самому не в игре)",
    "Сделать сердечко рукой и показать на камеру (если есть вебка).",
    "Включить в голосовой чат звук поцелуя «чмок» — в честь тиммейтов.",
    "Сказать: «Я официально сдаюсь… но попробую ещё раз».",
    "В следующей писталетке бегать только спиной.",
    "Признаться команде: «Да, я тот самый киберспортсмен с Алиэкспресса».",
    "25 секунд стоять AFK в начале раунда (но не дольше).",
    "Играть 6 раундов без перезарядки оружия.(Поднимать с пола оружие нельзя)",
    "Сказать: «Если я не убью никого в этом раунде — я бот».",
    "Сделать одну подпрыгивающую «жабку».(Бёрпи)",
    "В следующеё игре первую полавину играть только с пистолетов, даже если есть деньги.(Тимейтам покупать нельзя)",
    "Сказать: «Клянусь тащить… ну хотя бы стараться».",
    "Надеть капюшон, если он есть, — «режим нуба активирован».",
    "Сделать 10 приседаний между каждыми раундами.",
    "Играть следующию игру только ножом, пока не убьешь.",
    "В течение одного раунда говорить только рифмами.",
    "Сказать: «Я — бог раунда»… в общий чат и через 3 секунды умерев сказать «…в отставке».",
    "В следущей игре быть личным рабом хайтаб тимейта",
    "Сделать тройной 360 в начале раунда и сказать: «Я готов!»",
    "Играть игру без брони.",
    "Поменять чувствительность на +50% на игру",
    "Играть некст катку, постоянно комментируя свои действия как спортивный комментатор. (Даже если умрешь)",
    "Отдать лучший ган тиммейту, оставив себе хуже.",
    "Вести себя как NPC целую: идти по прямой, резко поворачиваться, говорить однообразно.",
    "Сказать: «Клянусь тащить ради команды» 3 раза подряд.",
    "В следуюию половину играть стоя, но приседать каждый раз, когда стреляешь.",
    "Сделать лёгкий щелбан себе по лбу и сказать: «Перезагружаюсь… готов!»",
    "«Святой Ритуал Перезахода»: Перед следующим раундом полностью повернуться вокруг своей оси, как будто перезаходишь в игру IRL.",
    "«Одна рука — бог, вторая — наблюдатель»: Следующий раунд играть только одной рукой (любой). Да, это боль.",
    "«ОРАКУЛ»: В начале раунда должен вслух предсказать: «Я умру через … секунд». Если угадываешь — ты пророк. Если нет — наказание выполнено.",
    "«Режим Пожилой Киберспортсмен»: Следующий раунд играть с максимально возможной чувствительностью. Жить будешь — не уверен.",
    "«Тиммейт — твой повелитель»: Случайный тиммейт говорит одно действие (например: «иди А», «купи это», «сидеть»), а ты должен выполнить это один раз в раунде.",
    "«Побег из Броуновского Движения»: Первые 10 секунд раунда двигаться только назад (S). Если выжил — ты киберспортсмен.",
    "«Священная Песня Нуба»: Спой (или пропой) короткую песню про то, как ты нуб. 5 секунд. Мини-концерт для тиммейтов.",
    "«Камера дрожит»: Следующий раунд каждые 5 секунд должен слегка водить мышкой вправо-влево, как будто у тебя камера дрожит от страха.",
    "«Хомяк-Носочек»: В начале следующего раунда скажи фразу: «Я маленький боевой хомячок, погнали!» Даже если ты мужик 2 метра ростом.",
    "«Шифтер на всю катушку»: Первые 15 секунд раунда двигайся только на Shift, даже если по тебе стреляют. Медленно, но гордо."
];

// --- ДОСТУП К ЭЛЕМЕНТАМ DOM ---
const mainAppContainer = document.getElementById('main-app-container');
const skeletonContainer = document.getElementById('skeleton-container');
const skeleton = document.querySelector('.skeleton');
const cardsContainer = document.getElementById('cards-container');
const agentView = document.getElementById('agent-view');
const agentDescription = document.getElementById('agent-description');
const backBtn = document.getElementById('back-btn');
const diceSound = document.getElementById('dice-sound');
const cardSound = document.getElementById('card-sound');
const videoPlaceholder = document.getElementById('video-placeholder');
const volumeSlider = document.getElementById('volume-slider');

// ЭЛЕМЕНТЫ ДЛЯ РЕЖИМА
const modeSelection = document.getElementById('mode-selection');
const modeSoloBtn = document.getElementById('mode-solo');
const modePartyStartBtn = document.getElementById('mode-party-start');
const partySizeSelection = document.getElementById('party-size-selection');
const backToModeBtn = document.getElementById('back-to-mode-btn');
const nameInputScreen = document.getElementById('name-input-screen');
const nameInputFields = document.getElementById('name-input-fields');
const startGameBtn = document.getElementById('start-game-btn');

const partyInfo = document.getElementById('party-info');
const playerListElement = document.getElementById('player-list');

// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ РЕЖИМА
let currentMode = null; 
let players = [];
let currentPlayerIndex = 0;
let availableAgents = [...agents]; 
let playerLimit = 0; 
let isRolling = false; 
let isViewingFinalResult = false; 

// Устанавливаем громкость звуков по умолчанию (1.0 = 100%)
diceSound.volume = 1.0;
cardSound.volume = 1.0;

// --- ИНИЦИАЛИЗАЦИЯ ---
document.addEventListener('DOMContentLoaded', () => {
    // Привязываем слушатель к кубику после загрузки DOM
    const diceElement = document.getElementById('dice');
    if (diceElement) {
        diceElement.addEventListener('click', diceClickListener);
    }
    // Также привязываем слушатель к основному контейнеру, чтобы поймать новый кубик после сброса
    document.getElementById('dice-container').addEventListener('click', (e) => {
        if (e.target.closest('#dice')) {
            diceClickListener();
        }
    });
});


// --- ЛОГИКА ВЫБОРА РЕЖИМА ---

modeSoloBtn.addEventListener('click', () => {
    currentMode = 'Solo';
    modeSelection.style.display = 'none';
    partyInfo.style.display = 'none';
    mainAppContainer.style.display = 'block'; 
    cardsContainer.innerHTML = '<h2>Нажмите на кубик, чтобы выбрать агента!</h2>';
});

modePartyStartBtn.addEventListener('click', () => {
    modeSelection.style.display = 'none';
    partySizeSelection.style.display = 'flex';
});

backToModeBtn.addEventListener('click', () => {
    partySizeSelection.style.display = 'none';
    modeSelection.style.display = 'flex';
});

// --- ВЫБОР КОЛИЧЕСТВА ИГРОКОВ (Party Step 1) ---
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        playerLimit = parseInt(btn.getAttribute('data-size'));
        
        partySizeSelection.style.display = 'none';
        nameInputScreen.style.display = 'flex';
        
        generateNameInputs(playerLimit);
    });
});

function generateNameInputs(count) {
    nameInputFields.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `player-name-${i}`;
        input.placeholder = `Имя игрока ${i + 1} (По умолчанию: Игрок ${i + 1})`;
        nameInputFields.appendChild(input);
    }
}

// --- НАЧАЛО ИГРЫ (Party Step 2 -> Step 3) ---
startGameBtn.addEventListener('click', () => {
    currentMode = 'Party';
    players = [];
    currentPlayerIndex = 0;
    availableAgents = [...agents]; 
    
    // Сбор имен
    for (let i = 0; i < playerLimit; i++) {
        const input = document.getElementById(`player-name-${i}`);
        const name = input.value.trim() || `Игрок ${i + 1}`;
        players.push({ name: name, chosenAgents: [] }); 
    }
    
    nameInputScreen.style.display = 'none';
    mainAppContainer.style.display = 'block'; 
    partyInfo.style.display = 'block'; 
    
    // Восстанавливаем кубик
    resetDiceContainer();
    
    renderPlayerList();
    cardsContainer.innerHTML = `<h2>Ход игрока: ${players[currentPlayerIndex].name}. Нажмите на кубик!</h2>`;
});

function renderPlayerList() {
    playerListElement.innerHTML = '';
    players.forEach((player, index) => {
        const li = document.createElement('li');
        
        let agentDisplay = player.chosenAgents.length > 0 ? player.chosenAgents[0].name : '?????';
        
        li.textContent = `${player.name}: ${agentDisplay}`;
        if (index === currentPlayerIndex) {
            li.classList.add('current-turn');
        }
        playerListElement.appendChild(li);
    });
}


// --- ОСНОВНАЯ ЛОГИКА БРОСКА КУБИКА (diceClickListener) ---
function diceClickListener() {
    // Получаем dice элемент внутри контейнера
    const diceElement = document.getElementById('dice');
    if (!diceElement || isRolling) return;
    isRolling = true;
    
    const agentsPool = currentMode === 'Solo' ? agents : availableAgents; 

    if (currentMode === 'Party' && availableAgents.length === 0) {
        showPartyResults();
        isRolling = false;
        return;
    }
    
    if (agentsPool.length === 0) {
        alert("Нет доступных агентов для броска.");
        isRolling = false;
        return;
    }
    
    diceElement.classList.add('rolling');
    diceSound.currentTime = 0;
    diceSound.play();

    setTimeout(() => {
        const maxRoll = Math.min(6, agentsPool.length); 
        const roll = Math.floor(Math.random() * maxRoll) + 1;
        
        for (let i = 1; i <= 6; i++) {
            diceElement.classList.remove(`show-${i}`);
        }
        diceElement.classList.add(`show-${roll}`);
        diceElement.classList.remove('rolling');

        skeletonContainer.style.display = 'flex';
        skeleton.classList.add('show');

        setTimeout(() => {
            skeleton.classList.add('deal');
        }, 500);

        // Показ карт
        setTimeout(() => {
            skeleton.classList.remove('deal');
            skeleton.classList.remove('show');
            skeletonContainer.style.display = 'none';

            cardsContainer.innerHTML = '';
            
            const shuffled = [...agentsPool].sort(() => 0.5 - Math.random()); 
            const selected = shuffled.slice(0, roll);
            
            selected.forEach((agent, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                
                card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">?</div> 
                        <div class="card-back">
                            <img src="${agent.image}" alt="${agent.name}" class="agent-card-img">
                            <h3>${agent.name}</h3>
                            <div class="role">${agent.role}</div>
                            <div class="description">${agent.description}</div>
                        </div>
                    </div>
                `;

                card.addEventListener('click', () => {
                    if (card.classList.contains('flipped')) {
                        if (currentMode === 'Solo') {
                            showAgent(agent, false);
                        }
                        return;
                    }
                    
                    card.classList.add('flipped');
                    cardSound.currentTime = 0;
                    cardSound.play();
                    
                    // Отключаем клики по всем картам после выбора
                    document.querySelectorAll('.card').forEach(c => c.style.pointerEvents = 'none'); 

                    if (currentMode === 'Solo') {
                        setTimeout(() => {
                            showAgent(agent, false);
                            isRolling = false;
                        }, 1000);
                        
                    } else {
                        // --- ЛОГИКА РЕЖИМА PARTY (Переход к экрану Агента) ---
                        players[currentPlayerIndex].chosenAgents = [agent]; // Только один агент
                        availableAgents = availableAgents.filter(a => a.name !== agent.name); 
                        
                        setTimeout(() => {
                            showAgent(agent, false); // isViewingFinalResult = false, это выбор
                        }, 1000);
                    }
                });

                cardsContainer.appendChild(card);

                setTimeout(() => {
                    card.classList.add('show');
                }, 200 * index);
            });
            
        }, 1200); 
    }, 800); 
}

// --- ФИНАЛЬНАЯ ПРЕЗЕНТАЦИЯ РЕЖИМА PARTY (УПРАВЛЕНИЕ ЧЕРЕПОМ) ---
function showPartyResults() {
    isViewingFinalResult = true; 
    partyInfo.style.display = 'none';
    
    // 1. Изменяем финальный заголовок
    cardsContainer.innerHTML = '<h2>Вперёд, команда! Орлы, к бою!</h2>'; 

    // 2. Заменяем кубик на анимированный ЧЕРЕП
    const diceContainer = document.getElementById('dice-container');
    diceContainer.innerHTML = `
        <div id="final-skull" 
             style="width: 120px; height: 120px; margin: 30px auto; display: flex; justify-content: center; align-items: center; font-size: 70px; color: #ff4655; animation: pulse 1.5s infinite; cursor: pointer; border-radius: 50%; box-shadow: 0 0 20px #ff46554d;"
             title="Нажмите, чтобы начать новую игру">
            💀
        </div>
    `;
    
    // 3. ПРИВЯЗЫВАЕМ ФУНКЦИЮ СБРОСА К ЧЕРЕПУ
    document.getElementById('final-skull').addEventListener('click', resetGame);


    // 4. Создаем сетку для финальных карт
    const resultsGrid = document.createElement('div');
    resultsGrid.className = 'cards-grid final-results-grid'; 
    resultsGrid.style.marginTop = '40px'; 

    players.forEach((player, index) => {
        const finalAgent = player.chosenAgents[0]; 
        
        const resultBlock = document.createElement('div');
        resultBlock.className = 'final-result-block'; 
        resultBlock.style.transitionDelay = `${index * 0.1}s`; 
        
        resultBlock.innerHTML = `
            <div class="final-agent-icon" style="background-image: url('${finalAgent.image}')"></div>
            <div class="final-info-content">
                <p class="final-player-name">${player.name}</p>
                <h4 class="final-agent-name">${finalAgent.name}</h4>
                <p class="final-agent-role">${finalAgent.role}</p>
            </div>
            <button class="view-final-agent-btn" data-agent='${JSON.stringify(finalAgent)}'>
                Смотреть
            </button>
        `;
        
        resultsGrid.appendChild(resultBlock);
    });

    cardsContainer.appendChild(resultsGrid);
    
    // Обработчик клика для кнопок просмотра
    document.querySelectorAll('.view-final-agent-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            try {
                const agentData = JSON.parse(e.currentTarget.getAttribute('data-agent'));
                showAgent(agentData, true); 
            } catch (error) {
                console.error("Ошибка при парсинге данных агента:", error);
            }
        });
    });
    
    isRolling = false;
}

// Функция для возврата кубика в исходное состояние
function resetDiceContainer() {
    const diceContainer = document.getElementById('dice-container');
    diceContainer.innerHTML = `
        <div id="dice" class="dice-cube">
            <div class="side front dots-1"><div class="dot center"></div></div>
            <div class="side back dots-6">
                <div class="dot tl"></div><div class="dot tr"></div>
                <div class="dot bl"></div><div class="dot br"></div>
                <div class="dot cl"></div><div class="dot cr"></div>
            </div>
            <div class="side right dots-3">
                <div class="dot tl"></div><div class="dot br"></div>
                <div class="dot center"></div>
            </div>
            <div class="side left dots-4">
                <div class="dot tl"></div><div class="dot tr"></div>
                <div class="dot bl"></div><div class="dot br"></div>
            </div>
            <div class="side top dots-5">
                <div class="dot tl"></div><div class="dot tr"></div>
                <div class="dot bl"></div><div class="dot br"></div>
                <div class="dot center"></div>
            </div>
            <div class="side bottom dots-2">
                <div class="dot tl"></div><div class="dot br"></div>
            </div>
        </div>
    `;
    // Новая кнопка будет обработана слушателем на dice-container
}

// Новая функция для сброса игры
function resetGame() {
    // 1. Возвращаем кубик
    resetDiceContainer();
    
    // 2. Сброс данных и переход к выбору режима
    players = [];
    currentPlayerIndex = 0;
    playerLimit = 0;
    availableAgents = [...agents];
    currentMode = null;
    isViewingFinalResult = false;
    
    mainAppContainer.style.display = 'none';
    modeSelection.style.display = 'flex'; 
    cardsContainer.innerHTML = '';
}


// --- ЛОГИКА ПОКАЗА ЭКРАНА АГЕНТА (ОБНОВЛЕНО С ЗАДАНИЯМИ И НАКАЗАНИЯМИ) ---
function showAgent(agent, isFinalClick) {
    isViewingFinalResult = isFinalClick; 
    
    const currentVolume = volumeSlider.value / 100; 

    if (agent.video) {
        videoPlaceholder.innerHTML = `
            <video width="100%" height="100%" autoplay style="object-fit: cover;"> 
                <source src="${agent.video}" type="video/mp4">
                Ваш браузер не поддерживает видео.
            </video>
        `;
        
        const videoElement = document.querySelector('#video-placeholder video');
        if (videoElement) {
            videoElement.volume = currentVolume;
        }
    } else {
        agentView.style.display = 'none';
        alert(`Видео пока не добавлено для ${agent.name}.`);
        if (currentMode === 'Party' && !isFinalClick) {
            backBtn.click(); 
        } else if (isFinalClick) {
            showPartyResults(); 
        }
        return;
    }
    
    // --- ВЫБОР СЛУЧАЙНОГО ЗАДАНИЯ И НАКАЗАНИЯ ---
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    const randomPunishment = punishments[Math.floor(Math.random() * punishments.length)];

    agentDescription.innerHTML = `
        <h2 style="color: #dd2a2aff;">${agent.name} (${agent.role})</h2>
        <p>${agent.description || "Описание пока не добавлено."}</p>
        
        <div class="task-section" style="margin-top: 20px; padding: 10px; background: #2a2a47; border-radius: 5px; border-left: 3px solid #00ff00;">
            <h3 style="color: #00ff00;">🎯 Задание:</h3>
            <p id="task-text">${randomTask}</p>
        </div>

        <div class="punishment-section" id="punishment-section" style="margin-top: 10px; padding: 10px; background: #2a2a47; border-radius: 5px; border-left: 3px solid #ff4655;">
            <h3 style="color: #ff4655;">⚠️ Наказание:</h3>
            <p id="punishment-text">${randomPunishment}</p>
        </div>

        <button id="task-done-btn" style="margin-top: 15px; padding: 8px 15px; background: #00ff00; color: black; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">
            Задание выполнено
        </button>
    `;
    
    agentView.style.display = 'flex';

    // --- ЛОГИКА КНОПКИ "ЗАДАНИЕ ВЫПОЛНЕНО" ---
    const taskDoneBtn = document.getElementById('task-done-btn');
    const punishmentSection = document.getElementById('punishment-section');
    if (taskDoneBtn && punishmentSection) {
        taskDoneBtn.addEventListener('click', () => {
            punishmentSection.style.display = 'none';
            taskDoneBtn.disabled = true;
            taskDoneBtn.textContent = 'Задание выполнено!';
            taskDoneBtn.style.background = '#555';
        });
    }
}


// --- ЛОГИКА КНОПКИ "НАЗАД" (Обновлено для Party: переключает ход / возвращает в финал) ---
backBtn.addEventListener('click', () => {
    agentView.style.display = 'none';

    // 1. Останавливаем видео и звуки
    const videoElement = document.querySelector('#video-placeholder video');
    if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
    }
    videoPlaceholder.innerHTML = ''; 
    cardSound.pause();
    cardSound.currentTime = 0;
    
    // 2. Логика возврата
    if (currentMode === 'Solo') {
         // Включаем клики обратно
         document.querySelectorAll('.card').forEach(c => c.style.pointerEvents = 'auto'); 
         
         document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('flipped');
        });
        cardsContainer.innerHTML = '<h2>Нажмите на кубик, чтобы выбрать агента!</h2>';
        isRolling = false;
        
    } else if (currentMode === 'Party' && isViewingFinalResult) {
        // Возвращаемся в финальный экран, если кликнули на карту результата
        showPartyResults();
        
    } else if (currentMode === 'Party' && !isViewingFinalResult) {
        // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ХОДА В PARTY (после обычного выбора) ---
        cardsContainer.innerHTML = ''; 
        
        // Включаем клики обратно (на всякий случай, хотя здесь карты удаляются)
        document.querySelectorAll('.card').forEach(c => c.style.pointerEvents = 'auto'); 

        if (currentPlayerIndex === players.length - 1) {
            // Если это последний игрок -> ФИНАЛ
            showPartyResults();
        } else {
            // Переход хода к следующему игроку
            currentPlayerIndex++;
            renderPlayerList();
            isRolling = false; 
            cardsContainer.innerHTML = `<h2>Ход игрока: ${players[currentPlayerIndex].name}. Нажмите на кубик.</h2>`;
        }
    }
});


// --- ЛОГИКА УПРАВЛЕНИЯ ГРОМКОСТЬЮ ---
volumeSlider.addEventListener('input', () => {
    const newVolume = volumeSlider.value / 100;

    diceSound.volume = newVolume;
    cardSound.volume = newVolume;

    const videoElement = document.querySelector('#video-placeholder video');
    if (videoElement) {
        videoElement.volume = newVolume;
    }
});