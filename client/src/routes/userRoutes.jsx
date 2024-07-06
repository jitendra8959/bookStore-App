import { lazy, Suspense } from "react";

// import UserLayout from "../commonPages/layout/UserLayout";
// import UserHome from "../pages/user/Home";
// import UserAbout from "../pages/user/About";
// import UserContact from "../pages/user/Contact";

import AuthGaurd from "../middlewares/AuthGaurd";

const UserLayout = lazy(() => import("../commonPages/layout/UserLayout"));
const UserHome = lazy(() => import("../pages/user/Home"));
const UserAbout = lazy(() => import("../pages/user/About"));
const UserContact = lazy(() => import("../pages/user/Contact"));


export default [
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGaurd Component={UserLayout}></AuthGaurd>
          {/* <UserLayout /> */}
        </Suspense>
      ),
      children: [
        {
          path: "",
          element: <UserHome />,
        },
        {
          path: "about",
          element: <UserAbout />,
        },
        {
          path: "contact",
          element: <UserContact />,
        },
      ],
    },
];