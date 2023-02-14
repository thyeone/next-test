import { Layout } from "@/components/Layout";
import Seo from "@/components/Seo";
import axios from "axios";
import { useRouter } from "next/router";
import { ReactElement } from "react";

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

export default function Detail(data: Props) {
  const result = data.data;
  const router = useRouter();

  const [title, id]: any = router.query.detail || [];
  console.log(result);
  return (
    <>
      <Seo title={title} />
      <h1 style={{ color: "red" }}>{result.title}</h1>
    </>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.params.detail[1];
  const data = await axios(`http://localhost:3000/api/${id}`).then(
    (response) => response.data
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
