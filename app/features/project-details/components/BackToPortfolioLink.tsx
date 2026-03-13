'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function BackToPortfolioLink() {
  return (
    <div className="backSection sharedBackSection">
      <Link href="/portfolio" className="sharedBackLink group cursor-pointer">
        <FaArrowLeft
          size={14}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
        <span>Back to Portfolio</span>
      </Link>
    </div>
  );
}
