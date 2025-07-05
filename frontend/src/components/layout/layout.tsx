import HeroPage from '@/pages/heroPage';
import SecondPage from '@/pages/secondSection';
export default function layout() {
  return (
    <div className="bg-gray-300">
      <HeroPage />
      <SecondPage />
    </div>
  );
}
