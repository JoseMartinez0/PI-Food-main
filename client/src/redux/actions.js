import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
  return async function (dispatch) {
    const apiData = await axios.get();
    const recipes = apiData.data;
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};

// export const getRecipe = (id) => {
//   return async function (dispatch) {
//     const apiData = await axios.get(`${id}`);
//     const recipe = apiData.data;
//     dispatch({ type: GET_RECIPE, payload: recipe });
//   };
// };
