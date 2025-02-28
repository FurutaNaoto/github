//////////////////////////
let windowWidth = window.innerWidth; //変数の定義はfunctionの外部で行う
function UpdatingByWindowsize() {
  windowWidth = window.innerWidth; // ウィンドウの幅を取得
  //リサイズ時に動作させるfunctionを指定
  console.log(windowWidth);
 footerUpdate();
}
// DOMContentLoaded イベントが発火した後に footerUpdate 関数を呼び出す
document.addEventListener('DOMContentLoaded', function() {
  // ウィンドウの初期サイズを取得して footerUpdate 関数を実行
  windowWidth = window.innerWidth;
  footerUpdate();
  // ウィンドウの幅が変更されたときに呼び出されるリスナーを設定
  window.addEventListener('resize', UpdatingByWindowsize);
  // ページが読み込まれたときに初回の文字列を設定
  window.addEventListener('load', UpdatingByWindowsize);
});
//////////////////////////
//変数の定義はfunctionの外部で行う
let currentDateString = '';
let currentTimeString = '';
let coordinateString = '0,0';
document.addEventListener('DOMContentLoaded', function() {
  //////////////////////////
  function updateCurrentTime() {
    const currentDateElement = document.getElementById('currentDate');
    const currentTimeElement = document.getElementById('currentTime');
    const now = new Date();
    const year = now.getFullYear().toString().padStart(4, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    currentDateString = year + '/' + month + '/' + day;
    currentTimeString = hours + ':' + minutes + ':' + seconds;
    //id指定の検索で要素が見つからない場合は処理しない
    if (currentDateElement) {currentDateElement.textContent = currentDateString;}
    if (currentTimeElement) {currentTimeElement.textContent = currentTimeString;}
  }
  // 初回実行
  updateCurrentTime();
  // 1秒ごとに更新
  setInterval(updateCurrentTime, 1000);
  /////
  function updatecoordinate() {
    coordinateString = '0 , 0';
    //
    const coordinateElement = document.getElementById('coordinate');
    //id指定の検索で要素が見つからない場合は処理しない
    if (coordinateElement) {coordinateElement.textContent = coordinateString;}
  }
  // 初回実行
  updatecoordinate();
  //
  document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = window.innerHeight - event.clientY; // ウィンドウの高さからY座標を引く
    //
    coordinateString = x + ' , ' +  y;
    //
    const coordinateElement = document.getElementById('coordinate');
    //id指定の検索で要素が見つからない場合は処理しない
    if (coordinateElement) {coordinateElement.textContent = coordinateString;}
  });


  /////
});
//////////////////////////
//////////////////////////
//////////////////////////
//変数の定義はfunctionの外部で行う
let footer_str = '';
//
function footerUpdate() {
  //console.log('footerUpdate');
  // 表示する文字列を決定
  let currentDateElement;
  currentDateElement = document.createElement('span');
  currentDateElement.id = 'currentDate';
  currentDateElement.textContent = currentDateString;
  //
  let currentTimeElement;
  currentTimeElement = document.createElement('span');
  currentTimeElement.id = 'currentTime';
  currentTimeElement.textContent = currentTimeString;
  //
  let coordinateElement;
  coordinateElement = document.createElement('span');
  coordinateElement.id = 'coordinate';
  coordinateElement.textContent = coordinateString;
  //
  //
  //
  footer_str = '';
  /////
  switch (true) {
    //
    case (windowWidth >= 340):
      footer_str = `<span>Uniontec</span>` + footer_str;
    ;
    //
    case (windowWidth >= 260):
      footer_str = `${coordinateElement.outerHTML}` + footer_str;
    ;
    //
    case (windowWidth >= 180):
      footer_str = `${currentTimeElement.outerHTML}` + footer_str;
    ;
    //
    case (windowWidth >= 100):
      footer_str = `${currentDateElement.outerHTML}` + footer_str;
    ;
    //
  }
  /////
  footer_str = `<div class="footers">`
  + `<div class="">` + footer_str + `</div>`
  + `<div class="">Copyright © UNIONTEC co.,ltd. All Rights Reserved.</div>`
  + `</div>`;
  //
 footer_innerHTML = document.getElementById('footer');
  footer_innerHTML.innerHTML = footer_str;
}
//////////////////////////
//////////////////////////
var header_innerHTML = document.getElementById('header');
header_innerHTML.innerHTML = `
<div class="headers MS_idleX">
  <a target="_self" href="LispHelpHome.html"><!--UtHelpHome.htmlにする予定-->
    <!--altの値を取得してcssフォルダパスと結合し、srcの値を書き換えている-->
    <img class="img_Item" src='' alt='UTlogo.png'>
  </a>
</div>
`;
//////////////////////////



















//
