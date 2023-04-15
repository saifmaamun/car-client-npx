const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Components/Home/Home/Home");
const { default: Main } = require("../../Layout/Main/Main");

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        }
      ]
    },
  ]);


  export default router;