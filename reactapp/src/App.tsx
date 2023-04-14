import { ThemeProvider, CssBaseline, AppBar } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ProductsListPage, DescriptionPage } from './components';
import { ActiveDialogProvider, TShirtsContextProvider } from './providers';
import { AppTheme } from './theme';
import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <ActiveDialogProvider>
          <TShirtsContextProvider>
            <AppBar position="static" color="primary" enableColorOnDark>
              <h2>The T-Shirt Company</h2>
            </AppBar>
            <Routes>
              <Route path="/" element={<ProductsListPage />} />
              <Route path="/products/:id" element={<DescriptionPage />} />
            </Routes>
          </TShirtsContextProvider>
        </ActiveDialogProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
