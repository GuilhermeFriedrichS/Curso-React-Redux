import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
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

  function clientSelect(client: Client){
    console.log(client.name)
  }

  function clientDeleted(client: Client){
    console.log(`Excluir... ${client.name}`)
  }

  function saveClient(client: Client){
    console.log(client)
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout tittle="Cadastro Simples">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" 
                onClick={() => setVisible('form')}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} 
              clientSelect={clientSelect} 
              clientDeleted={clientDeleted}
            ></Table>
          </>
        ): (
          <Form 
            client={clients[2]}
            clientChanged={saveClient}
            cancel={() => setVisible('table')}
          />
            
            
        )}
      </Layout>
    </div>
  )
}
