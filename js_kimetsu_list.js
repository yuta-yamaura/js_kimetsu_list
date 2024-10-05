// ラジオボタンのオブジェクトを取得
const radio_btns = document.querySelectorAll(`input[type='radio']`);

for (let target of radio_btns) {
    // ラジオボタンの切り替えによるクリックイベントを設定
    target.addEventListener('change', function () {
        // 鬼滅メンバーの呼び出しAPIのURLを変更するために値を変数valueに格納
        value = target.value
        // 鬼滅メンバーをラジオボタンに応じて表示するための関数を実行
        kimetsu(value);
    });
}


// 登場人物を表示する為の関数
async function kimetsu(value) {
    const response = await fetch(`https://ihatov08.github.io/kimetsu_api/api/${value}.json`);
    const data = await response.json();
    const dataList = document.getElementById('data-list');

    //画面表示を初期化
    dataList.innerHTML = '';

    data.forEach(item => {
        const url = 'https://ihatov08.github.io/';

        const characterDiv = document.createElement("div");
        characterDiv.setAttribute('class', 'characterDiv');

        const listName = document.createElement("div");

        // 画像を中央寄せにする為のdivタグ
        const imageDiv = document.createElement("div");
        const listImage = document.createElement("img");

        const listCategory = document.createElement("div");
        listName.innerHTML = `
        <div>${item.name}</div>
        `;

        listImage.src = url + item.image
        listImage.width = 200

        listCategory.innerHTML = `
        <div>${item.category}</div>
        `;
        characterDiv.appendChild(listName);
        characterDiv.appendChild(imageDiv);
        imageDiv.appendChild(listImage);
        characterDiv.appendChild(listCategory);

        dataList.appendChild(characterDiv);
    });
}

// 画面初期表示用の関数呼び出し
kimetsu('all');
