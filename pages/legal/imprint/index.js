import Head from "next/head"
import Link from "next/link"
import Header from "../../../components/checkout_header"
export default function imprint() {
    return (
        <div>
            <Head>
                <title>Sanicy - Imprint</title>
            </Head>
            <Header />
            <div className="container mt-5">
                <div className='d-flex justify-content-between'>
                </div>
                <h1 class="text-center">Imprint</h1>
                <hr />
                <div>

                    <div ><h1>Imprint</h1><p>Information according to § 5 TMG</p><p>Marvin Kruse<br />
                        Hohenhörnerstarße 7.<br />
                        25725 Schafstedt, Germany <br />
                    </p><p> 
                    <br /><br /><strong>Contact options</strong><br /><br />
                   Email: <Link href='mailto:support@sanicy.xyz'>support@sanicy.xyz</Link>
                      <br /><br /><strong>Liability for links</strong><br /><br />
                        Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.<br /><br /><strong>Privacy</strong><br /><br />
                        Our website can usually be used without providing any personal data. Insofar as personal data (e.g. name, address or e-mail addresses) is collected on our website, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent. <br />
                            We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) can have security gaps. A complete protection of the data against access by third parties is not possible. <br />
                            The use of contact data published as part of the imprint obligation by third parties to send unsolicited advertising and information material is hereby expressly prohibited. The site operators expressly reserve the right to take legal action in the event of unsolicited advertising being sent, such as spam e-mails.<br />
                        </p><br /></div>
                </div>
            </div>
        </div>
    )
}
