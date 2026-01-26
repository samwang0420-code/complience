import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import FreeCheck from './pages/FreeCheck';
import QuestionPage from './pages/QuestionPage';
import IndustryPage from './pages/IndustryPage';
import AdaLandingPage from './pages/AdaLandingPage';
import ThankYou from './pages/ThankYou';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="check" element={<FreeCheck />} />
            
            {/* Programmatic SEO Routes */}
            <Route path="ada-compliance/:industry" element={<AdaLandingPage />} />
            <Route path="ada-compliance/:industry/:location" element={<AdaLandingPage />} />

            {/* Generic Category Route for Questions */}
            <Route path=":category/:slug" element={<QuestionPage />} />
            <Route path="industry/:slug" element={<IndustryPage />} />
            <Route path="thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
