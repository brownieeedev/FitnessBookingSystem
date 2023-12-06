type Steps = {
  num: number;
  title: string;
};

type Props = {
  steps: Steps[];
};

export default function VerticalStepper({ steps }: Props) {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="w-[35px] h-[35px] bg-gray-100 flex justify-center items-center rounded-full">
            <p className="pl-[2px]">{`${step.num}.`}</p>
          </div>
          <p className="font-inter text-white font-normal">{step.title}</p>
          {index === steps.length - 1 ? null : (
            <div className="bg-gray-600 w-[1px] h-[60px]" />
          )}
        </div>
      ))}
    </div>
  );
}
