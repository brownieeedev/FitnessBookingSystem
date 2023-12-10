type SidePanelProps = {
  trainer: {
    imgSrc: string;
    name: string;
    title?: string;
  };
};

export default function SidePanel({
  trainer: { imgSrc, name: trainer, title = "Personal Trainer" },
}: SidePanelProps) {
  return (
    <div className="bg-zinc-800 text-white mr-auto mb-auto min-w-[200px]">
      <div className="flex gap-2">
        <div className="w-[70px] h-[70px] rounded-full bg-white">
          <img
            className="object-fit w-full h-full rounded-full"
            src={imgSrc}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">{trainer}</h2>
          <h3 className="text-sm">{title}</h3>
        </div>
      </div>
    </div>
  );
}
