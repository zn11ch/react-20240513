export const selectRestaurantModule = (state) => state.restaurants;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;
