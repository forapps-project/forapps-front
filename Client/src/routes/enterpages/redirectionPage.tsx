import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectionPage = () => {
  const code = window.location.search;
  const navigate = useNavigate();
  /* 
  or 인가코드 자체만
  const code = new URL(dococument.location.toString()).searchParams.get('code'); 
  */

  useEffect(() => {
    axios.post("url").then((res) => {
      console.log(res.data);  //토큰 받기
    });

    //localStorage.setItem('id', r.data.user_id);
    navigate("/main");
  }, []);

  return <div>로그인 중입니다...</div>;
};

export default RedirectionPage;
