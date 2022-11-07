import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('./pages/home'));
const LoginPage = React.lazy(() => import('./pages/login'));
const RegisterPage = React.lazy(() => import("./pages/register"));
const TodoPage = React.lazy(() => import("./pages/todo"));
const Expenses = React.lazy(() => import("./pages/expenses"));
const ReactApps = React.lazy(() => import('./pages/react_apps'));
const FoodApp = React.lazy(() => import('./pages/food-app'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p> Loading... </p>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/react-apps" element={<ReactApps />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/food-app" element={<FoodApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
