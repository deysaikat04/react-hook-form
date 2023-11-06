// import "./App.css";
import { SimpleRegistrationForm } from "./components/simple/SimpleRegistrationForm";
import { YupRegistrationForm } from "./components/yup/YupRegistrationForm";
import { ZodRegistrationForm } from "./components/zod/ZodRegistrationForm";

function App() {
  return (
    <div className="flex flex-col">
      <SimpleRegistrationForm />
      <YupRegistrationForm />
      <ZodRegistrationForm />
    </div>
  );
}

export default App;
