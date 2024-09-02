import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

const ResponsiveDialog = ({ open, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjusts to full screen on small devices

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={fullScreen ? "xs" : "md"} // Adjusts the maxWidth based on screen size
      sx={{
        "& .MuiDialog-paper": {
          width: fullScreen ? "100%" : "600px", // Example widths
        },
      }}
    >
      <DialogTitle>Responsive Dialog</DialogTitle>
      <DialogContent>
        This dialog adjusts its width based on the screen size.
      </DialogContent>
    </Dialog>
  );
};

const App1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <ResponsiveDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default App1;
