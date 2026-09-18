export default function TermsOfService() {
  return (
    <div className="py-24 px-4 container mx-auto max-w-3xl prose prose-slate">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Synboom Limited Master Terms of Service
      </h1>
      <p className="text-sm text-slate-500 mb-8">
        Effective Date: September 7, 2026
      </p>

      <div className="space-y-6 text-slate-700">
        <p>
          These Master Terms of Service (&quot;Terms&quot;) govern your access
          to and use of websites, applications, and services operated by Synboom
          Limited (&quot;Synboom&quot;, &quot;we&quot;, &quot;us&quot;, or
          &quot;our&quot;).
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 border-b pb-2">
          Part 1: General Corporate Terms
        </h2>

        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          1.1 Acceptance of Terms
        </h3>
        <p>
          By creating an account, accessing, or using any Synboom Limited
          service, you agree to be bound by these Terms. If you do not agree,
          you may not use our platforms.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          1.2 User Conduct &amp; Intellectual Property
        </h3>
        <p>
          You retain all rights to the designs, measurements, and content you
          upload. You agree not to upload harmful code, harass other users, or
          use our platforms for unlawful activities. All underlying software,
          platforms, and branding remain the intellectual property of Synboom
          Limited. We reserve the right to suspend or terminate accounts
          violating these terms.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">
          1.3 Limitation of Liability
        </h3>
        <p>
          To the maximum extent permitted by law, Synboom Limited shall not be
          liable for any indirect, incidental, or consequential damages
          resulting from the use or inability to use our services, including
          production delays, measurement errors, or lost profits.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4 border-b pb-2">
          Part 2: Product-Specific Terms
        </h2>
        <p className="italic text-sm">
          The following clauses apply specifically to users of the designated
          software products.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
          Module A: Specs (Fashion Business Management)
        </h3>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.1 Account Roles
        </h4>
        <p>Specs provides functionalities based on your selected base role:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Client Mode:</strong> Intended for individuals seeking
            custom fashion services. Clients may use the core directory and
            communication tools free of charge.
          </li>
          <li>
            <strong>Designer Mode:</strong> Intended for fashion professionals
            managing workspaces, orders, and production pipelines.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.2 Subscriptions and Billing
        </h4>
        <p>
          While the app functions offline for all users, Designers require an
          active subscription for cloud synchronization and advanced business
          features.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Free Tier:</strong> Limited to offline, local-only usage.
          </li>
          <li>
            <strong>Standard Tier:</strong> Enables cloud backup and
            synchronization for solo designers.
          </li>
          <li>
            <strong>Business &amp; Team Seat Tiers:</strong> Enables
            multi-designer workspaces, advanced team synchronization, and
            assigned tailoring roles.
          </li>
        </ul>
        <p>
          All subscription payments are non-refundable unless required by
          applicable law.
        </p>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.3 Data Synchronization (Syncore Engine)
        </h4>
        <p>
          Our offline-first sync engine requires a stable internet connection
          and an active subscription (for Designers) to push data to the cloud.
          Synboom Limited is not liable for data loss occurring due to app
          deletion while the device is in an unsynced, offline state.
        </p>

        <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">
          A.4 Role Switching Limitations
        </h4>
        <p>
          If you operate as a Designer, you cannot switch your base role back to
          a Client while you maintain active workspace connections with
          customers. You must first sever these connections and downgrade any
          active Business profiles to maintain data integrity.
        </p>
      </div>
    </div>
  );
}
