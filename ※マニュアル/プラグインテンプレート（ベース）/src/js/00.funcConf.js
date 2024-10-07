/**
 * @file 関数定義ファイル
 * @description 新しく関数を定義してもOK。
 */
(() => {
  window.SR = window.SR || {};
  window.SR.funcConf = window.SR.funcConf || {};
  window.SR.fieldConf = window.SR.fieldConf || {};
  const Kuc = Kucs[Object.keys(Kucs).join("")];

  window.SR.funcConf = {
    /**
     *  @description 関数：入力制御
     *  @param {Array} 入力チェック用の対象要素の値
     * @return {Array} エラー配列
     */
    validateInputVal: (fieldsArr) => {
      const VALIDATION = window.SR.fieldConf.VALIDATION;

      const validateInputWithRegex = (el, validation) => {
        const regex = validation.regex;
        const result = regex.test(el.value);
        if (result) return console.log("ok");
        el.error = validation.message;
        err.push(el);
      };
      const validateDateTimeRange = (el, validation, date) => {
        const startDate = new Data(date.min);
        const endDate = new Data(date.max);
        const inputDate = new Data(el.value);
        if (inputDate >= startDate && inputDate <= endDate) return console.log("ok");
        el.error = validation.message;
        err.push(el);
      };
      const validateInBetween = (el, validationMsg, between) => {
        if (el.value.length >= between.min && el.value.length <= between.max) return console.log("ok");
        el.error = validationMsg.between;
        err.push(el);
      };
      const validateConfirmationMatch = (el, validationMsg, srcId) => {
        const src = document.getElementById(srcId);
        if (el.value === src.value) return console.log("ok");
        el.error = validationMsg.confirmed_field;
        err.push(el);
      };
      const validateDecimal = (el, validationMsg, minDigits) => {
        const regex = new RegExp("^\\d+\\.\\d{" + minDigits + ",}$");
        const result = regex.test(el.value);
        if (result) return console.log("ok");
        el.error = validationMsg.decimal;
        err.push(el);
      };
      const validateDigits = (el, validationMsg, digits) => {
        const regex = new RegExp("^\\d{" + digits + ",}$");
        const result = regex.test(el.value);
        if (result) return console.log("ok");
        el.error = validationMsg.digits;
        err.push(el);
      };
      const validateMax = (el, validationMsg, max) => {
        if (el.value.length > max) return console.log("ok");
        el.error = validationMsg.max;
        err.push(el);
      };
      const validateMaxValue = (el, validationMsg, max) => {
        if (el.value > max) return console.log("ok");
        el.error = validationMsg.max_value;
        err.push(el);
      };
      const validateMin = (el, validationMsg, min) => {
        if (el.value.length < min) return console.log("ok");
        el.error = validationMsg.min;
        err.push(el);
      };
      const validateMinValue = (el, validationMsg, min) => {
        if (el.value < min) return console.log("ok");
        el.error = validationMsg.min_value;
        err.push(el);
      };
      const validateValueExistence = (el, validationMsg) => {
        const isValExist = el.value.length ? el.value.length : el.values;
        if (isValExist) return;
        el.error = validationMsg.required;
        err.push(field);
      };

      const validateDimensions = (el, validation) => {};
      const validateExcluded = (el, validation) => {};
      const validateExt = (el, validation) => {};
      const validateImage = (el, validation) => {};
      const validateIncluded = (el, validation) => {};
      const validateIp = (el, validation) => {};
      const validateMimes = (el, validation) => {};
      const validateRegex = (el, validation) => {};
      const validateSize = (el, validation) => {};

      const exceptTable = fieldsArr.filter((el) => el.category !== "table");
      let err = [];
      for (let field of exceptTable) {
        const isSelect = field.category === "select" ? true : false;
        const elem = document.getElementById(field.settings.id);
        elem.error = "";
        const validationType = field.validation;
        if (!validationType) continue;

        /**
         * @param {Object} elem 項目の現在の値
         * @param {Object | string} VALIDATION　{message: 入力制御メッセージ, regex: 正規表現} OR 入力制御メッセージ
         * @param {Object | string | number | boolean} validationType　対象の制御種類
         */
        if (validationType.alpha_sign) validateInputWithRegex(elem, VALIDATION.alpha_sign);
        if (validationType.not_sign) validateInputWithRegex(elem, VALIDATION.not_sign);
        if (validationType.alpha_dash) validateInputWithRegex(elem, VALIDATION.alpha_dash);
        if (validationType.alpha_num) validateInputWithRegex(elem, VALIDATION.alpha_num);
        if (validationType.alpha_spaces) validateInputWithRegex(elem, VALIDATION.alpha_spaces);
        if (validationType.alpha) validateInputWithRegex(elem, VALIDATION.alpha);
        if (validationType.between) validateInBetween(elem, VALIDATION.between, validationType.between);
        if (validationType.confirmed_field) validateConfirmationMatch(elem, VALIDATION.confirmed_field, validationType.confirmed_field);
        if (validationType.credit_card) validateInputWithRegex(elem, VALIDATION.credit_card);
        if (validationType.date_between) validateDateTimeRange(elem, VALIDATION.date_between, validationType.date_between);
        if (validationType.datetime_between) validateDateTimeRange(elem, VALIDATION.datetime_between, validationType.datetime_between);
        if (validationType.decimal) validateDecimal(elem, VALIDATION.decimal, validationType.decimal);
        if (validationType.digits) validateDigits(elem, VALIDATION.digits, validationType.digits);
        if (validationType.dimensions) validateDimensions(elem, VALIDATION.dimensions);
        if (validationType.email) validateInputWithRegex(elem, VALIDATION.email);
        if (validationType.ext) validateExt(elem, VALIDATION.ext);
        if (validationType.image) validateImage(elem, VALIDATION.image);
        if (validationType.included) validateIncluded(elem, VALIDATION.included);
        if (validationType.ip) validateIp(elem, VALIDATION.ip);
        if (validationType.max) validateMax(elem, VALIDATION.max, validationType.max);
        if (validationType.max_value) validateMaxValue(elem, VALIDATION.max_value, validationType.max_value);
        if (validationType.mimes) validateMimes(elem, VALIDATION.mimes);
        if (validationType.min) validateMin(elem, VALIDATION.min, validationType.min);
        if (validationType.min_value) validateMinValue(elem, VALIDATION.min_value, validationType.min_value);
        if (validationType.excluded) validateExcluded(elem, VALIDATION.excluded);
        if (validationType.numeric) validateInputWithRegex(elem, VALIDATION.numeric);
        if (validationType.regex) validateRegex(elem, VALIDATION.regex);
        if (validationType.required) validateRequired(elem, VALIDATION.required);
        if (validationType.size) validateSize(elem, VALIDATION.size);
        if (validationType.tel) validateInputWithRegex(elem, VALIDATION.tel);
        if (validationType.url) validateInputWithRegex(elem, VALIDATION.url);
      }
      return err;
    },

    /**
     * @description 関数：フィールドレイアウト情報取得
     * @return {Array} フィールドレイアウト順に並び変えた要素
     */
    sortFieldElement: (resp, FIELD) => {
      const layouts = resp.layout;
      const property = resp.property;
      let uniqueNumSp = 0;
      let uniqueNumLb = 0;
      let FLabel;
      let FCode;
      const pushFieldArr = (elem) => {
        switch (elem.type) {
          case "SPACER":
            uniqueNumSp++;
            FLabel = elem.elementId ? elem.elementId : `""`;
            FCode = `スペースフィールド${uniqueNumSp}`;
            break;
          case "LABEL":
            uniqueNumLb++;
            FLabel = elem.label ? elem.label : `""`;
            FCode = `ラベルフィールド${uniqueNumLb}`;
            break;
          case "HR":
            break;
          default:
            FLabel = property[elem.code].label;
            FCode = elem.code;
            break;
        }
        fieldArr.push({
          label: `${FLabel}（${FCode}）`,
          value: FCode,
        });
      };
      let fieldArr = [];
      for (let elem of layouts) {
        // label:フィールド名（フィールドコード）,value:フィールドコード
        switch (elem.type) {
          case "ROW":
            elem.fields.map((el) => {
              if (FIELD.appField.filter === "all" || FIELD.appField.type.includes(el.type)) pushFieldArr(el);
            });
            break;
          case "SUBTABLE":
            if (FIELD.appField.filter === "all" || FIELD.appField.type.includes(elem.type)) pushFieldArr(elem);
            const tableCode = elem.code;
            elem.fields.map((el) => {
              if (FIELD.appField.filter === "all" || FIELD.appField.type.includes(el.type)) {
                fieldArr.push({
                  label: `${property[tableCode].fields[el.code].label}（${el.code}）`,
                  value: el.code,
                });
              }
            });
            break;
          case "GROUP":
            if (FIELD.appField.filter === "all" || FIELD.appField.type.includes(elem.type)) pushFieldArr(elem);
            for (let elemGroup of elem.layout) {
              elemGroup.fields.map((el) => {
                if (FIELD.appField.filter === "all" || FIELD.appField.type.includes(el.type)) pushFieldArr(el);
              });
            }
            break;
          default:
            break;
        }
      }
      return fieldArr;
    },

    /**
     * @description 関数：プラグイン設定画面作成
     * @return {Array}  フィールドレイアウト順：テーブルで利用する場合のみ
     */
    createInitialFields: async () => {
      const FUNC_CONF = window.SR.funcConf;
      const FIELDS_CONF = window.SR.fieldConf.FIELDS_CONFIG;
      let fieldsItems;

      let resp = {};
      const respLayout = await kintone.api(kintone.api.url("/k/v1/app/form/layout.json", true), "GET", {
        app: kintone.app.getId(),
      });
      const respFields = await kintone.api(kintone.api.url("/k/v1/app/form/fields.json", true), "GET", {
        app: kintone.app.getId(),
      });
      resp["layout"] = respLayout.layout;
      resp["property"] = respFields.properties;
      Object.keys(FIELDS_CONF).forEach((el) => {
        if (!FIELDS_CONF[el].appField) return;
        fieldsItems = FUNC_CONF.sortFieldElement(resp, FIELDS_CONF[el]);
        if (FIELDS_CONF[el].settings) FIELDS_CONF[el].settings.items = fieldsItems;
      });
      let setValArr = [];
      const createFields = (fieldProp) => {
        setValArr.push(fieldProp); //config.set用配列
        const sp = document.getElementById(fieldProp.divId); // config.htmlに設定したidをget（追加したい位置）
        switch (fieldProp.type) {
          case "text":
            const text = new Kuc.Text(fieldProp.settings);
            if (sp) sp.appendChild(text);
            if (!sp) return text;
            break;
          case "textarea":
            const textarea = new Kuc.TextArea(fieldProp.settings);
            if (sp) sp.appendChild(textarea);
            break;
          case "timePicker":
            const timePicker = new Kuc.TimePicker(fieldProp.settings);
            if (sp) sp.appendChild(timePicker);
            break;
          case "dateTimePicker":
            const dateTimePicker = new Kuc.DateTimePicker(fieldProp.settings);
            if (sp) sp.appendChild(dateTimePicker);
            break;
          case "datePicker":
            const datePicker = new Kuc.DatePicker(fieldProp.settings);
            if (sp) sp.appendChild(datePicker);
            break;
          case "checkbox":
            const checkbox = new Kuc.Checkbox(fieldProp.settings);
            if (sp) sp.appendChild(checkbox);
            break;
          case "combobox":
            const combobox = new Kuc.Combobox(fieldProp.settings);
            if (sp) sp.appendChild(combobox);
            break;
          case "radioButton":
            const radioButton = new Kuc.RadioButton(fieldProp.settings);
            if (sp) sp.appendChild(radioButton);
            break;
          case "multiChoice":
            const multiChoice = new Kuc.MultiChoice(fieldProp.settings);
            if (sp) sp.appendChild(multiChoice);
            break;
          case "dropdown":
            const dropdown = new Kuc.Dropdown(fieldProp.settings);
            if (sp) sp.appendChild(dropdown);
            break;
          case "attachment": //削除予定
            const attachment = new Kuc.Attachment(fieldProp.settings);
            if (sp) sp.appendChild(attachment);
            break;
          case "button":
            const button = new Kuc.Button(fieldProp.settings);
            if (sp) sp.appendChild(button);
            /* onclickイベントを追加したい場合、任意オブジェクトキーを追加し、条件分岐追加
              例：if(fieldProp.任意のオブジェクトキー) クリック時の関数;
            */
            if (fieldProp.role === "submit") {
              button.addEventListener("click", (event) => {
                const isError = FUNC_CONF.validateInputVal(setValArr);
                if (!isError.length) FUNC_CONF.setPluginInfo(setValArr);
                return;
              });
            } else if (fieldProp.role === "cancel") {
              button.addEventListener("click", (event) => {
                history.back();
                return;
              });
            } else if (fieldProp.toggle) {
              button.addEventListener("click", (event) => {
                FUNC_CONF.toggleDisplay(fieldProp.toggle);
                return;
              });
            } else if (fieldProp.role === "other") {
              break;
            }
            break;
          case "table":
            break;
          default:
            console.log("フィールド作って");
            break;
        }
      };
      Object.keys(FIELDS_CONF).forEach((field) => {
        createFields(FIELDS_CONF[field]);
      });
      if (fieldsItems.length) fieldsItems.unshift({ label: "-----", value: "default" });
      return fieldsItems;
    },

    /**
     *  @description 関数：プラグイン設定情報保存
     *  @param {Array} 値セット用の対象要素の値
     * config.customは、独自の形式で保存したい場合や特殊なケースのみ利用。画面反映は基本config.templateの形のまま。
     * 特殊なケースのみ、画面反映処理を自ら作成する事。（templateはコメントアウトする）
     */
    setPluginInfo: (setValArr) => {
      let config = {};
      config["custom"] = {};
      config["template"] = {};
      let err = 0;
      for (let setVal of setValArr) {
        const isSelect = setVal.category === "select" ? true : false;
        const isTable = setVal.category === "table" ? true : false;
        const isAttachment = setVal.category === "attachment" ? true : false;
        if (isTable) {
          const currentTableData = document.getElementById(setVal.tableId).data;
          /**
           * customの場合、以下変更
           */
          config.template[setVal.tableId] = {
            table: currentTableData,
          };
        } else if (isSelect) {
          const currentSelectData = document.getElementById(setVal.settings.id);
          /**
           * customの場合、以下変更
           */
          config.template[setVal.settings.id] = {
            select: {
              selectedIdx: currentSelectData.selectedIndex,
              value: currentSelectData.value,
            },
          };
        } else if (isAttachment) {
          const currentAttachmentData = document.getElementById(setVal.settings.id);
          /**
           * customの場合、以下変更
           */
          const attachment = {
            name: currentAttachmentData.files.forEach((obj) => obj.name).join(", "),
            type: currentAttachmentData.files.forEach((obj) => obj.type).join(", "),
            lastModified: currentAttachmentData.files.forEach((obj) => obj.lastModified).join(", "),
          };
          config.template[setVal.settings.id] = {
            attachment: attachment,
          };
        } else {
          const currentData = document.getElementById(setVal.settings.id);
          /**
           * customの場合、以下変更
           */
          config.template[setVal.settings.id] = {
            common: currentData.value,
          };
        }
      }
      try {
        config.template = JSON.stringify(config.template);
        config.custom = JSON.stringify(config.custom);
        kintone.plugin.app.setConfig(config);
      } catch {
        console.log("aaa");
      }
    },

    /**
     *  @description 関数：プラグイン設定の保存値を画面反映（一旦attachmentは無視）
     *  @param {Object} CONFIG JSON型
     */
    reflectSavedData: (CONFIG) => {
      if (!CONFIG.template || !CONFIG.custom) return;
      const CONFIG_Template = JSON.parse(CONFIG.template);
      const CONFIG_Custom = JSON.parse(CONFIG.custom);
      const isTemplate = CONFIG_Template !== "";
      if (!isTemplate) return console.error("Error:There is no value saved");
      Object.keys(CONFIG_Template).forEach((el) => {
        const target = document.getElementById(el);
        const isSelect = CONFIG_Template[el].select ? true : false;
        const isTable = CONFIG_Template[el].table ? true : false;
        if (isTable) return (target.data = CONFIG_Template[el].table);
        // if (isAttachment) return addAttachment(target, CONFIG_Template[el].attachment);
        if (!isSelect) return (target.value = CONFIG_Template[el].common);
        target.selectedIndex = CONFIG_Template[el].select.selectedIdx;
        target.value = CONFIG_Template[el].select.value;
      });
    },

    /**
     *  @description 関数：特定のフィールドの表示切替
     *  @param {Array} 表示切替対象のフィールドが格納されている配列
     */

    toggleDisplay: (targetArr) => {
      for (let id of targetArr) {
        const target = document.getElementById(id);
        target.visible = target.visible ? false : true;
      }
    },
  };
})();
