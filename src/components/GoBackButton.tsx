'use client';

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      <FaArrowLeft /> 
      Go Back
    </button>
  );
}
