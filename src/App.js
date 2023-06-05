import DataProvider from "./componets/Context/DataContext";
import {
  RouterProvider,
} from "react-router-dom";
import rutas from './rutas';

function App() {
  return (
    <DataProvider>
      <RouterProvider router={rutas} />
    </DataProvider>
  );
}

export default App;
