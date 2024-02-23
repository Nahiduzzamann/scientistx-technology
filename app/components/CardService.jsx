import Link from "next/link";

function CardService({ img, title, description,isButton, route }) {
  return (
    <div className="max-w-[340px] bg-[#1B75BC] text-white flex flex-col items-center p-[17px]">
      {img}
      
      <p className="text-[20px] font-normal my-4">{title}</p>
      <p className="text-[16px] font-normal text-center line-clamp-5">
        {description}
      </p>
      {
        isButton && <div className="flex justify-center mt-3">
        <Link href={`"${route}"`} className="px-8 py-2 bg-white  text-black font-light text-[15px]">View</Link>
      </div>
      }
      
    </div>
  );
}

export default CardService;