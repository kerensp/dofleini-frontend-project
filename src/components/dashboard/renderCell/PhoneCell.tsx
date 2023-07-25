/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';

export const PhoneCell = (rowData: GridRenderCellParams) => (
  <Typography
    color='#1A0A00'
    sx={{
      fontSize: '14px',
      opacity: 1
    }}>
    {rowData.row.phone}
  </Typography>
);