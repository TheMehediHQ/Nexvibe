import CareersSection from "./CareersSection";
import CtaBanner from "./CtaBanner";
import FilterBar from "./FilterBar";
import JobListings from "./JobListings";

export default function CareersPage() {
  return (
    <div className="space-y-10 pb-10">
      
      <CareersSection />
      <FilterBar />
      <JobListings/>
      <CtaBanner/>
    </div>
  );
}