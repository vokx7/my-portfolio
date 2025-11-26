import { Orbit } from "../animate-ui/icons/orbit";
import Button from "./Button";

const WindowAlert = ({ onClick, loading }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 w-60 h-40 bg-primary-dark rounded-xl z-10">
      <div className="bg-secondary-dark h-5 w-full flex items-center rounded-t-xl px-1">
        <div className="flex items-center gap-2 p-2">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57] shadow-sm border border-black/10"></span>
          <span className="w-2 h-2 rounded-full bg-[#febc2e] shadow-sm border border-black/10"></span>
          <span className="w-2 h-2 rounded-full bg-[#28c840] shadow-sm border border-black/10"></span>
        </div>
        <div>
          <p className="text-xs text-main-text-dark font-light pl-1">
            https://dog.ceo/dog-api/
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-4">
        <p className="text-main-text-dark tracking-wide">
          Would you like to spawn a Yorkie?
        </p>
        <Button
          as="button"
          disabled={loading}
          onClick={onClick}
          className="bg-hover"
        >
          {loading ? <Orbit animateOnView /> : "Yes!"}
        </Button>
      </div>
    </div>
  );
};

export default WindowAlert;
