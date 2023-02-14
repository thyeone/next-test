import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

export default function About() {
  const router = useRouter();
  console.log(router);
  return <h1>About Page</h1>;
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
