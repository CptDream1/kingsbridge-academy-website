import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyKCASection from "@/components/home/WhyKCASection";
import CourseOverviewSection from "@/components/home/CourseOverviewSection";
import SkillsDevelopedSection from "@/components/home/SkillsDevelopedSection";
import AssessmentSection from "@/components/home/AssessmentSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyKCASection />
      <CourseOverviewSection />
      <SkillsDevelopedSection />
      <AssessmentSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
