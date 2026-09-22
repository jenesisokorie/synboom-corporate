export default function PrivacyPolicy() {
  return (
    <div className="py-24 px-4 container mx-auto max-w-3xl prose prose-slate">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Synboom Limited Master Privacy Policy
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Effective Date: September 7, 2026
      </p>

      <div className="space-y-6 text-slate-700">
        <p>
          Welcome to Synboom Limited. We respect your privacy and are committed
          to protecting your personal data. This Master Privacy Policy explains
          how we collect, use, and safeguard your information across our
          corporate website and all subsidiary products and applications.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 border-b pb-2">
          Part 1: General Corporate Privacy
        </h2>

        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          1.1 Information We Collect
        </h3>
        <p>
          When you visit the Synboom corporate website or contact us directly,
          we may collect your name, email address, and any contents of messages
          you send us for business and support inquiries.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          1.2 Data Retention &amp; Deletion
        </h3>
        <p>
          We retain your data as long as necessary for legitimate business
          purposes. You may request account or data deletion at any time by
          contacting support. Upon verified request, your personal data will be
          permanently purged from our active databases.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 border-b pb-2">
          Part 2: Product-Specific Policies
        </h2>
        <p className="italic text-sm">
          The following clauses apply specifically to users of the designated
          software products.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
          Module A: Specs (Fashion Business Management)
        </h3>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.1 Information Collected in Specs
        </h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Account Information:</strong> Name, email address, username,
            phone number, and profile picture.
          </li>
          <li>
            <strong>Fashion &amp; Measurement Data:</strong> Body measurements,
            design preferences, and order details.
          </li>
          <li>
            <strong>Communication Data:</strong> Chat messages and media shared
            between Clients and Designers within the app.
          </li>
          <li>
            <strong>Device Camera &amp; Photos:</strong> Access is used strictly
            for uploading garment photos, moodboards, and measurement references
            upon your explicit request.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.2 Local Storage &amp; Cloud Syncing
        </h4>
        <p>
          Specs operates on an offline-first architecture powered by the Syncore
          Engine.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Local Storage:</strong> Your data is initially stored
            locally on your device using encrypted databases.
          </li>
          <li>
            <strong>Cloud Sync:</strong> If you are an active subscriber
            (Standard/Business tier) or a Client, your data is securely synced
            to our cloud servers to provide cross-device access and backup.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.3 Biometric &amp; Security Data
        </h4>
        <p>
          If you enable Biometric Authentication (TouchID/FaceID) or a Security
          PIN to lock the app, this data is processed and stored exclusively on
          your local device. Synboom Limited does not transmit, collect, or
          store your PINs or biometric signatures on our servers.
        </p>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.4 Data Sharing within Specs
        </h4>
        <p>
          We do not sell your personal data. If you are a Client, your body
          measurements and order requirements are shared exclusively with the
          Designer(s) you explicitly connect with. If a Designer downgrades
          their workspace, client connections may be severed to protect client
          data integrity.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 border-b pb-2">
          Part 3: Contact Us
        </h2>
        <p>
          If you have any questions regarding this Privacy Policy or wish to
          exercise your data rights, please contact us at{" "}
          <code>support@synboomlimited.com</code>.
        </p>
      </div>
    </div>
  );
}
