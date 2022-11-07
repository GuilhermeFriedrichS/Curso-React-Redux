import { useEffect, useState } from "react"
import CollectionClient from "../backend/db/CollectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClients() {
    const repo: ClientRepository = new CollectionClient()

    const {tableVisible, displayForm, displayTable} = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.empty())
    const [clients, setClients] = useState<Client[]> ([])

    useEffect(getAll, [])

    function getAll(){
    repo.getAll().then(clients => {
        setClients(clients)
        displayTable()
    })
    }

    function selectClient(client: Client){
        setClient(client)
        displayForm()
    }

    async function deleteClient(client: Client){
        await repo.delete(client)
        getAll()
    }

    async function saveClient(client: Client){
        await repo.save(client)
        getAll()
    }

    function newClient(){
        setClient(Client.empty())
        displayForm()
    }

    return{
        client,
        clients,
        newClient,
        saveClient,
        deleteClient,
        selectClient,
        getAll,
        displayTable,
        tableVisible,
    }
}