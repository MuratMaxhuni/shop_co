import Image from "next/image";
import { StarIcon } from ".";

const array = new Array(5).fill("star", 0);

interface Props {
  item: CardType;
  //   style: string;
}

const Card = ({ item }: Props) => {
  const {
    card_type,
    description,
    id,
    name,
    rating,
    verified_customer,
    posted_date,
  } = item;

  return (
    <div
      className={`p-6 border boder-black/10 rounded-[20px] w-[91.8vw] md:w-[89.8vw] ${
        card_type === "review" ? " md:max-w-[45vw] xl:max-w-[40.7vw]" : ""
      } flex-shrink-0 relative h-[224px] md:h-full`}
    >
      <div
        className={` ${
          card_type === "review"
            ? "md:max-w-[37.9vw] xl:max-w-[37.92vw]"
            : "max-w-[310px] xl:max-w-[336px]"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
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
          {card_type === "review" && (
            <div className="hidden lg:block">
              <Image
                src="/images/three_dots_icon.svg"
                width={24}
                height={24}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="flex flex-row pt-3 pb-2 xl:pt-[15px] xl:pb-3 space-x-[3.5px] md:space-x-[4.5px]">
          <h2 className="text-black font-satoshi text-base xl:text-xl font-bold leading-[22px] ">
            {name}.
          </h2>
          {verified_customer && (
            <div className="w-[19px] h-[19px] xl:w-6 xl:h-6">
              <Image
                src="/images/check_icon.svg"
                width={24}
                height={24}
                alt=""
              />
            </div>
          )}
        </div>
        <p className="text-black/60 text-sm xl:text-base font-normal leading-[20px] xl:leading-[22px]">
          {description}
        </p>
        {posted_date && (
          <p className="text-black/60 text-sm xl:text-base font-medium leading-[22px] xl:leading-[22px] pt-4 xl:pt-6">
            Posted on {posted_date}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
