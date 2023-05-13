"use strict";

{
  const onClickAdd = () => {
    //テキストボックスの値を変数に格納し、初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    //divを生成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = inputText;

    //ボタン（完了）タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      alert("完了");
    });
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      //押された削除ボタンの親要素であるdivタグを未完了リストから削除したい
      const deleteTarget = deleteButton.parentNode;
      document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    //divの子要素にliを入れる
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
  };

  document.getElementById("add-button").addEventListener("click", () => {
    onClickAdd();
  });
}
