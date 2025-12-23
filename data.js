const APP_DATA = {
    "Level1_Topics": [
        {"text": "對象", "target": "Page_A1"}, {"text": "連接", "target": "Page_B1"},
        {"text": "動作", "target": "Page_C1"}, {"text": "需要", "target": "Page_D1"},
        {"text": "活動", "target": "Page_E1"}, {"text": "健康", "target": "Page_F1"},
        {"text": "地點", "target": "Page_G1"}, {"text": "時間", "target": "Page_H1"},
        {"text": "問候", "target": "Page_I1"}, {"text": "生活", "target": "Page_J1"},
        {"text": "句子", "target": "Page_K1"}, {"text": "其他", "target": "Page_L1"},
    ],

    "Page_A1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_A1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_B1": {
        "pages": [
            [
                {"text": "想", "action": "ADD_TEXT"}, {"text": "要", "action": "ADD_TEXT"},
                {"text": "請", "action": "ADD_TEXT"}, {"text": "很", "action": "ADD_TEXT"},
                {"text": "不", "action": "ADD_TEXT"}, {"text": "熱", "action": "ADD_TEXT"},
                {"text": "冷", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "睏", "action": "ADD_TEXT"}, {"text": "舒服", "action": "ADD_TEXT"},
                {"text": "需要", "action": "ADD_TEXT"}, {"text": "幫助", "action": "ADD_TEXT"},
                {"text": "出去", "action": "ADD_TEXT"}, {"text": "進入下層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_B1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"},
            ]
       ]

    },

      "Page_C1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_C1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_D1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_D1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_E1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_E1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },
     "Page_F1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_F1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_G1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_G1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_H1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_H1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_I1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_I1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_J1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_J1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_K1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_K1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

     "Page_L1": {
        "pages": [
            [
                {"text": "您", "action": "ADD_TEXT"}, {"text": "不", "action": "ADD_TEXT"}, 
                {"text": "很", "action": "ADD_TEXT"}, {"text": "好", "action": "ADD_TEXT"}, 
                {"text": "要", "action": "ADD_TEXT"}, {"text": "是", "action": "ADD_TEXT"}, 
                {"text": "請", "action": "ADD_TEXT"}, {"text": "愛", "action": "ADD_TEXT"}, 
                {"text": "了", "action": "ADD_TEXT"}, {"text": "累", "action": "ADD_TEXT"},
                {"text": "餓", "action": "ADD_TEXT"}, {"text": "渴", "action": "ADD_TEXT"},
                {"text": "想", "action": "ADD_TEXT"}, {"text": "人物", "action": "SUB_LINK"}, 
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

    "Page_L1_Sub": {
        "pages": [
            [
                {"text": "細節1", "action": "ADD_TEXT"}, {"text": "細節2", "action": "ADD_TEXT"},
                {"text": "細節3", "action": "ADD_TEXT"}, {"text": "細節4", "action": "ADD_TEXT"},
                {"text": "細節5", "action": "ADD_TEXT"}, {"text": "細節6", "action": "ADD_TEXT"},
                {"text": "細節7", "action": "ADD_TEXT"}, {"text": "細節8", "action": "ADD_TEXT"},
                {"text": "細節9", "action": "ADD_TEXT"}, {"text": "細節10", "action": "ADD_TEXT"},
                {"text": "細節11", "action": "ADD_TEXT"}, {"text": "細節12", "action": "ADD_TEXT"},
                {"text": "細節13", "action": "ADD_TEXT"}, {"text": "再下一層", "action": "SUB_LINK"},
                {"text": "播放", "action": "SPEAK"}, {"text": "回主頁", "action": "GOTO_HOME"}
            ]
        ]
    },

};