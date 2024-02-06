/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
const productReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_DATA":
      const featureData = action.products.filter((currElem) => {
        return currElem.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.products,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
