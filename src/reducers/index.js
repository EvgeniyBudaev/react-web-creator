const initialState = {
  form: null,
  formTitle: null,
  formFields: null,
  formFieldsLabel: null,
  submitButtonText: null
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FORM_TITLE_LOADED':
      return {
        formTitle: action.payload
      };

      default:
        return state;
  }
};

export default reducer;