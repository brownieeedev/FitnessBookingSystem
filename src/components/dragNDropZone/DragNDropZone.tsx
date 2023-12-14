function DragNDropZone() {
  return (
    <div className="mx-auto">
      <div className="flex items-center  justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-[500px] border-[2px] border-blue-400 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className=" text-blue-400">Click to upload</span> OR{" "}
              <span className=" text-blue-400">drag and drop</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              MP4 format
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            accept="video/*"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}

export default DragNDropZone;
