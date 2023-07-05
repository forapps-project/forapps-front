import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Main from "./routes/user/main";

const UserRouter = () => {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default UserRouter;
