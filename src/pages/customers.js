import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';

const now = new Date();

async function logMovies() {
  const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=VHu3PVfU-ZvDtzgAY9cex_rDJY9plW0Bp20nXpQKSi2nmbDuQlBggHKHecqyoaWUQEald_9fUuedua59zIp9LhP4OjKFV9MrOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh8JJZFsljkgcQM4UwS1rQoWPgAlqiImmX9mAQAnR18Agg4_lKswmxUXjaMbz_6Sr52kTLwOFPPziLoVe-K7gHuF6hOpKyfPsT7xlDcEp37g&lib=M3AmioqxckIU5ScEcYdxzk21LwkdVeYUP");
  const movies = response;
  console.log(movies);
  return movies;
}

// const data = [{
//   id: '5e887ac47eed253091be10cb',
//     address: {
//       city: 'Cleveland',
//       country: 'India',
//       state: 'Ohio',
//       street: '2849 Fulton Street'
//     },
//     avatar: '/assets/avatars/avatar-carson-darrin.png',
//     createdAt: subDays(subHours(now, 7), 1).getTime(),
//     email: 'carson.darrin@devias.io',
//     name: 'Carson Darrin',
//     phone: '304-428-3097'
// },
// ]
const data1 = logMovies(); 

const data = [
  { id: 1,
    address: '1st street, Coimbatore',
    createdAt: 'Sat May 06 2023',
    email: 'sasi@gmail.com',
    name: 'sasidharan',
    phone: '8637469722' },
  { id: 2,
    address: '43 north street , Dharmapuri',
    createdAt: 'Tue Jun 06 2023',
    email: 'vishal@gmail.com',
    name: 'vishal C',
    phone: '7456841674122' },
  { id: 3,
    address: '456 jaipur street , salem',
    createdAt: 'Wed Jul 26 2023',
    email: 'yogesh@gmail.com',
    name: 'Yogesh',
    phone: '9632547852' },
  { id: 4,
    address: 'Vivek, dharmapuri',
    createdAt: 'Sat May 06 2023',
    email: 'manoj@gmail.com',
    name: 'manojkumar',
    phone: '8637469722' },
  { id: 5,
    address: 'krishna street, Hosur',
    createdAt: 'Sat May 06 2023',
    email: 'sandhya@gmail.com',
    name: 'sandhyabarathi',
    phone: '6381559549' },
  { id: 6,
    address: 'saran nagar, tirupppur',
    createdAt: 'Sat May 06 2023',
    email: 'subi@gmail.com',
    name: 'subiksha',
    phone: '7536984125' },
  { id: 7,
    address: 'saran nagar, trichy',
    createdAt: 'Sat May 06 2023',
    email: 'arnol@gmail.com',
    name: 'arnold',
    phone: '4856321759' },
  { id: 8,
    address: 'saran nagar, sivakasi',
    createdAt: 'Sat May 06 2023',
    email: 'vikr@gmail.com',
    name: 'vikram',
    phone: '748213698' },
  { id: 9,
    address: 'saran nagar, chennai',
    createdAt: 'Sat May 06 2023',
    email: 'saman@gmail.com',
    name: 'samantha',
    phone: '9547852163' },
  { id: 10,
    address: 'saran nagar, tirupppur',
    createdAt: 'Sat May 06 2023',
    email: 'emil@gmail.com',
    name: 'emily',
    phone: '7485692374' }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Reports | Spam Alert System
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Reports
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
