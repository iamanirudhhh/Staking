import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MonthlyPlan from "./pages/MonthlyPlans";
import Staking from "./pages/Staking";
import StartingPlan from "./pages/StartingPlans";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element = {<StartingPlan/>}/>
          <Route path = '/monthly-plan' element = {<MonthlyPlan/>}/>
          <Route path = '/staking' element = {<Staking/>}/>
        </Routes>
      </BrowserRouter>   
  );
}

export default App;
