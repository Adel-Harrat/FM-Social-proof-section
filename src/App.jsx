import "./App.css";
import patternTopMobile from "./assets/bg-pattern-top-mobile.svg";
import patternBottomMobile from "./assets/bg-pattern-bottom-mobile.svg";
import patternTopDesktop from "./assets/bg-pattern-top-desktop.svg";
import patternBottomDesktop from "./assets/bg-pattern-bottom-desktop.svg";
import star from "./assets/icon-star.svg";
import anneImage from "./assets/image-anne.jpg";
import ireneImage from "./assets/image-irene.jpg";
import coltonImage from "./assets/image-colton.jpg";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const listing = [
  {
    id: 1,
    content: "Rated 5 Stars in Reviews",
    stars: 5,
    cssClass: "md:transform md:-translate-x-20",
  },
  {
    id: 2,
    content: "Rated 5 Stars in Report Guru",
    stars: 5,
    cssClass: "md:transform md:-translate-x-10",
  },
  {
    id: 3,
    content: "Rated 5 Stars in BestTech",
    stars: 5,
    cssClass: "",
  },
];

const reviews = [
  {
    id: 1,
    image: coltonImage,
    name: "Colton Smith ",
    role: "Verified Buyer",
    content:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    cssClass: "",
  },
  {
    id: 2,
    image: ireneImage,
    name: "Irene Roberts ",
    role: "Verified Buyer",
    content:
      "Customer service is always excellent and very quick turn around Completely delighted with the simplicity of the purchase and the speed of delivery.",
    cssClass: "md:transform md:translate-y-5",
  },
  {
    id: 3,
    image: anneImage,
    name: "Anne Wallace",
    role: "Verified Buyer",
    content:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    cssClass: "md:transform md:translate-y-10",
  },
];

const App = () => {
  return (
    <div className="bg-neutral-white relative min-h-screen grid place-items-center font-primary">
      <main className="mx-5 max-w-5xl">
        <section className="relative z-20">
          {/* Top content */}
          <div className="md:flex md:justify-between md:items-center">
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-[2.5rem] font-bold text-primary-dark mx-8 md:mx-0 leading-8 mt-24 md:mt-0 md:text-[3.25rem] md:leading-10 md:max-w-sm">
                10,000+ of our users love our products.
              </h1>
              <p className="text-neutral-dark mt-5 mx-3 md:mx-0 text-lg md:max-w-md">
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
              </p>
            </div>

            <div className="mt-8 md:mt-0 md:flex-1 space-y-5">
              {listing.map((item) => (
                <aside
                  key={item.id}
                  className={`bg-neutral-light flex flex-col md:flex-row space-y-2 p-2 rounded-lg md:justify-center md:space-x-5 md:w-96 ml-auto ${item.cssClass}`}
                >
                  <div className="flex items-center justify-center space-x-2 mt-1">
                    {/* eslint-disable-next-line no-unused-vars */}
                    {Array.from({ length: item.stars }).map((_, index) => (
                      <img key={Math.random()} src={star} alt="star icon" />
                    ))}
                  </div>
                  <p className="text-center font-bold text-primary-dark pb-1">
                    {item.content}
                  </p>
                </aside>
              ))}
            </div>
          </div>

          {/* Bottom content */}
          <div className="flex flex-col space-y-5 md:space-y-0 mb-20 md:mb-0 mt-16 md:flex md:space-x-5 md:flex-row md:mt-20">
            {reviews.map((review) => (
              <article
                key={review.id}
                className={`bg-primary-dark rounded-lg overflow-hidden p-8 text-white ${review.cssClass}`}
              >
                <div className="flex items-center justify-between space-x-5 mb-8">
                  <img
                    src={review.image}
                    alt={`${review.name}'s image`}
                    className="h-12 w-12 rounded-full"
                  />

                  <div className="flex-1">
                    <h2 className="font-[700]">{review.name}</h2>
                    <h3 className="text-primary-soft font-[500]">
                      {review.role}
                    </h3>
                  </div>
                </div>

                <p className="font-[500]">
                  <sup>
                    <BiSolidQuoteAltLeft className="inline h-2 w-2 mr-0.5" />
                  </sup>
                  {review.content}
                  <sup>
                    <BiSolidQuoteAltRight className="inline h-2 w-2 ml-0.5" />
                  </sup>
                </p>
              </article>
            ))}
          </div>
        </section>

        <aside>
          <img
            src={patternTopMobile}
            alt="top pattern for mobile devices"
            className="absolute top-0 left-0 md:hidden"
          />
          <img
            src={patternBottomMobile}
            alt="bottom pattern for mobile devices"
            className="absolute bottom-0 right-0 md:hidden"
          />
          <img
            src={patternTopDesktop}
            alt="top pattern for desktop devices"
            className="absolute top-0 left-0 hidden md:block"
          />
          <img
            src={patternBottomDesktop}
            alt="bottom pattern for desktop devices"
            className="absolute bottom-0 right-0 hidden md:block"
          />
        </aside>
      </main>
    </div>
  );
};

export default App;
