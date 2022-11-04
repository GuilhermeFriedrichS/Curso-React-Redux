import Client from "../core/Client";

interface TableProps {
    clients: Client[] 
}

export default function TableProps(props: TableProps){
    function rederizarCabecalho(){
        return(
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function rederizarDados(){
        return props.clients?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.name}</td>
                    <td>{cliente.age}</td>
                </tr>
            )
        })
    }

    return(
        <table>
            <thead>
                {rederizarCabecalho()}
            </thead>
            <tbody>
                {rederizarDados()}
            </tbody>
        </table>
    )
}