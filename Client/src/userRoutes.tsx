import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Main from "./routes/user/main";
import Diary from "./routes/user/diary";

const UserRouter = () => {
  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/diary" element={<Diary />} />
      </Routes>
    </>
  );
};

export default UserRouter;
