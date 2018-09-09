import C from './constants';

const sort = (state = 'SORTED_BY_DATE', action) => {
  switch (action.type) {
    case C.SORT_COLORS:
      return action.sortBy;
    default:
      return state;
  }
};

export default sort;
/*
const state = 'SORTED_BY_DATE';

const action = {
  type: C.SORT_COLORS,
  sortBy: 'SORTED_BY_TITLE'
};

console.log(sort(state, action)); // "SORTED_BY_TITLE"
*/