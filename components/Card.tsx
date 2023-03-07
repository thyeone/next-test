import { IProduct, IProductResult } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  data?: IProduct[];
};

export default function Card({ data }: Props) {
  const router = useRouter();
  const cardClick = (id: number, title: string, category: string) => {
    router.push(`/${category}/${title}/${id}`);
  };

  return (
    <div className="flex justify-center mx-auto my-0 w-[40%]">
      <div className="grid grid-cols-2 gap-[30px] cursor-pointer">
        {data?.map((item) => (
          <div
            className="mt-[50px]"
            key={item.id}
            onClick={() => cardClick(item.id, item.title, item.category)}
          >
            <Image
              src={item.images[0]}
              alt={item.title}
              width={300}
              height={300}
              className="w-[300px] h-[300px] transition-[transform 0.2s ease-in-out] object-cover rounded-[8px] hover:transform-scale-[1.05]"
            />
            <Link href={`/${item.category}/${item.title}/${item.id}`}>
              <h1 className="font-semibold text-[18px] text-center mt-[30px] mb-[20px] text-[#5060b2]">
                {item.title}
              </h1>
            </Link>
            <div className="flex flex-col gap-[15px] text-center">
              <p className="text-[#8d8d8d] font-semibold">{item.brand}</p>
              <p className="text-[skyblue] text-[17px]">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
