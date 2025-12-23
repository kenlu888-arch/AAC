const appState = {
    currentText: "",
    currentPageKey: "Level1_Topics",
    currentPageIndex: 0,
    totalPages: 1,
    isEditMode: false
};

const TOPIC_COLORS = {
    "A": "#E91E63", "B": "#FF9800", "C": "#FBC02D", "D": "#4CAF50",
    "E": "#009688", "F": "#00BCD4", "G": "#9C27B0", "H": "#673AB7",
    "I": "#795548", "J": "#607D8B", "K": "#3F51B5", "L": "#8D6E63",
    "M": "#FF5722", "N": "#00897B", "O": "#558B2F", "P": "#455A64",
    "Level1": "#2196F3"
};

function renderInterface(pageKey, pageIndex = 0) {
    if (!APP_DATA[pageKey]) {
        console.error("找不到頁面資料:", pageKey);
        return;
    }
    appState.currentPageKey = pageKey;
    appState.currentPageIndex = pageIndex;
    const container = document.getElementById('button-container');
    container.innerHTML = ''; 

    const isMain = pageKey === "Level1_Topics";
    document.getElementById('page-control').className = isMain ? 'hidden' : '';

    const data = APP_DATA[pageKey];
    let currentButtons = isMain ? data : (data.pages[pageIndex] || []);
    let gridLimit = isMain ? 12 : 16;
    container.className = isMain ? "grid-3x4" : "grid-4x4";

    if (!isMain) {
        appState.totalPages = data.pages.length;
        document.getElementById('page-info').textContent = `${pageIndex + 1} / ${appState.totalPages}`;
    }

    const themeColor = isMain ? TOPIC_COLORS["Level1"] : (TOPIC_COLORS[pageKey.split('_')[1]?.charAt(0)] || "#9E9E9E");

    for (let i = 0; i < gridLimit; i++) {
        const item = currentButtons[i];
        if (item) {
            container.appendChild(createButton(item, themeColor, i));
        } else {
            container.appendChild(document.createElement('div'));
        }
    }
}

function createButton(item, color, index) {
    const btn = document.createElement('button');
    const storageKey = `edit_${appState.currentPageKey}_${appState.currentPageIndex}_${index}`;
    btn.textContent = localStorage.getItem(storageKey) || item.text;
    
    // 樣式判定：第 14 格 (Index 13) 強制顯示為紫色
    if (appState.currentPageKey !== "Level1_Topics" && index === 13) {
        btn.style.backgroundColor = "#673AB7"; 
        if (!btn.textContent) btn.textContent = "進入下層";
    } else if (item.action === "SPEAK") {
        btn.style.backgroundColor = "#1A237E";
    } else if (item.action === "GOTO_HOME") {
        btn.style.backgroundColor = "#2E7D32";
    } else {
        btn.style.backgroundColor = color;
    }

    btn.onclick = () => {
        if (appState.isEditMode) {
            const newText = prompt("修改按鈕文字：", btn.textContent);
            if (newText !== null) {
                btn.textContent = newText;
                localStorage.setItem(storageKey, newText);
            }
        } else {
            handleAction(item, btn.textContent, index);
        }
    };
    return btn;
}

function handleAction(item, text, index) {
    // 核心邏輯：點擊第 14 格進入次層 (例如 Page_A1 進入 Page_A1_Sub)
    if (appState.currentPageKey !== "Level1_Topics" && index === 13) {
        const subKey = `${appState.currentPageKey}_Sub`;
        if (APP_DATA[subKey]) {
            renderInterface(subKey, 0);
        } else {
            alert("尚未建立次層資料: " + subKey);
        }
        return;
    }

    if (item.target) {
        renderInterface(item.target, 0);
    } else if (item.action === "ADD_TEXT") {
        appState.currentText += text;
        document.getElementById('text-display').textContent = appState.currentText;
    } else if (item.action === "GOTO_HOME") {
        renderInterface("Level1_Topics");
    } else if (item.action === "SPEAK") {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(appState.currentText || " ");
        u.lang = 'zh-TW';
        u.rate = 0.8;
        speechSynthesis.speak(u);
    }
}

// 綁定控制按鈕
document.getElementById('clear-text-btn').onclick = () => {
    appState.currentText = "";
    document.getElementById('text-display').textContent = "";
};

document.getElementById('backspace-btn').onclick = () => {
    appState.currentText = appState.currentText.slice(0, -1);
    document.getElementById('text-display').textContent = appState.currentText;
};

document.getElementById('edit-toggle-btn').onclick = function() {
    appState.isEditMode = !appState.isEditMode;
    this.textContent = appState.isEditMode ? "✅完成" : "✏️修改";
    this.classList.toggle('active', appState.isEditMode);
};

// 新增頁面邏輯
document.getElementById('add-page-btn').onclick = () => {
    if (appState.currentPageKey === "Level1_Topics") return;
    const newPage = Array(16).fill(null).map((_, i) => {
        if (i === 13) return {"text": "進入下層", "action": "SUB_LINK"};
        if (i === 14) return {"text": "播放", "action": "SPEAK"};
        if (i === 15) return {"text": "回主頁", "action": "GOTO_HOME"};
        return {"text": "", "action": "ADD_TEXT"};
    });
    APP_DATA[appState.currentPageKey].pages.push(newPage);
    renderInterface(appState.currentPageKey, APP_DATA[appState.currentPageKey].pages.length - 1);
};

document.getElementById('prev-page').onclick = () => {
    if (appState.currentPageIndex > 0) renderInterface(appState.currentPageKey, appState.currentPageIndex - 1);
};

document.getElementById('next-page').onclick = () => {
    if (appState.currentPageIndex < appState.totalPages - 1) renderInterface(appState.currentPageKey, appState.currentPageIndex + 1);
};

window.onload = () => renderInterface("Level1_Topics");