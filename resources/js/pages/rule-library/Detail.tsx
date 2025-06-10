import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ChevronsRight } from 'lucide-react';

import { TracingBeam } from '@/components/ui/tracing-beam';
import { usePage } from '@inertiajs/react';
import Layout from './Layout';

export default function ResourceDetail() {
    const { showData } = usePage().props;
    return (
        <Layout>
            <TracingBeam className="px-10">
                <section className="mx-auto mb-10 max-w-screen-2xl pl-2">
                    <Breadcrumb className="my-6">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <ChevronsRight />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/${showData?.category?.name.toLowerCase()}`}>{showData?.category?.name}</BreadcrumbLink>
                            </BreadcrumbItem>
                            {showData?.name && (
                                <>
                                    <BreadcrumbSeparator>
                                        <ChevronsRight />
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`#`}>{showData?.name}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </>
                            )}
                            {/* {category?.name && (
                                <>
                                    <BreadcrumbSeparator>
                                        <ChevronsRight />
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/resources?type=${category?.name}`}>{category?.name}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </>
                            )}
                            {showData?.name && (
                                <>
                                    <BreadcrumbSeparator>
                                        <ChevronsRight />
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={`/resources/${showData?.id}`}>{showData?.name}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </>
                            )} */}
                        </BreadcrumbList>
                    </Breadcrumb>
                    {/* <MyBreadCrumb showData={showData?.title} /> */}
                    <div className="mt-3">
                        <p className="mb-8 text-2xl font-semibold md:text-3xl">{showData?.name}</p>
                        <div className="flex justify-center">
                            <img
                                src={`/assets/images/items/${showData?.images[0].image}`}
                                width={1920}
                                height={1080}
                                alt="Image"
                                className="flex max-h-[500px] justify-center overflow-hidden object-contain"
                            />
                        </div>
                        {showData?.long_description && (
                            <div
                                className="prose mt-8 max-w-none overflow-hidden"
                                dangerouslySetInnerHTML={{ __html: showData?.long_description }}
                            ></div>
                        )}
                    </div>
                </section>
            </TracingBeam>
        </Layout>
    );
}
