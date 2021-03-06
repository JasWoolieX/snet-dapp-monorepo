export const START_APP_LOADER = "START_APP_LOADER";
export const STOP_APP_LOADER = "STOP_APP_LOADER";
export const START_AISERVICE_LIST_LOADER = "START_AISERVICE_LIST_LOADER";
export const STOP_AISERVICE_LIST_LOADER = "STOP_AISERVICE_LIST_LOADER";

export const START_REQUEST_LOADER = "START_REQUEST_LOADER";
export const STOP_REQUEST_LOADER = "STOP_REQUEST_LOADER";

export const START_REQUEST_MODAL_LOADER = "START_REQUEST_MODAL_LOADER";
export const STOP_REQUEST_MODAL_LOADER = "STOP_REQUEST_MODAL_LOADER";

export const startAppLoader = loaderContent => dispatch => {
  dispatch({ type: START_APP_LOADER, payload: { app: { loading: true, ...loaderContent } } });
};

export const stopAppLoader = dispatch => {
  dispatch({ type: STOP_APP_LOADER, payload: { app: { loading: false, loaderHeader: "", loaderText: "" } } });
};

export const startAIServiceListLoader = dispatch => {
  dispatch({ type: START_AISERVICE_LIST_LOADER });
};

export const startRequestLoader = dispatch => {
  dispatch({ type: START_REQUEST_LOADER });
};

export const startRequestModalLoader = dispatch => {
  dispatch({ type: START_REQUEST_MODAL_LOADER });
};

export const stopAIServiceListLoader = dispatch => {
  dispatch({ type: STOP_AISERVICE_LIST_LOADER });
};

export const stopRequestLoader = dispatch => {
  dispatch({ type: STOP_REQUEST_LOADER });
};
export const stopRequestModalLoader = dispatch => {
  dispatch({ type: STOP_REQUEST_MODAL_LOADER });
};
