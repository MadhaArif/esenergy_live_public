import Calculator from '@/views/Calculator';

export const metadata = {
  title: 'Solar Savings Calculator',
  description:
    'Estimate your recommended solar system size, monthly savings, and payback period with the ES Energy solar calculator.',
};

export default function Page() {
  return <Calculator />;
}
