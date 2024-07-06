import { lazy, Suspense } from "react";
import AuthGuard from "../middlewares/AuthGaurd";

const AdminLayout = lazy(() => import("../commonPages/layout/AdminLayout"));
const AdminHome = lazy(() => import("../pages/admin/Home"));
const AdminAbout = lazy(() => import("../pages/admin/About"));
const AdminContact = lazy(() => import("../pages/admin/Contact"));
const CreateBook = lazy(() => import("../pages/admin/CreateBookPage"));
const BookDetail = lazy(() => import("../pages/admin/BookDetailsPage"));
const CartPage = lazy(() => import("../pages/admin/CartPage"));

export default [
  {
    path: "/admin",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard Component={AdminLayout} />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AdminHome />
          </Suspense>
        ),
      },
      {
        path: "create-book",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CreateBook />
          </Suspense>
        ),
      },
      {
        path: "book-detail/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BookDetail />
          </Suspense>
        ),
      },
      {
        path: "carts",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CartPage />
          </Suspense>
        ),
      },
    ],
  },
];
