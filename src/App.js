import './asstes/css/App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { PaymentDashboard } from './components/PaymentDashboard';
import Format from './routing/Format';
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={< Format />}>
        <Route index element={<PaymentDashboard />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;