import Chip from "@mui/material/Chip";

export const servicesColumns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "name",
    headerName: "NAME",
    width: 170,
  },
  {
    field: "categories",
    headerName: "Category",
    width: 170,
    renderCell: (params) => {
      return <div>{params.row.categories[0].name}­</div>;
    },
  },
];

export const publicationsColumns = [
  { field: "id", headerName: "ID", width: 30 },
  { field: "title", headerName: "Title", width: 170 },
  { field: "detail_resume", headerName: "Descripción", width: 90 },
  { field: "detail", headerName: "Detail", width: 170 },
  { field: "price", headerName: "Price", width: 90 },
  { field: "date", headerName: "Fecha de Publicación", width: 90 },
  {
    field: "state",
    headerName: "Status",
    width: 90,
    renderCell: (params) => {
      return (
        <Chip
          label={params.row.state}
          color={params.row.state === "Active" ? "success": "warning"}
          variant="outlined"
        />
      )
    },
  },
];
