import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './views/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-purple-500 py-8 px-4 md:px-0 min-h-screen flex items-start justify-center">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
