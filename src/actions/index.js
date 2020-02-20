const formTitleLoaded = (formTitle) => {
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


export { formTitleLoaded, submitButtonTextLoaded };