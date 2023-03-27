import MusiquePage from "./components/MusiquePage";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MusiquePage />
    </QueryClientProvider>
  );
}

export default App;
