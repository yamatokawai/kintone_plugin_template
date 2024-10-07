/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
(async (PLUGIN_ID) => {
  /*
   * 編集不可 window.SRから値取得
   */
  const FIELDS_CONF = window.SR.fieldConf.FIELDS_CONFIG;
  const FUNC_CONF = window.SR.funcConf;
  const fieldItems = await FUNC_CONF.createInitialFields();
  // サブテーブルの場合↓
  // if (fieldItems.length) {
  //   const space = document.getElementById(FIELDS_CONF.table.divId);
  //   const renderDropdown = (dataCell, rowData, rowNum) => {
  //     const dropdown = new Kuc.Dropdown({
  //       items: fieldItems,
  //       className: 'dropdown-id',
  //       value: dataCell ? dataCell : 'default',
  //       error: '',
  //     });
  //     return dropdown;
  //   };

  //   const table = new Kuc.Table({
  //     columns: [
  //       // th部分
  //       {
  //         title: '時刻フィールド', //thの表示名
  //         field: 'dropdownField', //dataのプロパティ名と等しい値にすること ※１
  //         render: renderDropdown,
  //       },
  //       // フィールドを増やしたい場合、同じ形式でオブジェクトを追加
  //     ],
  //     data: [
  //       // td部分
  //       {
  //         dropdownField: '',
  //       },
  //     ],
  //     id: 'table-id',
  //     actionButton: true,
  //     headerVisible: true,
  //     visible: true,
  //   });

  //   space.appendChild(table);
  // }

  /*
   * 編集不可：保存済みのデータ画面反映
   */
  setTimeout(() => {
    const CONFIG = kintone.plugin.app.getConfig(PLUGIN_ID);
    if (CONFIG) FUNC_CONF.reflectSavedData(CONFIG);
  }, 500);
})(kintone.$PLUGIN_ID);
