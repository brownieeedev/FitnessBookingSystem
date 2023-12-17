//Components
import LoginForm3 from "../forms/LoginForm3";
//MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
//Utils
import { LOCAL_URL } from "../../utils/urls";

type LoginModalProps = {
  open: boolean;
  handleClose: () => void;
};

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
  p: 5,
};

function LoginModal({ open, handleClose }: LoginModalProps) {
  const handleSubmit = () => {};

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
          <Box sx={{ p: 2 }}>
            <Typography
              sx={{
                textAlign: "center",

                fontSize: "27px",
                fontFamily: "Nunito Sans",
              }}
              variant="h6"
              component="h2"
            >
              Log in to your account!
            </Typography>
          </Box>
          <Box>
            <LoginForm3 />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
