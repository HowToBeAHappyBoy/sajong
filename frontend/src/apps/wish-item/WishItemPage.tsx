import styled from "@emotion/styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Layout } from "../../layouts/CommonLayout";
import { useQuery } from "../../react-query";
import { Colors } from "../../styles";
import { WishItem } from "../../types/WishItem.type";

export const WishItemPage = () => {
  const { id } = useParams() as { id?: string };

  const { data } = useQuery(
    ["wish-item", id],
    () => axios.get<WishItem>(`http://10.10.4.181:4000/wish-list/${id}/detail`),
    {
      enabled: !!id,
    }
  );

  if (!data?.data) {
    return null;
  }

  return (
    <Layout hasBackButton>
      <Container>
        <Image src={data.data.image} />
        <Contents>
          <Title>{data.data.title}</Title>
          <Description>{data.data.description}</Description>
          <ButtonWrapper>
            <Button text="상품 보러가기" onClick={() => window.open(data.data.link)}/>
          </ButtonWrapper>
        </Contents>
      </Container>
    </Layout>
  );
};

const Container = styled.div``;

const Contents = styled.div`
  padding: 0 20px;
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #1e2222;
  margin-top: 34px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${Colors.line};
`;

const Description = styled.span`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: ${Colors.titleActive};
`;

const ButtonWrapper = styled.div`
padding: 20px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;
