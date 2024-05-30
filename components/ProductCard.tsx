import Image from 'next/image';
import { StarIcon } from '.';
import Link from 'next/link';

const array = new Array(5).fill('star', 0);

interface Props {
  id: number;
  image: string;
  description: string;
  rating: number;
  currentPrice: number;
  previousPrice?: number;
  discount?: number;
  addStyle?: string;
}
// w-[198px] h-[200px] lg:w-[22vw] lg:h-[22vw] xl:w-[20.5vw] xl:h-[20.7vw]

const ProductCard = ({
  id,
  image,
  description,
  rating,
  currentPrice,
  previousPrice,
  discount,
  addStyle,
}: Props) => {
  return (
    <div className="">
      <div className={`relative ${addStyle}`}>
        <Link href={`/product/${id}`}>
          <Image
            src={image}
            alt="image 1"
            fill
            //   width={295}
            //   height={298}
            //   width="0"
            //   height="0"
            //   sizes="100vw"
            className="object-contain w-full lg:w-full h-auto"
            //   className="object-contain w-[67%] lg:w-[100%] h-auto"
          />
        </Link>
      </div>
      <p className="text-black font-satoshi text-base lg:text-lg xl:text-xl font-bold mt-[10px] xl:mt-4 truncate max-w-[172px] md:max-w-max">
        {description}
      </p>
      <div className="flex flex-row py-1 xl:py-2 space-x-[11px] xl:space-x-[13px]">
        <div className="flex flex-row space-x-1 xl:space-x-[5px]">
          {array.map((item, index) => (
            <div className="" key={index}>
              <StarIcon
                width="w-[15.5px] xl:w-[18.5px]"
                height="h-[15.5px] xl:h-[18.5px]"
              />
            </div>
          ))}
        </div>
        <div>
          <span className="font-satoshi text-black text-xs lg:text-sm">
            {rating}/
          </span>
          <span className="font-satoshi text-black/60 text-xs lg:text-sm">
            5
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-[5px] xl:space-x-[10px]">
        <span className="font-satoshi text-black text-xl xl:text-2xl font-bold">
          ${currentPrice}
        </span>
        {previousPrice && (
          <span className="font-satoshi text-black/40 text-xl xl:text-2xl font-bold">
            ${previousPrice}
          </span>
        )}
        {discount && (
          <span className="bg-[#FF3333]/10 py-[3px] px-2 xl:px-[13.5px] xl:py-[6px] font-satoshi text-xs font-medium text-[#FF3333] rounded-[62px]">
            {discount}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
