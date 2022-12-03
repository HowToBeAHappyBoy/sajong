import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const nav = useNavigate();
  const handleSuccess = (id: number, name: string) => {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("id", `${id}`);
    axios
      .post(`http://10.10.4.181:4000/users/sign-in/${id}`)
      .then((res) => {
        nav(`/wish-list/${id}/${name}`);
      })
      .catch((_) => alert("서버에서 에러가 발생했어요 :("));
  };

  return {
    handleSuccess,
  };
};
