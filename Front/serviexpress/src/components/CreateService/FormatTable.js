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
  { field: "detail", headerName: "Detail", width: 170 },
  { field: "price", headerName: "Price", width: 90 },
  
]