import { useState } from "react";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#5B7AFF] to-[#7B5AFF] rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <div className="text-6xl mb-6">👩‍🔧</div>
            </div>
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Subscribe to our newsletter to get updates to our latest collections
              </h2>
              <p className="text-blue-100 mb-8">
                Get 20% off on your first order just by subscribing to our newsletter
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-white text-[#5B7AFF] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-4">
                You will be able to unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;