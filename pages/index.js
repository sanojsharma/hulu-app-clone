import Head from "next/head";
import Image from "next/image";
import { Result } from "postcss";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home({ results }) {  
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();
  return {
    props: {
      results: data,
    },
  };
}
