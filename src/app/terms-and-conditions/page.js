import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          style={{ fontSize: "clamp(32px,2.5vw,48px)" }}
        >
          Terms and Conditions
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using our website, you agree to be bound by the
              following terms and conditions. Please read them carefully. If
              you do not agree with any part of these terms, you must stop using
              the website immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              2. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify or update these terms at any time
              without prior notice. It is your responsibility to check this page
              periodically for updates. Continued use of the website signifies
              your acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              3. Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your use of our website is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your personal
              information. By using the website, you consent to the practices
              described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              4. Product Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to ensure that all product information on our website is
              accurate. However, we do not warrant that product descriptions,
              pricing, or other content is error-free. In case of errors, we
              reserve the right to correct them and cancel any affected orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              5. Payments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All payments must be made through our secure payment gateways. We
              accept major credit cards, debit cards, and other payment methods
              as listed on the checkout page. Your payment details are securely
              encrypted to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              6. Returns and Refunds
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our return and refund policy allows customers to return products
              within 30 days of purchase, provided they are in their original
              condition. Please visit our Return Policy page for detailed
              instructions on how to process a return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website, including text, images, graphics, and
              logos, is the intellectual property of our company. Unauthorized
              use, reproduction, or distribution of any content is strictly
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are not liable for any direct, indirect, or consequential
              damages arising from your use of our website or products. This
              limitation applies to all claims, whether based on warranty,
              contract, or other legal theories.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              9. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These terms and conditions are governed by the laws of [Your
              Country/Region]. Any disputes arising under these terms shall be
              subject to the exclusive jurisdiction of the courts in [Your
              Country/Region].
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            If you have any questions or concerns regarding these terms,
            please contact us at{" "}
            <a
              href="mailto:athleticedge@yourdomain.com"
              className="text-blue-600 hover:underline"
            >
              athleticedge@yourdomain.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
