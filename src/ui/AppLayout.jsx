import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
        {/* this provides the children routes to the parent element */}
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
