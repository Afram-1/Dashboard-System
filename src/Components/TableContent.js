import React, { useEffect, useState } from "react";

// Matial UI
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/GridLegacy";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";

// Lucide
import { MoreVerticalIcon } from "lucide-react";
import { Eye } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";

// Dialog Delete
import ResponsiveDialog from "../DialogAction/DialogDeleted";
import DialogEdit from "../DialogAction/DialogEdit";
import DialogAddUser from "../DialogAction/DialogAddUser";

const columns = [
  { id: "name", label: "Name", minWidth: 225 },
  { id: "email", label: "Email", minWidth: 225 },
  {
    id: "role",
    label: "Role",
    minWidth: 150,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 150,
    align: "right",
  },
  {
    id: "action",
    label: "Actions",
    minWidth: 150,
    align: "right",
  },
];

const rows = [
  {
    name: "Afram Hanna",
    email: "aframup1@gmail.com",
    role: "Admin",
    status: "Active",
  },
];

const TableContent = () => {
  const [rowsData, setRowsData] = React.useState(() => {
    const storedRows = localStorage.getItem("users");
    return storedRows ? JSON.parse(storedRows) : rows;
  });

  const [selectedUser, setSelectedUser] = React.useState(null);

  const [openDialogDeleted, setopenDialogDeleted] = React.useState(false);

  const [openDialogEdit, setopenDialogEdit] = React.useState(false);

  const [openDialogAdd, setopenDialogAdd] = React.useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const [filterStatus, setFilterStatus] = useState("All");

  // كل مرة البيانات تتغير، خزّنها في localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(rowsData));
  }, [rowsData]);

  const handleMenuOpen = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    setopenDialogDeleted(true); // بس هنا نفتح الـ Dialog
    setAnchorEl(null); // نقفل الـ Menu
  };

  const handleEdit = () => {
    setopenDialogEdit(true); // بس هنا نفتح الـ Dialog
    setAnchorEl(null); // نقفل الـ Menu
  };

  const handleAddUser = () => {
    setopenDialogAdd(true); // بس هنا نفتح الـ Dialog
    setAnchorEl(null); // نقفل الـ Menu
  };

  const editStatus = rowsData.filter((row) => {
    if (filterStatus === "All") {
      return true;
    }
    return row.status === filterStatus;
  });

  return (
    <>
      <Grid container className="bg-body-secondary p-4 ">
        <Paper sx={{ width: "100%" }} className="rounded-4">
          <TableContainer>
            <Table sx={{ minWidth: 900 }}>
              <TableHead>
                <TableRow>
                  {/* Title */}
                  <TableCell colSpan={3} className="fs-4 p-4" align="left">
                    Recent Users
                  </TableCell>

                  {/* Buttons */}
                  <TableCell colSpan={2} className="p-4">
                    <Grid
                      container
                      spacing={1}
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                    >
                      <Grid item>
                        <Button
                          variant={
                            filterStatus === "All" ? "contained" : "text"
                          }
                          size="md"
                          onClick={() => setFilterStatus("All")}
                        >
                          All
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant={
                            filterStatus === "Active" ? "contained" : "text"
                          }
                          size="md"
                          onClick={() => setFilterStatus("Active")}
                        >
                          Active
                        </Button>
                      </Grid>

                      <Grid item>
                        <Button
                          variant={
                            filterStatus === "Inactive" ? "contained" : "text"
                          }
                          size="md"
                          onClick={() => setFilterStatus("Inactive")}
                        >
                          Inactive
                        </Button>
                      </Grid>

                      <Grid item>
                        <Button
                          variant="contained"
                          size="md"
                          startIcon={<AddIcon />}
                          onClick={handleAddUser}
                        >
                          Add User
                        </Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>

                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 57, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {editStatus.map((row) => (
                  <TableRow key={row.email}>
                    <TableCell>
                      <span className="d-flex align-items-center gap-2">
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>
                          {row.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar>
                        {row.name}
                      </span>
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell align="right">{row.role}</TableCell>
                    <TableCell align="right">
                      <Chip
                        label={row.status}
                        color={row.status === "Active" ? "success" : "error"}
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton onClick={(e) => handleMenuOpen(e, row)}>
                        <MoreVerticalIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      {/* Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Eye size={20} />
          <span className="ms-2">View</span>
        </MenuItem>
        <MenuItem onClick={handleEdit}>
          <Pencil size={20} />
          <span className="ms-2">Edit</span>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <div className="text-danger">
            <Trash2 size={20} />
            <span className="ms-2">Delete</span>
          </div>
        </MenuItem>
      </Menu>
      {/* Props Dialog */}
      <ResponsiveDialog
        openDialogDeleted={openDialogDeleted}
        setopenDialogDeleted={setopenDialogDeleted}
        user={selectedUser}
        rowsData={rowsData}
        setRowsData={setRowsData}
      />
      <DialogEdit
        openDialogEdit={openDialogEdit}
        setopenDialogEdit={setopenDialogEdit}
        user={selectedUser}
        rowsData={rowsData}
        setRowsData={setRowsData}
      />
      <DialogAddUser
        openDialogAdd={openDialogAdd}
        setopenDialogAdd={setopenDialogAdd}
        rowsData={rowsData}
        setRowsData={setRowsData}
      />
    </>
  );
};

export default TableContent;
