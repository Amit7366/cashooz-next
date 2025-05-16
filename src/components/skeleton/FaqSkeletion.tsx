import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FaqSkeleton = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto min-h-screen mt-16">
        <h1 className="text-2xl font-semibold py-6 text-center">
          <Skeleton width={300} height={28} />
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Skeleton */}
          <div className="w-full md:w-64 bg-white rounded-xl shadow p-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} height={36} className="mb-2 rounded" />
              ))}
          </div>

          {/* FAQ Section Skeleton */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600 flex items-center gap-2">
              <Skeleton width={220} height={24} />
            </h2>

            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border-b last:border-none py-3">
                  <Skeleton width="80%" height={18} />
                  <Skeleton count={2} height={14} style={{ marginTop: 8 }} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSkeleton;
