import { useEffect, useState } from "react";
import CollectionClient from "../backend/db/CollectionClient";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import ClientRepository from "../core/ClientRepository";

export default function Home() {

  const repo: ClientRepository = new CollectionClient()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]> ([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])
  
  function getAll(){
    repo.getAll().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function clientSelect(client: Client){
    setClient(client)
    setVisible('form')
  }

  async function clientDeleted(client: Client){
    await repo.delete(client)
    getAll()
  }

  async function saveClient(client: Client){
    await repo.save(client)
    getAll()
  }

  function newClient(){
    setClient(Client.empty())
    setVisible('form')
  }

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
                onClick={newClient}>
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
            client={client}
            clientChanged={saveClient}
            cancel={() => setVisible('table')}
          />
            
            
        )}
      </Layout>
    </div>
  )
}
