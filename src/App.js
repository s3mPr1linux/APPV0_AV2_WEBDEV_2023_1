import { AuthGoogleProvider } from "./contexts/authGoogle";
import { AppRoutes } from "./routes/routes";
import "./App.css";

export const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
    
  );
};
