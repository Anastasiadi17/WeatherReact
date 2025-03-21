import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Weather from "./components/Weather/Weather";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
}

export default App;
