import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Ana', 19, '1'),
    new Client('Guilherme', 42, '2'),
    new Client('Roberto', 21, '3'),
    new Client('Pedro', 31, '4'),
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout tittle="Cadastro Simples">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
