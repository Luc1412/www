import env from "@/lib/env"
import Link from "next/link"

export default function PrivacyPolicy() {
  const lastUpdated = new Date(2025, 1, 16)
  return (
    <div className="min-h-screen bg-main-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bold text-accent-yellow mb-4">Privacy Policy</h1>
        <div className="prose prose-invert">
          <p className="mb-5">Last updated: {lastUpdated.toLocaleDateString()}</p>
          <p>
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit my
            portfolio website.
          </p>
          <h6>Personal Information We Collect</h6>
          <p>
            We do not directly collect any personal information on this website. However, we use third-party services
            that may collect information as described below.
          </p>
          <h6>Third-Party Services</h6>
          <p>We use the following third-party services, which may collect information about you:</p>
          <ul>
            <li>Google Analytics: To analyze website traffic and improve our service</li>
            <li>Vercel: To host and deploy our website</li>
          </ul>
          <h6>How We Use Your Information</h6>
          <p>
            We use the information collected by third-party services to analyze website traffic, improve our website,
            and understand how visitors interact with our content.
          </p>
          <h6>Changes to This Privacy Policy</h6>
          <p>
            We may update this privacy policy from time to time to reflect changes in our practices or for other
            operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
          </p>
          <h6>Contact Us</h6>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href={`mailto:${env.CONTACT_EMAIL}`} className="text-accent-yellow hover:underline">
              {env.CONTACT_EMAIL}
            </a>
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

