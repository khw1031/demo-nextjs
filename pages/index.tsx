import { GetServerSideProps } from "next";
import { QueryClient, useQuery } from "react-query";
import fetch from "isomorphic-unfetch";
import { dehydrate } from "react-query/hydration";

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/api/hello");
  return await response.json();
};

export default function Home() {
  const { data } = useQuery("hello", getPosts);
  return <div>hello world {data.name}</div>;
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("hello", getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
