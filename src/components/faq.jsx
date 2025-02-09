import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is ShieldCrypt?",
      answer:
        "ShieldCrypt is a specialised service provider that offers a combination of technical expertise and legal resources to help individuals and businesses recover lost, stolen, or inaccessible cryptocurrencies and assets. Our team works diligently to trace and recover stolen assets from hacked wallets or scam activities, restore access to lost wallets, and recover funds that were sent to the wrong address.",
    },
    {
      question:
        "Is it possible to recover cryptocurrency lost or stolen due to a scam or fraud?",
      answer:
        "Yes, in many cases it is possible to recover cryptocurrency lost or stolen due to a scam or fraud. Our team has extensive experience in dealing with these types of situations and can help you navigate the process of recovering your assets. We will work with you to document the details of the scam or fraud and gather any necessary evidence to support your case.",
    },
    {
      question:
        "How long does it typically take to recover lost or stolen cryptocurrency?",
      answer:
        "The amount of time it takes to recover lost or stolen cryptocurrency can vary depending on the specific circumstances of your case, however, our team will be able to recover your assets within a few days. Rest assured that our team is committed to working tirelessly on your behalf to get your assets back as quickly as possible.",
    },
    {
      question: "Will my information and assets be kept confidential?",
      answer:
        "At ShieldCrypt, we understand the importance of privacy and security when it comes to assets. We take all necessary precautions to protect your personal and financial information, and our team is composed of experienced professionals who are dedicated to providing you with the highest level of service and support. Your information and assets will be kept strictly confidential throughout the recovery process.",
    },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container faq-containerrr">
      <h1 className="faqhead">Frequently asked questions about us</h1>
      <p>
        Can't find the question you're looking for?{" "}
        <Link to="/contact" style={{ color: "#c23893" }}>
          Contact us
        </Link>
      </p>
      {faqData.map((item, index) => {
        return (
          <div key={index} className="faq-item">
            <div onClick={() => handleToggle(index)} className="faww">
              {item.question} {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            <div
              className={`answer ${activeIndex === index ? "active" : "hide"}`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
