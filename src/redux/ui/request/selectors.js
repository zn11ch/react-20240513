export const selectRequestModule = (state) => state.request;

export const selectRequesById = (state, requestId) =>
  selectRequestModule(state)[requestId];

export const selectRequestStatus = (state, requestId) =>
  selectRequesById(state, requestId)?.status || "idle";

export const selectRequestError = (state, requestId) => {
  selectRequesById(state, requestId)?.error;
};
