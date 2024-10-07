(async (PLUGIN_ID) => {
  /*
   * 編集不可 window.SRから値取得
   */
  const FIELDS_CONF = window.SR.fieldConf.FIELDS_CONFIG;
  const FUNC_CONF = window.SR.funcConf;

  /* サブテーブルのみ直接記載 */

  /**
   * @return {Array|null} レイアウト情報をテーブルで使用する場合のみ、レイアウト情報の配列を返し、それ以外の場合は null を返す
   */

  // 15行目、16行目のitems部分と条件分岐は、フィールド情報を使用したい場合の記載
  const fieldItems = await FUNC_CONF.createInitialFields();
  if (fieldItems.length) {
    const space = document.getElementById(FIELDS_CONF.table.divId);

    const renderText = (dataCell) => {
      const text = new Kuc.Text(FIELDS_CONF.table.childElem.text);
      text.value = dataCell;
      return text;
    };
    const renderDropdown = (dataCell, rowData, rowNum) => {
      const dropdown = new Kuc.Dropdown({
        items: fieldItems,
        id: '訪問者-' + rowNum,
        className: 'dropdown-id',
        value: dataCell ? dataCell : 'default',
        error: '',
      });
      dropdown.onchange = (event) => {
        const currentRowNum = event.target.parentElement.parentElement.rowIndex;
        const 訪問者 = document.getElementById('訪問者-' + currentRowNum);
        const 歯科医院 = document.getElementById('訪問者-' + currentRowNum);
        let errArr = [];
        for (let dropdown of dropdownInTbl) {
          dropdown.error = '';
          if (dropdown !== event.currentTarget && dropdown.value === event.detail.value) errArr.push(dropdown);
        }
        for (let errF of errArr) errF.error = '重複してます';
      };
      return dropdown;
    };

    const table = new Kuc.Table({
      columns: [
        // th部分
        {
          title: 'テキスト',
          field: 'textField', //dataのプロパティ名と等しい値にすること ※１
          render: renderText,
        },
        {
          title: 'ドロップダウン', //thの表示名
          field: 'dropdownField', //dataのプロパティ名と等しい値にすること ※１
          render: renderDropdown,
        },
        // フィールドを増やしたい場合、同じ形式でオブジェクトを追加
      ],
      data: [
        // td部分
        {
          textField: '',
          dropdownField: '',
        },
      ],
      className: 'options-class',
      id: 'table-id',
      actionButton: true,
      headerVisible: true,
      visible: true,
    });

    space.appendChild(table);
  }

  /*
   * 編集不可：保存済みのデータ画面反映
   */
  setTimeout(() => {
    const CONFIG = kintone.plugin.app.getConfig(PLUGIN_ID);
    if (CONFIG) FUNC_CONF.reflectSavedData(CONFIG);
  }, 500);
})(kintone.$PLUGIN_ID);

/*
*   ★サブテーブル
    公式URL：https://ui-component.kintone.dev/ja/docs/components/desktop/table
  　●render方法
      const render~~ = (arg) =>{
        追加したい要素（公式ヘルプより）
        value や items部分に引数で取得した値を代入
      };

      （例）
      const renderAge = (dataCell) => {
        const text = new Kuc.Text(FIELDS_CONF.table.childElem.text);
        text.value = dataCell;
        text.addEventListener("change", (event) => {
          text.error = event.detail.value ? "" : "必須です";
        });
        return text;
      };
*/

// const space = document.getElementById(FIELDS_CONF.table.divId);
// const renderAge = (dataCell) => {
//   const text = new Kuc.Text(FIELDS_CONF.table.childElem.text);
//   text.value = dataCell;
//   text.addEventListener("change", (event) => {
//     text.error = event.detail.value ? "" : "必須です";
//   });
//   return text;
// };

// const renderName = (cellData) => {
//   const dropdown = new Kuc.Dropdown({
//     items: items,
//     value: cellData,
//   });
//   return dropdown;
// };

// const table = new Kuc.Table({
//   label: "Table",
//   columns: [
//     // th部分
//     {
//       title: "Name",
//       field: "name",
//       render: renderName,
//     },
//     {
//       title: "Age",
//       field: "age",
//       render: renderAge,
//     },
//   ],
//   data: [
//     // td部分
//     {
//       name: "john",
//       age: 32,
//     },
//     {
//       name: "steven",
//       age: 22,
//     },
//   ],
//   className: "options-class",
//   id: "table-id",
//   actionButton: true,
//   headerVisible: true,
//   visible: true,
// });

// space.appendChild(table);

// table.addEventListener("change", (event) => {});
