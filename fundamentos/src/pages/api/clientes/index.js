export default function handler(req, res){
    if(req.method === "GET"){
        handleGet(req, res)
    } else{
        res.status(405).send()
    }
}

function handleGet(req, res){
    const codigo = req.query.codigo
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        emai: `Maria@gmail.com`
    })
}