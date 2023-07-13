import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectionPage = () => {
  const navigate = useNavigate();
  /* const code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    axios.post("url").then((res) => {
      console.log(res.data);
    });

    //localStorage.setItem('id', r.data.user_id);
    navigate("/main");
  }, []); */
  navigate("/main");

  return <div>로그인 중입니다...</div>;
};

export default RedirectionPage;
