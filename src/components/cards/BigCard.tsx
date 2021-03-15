import { Image } from "@chakra-ui/image";

interface IBigCardProps {
    thumbnail: string;
    title: string;
    price: number;
    description: string;
}

export default function BigCard({thumbnail, title, price, description}: IBigCardProps) {
    return (
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <Image
                src={thumbnail}
                objectFit="cover"
                objectPosition="center"
                h={{base: 150, md: 300}}
                className="w-full rounded-lg"
            />
            <div className="mt-4 mb-8 space-y-2 lg:my-8 lg:space-y-4">
                <h1 className="text-xl lg:text-3xl font-medium text-gray-900">
                    {title}
                </h1>
                <p className="text-gray-600 h-20 sm:truncate ...">
                    {description}
                </p>
            </div>
            <div className="flex justify-between mt-2">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
                    ${price.toFixed(2)}
                </h1>
                <a href="#" className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full">
                    Order now
                </a>
            </div>
        </div>
    )
}