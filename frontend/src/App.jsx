import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#60db6d",
              color: "white",
              fontSize: "17px",
            },
            iconTheme: {
              primary: "white",
              secondary: "green",
            },
          },
          error: {
            style: {
              background: "#ff756b",
              color: "white",
              fontSize: "17px",
              fontWeight: "500",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
        }}
      />
      <AppRoutes />
    </div>
  );
};

export default App;
