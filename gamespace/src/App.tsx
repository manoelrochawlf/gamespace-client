import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import theme from 'assets/styles/theme';
import './App.css';
import Router from 'router';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client = {queryClient}>
            <Router />
        </QueryClientProvider>        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
