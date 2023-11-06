// import "./App.css";
import { SimpleRegistrationForm } from "./components/simple/SimpleRegistrationForm";
import { YupRegistrationForm } from "./components/yup/YupRegistrationForm";

function App() {
  return (
    <div className="flex flex-col">
      <SimpleRegistrationForm />
      <YupRegistrationForm />
    </div>
  );
}

export default App;
