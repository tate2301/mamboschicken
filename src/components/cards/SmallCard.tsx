import { Image } from "@chakra-ui/image";

interface ISmallCardProps {
    thumbnail: string;
    title: string;
    price: number;
    isNew?: boolean;
    isPromotional?: boolean;
}

export default function SmallCard({thumbnail, title, price, isPromotional, isNew}: ISmallCardProps) {
    return(
        <div className="p-4 bg-white bg-opacity-70 shadow-md rounded-xl w-full h-1/2 flex">
            <div className="flex space-x-4 w-full">
                <Image
                    src={thumbnail}
                    objectFit="cover"
                    objectPosition="center"
                    className="w-2/5 lg:w-1/3 h-full rounded-lg shadow-md" />
                <div className="flex flex-col justify-between w-3/5 lg:w-2/3">
                    <div className="space-y-1 lg:space-y-2">
                        {isNew && <span className="rounded-full bg-red-500 text-white font-medium py-1 px-2">NEW</span>}
                        <h1 className="text-xl text-gray-900 font-medium">
                            {title}
                        </h1>
                        <p className="mt-4 text-gray-900 text-3xl font-bold">
                            ${price.toFixed(2)}
                        </p>
                        <p className="text-sm">
                            {isPromotional && <p>*currently on promotion</p>}
                        </p>
                    </div>
                    <div className="flex justify-end w-full mt-1">
                        <a href="#" className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full">
                            Order now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}