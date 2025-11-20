export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Password to YouTube Automation',
    description: 'Learn how to grow and monetize your YouTube channel without showing your face or using your voice. Complete masterclass with 15 modules covering everything from niche selection to monetization.',
    provider: {
      '@type': 'Person',
      name: 'Atem Formin',
      alternateName: 'Formin Spectacular',
    },
    courseCode: 'YOUTUBE-AUTOMATION-2025',
    educationalLevel: 'Beginner to Advanced',
    numberOfCredits: '15 Modules',
    offers: {
      '@type': 'Offer',
      price: '200',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://wa.me/237683406758',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '100+',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

