//<!--"UtHelp"フォルダの中の"css"フォルダのパスを作成する。-->
var cssPath = decodeURI(window.location.href.split('UtHelp').shift());
var cssPath = cssPath + 'UtHelp/css/';
//<!---->
//<!--リンクするcssファイル名をリスト化して指定-->
var Processlist = ['headers','hover_box-shadow' ,'popup_img','test'
  ,'lisphelp_set','RedText'
];
for(i=0;i<Processlist.length;i++){
  var css = document.createElement('link');
  css.type = 'text/css';
  css.rel = 'stylesheet';
  css.href = cssPath + Processlist[i] + '.css' ;
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(css);
}
//<!---->
//<!--リンクするjsファイル名をリスト化して指定-->
var Processlist = ['inview'];
for(i=0;i<Processlist.length;i++){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = cssPath + Processlist[i] + '.js' ;
  script.async = true; //
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}
//<!---->
//<!-- ●読み込むアイコンファイルを指定する -->
var css = document.createElement('link');
css.rel = 'icon';
css.href = cssPath + 'UTicon.ico' ;
css.type = 'text/css';
var head = document.getElementsByTagName('head')[0];
head.appendChild(css);
//<!---->
