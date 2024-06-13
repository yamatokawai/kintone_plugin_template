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
1. プラグインテンプレート利用方法<br>
　①右記ディレクトリへアクセス"T:\02.ソリューション事業部\92.技術資料\07.kintone\自社開発プラグイン\プラグインテンプレート"<br>
　②ディレクトリ名「プラグインテンプレート（ベース）」をコピーして、ローカル環境に貼り付ける。<br>
　③vscodeを開き、コピーした上記ディレクトリを開く。<br>
2. ファイル修正<br>
　●config.html
　　①以下動画による手順に沿って、修正
```
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
            <!-- 以下div内に追加 -->
            <div class="row-container"></div>
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
