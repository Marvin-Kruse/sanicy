import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Blackout from '../../components/blackout'
import Router from "next/router";
import Headt from "../../components/Head";
import Header from "../../components/checkout_header";
import Head from "next/head";
import Dashsidebar from "../../components/dashsidebar";
function Dashboardhome({ data }) {
    const { data: session, status } = useSession()
    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/");
    }, [status]);

    return (
        <Blackout>
            <Header />
            <Head>
                <title>Sanicy - Dashboard</title>
            </Head>
            <Dashsidebar/>
        </Blackout>
    )
}

export async function getServerSideProps(ctx) {
    const data = {}
    return {
        props: { data },
    }
}

export default Dashboardhome