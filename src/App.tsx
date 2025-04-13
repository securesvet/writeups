import Footer from "./Footer/index.tsx";
import Header from "./Header/index.tsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import Writeups from "./pages/Writeups/index.tsx";
import Resume from "./pages/Resume/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[var(--screen-no-header-no-footer)] px-[var(--main-content-padding)]">
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
        <Route path="/resume" element={<Resume />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </>
  ),
  { basename: "/writeups/" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
