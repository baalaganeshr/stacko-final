import { useEffect } from "react";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import CourseShowcase from "@/components/CourseShowcase";
import StatsShowcase from "@/components/StatsShowcase";
import SuccessStories from "@/components/SuccessStories";
import ServicesHighlight from "@/components/ServicesHighlight";
import TeamShowcase from "@/components/TeamShowcase";
import BlogHighlight from "@/components/BlogHighlight";
import CTASection from "@/components/CTASection";
import { useSEO } from "@/hooks/useSEO";
import { useConversionTracking } from "@/hooks/useAnalytics";

const Home = () => {
  // Professional SEO setup
  useSEO({
    title: "Professional Development Platform | STACKO",
    description: "Master modern technologies with expert-led courses, professional development programs, and hands-on projects. Join thousands of developers advancing their careers with STACKO.",
    keywords: "web development, programming courses, professional development, coding bootcamp, tech skills, STACKO",
    canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'http://localhost:5173'}/`,
    ogImage: `${import.meta.env.VITE_SITE_URL || 'http://localhost:5173'}/social-share.jpg`,
    ogType: 'website',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "STACKO",
      "url": import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
      "description": "Professional development platform for modern technologies",
      "foundingDate": "2024",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "STACKO Courses",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "Modern Web Development",
            "description": "Comprehensive web development training"
          }
        ]
      }
    }
  });

  const { trackEngagement } = useConversionTracking();

  // Track page engagement
  useEffect(() => {
    trackEngagement('page_view', 'Home Page');
  }, [trackEngagement]);

  return (
    <div className="relative">
      {/* Full-width Hero section */}
      <Hero />
      
      {/* Trust indicators and social proof */}
      <TrustIndicators />
      
      {/* Main content with improved spacing */}
      <div className="relative">
        {/* Floating background shapes for dynamic elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-shape absolute -top-40 -right-20 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl" />
          <div className="floating-shape absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-600/15 to-transparent rounded-full blur-2xl" style={{ animationDelay: '-5s' }} />
          <div className="floating-shape absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-xl" style={{ animationDelay: '-10s' }} />
        </div>

        {/* Course showcase with asymmetrical layout */}
        <section className="section-padding">
          <CourseShowcase />
        </section>

        {/* Statistics with wider spread */}
        <section className="section-padding bg-gradient-to-r from-transparent via-purple-950/10 to-transparent">
          <StatsShowcase />
        </section>

        {/* Success stories with staggered layout */}
        <section className="section-padding">
          <SuccessStories />
        </section>

        {/* Services highlight with diagonal elements */}
        <section className="section-padding relative">
          <div className="absolute inset-0 diagonal-mask bg-gradient-to-br from-purple-900/5 to-transparent" />
          <ServicesHighlight />
        </section>

        {/* Team showcase with organic spacing */}
        <section className="section-padding">
          <TeamShowcase />
        </section>

        {/* Blog highlight */}
        <section className="section-padding bg-gradient-to-l from-transparent via-indigo-950/8 to-transparent">
          <BlogHighlight />
        </section>

        {/* CTA section with full-width treatment */}
        <section className="section-padding">
          <CTASection />
        </section>
      </div>
    </div>
  );
};

export default Home;
