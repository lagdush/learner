import { url } from '../Components/helpers/url/url';
import { loadData, showLoader, hideLoader, catchErrors } from './reducer';

export const getDataFromApi = (id) => {
  return async function (dispatch) {
    try {
      dispatch({ type: showLoader.type });
      const rawData = await fetch(`${url}users/content/${id}`);
      const data = await rawData.json();
      dispatch({ type: loadData.type, payload: data });
      dispatch({ type: hideLoader.type });
    } catch (error) {
      dispatch({ type: catchErrors.type, payload: error });
    }
  };
};
