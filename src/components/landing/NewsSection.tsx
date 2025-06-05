import { NewsArticle } from "@/lib/types";
import Image from 'next/image'
const NewsSection: React.FC = () => {
  const articles: NewsArticle[] = [
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '/landing/news/1.png',
      readTime: '5 min read'
    },
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '/landing/news/1.png',
      readTime: '5 min read'
    },
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '/landing/news/2.png',
      readTime: '5 min read'
    },
    {
      title: 'The Surprising Reason College Tuition Is Crazy Expensive',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero...',
      image: '/landing/news/1.png',
      readTime: '5 min read'
    }
  ];

  return (
    <section className="pt-20 mb-28">
      <div className="max-w-[1139px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest News</h2>
          <p className="text-gray-600">
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:p-0 p-5">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-2 gap-4 flex xl:flex-row flex-col xl:max-w-[600px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl ">
                 <div className="relative sm:w-full h-full">
                    <Image
                      src={article.image}
                      alt={"Hero cleaning equipment"}
                      height={245}
                      width={291}
                      objectFit="cover"
                      className=" rounded-l-[12px] w-full !xl:w-relative h-full"
                  />
                  </div>
              <div className="w-full">
                <h3 className="font-bold text-[22px] text-gray-900 mb-2 font-dm-sans">{article.title}</h3>
                <p className="text-gray-600 mb-2 text-[15px] font-lato">{article.excerpt}</p>
                <button className="text-[#5B7AFF] font-dm-sans font-semibold hover:text-blue-600 transition-colors">
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