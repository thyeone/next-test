import { Layout } from "@/components/Layout";
import Seo from "@/components/Seo";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { baseUrl } from "@/constants/url";
import Modal from "@/components/Modal";

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
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const [title, id]: any = router.query.detail || [];
  const showModal = () => {
    setModal(true);
  };
  return (
    <>
      <Seo title={title} />
      <div className="w-50vw bg-white flex justify-center mx-auto my-0 p-40 rounded-[9px]">
        <div className="flex flex-col justify-center mx-auto my-0 text-[black]">
          <div className="inline-block text-center">
            <span className="text-[24px] font-semibold">{data.title}</span>
            <span className="ml-[5px] font-light">({data.brand})</span>
          </div>
          <Image
            src={`${baseUrl}${id}/${id}.jpg`}
            alt={data.title}
            width={300}
            height={300}
            className="mx-auto my-[20px] cursor-pointer"
            onClick={showModal}
          />
          <div className="flex flex-col justify-center gap-[10px]">
            <span className="text-[20px] font-semibold text-center">
              Price: {data.price}$
              <span className="text-[red]"> (-{data.discountPercentage}%)</span>
            </span>
            <p className="text-[16px] w-4/5 text-center mx-auto my-0">
              {data.description}
            </p>
          </div>
        </div>
      </div>
      {modal && <Modal setModal={setModal} id={id} title={data.title} />}
    </>
  );
}

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
