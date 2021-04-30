import { url } from '../Components/helpers/url/url';
import { loadData } from './reducer';

export const getDataFromApi = (id) => {
  return async function (dispatch) {
    const rawData = await fetch(`${url}users/content/${id}`);
    const data = await rawData.json();
    dispatch({ type: loadData.type, payload: data });
  };
};
