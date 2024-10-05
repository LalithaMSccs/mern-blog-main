import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Information Collection:</strong> We collect information you provide directly (e.g., when commenting or subscribing) and automatically (e.g., through cookies).
        </li>
        <li>
          <strong>Use of Information:</strong> We use your information to improve our blog, personalize your experience, and communicate with you if you've opted in.
        </li>
        <li>
          <strong>Data Protection:</strong> We implement security measures to protect your data but cannot guarantee absolute security.
        </li>
        <li>
          <strong>Cookies:</strong> We use cookies to enhance your browsing experience. You can adjust your browser settings to refuse cookies.
        </li>
        <li>
          <strong>Third-Party Links:</strong> Our blog may contain links to third-party sites. We're not responsible for their privacy practices.
        </li>
        <li>
          <strong>Data Sharing:</strong> We don't sell your personal data. We may share data with service providers who help us operate our blog.
        </li>
        <li>
          <strong>User Rights:</strong> You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
        </li>
        <li>
          <strong>Children's Privacy:</strong> Our blog is not intended for children under 13. We don't knowingly collect data from children.
        </li>
        <li>
          <strong>Changes to Policy:</strong> We may update this policy. Check back for changes. Continued use of our blog after changes means you accept the updated policy.
        </li>
        <li>
          <strong>Contact Us:</strong> For questions about this privacy policy, contact us at [Your Contact Email].
        </li>
      </ol>
    </div>
  );
};

export default PrivacyPolicy;