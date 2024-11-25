"use client";
import { useState } from "react";
import Button from "../Button";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "How much does StreamVibe cost?",
      answer:
        "You can submit your recipe by signing up and clicking on the 'Submit Recipe' button on your dashboard.",
    },
    {
      question: "What content is available on StreamVibe?",
      answer: "Yes, it is completely free for all users.",
    },
    {
      question: "How can I watch StreamVibe?",
      answer: "Users can save favorite recipes, leave reviews, and more.",
    },
    {
        question: "How do I sign up for StreamVibe?",
        answer: "Users can save favorite recipes, leave reviews, and more.",
      },
      {
        question: "What is the StreamVibe free trial?",
        answer: "Users can save favorite recipes, leave reviews, and more.",
      },
      {
        question: "How do I contact StreamVibe customer support?",
        answer: "Users can save favorite recipes, leave reviews, and more.",
      },
      {
        question: "What are the StreamVibe payment methods?",
        answer: "Users can save favorite recipes, leave reviews, and more.",
      },
  ];

  return (
    <div className="container px-5 md:px-10 mx-auto mt-20">
      <div className="flex max-md:flex-col justify-between space-y-4">
        <div>
          <h2 className="text-3xl max-md:text-2xl text-white font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#999999]">
            Got questions? We`ve got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <div>
          <Button>Ask a Question</Button>
        </div>
      </div>

      <div className="mt-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0F0F0F] p-4 rounded-lg shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center rounded-lg px-3 py-2 text-lg bg-black text-[#E50000]">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                </div>
                <button className="text-gray-500 focus:outline-none">
                  <span className="text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </div>

              {openIndex === index && (
                <div className="mt-2 ml-14 p-4 bg-[#1A1A1A] rounded-lg shadow-lg">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
