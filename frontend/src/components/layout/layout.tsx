import HeroPage from '@/pages/heroPage';
import SecondPage from '@/pages/secondSection';
import Footer from '@/components/layout/footer';

export default function layout() {
  return (
    <div className="bg-white">
      <HeroPage />
      <SecondPage />
      <Footer />
    </div>
  );
}
