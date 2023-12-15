import { useState } from "react";
//Framer
import { motion } from "framer-motion";
//Components
import DragNDropZone from "../../components/dragNDropZone/DragNDropZone";
import VideoUploadForm from "../../components/forms/VideoUploadForm";

export default function UploadVideoPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="h-full">
      <div className="h-full  my-6 mx-auto w-[95%] max-w-[1000px]">
        {!showForm ? (
          <div>
            <DragNDropZone />
            <div className="my-3 flex justify-end gap-2 ">
              <button
                onClick={() => {
                  setShowForm(true);
                }}
                className="rounded-full bg-blue-500 text-white p-[6px] px-5 border hover:opacity-70"
              >
                Upload Video
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            className="bg-white rounded-lg h-auto shadow-xl"
            animate={{ x: [200, 0] }}
          >
            <VideoUploadForm />
          </motion.div>
        )}
      </div>
    </div>
  );
}
