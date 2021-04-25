import Head from "next/head";

import Header from "../components/Header";
import { TodosProvider } from "../context/todo";

const Home = () => {
  return (
    <TodosProvider>
      <div className="todoapp">
        <Head>
          <title>To Do App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
    </TodosProvider>
  );
};

export default Home;
