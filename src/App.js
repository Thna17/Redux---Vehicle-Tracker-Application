import CarForm from './components/CarForm';
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div>
        <CarList />
        <CarSearch />
        <CarValue />
        <CarForm />
    </div>
  )
}

export default App