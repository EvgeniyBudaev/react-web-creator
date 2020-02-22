const initialState = {
  formTitle: "",
  submitButtonText: "",
  formFieldsLabelName: "",
  formFieldsLabelPhoneNumber: "",
  formFieldsLabelEmail: "",
  formFieldsLabelRecord: "",
  formFieldsLabelPolitic: "",
  formFieldsLabelComment: ''
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "FORM_TITLE_LOADED":
      return {
        formTitle: action.payload
      };
    case "FORM_SUBMIT_BUTTON_TEXT_LOADED":
      return {
        ...state,
        submitButtonText: action.payload
      };
    case "FORM_FIELDS_LABEL_NAME_LOADED":
      return {
        ...state,
        formFieldsLabelName: action.payload
      };
    case "FORM_FIELDS_LABEL_PHONE_NUMBER_LOADED":
      return {
        ...state,
        formFieldsLabelPhoneNumber: action.payload
      };
    case "FORM_FIELDS_LABEL_EMAIL_LOADED":
      return {
        ...state,
        formFieldsLabelEmail: action.payload
      };
    case "FORM_FIELDS_LABEL_RECORD_LOADED":
      return {
        ...state,
        formFieldsLabelRecord: action.payload
      };
    case "FORM_FIELDS_LABEL_POLITIC_LOADED":
      return {
        ...state,
        formFieldsLabelPolitic: action.payload
      };
    case "FORM_FIELDS_LABEL_COMMENT_LOADED":
      return {
        ...state,
        formFieldsLabelComment: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
