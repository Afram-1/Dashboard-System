import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveDialog({
  openDialogDeleted,
  setopenDialogDeleted,
  user,
  rowsData,
  setRowsData,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setopenDialogDeleted(false);
  };

  const handleDeleteUser = () => {
    setRowsData(rowsData.filter((r) => r.email !== user.email));
    setopenDialogDeleted(false);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openDialogDeleted}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>Are you sure you want to delete {user?.name}?</DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button className="text-danger" onClick={handleDeleteUser} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
