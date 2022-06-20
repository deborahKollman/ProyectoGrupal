export const aUserInputs = [
    {
      id: 1,
      label: "Username",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id: 2,
      label: "Name and surname",
      type: "text",
      placeholder: "John Doe",
    },
    {
      id: 3,
      label: "Email",
      type: "mail",
      placeholder: "john_doe@gmail.com",
    },
    {
      id: 4,
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
    },
    {
      id: 5,
      label: "Password",
      type: "password",
    },
    {
      id: 6,
      label: "Address",
      type: "text",
      placeholder: "Elton St. 216 NewYork",
    },
    {
      id: 7,
      label: "Country",
      type: "text",
      placeholder: "USA",
    },
  ];
  
  export const aProductInputs = [
    {
      id: 1,
      label: "Title",
      type: "text",
      placeholder: "Apple Macbook Pro",
    },
    {
      id: 2,
      label: "Description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: 3,
      label: "Category",
      type: "text",
      placeholder: "Computers",
    },
    {
      id: 4,
      label: "Price",
      type: "text",
      placeholder: "100",
    },
    {
      id: 5,
      label: "Stock",
      type: "text",
      placeholder: "in stock",
    },
  ];
  
  export const aFormCategory = [
    {
      id: 1,
      label: "Name of the category",
      type: "text",
      placeholder: "Mechnical",
      errorMessage: "Please enter a name for the category",
      regExp: /^[a-zA-Z0-9_]{3,}$/
    },
    {
      id: 2,
      label: "Status",
      type: "select",
      placeholder: "Status",
      options: [
        {
          id: 1,
          value: "Active",
          label: "Active",
        },
        {
          id: 2,
          value: "Inactive",
          label: "Inactive",
        },
      ],
    }
  ]

  /* 
  category
    {
      id: 2,
      label: "Description",
      type: "text",
      placeholder: "Description",
      errorMessage: "Please enter a description for the category",
      regExp: /^[a-zA-Z0-9_]{3,}$/
    },
    {
      id: 3,
      label: "Image",
      type: "file",
      placeholder: "Image"
    },
    {
      id: 4,
      label: "Icon",
      type: "file",
      placeholder: "Icon"
    },
  */