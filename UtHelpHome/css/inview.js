document.addEventListener('DOMContentLoaded', function() {
  //
  ////class名'inview_Item'を持つ要素をすべて取得し、配列を作成する
  var inview_elements = document.getElementsByClassName('inview_Item');
  //空のSetオブジェクトを作成し、１つ目の要素を入れる
  var inview_targets = new Set();
  inview_targets.add('.inview_Item');
  //
  //
  for(i=0;i<inview_elements.length;i++){
    inview_elements[i].classList.forEach(function(val){
      inview_targets.add('.' + val);//addで重複せずに要素を追加する
    });
  }
  var inview_targets = Array.from(inview_targets);//Setオブジェクトを配列に変換する
  //
  //
  console.log('ターゲットのタグは' + inview_targets.length + '個あります');
  console.log(inview_targets);
  //
  //
  var inview_targets = document.querySelectorAll(inview_targets); // 監視対象を選択
  //
  var inview_targetsArr = Array.prototype.slice.call(inview_targets); // 監視対象をArrayに変換（IE対策）
  //

  /* IntersectionObserverに渡すコールバック関数 */
  var cb = function(entries, observer) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        /* 監視対象が画面内に入ったときのアクション */
        entry.target.classList.add('inview'); // 画面内に入った要素にinviewクラスを付与
      } else {
        entry.target.classList.remove('inview'); // 画面外に出た要素のinviewクラスを外す
      }
    });
  }
  /* IntersectionObserverに渡すコールバック関数 */
  var options = {
    threshold:0 ,
    rootMargin: "100% 0% -10% 0%",/*上右下左の順にマージンを設定する。右と左はゼロで上は100%、下は-20%*/
  }
  /* IntersectionObserver初期化 */
  var io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfillの設定
  inview_targetsArr.forEach(el => {
    io.observe(el);
  });
});
//
