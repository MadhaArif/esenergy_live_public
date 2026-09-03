import Link from 'next/link';

export default function SolarCalculatorPromo() {
  return (
    <section className="calculator-promo-section" aria-labelledby="calculator-promo-heading">
      <div className="container">
        <div className="calculator-promo-card calculator-promo-premium">
          <p className="calculator-promo-eyebrow">Solar calculator</p>
          <h2 id="calculator-promo-heading" className="calculator-promo-heading">
            Check how much you could save
          </h2>
          <p className="calculator-promo-text">
            Enter your monthly electricity bill to get a rough system size and savings estimate.
            Our team can then review your site in detail.
          </p>
          <Link href="/calculator" className="calculator-promo-btn">
            Open calculator
          </Link>
        </div>
      </div>
    </section>
  );
}
