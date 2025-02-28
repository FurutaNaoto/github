//
const stalker = document.createElement('div');  // divタグを作成
stalker.id = 'mouse_stalker';                         // IDを付与
stalker.classList.add('MS_idle');               // 'MS_idle'クラスを追加
document.body.appendChild(stalker);             // bodyの最後に挿入

//
//
document.addEventListener('DOMContentLoaded', function() {
  //
  let stalker = document.getElementById('mouse_stalker');
  let lastMouseMoveTime = Date.now();
  let hovFlag = false;
  let classname_list = ['MS_idleX','MS_GoLink',
  'sample_A','sample_B']; //
  let footer_element = document.getElementById('footer');
  let idle_X = window.innerWidth - 50 ;
  let idle_Y = 0;
  if (footer_element) {idle_Y = footer_element.getBoundingClientRect().top;}
  //
  document.addEventListener('mousemove', function (e) {
    //
    stalker.classList.remove('MS_idle'); //マウスが動いたらidleのclassを外す
    //
    //クラス名に"MS_idleX"を持っていたらidle用の座標に移動する。
    //持っていなかったら、マウスカーソルの座標値に移動する
    if (stalker.classList.contains('MS_idleX')) {
      // クラスが存在する場合の処理
      stalker.style.transform = 'translate(' + idle_X + 'px, ' + idle_Y + 'px)';
      } else {
      // クラスが存在しない場合の処理
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }

    //
    lastMouseMoveTime = Date.now();
  });
  //
  function resetStalkerPosition() {
    const currentTime = Date.now();
    const timeDifference = currentTime - lastMouseMoveTime;
    if (timeDifference >= 3000) {
      //footer要素を取得
      footer_element = document.getElementById('footer');
      //footerがあったら高さを取得、なかったら何もしない(0のまま)
      if (footer_element) {idle_Y = footer_element.getBoundingClientRect().top;}
      idle_X = window.innerWidth - 50 ;
      idle_Y = idle_Y;
      stalker.style.transform = 'translate(' + idle_X + 'px, ' + idle_Y + 'px)';
      stalker.classList.add('MS_idle');
    }
    requestAnimationFrame(resetStalkerPosition);
  }
  resetStalkerPosition();
  //
  //
  for (let classname_i = 0; classname_i < classname_list.length; classname_i++) {
    let linkElem = document.querySelectorAll('.' + classname_list[classname_i]);
    for (let i = 0; i < linkElem.length; i++) {
      console.log('.' + classname_list[classname_i]);
      console.log(i);
      linkElem[i].addEventListener('mouseover', function (e) {
          hovFlag = true;
          stalker.classList.add(classname_list[classname_i]);
      });
      linkElem[i].addEventListener('mouseout', function (e) {
          hovFlag = false;
          stalker.classList.remove(classname_list[classname_i]);
      });
    }
  }
  //
  //
});
