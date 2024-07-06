import { lazy, Suspense }  from "react";
// import PublicLayout from "../commonPages/layout/PublicLayout";
// import AdminLogin from "../pages/auth/admin/Login";
// import UserLogin from "../pages/auth/user/Login";

import AuthGaurd from "../middlewares/AuthGaurd";

// import { lazy } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const PublicLayout = lazy(() => import("../commonPages/layout/PublicLayout"));
const AdminLogin = lazy(() => import("../pages/auth/admin/Login"));
const AdminRegister = lazy(() => import("../pages/auth/admin/Register"));
const UserLogin = lazy(() => import("../pages/auth/user/Login"));

export default [
    {
      path: "/admin",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGaurd Component={PublicLayout}></AuthGaurd>
          {/* <PublicLayout /> */}
        </Suspense>
      ),
      children: [
        {
          path: "login",
          element: <AdminLogin />,
        },
        {
          path: "register",
          element: <AdminRegister />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGaurd Component={PublicLayout}></AuthGaurd>
          {/* <PublicLayout /> */}
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: <UserLogin />,
        },
      ],
    },
];