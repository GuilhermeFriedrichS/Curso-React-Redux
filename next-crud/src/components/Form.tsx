import Input from "./input";
import Client from "../core/Client"
import { useState } from "react";
import Button from "./Button";

interface FormProps {
    client: Client
    clientChanged?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps){
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return(
        <div>
            {id ? (
                <Input 
                    readOnly
                    text="Código" 
                    value={id}
                    className="mb-5"
                />    
            ) : false}
            <Input 
                text="Nome" 
                value={name}
                valueChanged={setName}
                className="mb-5"
            />
            <Input 
                text="Idade" 
                type="number" 
                value={age}
                valueChanged={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2" 
                    onClick={() => props.clientChanged?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}