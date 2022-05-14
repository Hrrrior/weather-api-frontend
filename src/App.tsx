import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './views/Home/HomeView';
import Cities from './views/Citites/CitiesView';
import Weather from './views/Weather/WeatherView';

const queryClient = new QueryClient();
export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <main role="main">
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="cities" element={<Cities />} />
              <Route path="weather" element={<Weather />} />
            </Routes>
          </QueryClientProvider>
        </main>
      </div>
      <div className="spacer" />
      <Footer />
    </>
  );
};

export default App;
