// IDが'HelpDatabase'の要素を取得
var helpDatabase = document.getElementById('HelpDatabase');
// 追加したい新しい要素のHTML内容
var newRows = `
    <div class="inview_Item delaydisplay_parent Slidefrom_left dtdd_style_a" style="">
    <dt class="">
      <a class="MS_idleX" href="./A_DWG_Lisp_List/DWG_Lisp_List.html">DWGのLispコマンド一覧</a>
    </dt>
    <dd class="inview_Item delaydisplay_child Slidefrom_up">
          DwgCadで使用できるLispコマンドの一覧を表示します。
          <br>各コマンドの更新内容は、専用ページで確認出来ます。
      <!--<br>各コマンドの詳細な情報は、専用ページで確認してください。-->
    </dd>
  </div>
`;
// 新しい要素を追加
helpDatabase.innerHTML += newRows;
