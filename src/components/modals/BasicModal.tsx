import { useState } from "react";
//MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
//Packages
import dayjs from "dayjs";
//Types
import { SlotInfo } from "react-big-calendar";
import { AvailableTime } from "../../types/TrainerType";
//Utils
import { axiosPatch } from "../../utils/axiosFetches";
import { LOCAL_URL } from "../../utils/urls";
import { jwtInterceptor } from "../../utils/jwtInterceptor";
import { toastSuccess, toastError } from "../../utils/toasts";

const defaultTimes = [
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

const style = {
  position: "absolute",
  fontFamily: "Nunito Sans",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 350,
  maxWidth: 600,
  bgcolor: "background.paper",
  borderRadius: "18px",
  boxShadow: 24,
  pt: 2,
};

type BasicModalProps = {
  open: boolean;
  handleClose: () => void;
  slotInfo: SlotInfo | null;
  refetch: () => void;
};

export default function BasicModal({
  open = false,
  handleClose,
  slotInfo,
  refetch,
}: BasicModalProps) {
  //   console.log("slotInfo", slotInfo);

  const [selectedHours, setSelectedHours] = useState<string[]>([]);

  const handleSubmit = async () => {
    if (selectedHours.length === 0) return;
    //TODO: think about if sorting here is a good idea here or in the backend
    //sorting if there is atleast 2 elements
    let sortedTimes: string[] = [];
    let obj: AvailableTime;
    if (selectedHours.length > 1) {
      sortedTimes = [...selectedHours].sort((a, b) => {
        const [hoursA, minutesA] = a.split(":").map(Number);
        const [hoursB, minutesB] = b.split(":").map(Number);
        return hoursA - hoursB || minutesA - minutesB;
      });
      obj = {
        day: dayjs(slotInfo!.start).format("YYYY.MM.DD"),
        times: sortedTimes,
      };
    } else {
      //this is the case when only 1 time is selected (dont need to sort)
      obj = {
        day: dayjs(slotInfo!.start).format("YYYY.MM.DD"),
        times: selectedHours,
      };
    }
    //fetch
    jwtInterceptor();
    try {
      const res = await axiosPatch(
        `${LOCAL_URL}/api/trainers/updateAvailability`,
        obj
      );
      if (res.statusCode === 201) {
        toastSuccess("Availability created");
        refetch();
        setSelectedHours([]);
        handleClose();
      }
    } catch (err: any) {
      console.log(err);
      if (err.response.data.message) {
        toastError(err.response.data.message);
      } else {
        toastError("Something went wrong, could not save availability!");
      }
    }
  };

  return (
    <div>
      <Modal
        sx={{ "&:focus": { border: "none" } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ p: 2, pb: 0 }}>
            <Typography
              sx={{
                textAlign: "center",

                fontSize: "27px",
                fontFamily: "Nunito Sans",
              }}
              variant="h6"
              component="h2"
            >
              {dayjs(slotInfo?.start).format("YYYY.MM.DD")}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                mb: 2,
                fontSize: "20px",
                fontFamily: "Nunito Sans",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Add your availability
            </Typography>
          </Box>
          <Box sx={{ p: 0, my: 3 }}>
            <div className="flex flex-col items-center">
              <div className="max-w-[80%] flex flex-wrap justify-center">
                {defaultTimes.map((time, index) => (
                  <Chip
                    key={index}
                    sx={{
                      cursor: "pointer",
                      fontSize: "16px",
                      padding: "6px 3px",
                      m: "4px",
                    }}
                    color={selectedHours.includes(time) ? "success" : "default"}
                    label={time}
                    onClick={(e) => {
                      if (
                        selectedHours.includes(e.currentTarget.textContent!)
                      ) {
                        setSelectedHours((prev) =>
                          prev.filter(
                            (el) => el !== e.currentTarget.textContent!
                          )
                        );
                      } else {
                        setSelectedHours((prev) => [
                          ...prev,
                          e.currentTarget.textContent!,
                        ]);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              gap: "7px",
              p: 1,
            }}
          >
            <button
              onClick={() => {
                handleClose();
                setSelectedHours([]);
              }}
              className="rounded-full text-gray-700 p-1 px-5 border border-gray-400 hover:bg-red-400 hover:text-white hover:border-none"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-full bg-blue-500 text-white p-[6px] px-5 border hover:opacity-70"
            >
              Create availability
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
