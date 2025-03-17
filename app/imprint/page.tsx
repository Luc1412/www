import env from "@/lib/env"
import Link from "next/link"

export default function Imprint() {
  return (
    <div className="min-h-screen bg-main-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-accent-yellow mb-8">Imprint</h1>
        <div className="prose prose-invert">
          <h2 className="text-3xl">Information according to § 5 DDG</h2>
          <p>
            Lucas Hardt<br />
            [Your Street Address]<br />
            [Your City, Postal Code]<br />
            Germany
          </p>
          <h2 className="text-3xl pt-5">Represented by:</h2>
          <p>
            Lucas Hardt
          </p>
          <h2 className="text-3xl pt-5">Contact</h2>
          <p>
            Phone: [Your Phone Number]
            <br />
            Email:{" "}
            <Link href={`mailto:${env.CONTACT_EMAIL}`} className="text-accent-yellow hover:underline">
              {env.CONTACT_EMAIL}
            </Link>
          </p>
          <h2 className="text-3xl pt-5">VAT ID</h2>
          <p>
            VAT identification number according to § 27a of Value Added Tax Act: DE360110869
          </p>
          <h2 className="text-3xl pt-5">Disclaimer</h2>
          <h3 className="text-2xl pt-5">Liability for Content</h3>
          <p>
            The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents&apos;
            accuracy, completeness, or topicality. According to statutory provisions, we are furthermore responsible for
            our own content on these web pages. In this context, please note that we are accordingly not obliged to
            monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing
            to illegal activity. Our obligations to remove or block the use of information under generally applicable
            laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>
          <h3 className="text-2xl pt-5">Liability for Links</h3>
          <p>
            Responsibility for the content of external links (to web pages of third parties) lies solely with the
            operators of the linked pages. No violations were evident to us at the time of linking. Should any legal
            infringement become known to us, we will remove the respective link immediately.
          </p>
          <h3 className="text-2xl pt-5">Copyright</h3>
          <p>
            Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§
            44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to
            copyright protection on our web pages requires the prior consent of the respective owner of the rights.
            Individual reproductions of a work are allowed only for private use, so must not serve either directly or
            indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright
            law).
          </p>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-accent-yellow hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
