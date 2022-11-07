import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const {
    client, 
    clients, 
    newClient, 
    saveClient, 
    selectClient, 
    deleteClient, 
    tableVisible,
    displayTable
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout tittle="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" 
                onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} 
              clientSelect={selectClient} 
              clientDeleted={deleteClient}
            ></Table>
          </>
        ): (
          <Form 
            client={client}
            clientChanged={saveClient}
            cancel={displayTable}
          />
            
            
        )}
      </Layout>
    </div>
  )
}
