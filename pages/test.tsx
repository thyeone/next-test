import { Layout } from "@/components/Layout";
import { ReactElement } from "react";

export default function Test() {
  return <h1 className="text-[24px] text-red-600 text-red">Tailwind CSS</h1>;
}

Test.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
