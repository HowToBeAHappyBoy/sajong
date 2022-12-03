import styled from "@emotion/styled";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "../../react-query";
import { WishItem } from "../../types/WishItem.type";

export const WishListPage = () => {
    const { id, name } = useParams() as { id?: string, name?: string };

    const { data } = useQuery(['wish-list', id], () => axios.get<{data: WishItem[]}>(`http://10.10.4.181:4000/wish-list/${id}`), {
        enabled: !!id && !!name,
        cacheTime: 0
    });

    if (!data?.data?.data) {
        return null;
    }

    return (
        <Container>
            {data?.data?.data.map(item => (
                <Link to={`/wish-item/${item.id}`} key={item.id}>
                    <div>
                        {item.title}
                    </div>
                </Link>
            ))}
        </Container>
    )
}

const Container = styled.div`
    background-color: #FAE9D9;
    height: 100%;
`;

const Header = styled.header`
`;