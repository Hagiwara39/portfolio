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


// ===========================================
// 作品の絞り込み
// ===========================================

// 絞り込みボタンを「全部」探して、まとめて変数に入れておく
const filterButtons = document.querySelectorAll(".filter button");
// 作品カードを「全部」探して、まとめて変数に入れておく
const workCards = document.querySelectorAll("#works article");

// ボタンを1つずつ取り出して、それぞれにクリックされたときの処理を予約する
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        // 押されたボタンの data-filter の値を読む（"all" / "web" / "design" / "other"）
        const filter = button.dataset.filter;

        // ボタンの見た目: いったん全部から is-active を外し、押されたボタンにだけ付ける
        filterButtons.forEach(function (otherButton) {
            otherButton.classList.remove("is-active");
        });
        button.classList.add("is-active");

        // カードを1枚ずつ取り出して、表示するか隠すかを決める
        workCards.forEach(function (card) {
            // カードの data-category の値を読む
            const category = card.dataset.category;

            // 「すべて」が押された、またはカテゴリが一致したら表示、それ以外は隠す
            if (filter === "all" || filter === category) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        });
    });
});
