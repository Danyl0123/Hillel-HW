import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProductsPreview from "./pages/ProductsPreview/ProductsPreview";
import ProductTable from "./pages/ProductsTable/ProductsTable";
import NoPage from "./pages/NoPage/NoPage";
import PrivateRoute from "./privateRoute";
import ProductCardPreview from "./pages/ProductCardPreview/ProductCardPreview";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/products-table" element={<ProductTable />} />
        <Route path="/products-preview" element={<ProductsPreview />} />
        <Route
          path="/products-preview/:productId"
          element={<ProductCardPreview />}
        />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);
export default AppRouter;
