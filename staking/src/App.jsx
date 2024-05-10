import {BrowserRouter, Routes, Route} from 'react-router-dom'
import StartingPlan from "./pages/StartingPlans";
import MonthlyPlan from "./pages/MonthlyPlans";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element = {<StartingPlan/>}/>
          <Route path = '/monthly-plan' element = {<MonthlyPlan/>}/>
        </Routes>
      </BrowserRouter>   
  );
}

export default App;
