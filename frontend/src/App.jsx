import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home/index.js"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p> Loading... </p>}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
