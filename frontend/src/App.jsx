import { Container } from "@chakra-ui/react";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import LogoutButton from "./components/LogoutButton";
import Authpage from "./pages/Authpage";
import Homepage from "./pages/Homepage";
import Postpage from "./pages/Postpage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import Userpage from "./pages/Userpage";

const App = () => {
  const user = useRecoilValue(userAtom);

  return (
    <Container maxW="620px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <Homepage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <Authpage /> : <Navigate to="/" />}
        />
        <Route
          path="/update"
          element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
        />
        <Route path="/:username" element={<Userpage />} />
        <Route path="/:username/post/:pId" element={<Postpage />} />
      </Routes>

      {user && <LogoutButton />}
      {user && <CreatePost />}
    </Container>
  );
};

export default App;
