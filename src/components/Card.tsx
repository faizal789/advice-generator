import { useQuery } from "@tanstack/react-query";
import { FunctionComponent } from "react";

interface CardProps {}
const getRandomAdvices = async () => {
  try {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Card: FunctionComponent<CardProps> = () => {
  const { data, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: ["getRandomAdvice"],
    queryFn: getRandomAdvices,
  });

  if (isLoading) {
    return (
      <div className="text-neon-green-primary">
        ...Loading advice. Please wait
      </div>
    );
  }

  if (error) {
    return <div className="text-white">Sorry!! Something went wrong</div>;
  }

  return (
    <div className="relative flex w-[480px] flex-col items-center justify-center gap-6 rounded-lg bg-dark-grayish-blue-neutral p-10 shadow-lg max-sm:w-[320px] max-sm:gap-4 max-sm:p-5 max-[320px]:w-[240px]">
      <span className="tracking-widest text-neon-green-primary">
        ADVICE #{data.slip.id}
      </span>

      <p
        className={`text-center text-[28px] text-light-cyan-primary transition-opacity duration-300 max-sm:text-[24px] ${isRefetching ? "opacity-0" : "opacity-100"}`}
      >
        <q>{data.slip.advice}</q>
      </p>
      <img
        className="mb-6"
        src="images/pattern-divider-desktop.svg"
        alt="divider"
      />
      <div
        onClick={() => refetch()}
        className="absolute -bottom-8 left-0 right-0 mx-auto w-fit cursor-pointer rounded-full bg-neon-green-primary p-4 active:shadow-3xl active:shadow-neon-green-primary"
      >
        <img src="images/icon-dice.svg" alt="icon dice" />
      </div>
    </div>
  );
};

export default Card;
