import Footer from "./Footer/Footer.tsx";
import Header from "./Header/Header.tsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./Home/index.tsx";
import Writeups from "./Writeups/index.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "var(--screen-no-header)", padding: "var(--main-content-padding)"  }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/writeups" element={<Writeups />} />
      </Route>
    </>
  ),
  { basename: "/writeups/" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
