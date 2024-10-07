/*
 *　01.fieldConf.js：項目・値設定用
 */

(() => {
  window.SR.fieldConf = window.SR.fieldConf || {};

  window.SR.fieldConf = {
    /*
     *　１．配置したい項目を設定（コメント要追記）
     */

    /** 大枠イメージ
     * FIELD＿CONFIG:{
        "フィールドコード":{ 一意の名称
          settings:{ @type {object}
            項目設定（参照：https://ui-component.kintone.dev/ja/docs/components/desktop/attachment/）
            ⇒各プロパティは、フィールドタイプごとに異なる
          },
          type: @type {string} フィールドタイプ
          divId:　@type {string}  config.htmlの追加したいdivのid,
          category: @type {string} カテゴリ
          validation: @type {object} 入力制御対象項目
          appField: @type {object} 選択のみ
          {
            filter: @type {string} "all" / "grouped",
            type: @type {Array} フィールドタイプ
          }
          role: @type {string} ボタンのみ "submit"/"cancel"
          toggle: @type {array} ボタンのみ [対象のdivId]
          tableId: @type {string} テーブルのみ
        },
        validation: { 入力制御として使用したい key : value を記載　※記載方法変えるかも
          alpha_sign: @type {boolean},
          not_sign: @type {boolean},
          alpha_dash: @type {boolean},
          alpha_num: @type {boolean},
          alpha_spaces: @type {boolean},
          alpha: @type {boolean},
          between: { @type {object}
            min: @type {string} YYYY-MM-DD形式
            max: @type {string} YYYY-MM-DD形式
          },
          confirmed_field: @type {string}, 比較元のフィールドID
          credit_card: @type {boolean},
          date_between: { @type {object}
            min: @type {string} YYYY-MM-DD形式
            max: @type {string} YYYY-MM-DD形式
          },
          datetime_between: { @type {object}
            min: @type {string} YYYY-MM-DDTHH:MM:SS形式
            max: @type {string} YYYY-MM-DDTHH:MM:SS形式
          },
          decimal: @type {number},
          digits: @type {number},
          dimensions: @type {boolean},
          email: @type {boolean},
          ext: @type {boolean},
          image: @type {boolean},
          included: @type {boolean},
          ip: @type {boolean},
          max: @type {number},
          max_value: @type {number},
          mimes: @type {boolean},
          min: @type {number},
          min_value: @type {boolean},
          excluded: @type {boolean},
          numeric: @type {boolean},
          regex: @type {boolean},
          required: @type {boolean},
          size: @type {boolean},
          tel: @type {boolean},
          url: @type {boolean},
        }
      },
     */

    /** FIELD_CONFIG:{
        "フィールドコード":{ 一意の名称
          settings:{
            項目設定（参照：https://ui-component.kintone.dev/ja/docs/components/desktop/attachment/）
            ⇒各プロパティは、フィールドタイプごとに異なる
          },
          type:  以下のいずれかのフィールドタイプ
              "text"
              "textarea"
              "timePicker"
              "dateTimePicker"
              "datePicker"
              "checkbox"
              "radioButton"
              "multiChoice"
              "dropdown"
              "button"
              "table",
              "attachment" 未完成
            divId: config.htmlの追加したいdivのid,
            category: いずれかのカテゴリ
                  "common" テーブル、選択項目以外
                  "select"  選択項目
                  "table",  テーブル
                  "attachment", 添付ファイル
            validation:{
              alpha_sign: true/fasle,
              not_sign: " _ 以外の記号は入力不可です",
              alpha_dash: "半角英数字か - _ で入力してください",
              alpha_num: "半角英数字を入力してください",
              alpha_spaces: "半角英字かスペースで入力してください",
              alpha: "半角英字を入力してください",
              between: "${min}以上${max}以下にしてください", //文字列
              confirmed_field: "同じ値を入力してください", //再入力項目
              credit_card: "クレジットカード情報が間違っています",
              date_between: "${min}から${max}までの日を入力してください",
              datetime_between: "${min}から${max}までの日時を入力してください",
              decimal: "小数点${decimals}桁の数値を入力してください",
              digits: "${length}桁以上の数値を入力してください",
              dimensions: "${width} px × ${height} px以内の画像を入力してください",
              email: "メールアドレスを入力してください",
              ext: "有効なファイルではありません",
              image: "画像ファイルを入力してください",
              included: "有効な値ではありません",
              ip: "IPアドレスを入力してください",
              max: "${length}文字以内にしてください",
              max_value: "${max}以下にしてください",
              mimes: "ファイルタイプが不正です",
              min: "${length}文字以上にしてください",
              min_value: "${min}以上にしてください",
              excluded: "有効な値ではありません",
              numeric: "半角数値を入力してください",
              regex: "入力できないフォーマットです",
              required: "必須項目です",
              size: "${size} KB以下のファイルを入力してください",
              tel: "電話番号を入力してください",
              url: "URLを入力してください",
          },
          appField: {
            filter: "all"/"grouped" all：全て。grouped：typeで指定したフィールドタイプのみ取得。
            type: ["SINGLE_LINE_TEXT"],　filterが、allの場合は、必ず空配列[]にすること。※複数の場合レイアウト順になる
          },
          role: "submit"/"cancel"/"other" 保存ボタンかキャンセルボタンか他か（ボタンのみ）
          toggle: [ 表示切替（ボタンのみ）
            表示切替をしたいフィールドのid
          ]
          tableId: "テーブルフィールドのid"（テーブルのみ）
        }
      },
     */

    /**
     *  注意まとめ
     *    １．テーブル内に選択項目を配置、かつ選択肢を設定しているフィールドにしたい時、tableに対して、appFieldを定義すること。
     *    ２．テーブル
     */

    FIELDS_CONFIG: {
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
        divId: "text",
        category: "common",
      },
      textarea: {
        settings: {
          label: "",
          requiredIcon: true,
          value: "",
          placeholder: "",
          error: "",
          className: "options-class",
          id: "textarea-id",
          visible: true,
          disabled: false,
        },
        type: "textarea",
        divId: "textarea",
        category: "common",
      },
      timePicker: {
        settings: {
          label: "",
          requiredIcon: true,
          hour12: false,
          value: "",
          error: "",
          className: "options-class",
          id: "timePicker-id",
          visible: true,
          disabled: false,
          language: "en",
          timeStep: 15,
          max: "23:59",
          min: "00:00",
        },
        type: "timePicker",
        divId: "timePicker",
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
        divId: "dateTimePicker",
        category: "common",
      },
      datePicker: {
        settings: {
          label: "Date",
          requiredIcon: true,
          language: "auto",
          value: "2021-11-11",
          error: "",
          className: "options-class",
          id: "datePicker-id",
          visible: true,
          disabled: false,
        },
        type: "datePicker",
        divId: "datePicker",
        category: "common",
      },
      checkbox: {
        settings: {
          label: "",
          requiredIcon: true,
          items: [],
          value: [],
          selectedIndex: [],
          itemLayout: "horizontal",
          error: "",
          className: "options-class",
          id: "checkbox-id",
          visible: true,
          disabled: false,
          borderVisible: true,
        },
        type: "checkbox",
        appField: {
          filter: "all",
          type: [],
        },
        divId: "checkbox",
        category: "select",
      },
      combobox: {
        settings: {
          label: "コンボボックス",
          items: [],
          value: "orange",
          requiredIcon: true,
          error: "",
          className: "options-class",
          id: "combobox-id",
          visible: true,
          disabled: false,
        },
        type: "combobox",
        appField: {
          filter: "grouped",
          type: ["SINGLE_LINE_TEXT"],
        },
        divId: "combobox",
        category: "select",
      },
      radioButton: {
        settings: {
          label: "ラジオボタン",
          requiredIcon: true,
          items: [
            {
              label: "orange",
              value: "Orange",
            },
            {
              label: "apple",
              value: "Apple",
            },
            {
              label: "banana",
              value: "Banana",
              disabled: false,
            },
          ],
          value: "Orange",
          selectedIndex: 0,
          itemLayout: "vertical",
          error: "",
          className: "options-class",
          id: "radioButton-id",
          visible: true,
          disabled: false,
          borderVisible: true,
        },
        type: "radioButton",
        appField: false,
        divId: "radioButton",
        category: "select",
      },
      multiChoice: {
        settings: {
          label: "Fruit",
          requiredIcon: true,
          items: [
            {
              label: "orange",
              value: "Orange",
            },
            {
              label: "apple",
              value: "Apple",
            },
            {
              label: "banana",
              value: "Banana",
              disabled: false,
            },
          ],
          value: ["Orange"],
          selectedIndex: [0],
          error: "",
          className: "options-class",
          id: "multiChoice-id",
          visible: true,
          disabled: false,
        },
        type: "multiChoice",
        appField: false,
        divId: "multiChoice",
        category: "select",
      },
      dropdown: {
        settings: {
          label: "dropdown",
          requiredIcon: true,
          items: [
            {
              label: "orange",
              value: "Orange",
            },
            {
              label: "apple",
              value: "Apple",
            },
            {
              label: "banana",
              value: "Banana",
              disabled: true,
            },
          ],
          value: "Orange",
          selectedIndex: 0,
          error: "",
          className: "options-class",
          id: "dropdown-id",
          visible: true,
          disabled: false,
        },
        type: "dropdown",
        divId: "dropdown",
        category: "select",
      },
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
      table: {
        childElem: {
          dropdown: {
            settings: {
              label: "dropdown",
              requiredIcon: true,
              items: [],
              value: "default",
              selectedIndex: 0,
              error: "",
              className: "options-class",
              id: "dropdown-table",
              visible: true,
              disabled: false,
            },
          },
          text: {
            settings: {
              label: "",
              requiredIcon: true,
              value: "",
              placeholder: "",
              prefix: "",
              suffix: "",
              textAlign: "left",
              error: "",
              className: "options-class",
              id: "text-table",
              visible: true,
              disabled: false,
            },
          },
        },
        type: "table",
        divId: "table_sp",
        category: "table",
        tableId: "table-id",
        appField: {
          filter: "all",
          type: [],
        },
      },
    },

    /*
     * 入力制御用メッセージ：メッセージのみ編集可能
     */
    VALIDATION: {
      alpha_sign: {
        message: " 半角英数字と_ 以外の記号は入力不可です",
        regex: /^[a-zA-Z0-9_]+$/,
      },
      not_sign: {
        message: "半角英数字か @ . - _ で入力してください",
        regex: /^[a-zA-Z0-9@.\-_]+$/,
      },
      alpha_dash: {
        message: "半角英数字か - _ で入力してください",
        regex: /^[a-zA-Z0-9\-_]+$/,
      },
      alpha_num: {
        message: "半角英数字を入力してください",
        regex: /^[a-zA-Z0-9]+$/,
      },
      alpha_spaces: {
        message: "半角英字かスペースで入力してください",
        regex: /^[a-zA-Z\s]+$/,
      },
      alpha: {
        message: "半角英字を入力してください",
        regex: /^[a-zA-Z]+$/,
      },
      between: "${min}以上${max}以下にしてください", //文字列
      confirmed_field: "同じ値を入力してください", //再入力項目
      credit_card: {
        message: "クレジットカード情報が間違っています",
        regex: /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47]{13}|(?:2131|1800|35[0-9]{3})[0-9]{11})/,
      },
      date_between: "${min}から${max}までの日を入力してください",
      datetime_between: "${min}から${max}までの日時を入力してください",
      decimal: "小数点${decimals}桁の数値を入力してください",
      digits: "${length}桁以上の数値を入力してください",
      dimensions: "${width} px × ${height} px以内の画像を入力してください",
      email: {
        message: "メールアドレスを入力してください",
        regex: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      },
      ext: "有効なファイルではありません",
      image: "画像ファイルを入力してください",
      included: "有効な値ではありません",
      ip: "IPアドレスを入力してください",
      max: "${length}文字以内にしてください",
      max_value: "${max}以下にしてください",
      mimes: "ファイルタイプが不正です",
      min: "${length}文字以上にしてください",
      min_value: "${min}以上にしてください",
      excluded: "有効な値ではありません",
      numeric: {
        message: "半角数値を入力してください",
        regex: /^[0-9]*$/,
      },
      regex: "入力できないフォーマットです",
      required: "必須項目です",
      size: "${size} KB以下のファイルを入力してください",
      tel: {
        message: "電話番号を入力してください",
        regex: /^(0[5-9]0[-(]?[0-9]{4}[-)]?[0-9]{4}|0120[-]?\d{1,3}[-]?\d{4}|050[-]?\d{4}[-]?\d{4}|0[1-9][-]?\d{1,4}[-]?\d{1,4}[-]?\d{4})*$/,
      },
      url: {
        message: "URLを入力してください",
        regex: /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/,
      },
    },
  };
})();
