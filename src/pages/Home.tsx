import Hero from "@/components/Hero";
import CourseShowcase from "@/components/CourseShowcase";
import StatsShowcase from "@/components/StatsShowcase";
import SuccessStories from "@/components/SuccessStories";
import ServicesHighlight from "@/components/ServicesHighlight";
import TeamShowcase from "@/components/TeamShowcase";
import BlogHighlight from "@/components/BlogHighlight";
import CTASection from "@/components/CTASection";

const Home = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-5 pb-24 pt-12 md:px-10">
      <Hero />
      <CourseShowcase />
      <StatsShowcase />
      <SuccessStories />
      <ServicesHighlight />
      <TeamShowcase />
      <BlogHighlight />
      <CTASection />
    </div>
  );
};

export default Home;
