import {
  createBrowserRouter,
} from "react-router-dom";
import FileUpload from "./FileUpload/FileUpload";
import Home from "./Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/file-upload",
    element: <FileUpload />,
  },
]);
