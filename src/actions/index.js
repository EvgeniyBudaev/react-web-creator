const formTitleLoaded = formTitle => {
  return {
    type: "FORM_TITLE_LOADED",
    payload: formTitle
  };
};

const submitButtonTextLoaded = submitButtonText => {
  return {
    type: "FORM_SUBMIT_BUTTON_TEXT_LOADED",
    payload: submitButtonText
  };
}; 

const formFieldsLabelNameLoaded = formFieldsLabelName => {
  return {
    type: "FORM_FIELDS_LABEL_NAME_LOADED",
    payload: formFieldsLabelName
  };
};

const formFieldsLabelPhoneNumberLoaded = formFieldsLabelPhoneNumber => {
  return {
    type: "FORM_FIELDS_LABEL_PHONE_NUMBER_LOADED",
    payload: formFieldsLabelPhoneNumber
  };
};

const formFieldsLabelEmailLoaded = formFieldsLabelEmail => {
  return {
    type: "FORM_FIELDS_LABEL_EMAIL_LOADED",
    payload: formFieldsLabelEmail
  };
};

const formFieldsLabelRecordLoaded = formFieldsLabelRecord => {
  return {
    type: "FORM_FIELDS_LABEL_RECORD_LOADED",
    payload: formFieldsLabelRecord
  };
};

const formFieldsLabelPoliticLoaded = formFieldsLabelPolitic => {
  return {
    type: "FORM_FIELDS_LABEL_POLITIC_LOADED",
    payload: formFieldsLabelPolitic
  };
};


export { 
  formTitleLoaded,
   submitButtonTextLoaded,
    formFieldsLabelNameLoaded,
    formFieldsLabelPhoneNumberLoaded,
    formFieldsLabelEmailLoaded,
    formFieldsLabelRecordLoaded,
    formFieldsLabelPoliticLoaded };