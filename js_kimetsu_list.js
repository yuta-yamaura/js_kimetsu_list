// 全ての登場人物を表示する為の関数
async function allData() {
    const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/all.json');
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

// 初回実行による全ての登場人物を表示する為の関数
allData();

let allMemberButton = document.getElementById('all_member');
allMemberButton.addEventListener('click', allData);


// 鬼殺隊を表示する為の関数
async function kisatsuMemberButtonClick() {
    const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/kisatsutai.json');
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

let kisatsuMemberButton = document.getElementById('kisatsu_member');
kisatsuMemberButton.addEventListener('click', kisatsuMemberButtonClick);


// 煉獄さんを表示する為の関数
async function hashiraButtonClick() {
    const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/hashira.json');
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

let hashiraButton = document.getElementById('hashira');
hashiraButton.addEventListener('click', hashiraButtonClick);


// 鬼を表示する為の関数
async function demonButtonClick() {
    const response = await fetch('https://ihatov08.github.io/kimetsu_api/api/oni.json');
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

let demonButton = document.getElementById('demon');
demonButton.addEventListener('click', demonButtonClick);