// import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./authRoutes";
import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";

const router = createBrowserRouter([
    ...authRoutes,
    ...adminRoutes,
    ...userRoutes,
  ]);

export default router;