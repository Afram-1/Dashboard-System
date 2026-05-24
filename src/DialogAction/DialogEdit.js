import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export default function DialogEdit({
  openDialogEdit,
  setopenDialogEdit,
  user,
  rowsData,
  setRowsData,
}) {
  const [fromState, setFromState] = React.useState({});

  // لما ال user يتغير (فتح dialog جديد)
  React.useEffect(() => {
    if (user) {
      setFromState(user);
    }
  }, [user]);

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setFromState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSaveChange = () => {
    const updateData = rowsData.map((userData) =>
      userData.email === user.email ? { ...userData, ...fromState } : userData,
    );

    setRowsData(updateData);
    setopenDialogEdit(false);
  };

  const handleClose = () => {
    setopenDialogEdit(false);
  };

  return (
    <React.Fragment>
      <Dialog open={openDialogEdit} onClose={handleClose}>
        <DialogTitle>Edit User {fromState.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We will send updates occasionally.
          </DialogContentText>
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
              value={fromState.name || ""}
              onChange={handleChangeValue}
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
              value={fromState.email || ""}
              onChange={handleChangeValue}
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
              value={fromState.role || ""}
              onChange={handleChangeValue}
            />
            <InputLabel id="status-label" className="mt-3">
              Status
            </InputLabel>
            <Select
              className="p-0"
              labelId="status-label"
              id="status"
              name="status"
              value={fromState.status || ""}
              onChange={handleChangeValue}
              fullWidth
              variant="standard"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handelSaveChange}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
