"use client";
import FaqSkeleton from "@/components/skeleton/FaqSkeletion";
import {
  useViewFaqCategoryQuery,
  useViewFaqQuery,
} from "@/redux/api/faqApi/faqListApi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function FaqPage() {
  const [allFaq, setAllFaq] = useState([]);
  const [allFaqCategory, setAllFaqCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { data, isLoading: isFaqLoading } = useViewFaqQuery(undefined);
  const { data: faqCategoryData, isLoading: isFaqCategoryLoading } =
    useViewFaqCategoryQuery(undefined);

  // Flatten and set FAQ data
  useEffect(() => {
    if (data?.data) {
      const flatFaqs = data.data.map((item) => ({
        ...item,
        categoryName: item.faqCategoryName?.faqCategoryName || "Uncategorized",
      }));
      setAllFaq(flatFaqs);
    }
  }, [data]);

  useEffect(() => {
    if (faqCategoryData?.data) {
      setAllFaqCategory(faqCategoryData.data);
      setSelectedCategory(faqCategoryData.data[0]); // Select first by default
    }
  }, [faqCategoryData]);

  // Reset openIndex when category changes
  useEffect(() => {
    setOpenIndex(null);
  }, [selectedCategory]);

  if (isFaqLoading || isFaqCategoryLoading) {
    return <FaqSkeleton />;
  }

  // Group FAQs by category
  const groupedFaqs = allFaq.reduce((acc, item) => {
    const category = item.categoryName;
    if (category) {
      acc[category] = acc[category] || [];
      acc[category].push(item);
    }
    return acc;
  }, {});

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto min-h-screen mt-16">
        <h1 className="text-2xl font-semibold py-6 text-center">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-xl shadow p-4">
            {allFaqCategory.map((cat) => (
              <button
                key={cat._id}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg mb-2 text-sm font-medium ${
                  selectedCategory?._id === cat._id
                    ? "bg-orange-100 text-orange-700"
                    : "hover:bg-gray-100"
                }`}
              >
                <span>*</span>
                {cat.faqCategoryName || "Unnamed"}
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600 flex items-center gap-2">
              <MdOutlineQuestionAnswer />
              {selectedCategory?.faqCategoryName || "FAQ"}
            </h2>

            {groupedFaqs[selectedCategory?.faqCategoryName]?.map(
              (item, index) => (
                <div key={item._id} className="border-b last:border-none py-3">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                    aria-expanded={openIndex === index}
                  >
                    {item.faqQuestion}
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <div className="text-sm text-gray-600 mt-2">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.faqAnswer }}
                      />
                      <Link
                        href={`/faq/${item.faqSlug}`}
                        className="text-sm text-blue-600 mt-2 inline-block"
                      >
                        Read More..
                      </Link>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
