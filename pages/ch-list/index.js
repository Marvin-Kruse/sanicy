import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Blackout from '../../components/blackout'
import Router from "next/router";
import axios from 'axios';
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/checkout_header";
function Dashboardhome({ data }) {
    const { data: session, status } = useSession()
    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/");
    }, [status]);
    const onClick = (e, id) => {
        Router.push('/checkout/' + id)
    }
    return (
        <Blackout>
            <Header />
            <Head>
                <title>Sanicy - Dashboard</title>
            </Head>
            <div className="row">
                <div className="col-md-5 mx-auto">
                    {data.map((product) => (
                        <div key={product.id} onClick={(event) => onClick(event, product.serverid)} className="card mb-3 items" data-value={product.servername}>
                            <div className="row no-gutters">
                                <div className="col-md-4">

                                    <Image src={product.image} className="card-img" alt="Product Image" height={128} width={128} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.servername}</h5>
                                        <p className="card-text">{product.serverdescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Blackout>
    )
}

export async function getServerSideProps(ctx) {
    const ns = await axios.get('https://api.sanicy.de/api/v2/server/')
    const data = ns.data
    return {
        props: { data },
    }
}

export default Dashboardhome