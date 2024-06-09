export const selectReviewModule = (state) => state.reviews;

export const selectReviewById = (state, id) =>
  selectReviewModule(state)?.entities?.[id];

export const selectReviewIds = (state) => selectReviewModule(state).ids;
