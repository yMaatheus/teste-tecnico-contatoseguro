import { Router } from "./routes";
import { AuthProvider } from "./context/AuthProvider";

const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);

export default App;
