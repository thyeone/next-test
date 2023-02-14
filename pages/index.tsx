import Card from "@/components/Card";
import { Layout } from "@/components/Layout";
import Seo from "@/components/Seo";
import { ReactElement } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Seo title="Home" />
      <Card />
    </Wrapper>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Wrapper = styled.div``;
