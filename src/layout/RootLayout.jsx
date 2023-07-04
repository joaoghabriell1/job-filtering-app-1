import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootLayout = (props) => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
