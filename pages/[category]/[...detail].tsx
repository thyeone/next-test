import { Layout } from "@/components/Layout";
import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import styled from "styled-components";
import Image from "next/image";
import { baseUrl } from "@/constants/url";

type Props = {
  data: {
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
  };
};

export default function Detail({ data }: Props) {
  const router = useRouter();
  const [title, id]: any = router.query.detail || [];
  console.log(router);
  console.log(data);
  return (
    <>
      <Seo title={title} />
      <Box>
        <List>
          <div>
            <span className="title">{data.title}</span>
            <span className="brand">({data.brand})</span>
          </div>
          <Image
            src={`${baseUrl}${id}/${id}.jpg`}
            alt={data.title}
            width={300}
            height={300}
            className="img"
          />
          <div className="info">
            <span className="price">
              Price: {data.price}$<span> (-{data.discountPercentage}%)</span>
            </span>
            <p className="description">{data.description}</p>
          </div>
        </List>
      </Box>
    </>
  );
}

const Box = styled.div`
  width: 50vw;
  background-color: white;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 50px;
  padding: 40px;
  border-radius: 9px;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: #000;
  > div {
    display: inline-block;
    text-align: center;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .title {
    font-size: 24px;
    font-weight: 600;
  }
  .brand {
    margin-left: 5px;
    font-weight: 300;
  }
  .img {
    margin: 20px auto;
  }
  .description {
    font-size: 16px;
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
  .price {
    font-size: 20px;
    font-weight: 600;
    > span {
      color: red;
    }
  }
`;

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.params.detail[1];
  const data = await fetch(`http://localhost:3000/api/${id}`).then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
