import { Products } from "@/pages/api/requests";
import Link from "next/link";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import styled from "styled-components";

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface IProductResult {
  products: IProduct[];
}

export default function Card() {
  const { data } = useQuery<IProductResult>(["products"], Products);
  const router = useRouter();
  const cardClick = (id: number, title: string, category: string) => {
    router.push(`/${category}/${title}/${id}`);
  };

  return (
    <Container>
      <Wrapper>
        {data?.products.map((item) => (
          <List
            key={item.id}
            onClick={() => cardClick(item.id, item.title, item.category)}
          >
            <img src={item.images[0]} />
            <Link href={`/${item.category}/${item.title}/${item.id}`}>
              <Title>{item.title}</Title>
            </Link>
          </List>
        ))}
      </Wrapper>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], Products);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

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
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
  color: #fff;
`;
