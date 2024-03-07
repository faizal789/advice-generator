import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Card from "./components/Card";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-dark-blue-neutral flex min-h-screen items-center justify-center">
        <Card></Card>
      </main>
    </QueryClientProvider>
  );
}

export default App;
