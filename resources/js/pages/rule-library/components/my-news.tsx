import { Link } from "@inertiajs/react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const newsItems = [
   {
    id: 1,
    name: "Becoming good at reading",
    short_decription: "Tips and strategies to improve your reading skills effectively.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=350&q=80",
  },
  {
    id: 2,
    name: "Cambodia Book Fair",
    short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=350&q=80",
  },
  {
    id: 3,
    name: "Cambodia to Make E-Invoicing Mandatory Next Year",
    short_decription: "Important updates on new e-invoicing regulations coming soon.",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=350&q=80",
  },    
   {
    id: 1,
    name: "Becoming good at reading",
    short_decription: "Tips and strategies to improve your reading skills effectively.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=350&q=80",
  },
  {
    id: 2,
    name: "Cambodia Book Fair",
    short_decription: "Discover the latest books and events at Cambodia's annual book fair.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=350&q=80",
  },
  {
    id: 3,
    name: "Cambodia to Make E-Invoicing Mandatory Next Year",
    short_decription: "Important updates on new e-invoicing regulations coming soon.",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=350&q=80",
  },
];

const MyNews = () => {
  return (
    <div className="max-w-screen-2xl lg:px-20 container mx-auto px-3 my-16">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black my-5 text-center tracking-wide 
        after:content-[''] after:block after:w-12 after:h-1 after:bg-red-500 after:mx-auto after:mt-2 
        after:transition-all after:duration-300 hover:after:w-16 animate-bounce">
        News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Link href={`/news/${item.id}`} key={item.id} className="flex justify-center">
            <CardContainer className="inter-var w-full h-full">
              <CardBody className="bg-gray-50 w-full h-full flex flex-col justify-between relative group/card 
                dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
                border-black/[0.1] rounded-xl p-6 border">
                <div>
                  <CardItem translateZ="50" className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-black dark:text-white">
                    {item.name}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-neutral-600 line-clamp-2 text-[14px] mt-2 dark:text-neutral-300">
                    {item.short_decription}
                  </CardItem>
                </div>
                <CardItem translateZ="100" className="w-full mt-4 aspect-[16/9]">
                  <img
                    src={item.image}
                    height={350}
                    width={350}
                    className="aspect-[16/9] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={item.name}
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-2">
                  <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl hover:underline hover:underline-offset-4 text-blue-500 text-[14px] font-bold">
                    Read More
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyNews;
