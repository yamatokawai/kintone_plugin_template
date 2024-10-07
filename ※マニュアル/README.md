# ファイル一覧
・html<br>
　- config.html　※変更対象（必須）<br>
・css<br>
　- config.css<br>
・js<br>
　- 00.funcConf.js　※変更対象（任意）<br>
　- 01.fieldConf.js　※変更対象（必須）<br>
　- 10.config.js　※変更対象（任意）<br>
・json<br>
　- manifest.json<br>
 
# マニュアル
0. サンプル完成形
<img width="539" alt="スクリーンショット 2024-06-13 173107" src="https://github.com/yamatokawai/kintone_plugin_template/assets/131321611/98580936-a865-4628-b2d9-062f91059fff">

1. プラグインテンプレート利用方法<br>
　①右記ディレクトリへアクセス"T:\02.ソリューション事業部\92.技術資料\07.kintone\自社開発プラグイン\プラグインテンプレート"<br>
　②ディレクトリ名「プラグインテンプレート（ベース）」をコピーして、ローカル環境に貼り付ける。<br>
　③vscodeを開き、コピーした上記ディレクトリを開く。<br>
2. config.htmlファイル修正<br>
①初期内容
```markdown
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Document</title>
    </head>
    <!-- フィールド配置先はdivで作成。idは必ず付与。 -->
    <body>
        <div>
            <div class="row-container">
              <!-- ここにdivに追加 -->
            </div>
            <!-- 以下編集不可 -->
            <div style="display: flex;">
                <div id="submit-button" class="submit-button-container"></div>
                <div id="cancel-button" class="submit-button-container"></div>
            </div>
        </div>
        <script src="https://unpkg.com/kintone-ui-component/umd/kuc.min.js"></script>
        <script src="../js/00.funcConf.js"></script>
        <script src="../js/01.fieldConf.js"></script>
        <script src="../js/10.config.js"></script>
    </body>
</html>
```

②以下部分を修正<br>
 　・row-containerクラス名を保持するdiv内に、追加したいフィールド数分divを追加。<br>
 　・追加したdivに任意のidを付与。<br>
　 ・本サンプルでは、以下フィールドを作成<br>
   - 文字列（一行）
   - 日時
   - ドロップダウン
   - チェックボックス
   - ラジオボタン
```markdown
<!-- 以下div内に追加 -->
<div class="row-container">
  <!-- フィールド数分divを追加 -->
  <div id="text-div"></div> 
  <div id="dateTimePicker-div"></div> 
  <div id="dropdown-div"></div> 
  <div id="checkbox-div"></div> 
  <div id="radioButton-div"></div> 
</div>
```

③完成形
```markdown
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Document</title>
    </head>
    <!-- フィールド配置先はdivで作成。idは必ず付与。 -->
    <body>
        <div>
            <div class="row-container">
              <!-- ここにdivに追加 -->
                <div id="text-div"></div>
                <div id="dateTimePicker-div"></div>
                <div id="dropdown-div"></div>
                <div id="checkbox-div"></div>
                <div id="radioButton-div"></div>
            </div>
            <!-- 以下編集不可 -->
            <div style="display: flex;">
                <div id="submit-button" class="submit-button-container"></div>
                <div id="cancel-button" class="submit-button-container"></div>
            </div>
        </div>
        <script src="https://unpkg.com/kintone-ui-component/umd/kuc.min.js"></script>
        <script src="../js/00.funcConf.js"></script>
        <script src="../js/01.fieldConf.js"></script>
        <script src="../js/10.config.js"></script>
    </body>
</html>
```
⇒config.html修正完了

3.o1.fieldConf.jsファイル修正<br>
①初期内容
```js
/*
 *　01.fieldConf.js：項目・値設定用
 */

(() => {
  window.SR.fieldConf = window.SR.fieldConf || {};

  window.SR.fieldConf = {
    FIELDS_CONFIG: {
    /** ここにオブジェクト追加 */

    // submit変更不可
      submit: {
        settings: {
          text: "保存",
          type: "submit",
          content: "保存",
          className: "options-class",
          id: "button-id",
          visible: true,
          disabled: false,
        },
        type: "button",
        appField: false,
        divId: "submit-button",
        category: "button",
        role: "submit",
      },
      // cancel変更不可
      cancel: {
        settings: {
          text: "キャンセル",
          type: "normal",
          content: "キャンセル",
          className: "options-class",
          id: "button-id",
          visible: true,
          disabled: false,
        },
        type: "button",
        appField: false,
        divId: "cancel-button",
        category: "button",
        role: "cancel",
      },
    },

    /*
     * 入力制御用メッセージ：メッセージのみ編集可能
     */
    VALIDATION: {
    /* 以下省略 */
    };
  };
})();

```

②以下追加
  ・textオブジェクト
  ・dateTimePickerオブジェクト
  
```js
(() => {
  window.SR.fieldConf = window.SR.fieldConf || {};

  window.SR.fieldConf = {
    FIELDS_CONFIG: {
      /** オブジェクト追加 */
      text: {},
      dateTimePicker: {},

      // submit変更不可
      submit: {
      /** 以下省略 */
  };
})();

```

③以下オブジェクト、プロパティを追加
- setting：Kuc仕様のプロパティを追加（https://ui-component.kintone.dev/ja/docs/components/desktop/text#property）
- type："text"
- divId：①config.htmlで配置したdivのid名（"text"）
- category："common"
```js
(() => {
  window.SR.fieldConf = window.SR.fieldConf || {};

  window.SR.fieldConf = {
    FIELDS_CONFIG: {
      /** オブジェクト追加 */
      text: {
        settings: {
          label: "",
          requiredIcon: true,
          value: "",
          placeholder: "",
          prefix: "",
          suffix: "",
          textAlign: "",
          error: "",
          className: "options-class",
          id: "text-id",
          visible: true,
          disabled: false,
        },
        type: "text",
        divId: "text-div",
        category: "common",
      },
      dateTimePicker: {},

      // submit変更不可
      submit: {
      /** 以下省略 */
  };
})();

```
④日時フィールドも同様にオブジェクト、プロパティを追加

```js
(() => {
  window.SR.fieldConf = window.SR.fieldConf || {};

  window.SR.fieldConf = {
    FIELDS_CONFIG: {
      /** オブジェクト追加 */
      text: {
        settings: {
          label: "",
          requiredIcon: true,
          value: "",
          placeholder: "",
          prefix: "",
          suffix: "",
          textAlign: "",
          error: "",
          className: "options-class",
          id: "text-id",
          visible: true,
          disabled: false,
        },
        type: "text",
        divId: "text-div",
        category: "common",
      },
      dateTimePicker: {
        settings: {
          label: "",
          requiredIcon: false,
          language: "auto",
          hour12: false,
          value: "",
          error: "",
          className: "options-class",
          id: "dateTimePicker-id",
          visible: true,
          disabled: false,
          timeStep: 30,
          max: "23:59",
          min: "00:00",
        },
        type: "dateTimePicker",
        divId: "dateTimePicker-div",
        category: "common",
      },

      // submit変更不可
      submit: {
      /** 以下省略 */
  };
})();

```

※※※各プロパティは以下URLを参照！！※※※<br>
https://grey-soarer-8bb.notion.site/83fba23cf92c4241b79288a7f4fa5635?pvs=4
