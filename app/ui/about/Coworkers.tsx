import { useEffect, useReducer } from 'react';
import axios from 'axios';

function List({ state }: any) {
  const urval: any[] = [];

  function makeUrval(urval: any[]) {
    state.hpcharacters.map((character: { house: string }) => {
      if (character.house === 'Gryffindor') urval.push(character);
    });
    return urval;
  }

  return (
    <>
      {makeUrval(urval).map((character) => (
        <div key={character.id}>
          <h4>
            {character.name} - {character.actor}
          </h4>
        </div>
      ))}
    </>
  );
}

const Coworkers = () => {
  function reducer(state: any, action: { type: any; hpcharacters: any }) {
    switch (action.type) {
      case 'charactersLoaded':
        return {
          ...state,
          loading: false,
          hpcharacters: action.hpcharacters,
        };
      case 'setLoadingStatus':
        return { ...state, loading: true };
      default:
        throw new Error(`Failure. type: ${action.type}`);
    }
  }

  const initialState = {
    hpcharacters: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getDataAsync() {
      dispatch({
        type: 'setLoadingStatus',
        hpcharacters: undefined,
      });
      const results = await axios.get(
        'https://hp-api.onrender.com/api/characters',
      );
      dispatch({
        type: 'charactersLoaded',
        hpcharacters: results.data,
      });
    }
    getDataAsync();
  }, []);

  if (state.loading) return <div>Loading...</div>;

  return <List state={state}></List>;
};
export default Coworkers;
