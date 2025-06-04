import { NewsArticle } from "@/lib/types";

const NewsSection: React.FC = () => {
  const articles: NewsArticle[] = [
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '📚',
      readTime: '5 min read'
    },
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '🎓',
      readTime: '5 min read'
    },
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '💡',
      readTime: '5 min read'
    },
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '🔬',
      readTime: '5 min read'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest News</h2>
          <p className="text-gray-600">
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-4xl">{article.image}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-[#5B7AFF] font-semibold hover:text-blue-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;