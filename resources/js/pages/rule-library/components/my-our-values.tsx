import { HeartHandshake } from 'lucide-react';
const teamMembers = [
    {
        name: 'Collaboration',
        title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
        Icon: HeartHandshake,
    },
    {
        name: 'Customer Focus',
        title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
        Icon: HeartHandshake,
    },
    {
        name: 'Diversity',
        title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
        Icon: HeartHandshake,
    },
    {
        name: 'Expertise',
        title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
        Icon: HeartHandshake,
    },
    {
        name: 'Innovation',
        title: 'Integer venenatis quam viverra lorem sed lobortis euismod lobortis',
        Icon: HeartHandshake,
    },
];
const MyOurValues = () => {
    return (
        <div className='bg-orange-50 '>
        <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-20">
            <div className="mx-auto max-w-xl text-center">
                <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Our Values</h2>
            </div>
            <div className="relative mt-6 h-[2px] w-full bg-gray-300">
                <div className="absolute top-0 left-1/2 h-[2px] w-20 -translate-x-1/2 transform bg-yellow-400"></div>
            </div>
            <div className="mx-auto mt-20 grid w-full max-w-screen-2xl grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-5">
                {/* {teamMembers.map((member) => (
                    <div key={member.name} className="text-center">
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="bg-secondary mx-auto h-20 w-20 rounded-full object-cover"
                            width={120}
                            height={120}
                        />
                        <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                        <p className="text-muted-foreground">{member.title}</p>
                    </div>
                ))} */}
                {teamMembers.map(({ name, title, Icon }) => (
                    <div key={name} className="text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-white">
                            <Icon className="h-10 w-10" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold">{name}</h3>
                        <p className="text-gray-600">{title}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default MyOurValues;
