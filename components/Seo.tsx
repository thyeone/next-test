import Head from "next/head";

export default function Seo({ title }: { title: React.ReactNode }) {
  return (
    <Head>
      <title>{title} | Hi-Mart </title>
    </Head>
  );
}
