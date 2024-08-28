import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import other components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Category from "./components/Category.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:category" element={<Category />} />
            {/* Catch-all other routes for displaying an error page */}
            <Route path="*" element={<ErrorPage />} />
          </>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
