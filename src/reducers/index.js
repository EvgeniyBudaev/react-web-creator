const initialState = {
  form: null,
  formTitle: null,
  submitButtonText: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_TITLE_LOADED":
      return {
        formTitle: action.payload
      };
    case "FORM_SUBMIT_BUTTON_TEXT_LOADED":
      return {
        submitButtonText: action.payload
      };


    default:
      return state;
  }
};

export default reducer;
