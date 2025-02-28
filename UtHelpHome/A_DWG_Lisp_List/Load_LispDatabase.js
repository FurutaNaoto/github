// IDが'LispDatabase'の要素を取得
var lispDatabase = document.getElementById('LispDatabase');
// 追加したい新しい<tr>要素のHTML内容
var newRows = `
      <tr>
          <td>D002</td>
          <td><a target="_blank" href="D002_ChgBlk/D002_ChgBlk.html">ChgBlk</a></td>
          <td>2025/01/16</td>
          <td>
    選択したブロック及び、その中のブロックの図形情報を整えます。
    <br>画層を「0」に変更したり、色・線種を「ByBlock」に変更等の処理を行えます。
  
          </td>
      </tr>
      <tr>
          <td>内001</td>
          <td><a target="_blank" href="内001_UseClipBoardTextString/内001_UseClipBoardTextString.html">UseClipBoardTextString</a></td>
          <td>2021/02/25</td>
          <td>
    クリップボードに文字列を格納または、クリップボードから文字列を取得するためのコマンド。
  
          </td>
      </tr>
      <tr>
          <td>内002</td>
          <td><a target="_blank" href="内002_BackupdwgfileSizeChecker/内002_BackupdwgfileSizeChecker.html">BackupdwgfileSizeChecker</a></td>
          <td>2019/03/15</td>
          <td>
    バックアップファイル保存用のフォルダの総ファイル容量を確認し、２ＧＢを超えていたらユーザに通知するためのコマンド。
  
          </td>
      </tr>
      <tr>
          <td>内004</td>
          <td><a target="_blank" href="内004_UserCommandHistory/内004_UserCommandHistory.html">UserCommandHistory</a></td>
          <td>2019/03/22</td>
          <td>
    各コマンドの使用履歴を作成するためのコマンド。
  
          </td>
      </tr>
      <tr>
          <td>内006</td>
          <td><a target="_blank" href="内006_DclLastDateControl/内006_DclLastDateControl.html">DclLastDateControl</a></td>
          <td>2025/02/25</td>
          <td>
    項目指定型のＤＣＬで前回使用の設定を外部ファイルに書き出し、読み込みをするためのコマンド。
  
          </td>
      </tr>
      <tr>
          <td>内007</td>
          <td><a target="_blank" href="内007_N-Random/内007_N-Random.html">N-Random</a></td>
          <td>2025/01/11</td>
          <td>
    Random関数を標準で持っていない場合に、同様の処理を行うためのコマンド。
    <br>引数に数字を与えることで、その値を最大値としてランダムな整数を作成します。
    <br>(10を与えると0から9の10種類の中からランダムに数字を出力します。)
  
          </td>
      </tr>
      <tr>
          <td>内XXX</td>
          <td><a target="_blank" href="内XXX_LayerConfiguration/内XXX_LayerConfiguration.html">LayerConfiguration</a></td>
          <td>2019/02/04</td>
          <td>
    新規画層の作成や既存画層情報の取得、変更を行う為のコマンド。
    <br>バージョンアップ対応困難なため、画層の作成や画層情報の書き換えは今後このコマンドを使用せず、
    <br>各コマンド内の記述で対応する事とする。
  
          </td>
      </tr>
      <tr>
          <td>基000</td>
          <td><a target="_blank" href="基000_UtHelp/基000_UtHelp.html">UtHelp</a></td>
          <td>2025/02/03</td>
          <td>
    ヘルプページをMicrosoftEdgeで開きます。
    <br>「Z:\\図面作成参考CADデーター\\0-0_NaoNao-BOX\\UtHelpHome\\UtHelpHome.html」に接続できる環境が必要です。
  
          </td>
      </tr>
      <tr>
          <td>基001</td>
          <td><a target="_blank" href="基001_EXBurst/基001_EXBurst.html">EXBurst</a></td>
          <td>2025/01/08</td>
          <td>
    ExplessToolsの「Burst」を更に使いやすくしたコマンド。
    <br>選択したブロック及び、その中のブロックを分解処理します。
    <br>ブロック内の要素が「0」画層である場合、色・線種等の情報が「ByBlock」である場合、
    <br>属性文字が使用されている場合には、分解前と見た目が変わらないように分解処理を行います。
    <br>非表示状態で管理されている属性文字は、分解処理時に削除されます。
    <br>※AutoCad未対応(Bricsのみ動作確認)
  
          </td>
      </tr>
      <tr>
          <td>基002</td>
          <td><a target="_blank" href="基002_Raceway/基002_Raceway.html">Raceway</a></td>
          <td>2024/12/21</td>
          <td>
    指定の画層でレースウェイ図形を作図します。<br>
    図面尺度に応じてレースウェイの幅が自動計算されます。<br>
    必要に応じて値を指定することもできます。
  
          </td>
      </tr>
      <tr>
          <td>基003</td>
          <td><a target="_blank" href="基003_WTRIM/基003_WTRIM.html">WTRIM</a></td>
          <td>2025/01/07</td>
          <td>
    線図形の交点を指定してトリム処理を行います。<br>
  
          </td>
      </tr>
      <tr>
          <td>基004</td>
          <td><a target="_blank" href="基004_APLINE/基004_APLINE.html">APLINE</a></td>
          <td>2025/01/07</td>
          <td>
    範囲に指定の配列パターンで線を作図します。<br>
  
          </td>
      </tr>
      <tr>
          <td>基005</td>
          <td><a target="_blank" href="基005_UUCS/基005_UUCS.html">UUCS</a></td>
          <td>2024/12/18</td>
          <td>
    UCSをユーザ指定させ、作図エリアをUCSに合わせて傾ける。<br>
    その際ビューの拡大率や表示位置は変更しない。
  
          </td>
      </tr>
      <tr>
          <td>基006</td>
          <td><a target="_blank" href="基006_NTasu/基006_NTasu.html">NTasu</a></td>
          <td>2024/12/26</td>
          <td>
    図中の文字図形値を加算して出力します。<br>
  
          </td>
      </tr>
      <tr>
          <td>基009</td>
          <td><a target="_blank" href="基009_ERevCloud/基009_ERevCloud.html">ERevCloud</a></td>
          <td>2024/12/17</td>
          <td>
    「E-質疑」画層で雲図形を作成します。
    <br>分岐処理として図中の「E-質疑」画層に属する図形をズームして確認出来ます。
  
          </td>
      </tr>
      <tr>
          <td>基012</td>
          <td><a target="_blank" href="基012_SLeader/基012_SLeader.html">SLeader</a></td>
          <td>2024/12/18</td>
          <td>
    選択図形から線分を作図します。終点はユーザ入力により定められます。<br>
  
          </td>
      </tr>
      <tr>
          <td>基013</td>
          <td><a target="_blank" href="基013_0(ZERO)/基013_0(ZERO).html">0(ZERO)</a></td>
          <td>2025/01/07</td>
          <td>
    現在層を０画層に変更し、現在の色、線種、線種尺度、線の太さ、ポリラインの幅を初期状態に整えます。<br>
    その後パージ処理を3回行います。
  
          </td>
      </tr>
      <tr>
          <td>基014</td>
          <td><a target="_blank" href="基014_ArrayBlock/基014_ArrayBlock.html">ArrayBlock</a></td>
          <td>2024/12/18</td>
          <td>
    指定のブロックを指定の範囲に行列の個数を指定して配置します。
  
          </td>
      </tr>
      <tr>
          <td>基015</td>
          <td><a target="_blank" href="基015_ATTDEFtoTEXT/基015_ATTDEFtoTEXT.html">ATTDEFtoTEXT</a></td>
          <td>2024/12/26</td>
          <td>
  属性文字を通常の文字図形に変換します。<br>
  
          </td>
      </tr>
      <tr>
          <td>基016</td>
          <td><a target="_blank" href="基016_FGC(FilterGripCurrent)/基016_FGC(FilterGripCurrent).html">FGC(FilterGripCurrent)</a></td>
          <td>2024/12/26</td>
          <td>
  カレント画層名でフィルタしながら図形選択を行います。<br>
  
          </td>
      </tr>
      <tr>
          <td>基017</td>
          <td><a target="_blank" href="基017_FGS(FilterGripSelect)/基017_FGS(FilterGripSelect).html">FGS(FilterGripSelect)</a></td>
          <td>2024/12/26</td>
          <td>
  選択した図形の画層や色でフィルタしながら図形選択を行います。
  <br>選択した図形がブロックであればブロック名でのフィルタが可能。
  <br>選択した図形が文字あれば文字の値でのフィルタが可能。
  
          </td>
      </tr>
      <tr>
          <td>基019</td>
          <td><a target="_blank" href="基019_LtDraw/基019_LtDraw.html">LtDraw</a></td>
          <td>2024/12/24</td>
          <td>
  図面内にある線種を指定の位置に一括で作図します。<br>
  
          </td>
      </tr>
      <tr>
          <td>基021</td>
          <td><a target="_blank" href="基021_SolidToHatch/基021_SolidToHatch.html">SolidToHatch</a></td>
          <td>2025/01/08</td>
          <td>
  ソリッド図形をハッチング図形に変換します。<br>
  
          </td>
      </tr>
      <tr>
          <td>基024</td>
          <td><a target="_blank" href="基024_NJUSTIFYTEXT/基024_NJUSTIFYTEXT.html">NJUSTIFYTEXT</a></td>
          <td>2024/12/24</td>
          <td>
  文字の位置を変更せずに文字の起点を変更します。<br>
  
          </td>
      </tr>
      <tr>
          <td>基026</td>
          <td><a target="_blank" href="基026_LTLoad/基026_LTLoad.html">LTLoad</a></td>
          <td>2024/12/21</td>
          <td>
  線種をロードするコマンド
  <br>線種ファイルを[C:\\NNCad\\NNsupport\\LINETYPE]フォルダに格納する必要があります。
  
          </td>
      </tr>
      <tr>
          <td>基028</td>
          <td><a target="_blank" href="基028_ExLTypeEXP/基028_ExLTypeEXP.html">ExLTypeEXP</a></td>
          <td>2025/01/08</td>
          <td>
  シェイプ図形を持つ特殊な線種が与えられている線を、分解処理する。
<br> 分解可能な線種は、"ZIGZAG"・"BATTING"のみ。
  
          </td>
      </tr>
      <tr>
          <td>基030</td>
          <td><a target="_blank" href="基030_RGBtoIndexColor/基030_RGBtoIndexColor.html">RGBtoIndexColor</a></td>
          <td>2024/12/23</td>
          <td>
  選択した図形のRGB色指定をインデックスカラーに変換します。
<br> 分岐処理にて画層色のRGB色指定をインデックスカラーに変換します。
  
          </td>
      </tr>
      <tr>
          <td>基033</td>
          <td><a target="_blank" href="基033_KiguCountTable/基033_KiguCountTable.html">KiguCountTable</a></td>
          <td>2024/12/23</td>
          <td>
  ユーザが指定した範囲の中で器具番号属性を持つブロックの数を集計し、台数表ブロックを作図します。
<br> 範囲指定した中でE0-HEYAMEI画層に属する文字列図形があった場合は、台数表内の部屋名項目を自動で入力します。
  
          </td>
      </tr>
      <tr>
          <td>基034</td>
          <td><a target="_blank" href="基034_CHGDIM/基034_CHGDIM.html">CHGDIM</a></td>
          <td>2024/12/13</td>
          <td>
  寸法や引出線の各種色設定をByBlockに変更します。
  
          </td>
      </tr>
      <tr>
          <td>基035</td>
          <td><a target="_blank" href="基035_RepBlock(ReplacementBlock)/基035_RepBlock(ReplacementBlock).html">RepBlock(ReplacementBlock)</a></td>
          <td>2024/12/18</td>
          <td>
  複数のブロックを指定のブロックに置き換えます。
  
          </td>
      </tr>
      <tr>
          <td>基037</td>
          <td><a target="_blank" href="基037_AddHideLayer/基037_AddHideLayer.html">AddHideLayer</a></td>
          <td>2025/01/06</td>
          <td>
  選択図形を" _非表示 "を付与した画層に移動します。
  <br>画層が存在しない場合は新規作成します。
  
          </td>
      </tr>
      <tr>
          <td>基041</td>
          <td><a target="_blank" href="基041_DENKI_JYOUSU2/基041_DENKI_JYOUSU2.html">DENKI_JYOUSU2</a></td>
          <td>2025/01/06</td>
          <td>
  配線条数を指定の線上に作図します。
  <br>条数ブロックは、入力対象の線と同じ画層、色で作図されます。
  
          </td>
      </tr>
      <tr>
          <td>基050</td>
          <td><a target="_blank" href="基050_AttCapSum/基050_AttCapSum.html">AttCapSum</a></td>
          <td>2024/12/26</td>
          <td>
  選択した属性ブロックの各ブロックが持つ『容量』の値を合計する。
  <br>合計した値はコマンドラインへ出力及び、クリップボードに格納される。
  
          </td>
      </tr>
      <tr>
          <td>基051</td>
          <td><a target="_blank" href="基051_AttPutCap/基051_AttPutCap.html">AttPutCap</a></td>
          <td>2024/12/26</td>
          <td>
  クリップボードにある値をユーザが指定する属性ブロックの『容量』の値に入力する。
  
          </td>
      </tr>
      <tr>
          <td>基052</td>
          <td><a target="_blank" href="基052_BRotate/基052_BRotate.html">BRotate</a></td>
          <td>2025/01/06</td>
          <td>
  選択したブロックをそれぞれの挿入起点で指定角度回転を行う。
  
          </td>
      </tr>
      <tr>
          <td>基055</td>
          <td><a target="_blank" href="基055_WWClose/基055_WWClose.html">WWClose</a></td>
          <td>2025/01/08</td>
          <td>
  読み取り専用で開いている全てのファイルを保存せずに閉じます。
  <br>読み取り専用ではないファイルはユーザ入力により、保存せずに閉じるかそのまま残すか制御して処理します。
  
          </td>
      </tr>
      <tr>
          <td>基056</td>
          <td><a target="_blank" href="基056_AttRotate/基056_AttRotate.html">AttRotate</a></td>
          <td>2025/01/06</td>
          <td>
  属性ブロック内の属性文字を回転します。
  
          </td>
      </tr>
      <tr>
          <td>基057</td>
          <td><a target="_blank" href="基057_TxClip/基057_TxClip.html">TxClip</a></td>
          <td>2025/01/06</td>
          <td>
  選択した文字図形をクリップボードにコピーします。
  <br>Y座標が異なる図形は改行し、X座標が異なる図形はタブ文字列で区切りながらコピーします。
  <br>文字図形の座標ズレは、DimScale×0.5までを誤差として処理します。
  
          </td>
      </tr>
      <tr>
          <td>基061</td>
          <td><a target="_blank" href="基061_ZSC/基061_ZSC.html">ZSC</a></td>
          <td>2024/12/15</td>
          <td>
  DIMSCALEとLTSCALEを連続でユーザ入力します。
  <br>LTSCALEを入力する際"1,8,10"を入力することでDIMSCALEと掛けた数を設定できます。
  
          </td>
      </tr>
      <tr>
          <td>基062</td>
          <td><a target="_blank" href="基062_WPline/基062_WPline.html">WPline</a></td>
          <td>2024/12/15</td>
          <td>
  配線図用の画層を作成します。
  
          </td>
      </tr>
      <tr>
          <td>基063</td>
          <td><a target="_blank" href="基063_WAKU/基063_WAKU.html">WAKU</a></td>
          <td>2024/12/21</td>
          <td>
    A1,A2,A3,A4の枠を作図します。
    <br>「C:\\NNcad\\NNblock\\Other」に図枠のDWGファイルが必要です。（バージョンアップで必要なくする予定）
  
          </td>
      </tr>
      <tr>
          <td>基064</td>
          <td><a target="_blank" href="基064_QZ/基064_QZ.html">QZ</a></td>
          <td>2024/12/21</td>
          <td>
    印刷範囲をズームします。
  
          </td>
      </tr>
      <tr>
          <td>基065</td>
          <td><a target="_blank" href="基065_HOJOLINE/基065_HOJOLINE.html">HOJOLINE</a></td>
          <td>2024/12/26</td>
          <td>
    通り芯仮表示用の線を作図します。
  
          </td>
      </tr>
      <tr>
          <td>基066</td>
          <td><a target="_blank" href="基066_KAIROSort/基066_KAIROSort.html">KAIROSort</a></td>
          <td>2024/12/23</td>
          <td>
    属性を持つブロックを「回路番号」>>「ブロック名」>>「盤名」でソートし、指定の位置に複製配置します。
    <br>複製したブロックと、元のブロックを線分で繋ぎます。
  
          </td>
      </tr>
      <tr>
          <td>基067</td>
          <td><a target="_blank" href="基067_QC(QuickCut)/基067_QC(QuickCut).html">QC(QuickCut)</a></td>
          <td>2024/12/18</td>
          <td>
    Breakコマンドでの一点線切断を容易に行うためのコマンド
  
          </td>
      </tr>
      <tr>
          <td>基068</td>
          <td><a target="_blank" href="基068_TextConvert/基068_TextConvert.html">TextConvert</a></td>
          <td>2024/12/17</td>
          <td>
    文字の全角半角を整えます。
    <br>素早くコマンドを起動するため、「TEXTCONVERT_1T2」と「TEXTCONVERT_2T1」でもコマンド名を作成してあります。
    <br>「1T2」で半角→全角モード、「2T1」で全角→半角モードでコマンドを起動できます。
    <br>※AutoCad動作未確認
  
          </td>
      </tr>
      <tr>
          <td>基069</td>
          <td><a target="_blank" href="基069_BlockRenameAddRandomStr/基069_BlockRenameAddRandomStr.html">BlockRenameAddRandomStr</a></td>
          <td>2025/01/11</td>
          <td>
    選択したブロック及びネストされたブロックの名前を変更します。
    <br>指定した接頭の後ろにランダムな文字列を付与する形で新しいブロック名を作成します。
  
          </td>
      </tr>
      <tr>
          <td>基070</td>
          <td><a target="_blank" href="基070_EVPort/基070_EVPort.html">EVPort</a></td>
          <td>2025/01/06</td>
          <td>
    モデル空間で矩形指定することでビューポートを作成します。
  
          </td>
      </tr>
      <tr>
          <td>基072</td>
          <td><a target="_blank" href="基072_UpdateNLisp/基072_UpdateNLisp.html">UpdateNLisp</a></td>
          <td>2025/01/11</td>
          <td>
    Ｚサーバーに格納されている、最新のコマンドファイルをユーザＰＣにコピーします。
    <br>新規導入・アップデートしたコマンドはメモ帳にて一覧表示されます。
  
          </td>
      </tr>
`;
// 新しい<tr>要素を追加
lispDatabase.innerHTML += newRows;
