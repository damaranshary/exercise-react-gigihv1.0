const initialState = { value: "" };

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "query":
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

export default searchReducer;