//Components
import DragNDropZone from "../../components/dragNDropZone/DragNDropZone";
export default function UploadVideoPage() {
  return (
    <div className="h-full">
      <div className="h-full my-6 mx-auto w-[95%] max-w-[1000px]">
        <DragNDropZone />
        <div className="my-3 flex justify-end gap-2 ">
          <button className="rounded-full bg-blue-500 text-white p-[6px] px-5 border hover:opacity-70">
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
}
