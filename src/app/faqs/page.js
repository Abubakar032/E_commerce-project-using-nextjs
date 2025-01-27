'use client'
import React, { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, and cash on delivery (where applicable).",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'My Orders' section. Alternatively, use the tracking number provided in your confirmation email on our shipping partner's website.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a hassle-free return policy within 30 days of purchase. Items must be unused, in their original packaging, and accompanied by the receipt. Visit our Returns & Refunds page for more information.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship internationally to select countries. Shipping fees and delivery times vary depending on the destination. Please check our Shipping Information page for details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@ecommerce.com, or by calling our hotline at +1 800 123 4567. Our team is available Monday to Friday, 9 AM to 5 PM.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Orders can be canceled or modified within 1 hour of placement. Please contact our customer support team immediately for assistance.",
    },
    {
      question: "What discounts or promotions are available?",
      answer:
        "We frequently offer discounts and promotions. Subscribe to our newsletter or follow us on social media to stay updated on the latest deals.",
    },
    {
      question: "Are my payments secure?",
      answer:
        "Yes, we use advanced encryption and secure payment gateways to ensure your payment information is safe and secure.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sectionlayout px-5 z-10">
      <div className="pb-8 mt-10">
        <h1
          className="font-bold mb-10 text-center"
          style={{ fontSize: "clamp(32px,2.5vw,50px)" }}
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 10}`}
            >
              <div
                className={`flex justify-between hover:bg-blue-600 hover:text-black transition-all ease-in-out duration-300 items-center p-4 cursor-pointer ${
                  activeIndex === index
                    ? "text-black bg-blue-600 font-semibold"
                    : "text-blue-600 bg-white"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className="text-3xl">{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-fit p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
