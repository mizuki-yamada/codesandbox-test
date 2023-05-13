"use strict";

{
  const onClickAdd = () => {
    //テキストボックスの値を変数に格納し、初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createIncompleteList(inputText);
  };

      //要素を削除するときの挙動を関数化
    const deleteFromIncompleteList = (target) => {
      document.getElementById("incomplete-list").removeChild(target);
    };

    //要素を追加するときの挙動を関数化
    const createIncompleteList = (text) => {
    //divを生成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //ボタン（完了）タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      //完了ボタンを押された時、要素を消す
      deleteFromIncompleteList(completeButton.parentNode);

      //TODO内容を取得
      //まずは完了ボタンの親要素全て
      const TargetTodo = completeButton.parentNode;
      //TODO内容は親要素の最初の要素、テキストのみ取得
      const text = TargetTodo.firstElementChild.innerText;

      //完了リストにTODO内容を追加
      //div以下を初期化
      TargetTodo.textContent = null;
      //liタグを生成
      const li = document.createElement("li");
      li.innerText = text;
      //ボタン生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener('click', () => {
        //押された戻すボタンの親たぐを完了リストから削除
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);

        //テキスト取得
        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      })

      //divタグの子要素に各要素を追加
      TargetTodo.appendChild(li);
      TargetTodo.appendChild(backButton);
      document.getElementById("complete-list").appendChild(TargetTodo);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      //押された削除ボタンの親要素であるdivタグを未完了リストから削除したい
      deleteFromIncompleteList(deleteButton.parentNode);
    });

    //divの子要素にliを入れる
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
    }


  document.getElementById("add-button").addEventListener("click", () => {
    onClickAdd();
  });
}
