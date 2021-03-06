import Head from "next/head";

import Header from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
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
        <Main />
        <Footer />
      </div>
    </TodosProvider>
  );
};

export default Home;
