import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DialogAddUser({
  openDialogAdd,
  setopenDialogAdd,
  rowsData,
  setRowsData,
}) {
  const [dataUser, setDataUser] = React.useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });

  const handleClose = () => {
    setopenDialogAdd(false);
  };

  const handleDataUsers = (e) => {
    const { name, value } = e.target;
    setDataUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveUser = () => {
    const { name, email, role, status } = dataUser;

    if (!name || !email || !role || !status) {
      alert("Please fill all fields");
      return;
    } else {
      setRowsData((prev) => [...prev, dataUser]);
    }
    // Reset form
    setDataUser({
      name: "",
      email: "",
      role: "",
      status: "",
    });
    setopenDialogAdd(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialogAdd}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add User
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className="pt-0 pb-4">
          <form>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="User Name"
              type="text"
              fullWidth
              variant="standard"
              value={dataUser.name}
              onChange={handleDataUsers}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={dataUser.email}
              onChange={handleDataUsers}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="role"
              name="role"
              label="Role"
              type="text"
              fullWidth
              variant="standard"
              value={dataUser.role}
              onChange={handleDataUsers}
            />
            <InputLabel id="status-label" className="mt-3">
              Status
            </InputLabel>
            <Select
              className="p-0"
              labelId="status-label"
              id="status"
              name="status"
              value={dataUser.status}
              onChange={handleDataUsers}
              fullWidth
              variant="standard"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSaveUser}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
