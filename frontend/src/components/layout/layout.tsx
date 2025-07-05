import HeroPage from '@/pages/heroPage';
import SecondPage from '@/pages/secondSection';
import Footer from '@/components/layout/footer';

export default function layout() {
  return (
    <div className="bg-gray-300">
      <HeroPage />
      <SecondPage />
      <Footer />
    </div>
  );
}
