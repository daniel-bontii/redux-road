const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0, 
    cash: 200
  }
  
  const wagonStateReducer = (state = initialWagonState, action) => {
    switch(action.type){
      case 'gather':
      return {...state, supplies: state.supplies + 15, days: ++state.days}
      break;
  
      case 'travel':
      const supplies = state.supplies - (20 * action.payload);
      if (supplies >= 0){
      return {...state, 
      supplies: state.supplies - (20 * action.payload),
      distance: state.distance + (10 * action.payload),
      days: state.days + action.payload }
      } else{
        return state;
      }
      break;
  
      case 'tippedWagon':
      return {...state, supplies: state.supplies - 30, days: state.days + 1}
      break;
  
      case 'sell':
      return {
        ...state, supplies: state.supplies - 20,
        cash: state.cash + 5
      }
      break;
  
      case 'buy':
      return {
        ...state, supplies: state.supplies + 20, 
        cash: state.cash - 15
      }
      break;
  
      case 'theft':
      return {
        ...state, cash: state.cash / 2
      }
      break;
  
      default:
      return state;
    }
  }
  let wagon = wagonStateReducer(undefined, {});
  wagon = wagonStateReducer(wagon, {type: 'travel', payload: 1});
  wagon = wagonStateReducer(wagon, {type: 'gather'});
  wagon = wagonStateReducer(wagon, {type: 'tippedWagon'});
  //wagon = wagonStateReducer(wagon, {type: 'travel', payload: 3});
  //wagon = wagon = wagonStateReducer(wagon, {type: 'travel', payload: 3});
  wagon = wagon = wagonStateReducer(wagon, {type: 'sell'});
  wagon = wagon = wagonStateReducer(wagon, {type: 'buy'});
  wagon = wagon = wagonStateReducer(wagon, {type: 'theft'});
  console.log(wagon);
  