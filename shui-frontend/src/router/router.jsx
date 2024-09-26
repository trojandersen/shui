import { createBrowserRouter } from "react-router-dom";

import Flow from "../pages/Flow/Flow";
import Write from "../pages/Write/Write";
import Edit from "../pages/Edit/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Flow />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
]);

export default router;