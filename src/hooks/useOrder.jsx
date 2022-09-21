import { useReducer } from 'react';

const useAuth = () => {
  const initState = {
    started: false,
    loading: false,
    ordered: false,
  };

  const delay = 1500;

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOADING': {
        return {
          ...state,
          loading: true,
          started: true,
        };
      }
      case 'RESOLVED': {
        return {
          ...state,
          loading: false,
          ordered: true,
        };
      }
      case 'ENDED': {
        return {
          ...state,
          started: false,
          loading: false,
          ordered: false,
        };
      }
      default:
        return state;
    }
  }, initState);

  const placeOrder = () => {
    dispatch({ type: 'LOADING' });
    setTimeout(() => {
      dispatch({ type: 'RESOLVED' });
    }, delay);
  };

  const endOrder = () => {
    dispatch({ type: 'LOADING' });
    setTimeout(() => {
      dispatch({ type: 'ENDED' });
    }, delay);
  };

  return [
    state.started,
    state.loading,
    state.ordered,
    placeOrder,
    endOrder,
    delay,
  ];
};

export default useAuth;
