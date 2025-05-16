import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useGetFaqBySlugQuery } from "../../Faq/faqListApi";
import FaqSkeleton from "../../../components/FaqSkeleton";

const FaqDetails = () => {
  const { slug } = useParams();
  // console.log(slug);
  const [singlePost, setSinglePost] = useState({});
  const {
    data: singleBlog,
    isSingleBlogLoading,
    error: singleBlogError,
  } = useGetFaqBySlugQuery(slug);
  // console.log(singleBlog)
  useEffect(() => {
    if (singleBlog?.data) {
      setSinglePost(singleBlog?.data);
    }
  }, [singleBlog]);
  if (isSingleBlogLoading) {
    return <FaqSkeleton />;
  }
  return (
    <div className="min-h-[69vh] bg-white pt-20">
       <Helmet>
        <title>{singlePost?.faqQuestion | "Cashooz | FAQ"}</title>
        <meta name="description" content="FAQ
         | Cashooz" />
        <link
          rel="canonical"
          href={`https://www.cashooz.com/faq/${singlePost?.slug}`}
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-3 md:px-0">
        <h1 className="flex justify-between items-center w-full text-lg text-left font-medium text-gray-800 shadow-sm shadow-green-200 p-3 rounded-md">
          {singlePost?.faqQuestion}
        </h1>
        <div className="text-base text-gray-600 mt-2 p-4 shadow-sm shadow-green-200 p-3 rounded-md">
          <div dangerouslySetInnerHTML={{ __html: singlePost?.faqAnswer }} />
        </div>
      </div>
    </div>
  );
};

export default FaqDetails;
