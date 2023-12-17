
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Main } from './Routes/AllRoutes/Main';
import { TOKEN } from './Variables/AllVariables';
import { isAuthEmailAction } from './Redux/IsAuthReducer/action';

function App() {

const dispatch = useDispatch()

if(TOKEN){
  dispatch(isAuthEmailAction(true))
}


  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
