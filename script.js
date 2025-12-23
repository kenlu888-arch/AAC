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
    appState.currentPageKey = pageKey;
    appState.currentPageIndex = pageIndex;
    const container = document.getElementById('button-container');
    container.innerHTML = ''; 

    const isMain = pageKey === "Level1_Topics";
    document.getElementById('page-control').className = isMain ? 'hidden' : '';

    const data = APP_DATA[pageKey];
    const currentButtons = isMain ? data : (data.pages[pageIndex] || []);
    
    if (!isMain) {
        appState.totalPages = data.pages.length;
        document.getElementById('page-info').textContent = `${pageIndex + 1} / ${appState.totalPages}`;
    }

    const themeColor = isMain ? TOPIC_COLORS["Level1"] : (TOPIC_COLORS[pageKey.split('_')[1]?.charAt(0)] || "#9E9E9E");

    for (let i = 0; i < 16; i++) {
        if (i < currentButtons.length) {
            container.appendChild(createButton(currentButtons[i], themeColor, i));
        } else {
            container.appendChild(document.createElement('div'));
        }
    }
}

function createButton(item, color, index) {
    const btn = document.createElement('button');
    const storageKey = `edit_${appState.currentPageKey}_${appState.currentPageIndex}_${index}`;
    btn.textContent = localStorage.getItem(storageKey) || item.text;
    btn.style.backgroundColor = (item.action === "SPEAK" || item.action === "GOTO_HOME") ? "#1A237E" : color;

    // 使用傳統 onclick，iPad 兼容性最好
    btn.onclick = () => {
        if (appState.isEditMode) {
            const newText = prompt("請輸入按鈕名稱：", btn.textContent);
            if (newText !== null && newText.trim() !== "") {
                btn.textContent = newText;
                localStorage.setItem(storageKey, newText);
            }
        } else {
            handleAction(item, btn.textContent);
        }
    };

    return btn;
}

function handleAction(item, text) {
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
        speechSynthesis.speak(u);
    }
}

// 綁定修改切換按鈕
const editBtn = document.getElementById('edit-toggle-btn');
editBtn.onclick = function(e) {
    appState.isEditMode = !appState.isEditMode;
    if (appState.isEditMode) {
        this.classList.add('active');
        this.textContent = "✅完成";
    } else {
        this.classList.remove('active');
        this.textContent = "✏️修改";
    }
};

document.getElementById('clear-text-btn').onclick = () => {
    appState.currentText = "";
    document.getElementById('text-display').textContent = "";
};

document.getElementById('backspace-btn').onclick = () => {
    appState.currentText = appState.currentText.slice(0, -1);
    document.getElementById('text-display').textContent = appState.currentText;
};

document.getElementById('prev-page').onclick = () => {
    if (appState.currentPageIndex > 0) renderInterface(appState.currentPageKey, appState.currentPageIndex - 1);
};

document.getElementById('next-page').onclick = () => {
    if (appState.currentPageIndex < appState.totalPages - 1) renderInterface(appState.currentPageKey, appState.currentPageIndex + 1);
};

window.onload = () => renderInterface("Level1_Topics");