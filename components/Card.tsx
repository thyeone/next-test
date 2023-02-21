import { IProduct, IProductResult } from "@/typing";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

type Props = {
  data?: IProduct[];
};

export default function Card({ data }: Props) {
  const router = useRouter();
  const cardClick = (id: number, title: string, category: string) => {
    router.push(`/${category}/${title}/${id}`);
  };

  return (
    <Container>
      <Wrapper>
        {data?.map((item) => (
          <List
            key={item.id}
            onClick={() => cardClick(item.id, item.title, item.category)}
          >
            <img src={item.images[0]} />
            <Link href={`/${item.category}/${item.title}/${item.id}`}>
              <Title>{item.title}</Title>
            </Link>
            <div>
              <p className="brand">{item.brand}</p>
              <p className="price">${item.price}</p>
            </div>
          </List>
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 30%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  cursor: pointer;
`;

const List = styled.div`
  margin-top: 50px;
  img {
    width: 300px;
    height: 300px;
    transition: transform 0.2s ease-in-out;
    object-fit: cover;
    border-radius: 8px;
    :hover {
      transform: scale(1.05) translateY(-10px);
    }
  }
  .brand {
    color: #8d8d8d;
    font-weight: bold;
  }
  .price {
    color: skyblue;
    font-size: 17px;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  color: #5060b2;
`;
