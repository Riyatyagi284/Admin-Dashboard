import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';



const rows = [
  { id: 1, name:'User 1', joiningDate:'02/09/2023', referredBy:'Manish' ,  referralCode: 35 },
  { id: 2, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode: 42 },
  { id: 3, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode: 45 },
  { id: 4, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode:16 },
  { id: 5, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode:24 },
  { id: 6, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode: 150 },
  { id: 7, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode: 44 },
  { id: 8, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode: 36 },
  { id: 9, name: 'User 2', joiningDate:'02/09/2023', referredBy: 'Manish', referralCode: 65 },
];

const Referrals = () => {
  let navigate = useNavigate()
  const handleViewClick=(id)=>{
    navigate("user-referral")
    console.log(`id = ${id}`)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: false,
    },
    {
      field: 'joiningDate',
      headerName: 'Joining Date',
      width: 150,
      editable:'false'
    },
    {
      field: 'referredBy',
      headerName: 'Referred By',
      width: 150,
      editable: false,
    },
    {
      field: 'referralCode',
      headerName: 'Referral Code',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field:'view',
      headerName:'View',
      width:100,
      renderCell:(params)=>{
        return (
          <button className='btn' onClick={()=>handleViewClick(params.row.id)}>View</button>
        )
      }
    }
  ];
  return (
    <DataGrid
        className='fs-4'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection={false}
        
        disableColumnSelector={true}
      />
  )
}

export default Referrals