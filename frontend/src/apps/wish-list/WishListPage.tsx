import styled from "@emotion/styled";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "../../react-query";
import { Colors } from "../../styles";
import { WishItem } from "../../types/WishItem.type";

export const WishListPage = () => {
  const { id, name } = useParams() as { id?: string; name?: string };

  const { data } = useQuery(
    ["wish-list", id],
    () =>
      axios.get<{ data: WishItem[] }>(
        `http://10.10.4.181:4000/wish-list/${id}`
      ),
    {
      enabled: !!id && !!name,
      cacheTime: 0,
    }
  );

  if (!data?.data?.data) {
    return null;
  }

  return (
    <Container>
      <Header>‘{name}’의 위시리스트</Header>
      {data?.data?.data.map((item) => (
        <Link to={`/wish-item/${item.id}`} key={item.id}>
          <div>{item.title}</div>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background-color: #fae9d9;
  height: 100%;
`;

const Header = styled.header`
  background-color: #fff4e9;
  padding: 16px 20px 36px 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: ${Colors.titleActive};
`;
