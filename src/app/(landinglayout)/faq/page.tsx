"use client";
import { useViewFaqQuery } from "@/redux/api/faqApi/faqListApi";
import React, { useEffect, useState } from "react";


export default function Faq() {
  const [allfaq, setAllFaq] = useState([]);
  const [allFaqCategory, setAllFaqCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const { data, isLoading: isFaqLoading , error} = useViewFaqQuery();
  console.log("FAQ Data:", data, "Loading:", isFaqLoading, "Error:", error);



  return (
    <div className="bg-white">
      
    </div>
  );
}
