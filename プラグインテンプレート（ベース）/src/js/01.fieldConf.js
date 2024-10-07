/*
 * 01.fieldConf.js：項目・値設定用
 */

(() => {
  window.SR.fieldConf = window.SR.fieldConf || {};

  window.SR.fieldConf = {
    FIELDS_CONFIG: {
      text: {
        settings: {
          label: '',
          requiredIcon: true,
          value: '',
          placeholder: '',
          prefix: '',
          suffix: '',
          textAlign: '',
          error: '',
          className: 'options-class',
          id: 'text-id',
          visible: true,
          disabled: false,
        },
        type: 'text',
        divId: 'text',
        category: 'common',
      },
      dateTimePicker: {
        settings: {
          label: '',
          requiredIcon: false,
          language: 'auto',
          hour12: false,
          value: '',
          error: '',
          className: 'options-class',
          id: 'dateTimePicker-id',
          visible: true,
          disabled: false,
          timeStep: 30,
          max: '23:59',
          min: '00:00',
        },
        type: 'dateTimePicker',
        divId: 'dateTimePicker',
        category: 'common',
      },
      dropdown: {
        settings: {
          label: 'dropdown',
          requiredIcon: true,
          items: [],
          value: 'default',
          selectedIndex: 0,
          error: '',
          className: 'options-class',
          id: 'dropdown-id',
          visible: true,
          disabled: false,
        },
        appField: {
          filter: 'all',
          type: [],
        },
        type: 'dropdown',
        divId: 'dropdown',
        category: 'select',
      },
      checkbox: {
        settings: {
          label: '',
          requiredIcon: true,
          items: [],
          value: [],
          selectedIndex: [],
          itemLayout: 'horizontal',
          error: '',
          className: 'options-class',
          id: 'checkbox-id',
          visible: true,
          disabled: false,
          borderVisible: true,
        },
        type: 'checkbox',
        appField: {
          filter: 'grouped',
          type: ['SINGLE_LINE_TEXT'],
        },
        divId: 'checkbox',
        category: 'select',
      },
      radioButton: {
        settings: {
          label: 'ラジオボタン',
          requiredIcon: true,
          items: [
            {
              label: 'orange',
              value: 'Orange',
            },
            {
              label: 'apple',
              value: 'Apple',
            },
            {
              label: 'banana',
              value: 'Banana',
              disabled: true,
            },
          ],
          value: 'orange',
          selectedIndex: 0,
          itemLayout: 'vertical',
          error: '',
          className: 'options-class',
          id: 'radioButton-id',
          visible: true,
          disabled: false,
          borderVisible: true,
        },
        type: 'radioButton',
        appField: false,
        divId: 'radioButton',
        category: 'select',
      },
      // サブテーブルの場合
      // table: {
      //   childElem: {
      //     field_dropdown: {
      //       settings: {
      //         label: 'dropdown',
      //         requiredIcon: true,
      //         items: [],
      //         value: 'default',
      //         selectedIndex: 0,
      //         error: '',
      //         className: 'options-class',
      //         id: 'dropdown-table',
      //         visible: true,
      //         disabled: false,
      //       },
      //     },
      //   },
      //   type: 'table',
      //   divId: 'table_sp',
      //   category: 'table',
      //   tableId: 'table-id',
      //   appField: {
      //     filter: 'grouped',
      //     type: ['TIME'],
      //   },
      // },
      // submit変更不可
      submit: {
        settings: {
          text: '保存',
          type: 'submit',
          content: '保存',
          className: 'options-class',
          id: 'button-id',
          visible: true,
          disabled: false,
        },
        type: 'button',
        appField: false,
        divId: 'submit-button',
        category: 'button',
        role: 'submit',
      },
      // cancel変更不可
      cancel: {
        settings: {
          text: 'キャンセル',
          type: 'normal',
          content: 'キャンセル',
          className: 'options-class',
          id: 'button-id',
          visible: true,
          disabled: false,
        },
        type: 'button',
        appField: false,
        divId: 'cancel-button',
        category: 'button',
        role: 'cancel',
      },
    },

    /*
     * 入力制御用メッセージ：メッセージのみ編集可能
     */
    VALIDATION: {
      alpha_sign: {
        message: '半角英数字か @ . - _ で入力してください',
        regex: /^[a-zA-Z0-9_]+$/,
      },
      not_sign: {
        message: ' _ 以外の記号は入力不可です',
        regex: /^[a-zA-Z0-9@.\-_]+$/,
      },
      alpha_dash: {
        message: '半角英数字か - _ で入力してください',
        regex: /^[a-zA-Z0-9\-_]+$/,
      },
      alpha_num: {
        message: '半角英数字を入力してください',
        regex: /^[a-zA-Z0-9]+$/,
      },
      alpha_spaces: {
        message: '半角英字かスペースで入力してください',
        regex: /^[a-zA-Z\s]+$/,
      },
      alpha: {
        message: '半角英字を入力してください',
        regex: /^[a-zA-Z]+$/,
      },
      between: '${min}以上${max}以下にしてください', //文字列
      confirmed_field: '同じ値を入力してください', //再入力項目
      credit_card: {
        message: 'クレジットカード情報が間違っています',
        regex: /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47]{13}|(?:2131|1800|35[0-9]{3})[0-9]{11})/,
      },
      date_between: '${min}から${max}までの日を入力してください',
      datetime_between: '${min}から${max}までの日時を入力してください',
      decimal: '小数点${decimals}桁の数値を入力してください',
      digits: '${length}桁以上の数値を入力してください',
      dimensions: '${width} px × ${height} px以内の画像を入力してください',
      email: {
        message: 'メールアドレスを入力してください',
        regex: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      },
      ext: '有効なファイルではありません',
      image: '画像ファイルを入力してください',
      included: '有効な値ではありません',
      ip: 'IPアドレスを入力してください',
      max: '${length}文字以内にしてください',
      max_value: '${max}以下にしてください',
      mimes: 'ファイルタイプが不正です',
      min: '${length}文字以上にしてください',
      min_value: '${min}以上にしてください',
      excluded: '有効な値ではありません',
      numeric: {
        message: '半角数値を入力してください',
        regex: /^[0-9]*$/,
      },
      regex: '入力できないフォーマットです',
      required: '必須項目です',
      size: '${size} KB以下のファイルを入力してください',
      tel: {
        message: '電話番号を入力してください',
        regex: /^(0[5-9]0[-(]?[0-9]{4}[-)]?[0-9]{4}|0120[-]?\d{1,3}[-]?\d{4}|050[-]?\d{4}[-]?\d{4}|0[1-9][-]?\d{1,4}[-]?\d{1,4}[-]?\d{4})*$/,
      },
      url: {
        message: 'URLを入力してください',
        regex: /^https?:\/\/[\w/:%#$&?()~.=+]+$/,
      },
    },
  };
})();
