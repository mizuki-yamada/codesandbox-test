"use strict";

{
  const onClickAdd = () => {
    //テキストボックスの値を変数に格納し、初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    alert(inputText);
  };

  document.getElementById("add-button").addEventListener("click", () => {
    onClickAdd();
  });
}
