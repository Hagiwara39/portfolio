// ===========================================
// ダークモード切替
// ===========================================

// id="theme-toggle" のボタンを HTML の中から探して、変数に入れておく
const themeButton = document.getElementById("theme-toggle");

// ボタンが「クリック」されたら、function の { } の中を実行する
themeButton.addEventListener("click", function () {
    // body に "dark" というクラスがなければ付け、あれば外す（toggle = 切り替え）
    document.body.classList.toggle("dark");

    // 今 body に "dark" クラスが付いているか調べる（付いていれば true、なければ false）
    const isDark = document.body.classList.contains("dark");

    // ボタンの文字を「次に押したら何になるか」に書き換える
    if (isDark) {
        themeButton.textContent = "ライトモードにする";
    } else {
        themeButton.textContent = "赤瓦モードにする";
    }
});
