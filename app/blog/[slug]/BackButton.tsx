'use client';
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();

  return (
    <div className="sharedBackSection">
      <button
        onClick={() => router.back()}
        className="sharedBackLink group cursor-pointer border-0 bg-transparent"
        aria-label="Go back to blog"
      >
        <FaArrowLeft
          size={14}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span>Back to Blog</span>
      </button>
    </div>
  );
}
