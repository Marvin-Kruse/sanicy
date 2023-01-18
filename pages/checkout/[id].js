import Header from '../../components/checkout_header'
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Headt from '../../components/Head';
import Head from 'next/head';
import Component from '../../components/check-login';

function Checkout({ data, nsdata }) {

    const [price, setPrice] = useState('0.00')
    const [button, setButton] = useState(0)
    const handleClick = (price, event) => {
        const selectedElements = document.querySelectorAll('.selected');
        selectedElements.forEach(element => element.classList.remove('selected'));
        event.currentTarget.classList.add('selected');
        setPrice(price);
    };
    useEffect(() => {
    }, [price]);

    return (
        <div>
            <Head>
                <title>{nsdata.servername + ` - Checkout`}</title>
            </Head>
            <Header />
            <div className="container mt-5">
                <div className='d-flex justify-content-between'>
                    <h1>Checkout</h1>
                    <h1>{nsdata.servername}</h1>
                </div>

                <hr />
                <div className="row">
                    <div className="col-md-8">
                        <h3>Shipping Information</h3>
                        <br />
                        {data.map((product) => (
                            <div key={product.id} onClick={(event) => handleClick(product.price, event)} className="card mb-3 items" data-value={product.name}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">

                                        <Image src={product.image} className="card-img" alt="Product Image" height={128} width={128} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text"><small className="text-muted">{product.price} $</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <h3>Order Summary</h3>
                        <br />
                        <table className="table">
                            <tbody><tr>
                                <td>Subtotal</td>
                                <td className="text-right">${price}</td>
                            </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong>${price}</strong></td>
                                </tr>
                            </tbody></table>
                        <Component />
                    </div>
                </div>
            </div>

        </div>


    )
}


export async function getServerSideProps(ctx) {
    var id = ctx.query.id;

    const pr = await axios.get('https://api.sanicy.de/api/v2/checkout/' + id);
    const ns = await axios.get('https://api.sanicy.de/api/v2/server/' + id)
    const ns1data = ns.data
    const nsdata = ns1data[0]
    const data = pr.data;
    return {
        props: { data, nsdata },
    }
}

export default Checkout