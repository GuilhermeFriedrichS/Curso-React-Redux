import Layout from '../components/Layout'

export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return (
        <Layout titulo="Contéudo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}