import React, { useEffect, useState } from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import Link from "next/link";
import FaqSkeleton from "../skeleton/FaqSkeletion";
import {
  useViewFaqQuery,
} from "@/redux/api/faqApi/faqListApi";

export default function Faq() {
  const [allfaq, setAllFaq] = useState([]);
  const [allFaqCategory, setAllFaqCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const { data, isLoading: isFaqLoading } = useViewFaqQuery();
  console.log("FAQ Data:", data, "Loading:", isLoading, "Error:", error);



  return (
    <div className="bg-white">
      
    </div>
  );
}
