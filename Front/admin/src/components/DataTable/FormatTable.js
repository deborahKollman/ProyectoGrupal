export const userColumns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.avatar_image} alt="avatar" />
            {params.row.name}­   ­{params.row.last_name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
  
    {
      field: "phone_number",
      headerName: "PHONE NUMBER",
      width: 100,
    },
    { field: "location", headerName: "LOCATION", width: 100 },
    {
      field: "rol",
      headerName: "ROL",
      width: 60,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];

  export const categoriesColumns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.avatar_image} alt="avatar" />
            {params.row.name}­   ­{params.row.last_name}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
  
    {
      field: "phone_number",
      headerName: "PHONE NUMBER",
      width: 100,
    },
    { field: "location", headerName: "LOCATION", width: 100 },
    {
      field: "rol",
      headerName: "ROL",
      width: 60,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];