import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Content Usage:</strong> All content on this blog is for informational purposes only. You may share and quote small portions with proper attribution.
        </li>
        <li>
          <strong>User Conduct:</strong> Be respectful in comments. No hate speech, spam, or illegal content. We reserve the right to remove inappropriate comments.
        </li>
        <li>
          <strong>Privacy:</strong> We respect your privacy. Read our Privacy Policy to understand how we collect and use data.
        </li>
        <li>
          <strong>Accuracy:</strong> We strive for accuracy but cannot guarantee it. Use information at your own risk.
        </li>
        <li>
          <strong>External Links:</strong> We're not responsible for content on linked external sites.
        </li>
        <li>
          <strong>Intellectual Property:</strong> Our content is copyrighted. Don't reproduce it without permission.
        </li>
        <li>
          <strong>Account Security:</strong> If you create an account, you're responsible for maintaining its security.
        </li>
        <li>
          <strong>Changes to Terms:</strong> We may update these terms. Check back regularly.
        </li>
        <li>
          <strong>Termination:</strong> We reserve the right to terminate accounts that violate these terms.
        </li>
        <li>
          <strong>Contact:</strong> Questions about these terms? Contact us at [Your Contact Information].
        </li>
      </ol>
    </div>
  );
};

export default TermsAndConditions;