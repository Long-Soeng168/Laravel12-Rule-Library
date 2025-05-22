import { Mail, MapPinCheck, PhoneCall } from 'lucide-react';
import Layout from './Layout';

const socialMedia = [
    {
        id: 1,
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/facebook.svg',
        name: 'Facebook',
        alt: 'Facebook',
        link: 'https://facebook.com',
        hoverColor: 'hover:bg-[#1877F2]', // Facebook Blue
    },
    {
        id: 2,
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/telegram.svg',
        name: 'Telegram',
        alt: 'Telegram',
        link: 'https://telegram.org',
        hoverColor: 'hover:bg-[#0088cc]', // Telegram Blue
    },
    {
        id: 3,
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/youtube.svg',
        name: 'YouTube',
        alt: 'YouTube',
        link: 'https://youtube.com',
        hoverColor: 'hover:bg-[#FF0000]', // YouTube Red
    },
    {
        id: 4,
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tiktok.svg',
        name: 'TikTok',
        alt: 'TikTok',
        link: 'https://www.tiktok.com',
        hoverColor: 'hover:bg-[#010101]', // TikTok Black
    },
];

const Contact = () => {
    return (
        <Layout>
            <section className="mb-32">
                {/* Map Section */}
                <div id="map" className="relative h-[480px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.2287095463894!2d104.92220847465353!3d11.535444688663237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310950da5cfa9463%3A0x3755d57e39ef4861!2sRULE%20Library!5e0!3m2!1skm!2skh!4v1747890296721!5m2!1skm!2skh"
                        width="100%"
                        height="480"
                        loading="lazy"
                        title="Map to RULE Library"
                        aria-label="Map to RULE Library"
                    ></iframe>
                </div>

                {/* Info Section */}
                <div className="container mx-auto px-6 md:px-12">
                    <div className="-mt-[100px] block rounded-lg border border-gray-300 bg-white/80 px-6 py-12 shadow-xl backdrop-blur-[30px] md:px-12 md:py-16">
                        <div className="grid justify-center">
                            <div className="grid w-full gap-12 md:grid-cols-2 xl:grid-cols-2">
                                {/* Contact Details Section */}
                                <div className="space-y-8">
                                    {/* Contact Item - Phone */}
                                    <div className="group flex items-start rounded-lg p-3 transition hover:scale-[1.02] hover:bg-sky-50">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-sky-700 transition group-hover:bg-sky-300">
                                                <PhoneCall />
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-semibold text-gray-800">Phone Number</p>
                                            <p className="text-sm text-neutral-600 transition group-hover:text-neutral-800">010 775589</p>
                                        </div>
                                    </div>

                                    {/* Contact Item - Address */}
                                    <div className="group flex items-start rounded-lg p-3 transition hover:scale-[1.02] hover:bg-sky-50">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-sky-700 transition group-hover:bg-sky-300">
                                                <MapPinCheck />
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-semibold text-gray-800">Address</p>
                                            <p className="text-sm text-neutral-600 transition group-hover:text-neutral-800">
                                                Monivong Blvd, District Tonle Basac Khan Chamkamon, Phnom Penh, 12301
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contact Item - Email */}
                                    <div className="group flex items-start rounded-lg p-3 transition hover:scale-[1.02] hover:bg-sky-50">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-sky-200 p-4 text-sky-700 transition group-hover:bg-sky-300">
                                                <Mail />
                                            </div>
                                        </div>
                                        <div className="ml-6 grow">
                                            <p className="mb-2 font-semibold text-gray-800">Email</p>
                                            <p className="text-sm text-neutral-600 transition group-hover:text-neutral-800">support@domain.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Section */}
                                <div className="mt-4 md:mt-0">
                                    <p className="mb-6 text-lg font-bold text-gray-800">Social Media</p>
                                    <div className="flex flex-wrap gap-4">
                                        {socialMedia.map((media) => (
                                            <a
                                                key={media.id}
                                                href={media.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={media.name}
                                                className={`group flex h-28 w-24 flex-col items-center justify-center rounded-md bg-gray-500 transition-transform duration-300 hover:scale-110 hover:shadow-md ${media.hoverColor}`}
                                            >
                                                <img
                                                    src={media.image}
                                                    alt={`${media.name} icon`}
                                                    className="h-14 w-14 invert transition-transform duration-300 group-hover:scale-110"
                                                />
                                                <span className="mt-2 text-sm text-gray-300 transition group-hover:text-white">{media.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
