export const selectRestarauntFromResult = (restaurauntId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === restaurauntId),
});

export const selectUserFromResult = (userId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === userId),
});

export const selectEntityFromResult = (entityId) => (result) => ({
  ...result,
  data: result.data?.find(({ id }) => id === entityId),
});
