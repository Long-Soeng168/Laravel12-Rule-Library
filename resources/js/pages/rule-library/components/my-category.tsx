
const MyCategory = () => {
  return (
    <div className="max-w-screen-2xl my-10 mx-auto px-2 sm:px-10 lg:px-20">
      <div className="flex">
        <h2
          className="text-xl md:text-2xl text-center lg:text-2xl text-black my-5 tracking-wide 
          after:content-[''] after:block after:w-24 md:after:w-32 after:h-1 after:bg-red-500 
          after:mx-auto after:mt-2 after:transition-all after:duration-300 
          hover:after:w-28 md:hover:after:w-36"
        >
          Our Databases
        </h2>
      </div>

      <div className="flex p-2 overflow-x-auto bg-slate-400 rounded-lg scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
        {/* Static database items */}
        {[
          { name: "Videos", image: "/assets/demo-images/rule-images/image2.webp" },
          { name: "E-Publications", image: "/assets/demo-images/rule-images/image3.webp" },
          { name: "Bulletins", image: "/assets/demo-images/rule-images/image2.webp" },
          { name: "Sociology", image: "/assets/demo-images/rule-images/image3.webp" },
          { name: "Books", image: "/assets/demo-images/rule-images/image2.webp" },
          { name: "Images", image: "/assets/demo-images/rule-images/image3.webp" },
          { name: "Images", image: "/assets/demo-images/rule-images/image2.webp" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[20%] md:w-[15%] min-w-[100px] px-2 hover:bg-white py-4 rounded-md hover:text-black text-white"
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={item.image}
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] mb-2 object-cover"
                alt={item.name}
              />
              <p className="text-center text-[12px] md:text-sm">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyCategory
