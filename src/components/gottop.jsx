import { BsArrowUp } from "react-icons/bs";
import { useWindowHeight } from "./useDimension";
// import cn from "@/utils/tailwind";

export const GotoTop = ({
    scrollToViewRef
}) => {
  const scrollY = useWindowHeight();

  // console.log(scrollY);

  const handleTop = () => {
    if (!window) return;
    window && scrollToViewRef.current.scrollIntoView({behavior:'smooth',block:'start'});
  };

  return (
    <div
      role="button"
      className={
        `${
            scrollY > 500
            ? "opacity-100 translate-x-0 shadow-[0_0_40px_0_rgba(0,0,0,0.16)]"
            : "opacity-0 translate-x-10"
        }
        pt-1 px-1 text-4xl rounded-lg fixed bottom-10 right-5 z-50 select-none flex flex-col items-center border border-[#006837] text-black transition-all duration-1000 bg-white/60 backdrop-blur-xl cursor-pointer active:scale-75 active:duration-300
        `
    }
      onClick={handleTop}
    >
      <BsArrowUp />
      <span className="text-sm ">Top</span>
    </div>
  );
};
