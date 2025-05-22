const MyFooter = () => {
  const websiteInfos = {
    address: "123 Main St, Phnom Penh, Cambodia",
    phone: "+855 12 345 678",
    hours: "Mon-Fri 8:00 AM - 5:00 PM",
    closed: "Sunday",
  };

  const socialMedia = [
  {
    id: 1,
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg",
    name: "Facebook",
    alt: "Facebook",
    link: "https://facebook.com",
    hoverColor: "hover:bg-[#1877F2]", // Facebook Blue
  },
  {
    id: 2,
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/telegram.svg",
    name: "Telegram",
    alt: "Telegram",
    link: "https://telegram.org",
    hoverColor: "hover:bg-[#0088cc]", // Telegram Blue
  },
  {
    id: 3,
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/youtube.svg",
    name: "YouTube",
    alt: "YouTube",
    link: "https://youtube.com",
    hoverColor: "hover:bg-[#FF0000]", // YouTube Red
  },
  {
    id: 4,
    image: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tiktok.svg",
    name: "TikTok",
    alt: "TikTok",
    link: "https://www.tiktok.com",
    hoverColor: "hover:bg-[#010101]", // TikTok Black
  },
];


  const companyName = "Powered By:";

  return (
    <footer className="bg-[#393838] text-gray-300 py-12">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 xl:px-16">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center md:text-left items-start">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/assets/rule-library/images/rule-logo.png"
              alt="Rule Library Logo"
              className="h-60 w-auto object-contain"
            />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Information</h3>
            <ul className="text-gray-400 space-y-2 text-sm leading-relaxed">
              <li>{websiteInfos.address}</li>
              <li><span className="font-medium">Phone:</span> {websiteInfos.phone}</li>
              <li><span className="font-medium">Hours:</span> {websiteInfos.hours}</li>
              <li className="text-red-400 font-semibold">{websiteInfos.closed}: CLOSED</li>
            </ul>
             <hr className="w-20 mt-4 mx-auto md:mx-0 border-t border-white" />
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-2xl font-semibold text-white mb-4">Social Media</h3>
            <div className="flex gap-6">
              {socialMedia.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  className="group flex flex-col items-center space-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center shadow-md transition-all duration-300 ${item.hoverColor}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-8 h-8 invert transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-4 text-center xl:text-end text-sm text-gray-400">
          <p>
            {companyName}{" "}
            <a
              href="https://alphalib.org/"
              className="hover:underline hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alphalib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
