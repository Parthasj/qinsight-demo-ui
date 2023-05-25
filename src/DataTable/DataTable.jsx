import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { datasetActions } from '../_actions'

// const Card = () => (
//   <tr>
//     <td className="fullWidth">
//       <h1>
//         lorem ipsum dorel em quol acee, vion, bloolw, wafeo, feiwjfoiew,
//         foiwejifowefjweoi, fewjoewjfowei, fwefwefewfewfewf
//       </h1>
//     </td>
//   </tr>
// );

function DataTable () {
  const datasets = useSelector(state => state.dataset.items);
  const dispatch = useDispatch();

    useEffect(() => {
      console.log("api-call-start");
         dispatch(datasetActions.getAllDataset());
         console.log("api-call-end");
    }, []);

  const columns = [
    {
      name: "firstName",
      label: "First Name",
      options: {
       filter: true,
       sort: true,
       fullWidth: true,
       
      }
     },
     {
      name: "lastName",
      label: "Last Name",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "designation",
      label: "Role",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "username",
      label: "Email",
      options: {
       filter: true,
       sort: true,
      },
    },
    {
      name: "phone",
      label: "Phone",
      options: {
       filter: true,
       sort: true,
      },
    }
    //  {
    //   name: "Action",
    //   options: {
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       return <div>{this.clientList(tableMeta.rowData)}</div>;
    //     },
    //   },
    // },
     
  ];
  
  const data =  datasets !== undefined && datasets !== null && datasets !== '' ? datasets : {};

  if(Object.keys(data).length === 0 && data.constructor === Object){
    console.log("data", data)
  }

  const options = {
    filter: true,
    onFilterChange: (changedColumn, filterList) => {
      console.log(changedColumn, filterList);
    },
    page: 0,
    print: false,
    search: false,
    download: false,
    viewColumns: false,
    selectableRows: 'none',
    filterType: "dropdown",
    responsive: "",
    rowsPerPage: 10,
    expandableRows: false,
  };

  return (
    <div>
      { Object.keys(data).length === 0 && data.constructor === Object
              ? <div className='load'></div>: <MUIDataTable
                                    title={"User List"}
                                    data={data}
                                    columns={columns}
                                    options={options}
                                    /> }
    </div>
  );
};

export { DataTable };
