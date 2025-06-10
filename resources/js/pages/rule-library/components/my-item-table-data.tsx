import { usePage } from '@inertiajs/react';

const MyItemTableData = () => {
    const { tableData } = usePage().props;
    return (
        <section className="mx-auto max-w-screen-2xl px-4 pb-14 lg:px-20">
            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {tableData?.data?.map((item) => (
                    <a
                        href={item?.link ? item?.link : `/detail/${item.id}`}
                        key={item.id}
                        className="group relative cursor-pointer overflow-hidden transition"
                    >
                        {/* Image with overlay */}
                        <div className="relative overflow-hidden">
                            <img
                                src={`/assets/images/items/thumb/${item.images[0].image}`}
                                alt={item.title}
                                className="aspect-video w-full border object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Gradient Overlay + Button */}
                            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                                <a
                                    href={item?.link ? item?.link : `/detail/${item.id}`}
                                    className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-yellow-400 hover:text-white"
                                >
                                    Read Now
                                </a>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="space-y-1 py-4">
                            <h3 className="line-clamp-2 text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                            <p className="line-clamp-2 text-gray-800 dark:text-white">{item.short_description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default MyItemTableData;
