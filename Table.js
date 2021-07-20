import React from "react";
import { MDBDataTableV5 } from "mdbreact";

export default function Pagination() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Id",
        field: "id",
        width: 150,
        sort: "disabled",
      },
      {
        label: "Name",
        field: "name",
        width: 270,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Gender",
        field: "gender",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "disabled",
        width: 300,
      },
      {
        label: "Phone Number",
        field: "phoneNo",
        sort: "disabled",
        width: 200,
      },
    ],
    rows: [
      {
        id: 1,
        name: "test1",
        age: "11",
        gender: "male",
        email: "test1@gmail.com",
        phoneNo: "9415346313",
      },
      {
        id: 2,
        name: "test2",
        age: "12",
        gender: "male",
        email: "test2@gmail.com",
        phoneNo: "9415346314",
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315",
      },
      {
        id: 4,
        name: "test4",
        age: "14",
        gender: "male",
        email: "test4@gmail.com",
        phoneNo: "9415346316",
      },
      {
        id: 5,
        name: "test5",
        age: "15",
        gender: "male",
        email: "test5@gmail.com",
        phoneNo: "9415346317",
      },
      {
        id: 6,
        name: "test6",
        age: "16",
        gender: "male",
        email: "test6@gmail.com",
        phoneNo: "9415346318",
      },
    ],
  });

  console.log(setDatatable);

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      fullPagination
    />
  );
}
