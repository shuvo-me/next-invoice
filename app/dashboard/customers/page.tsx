import { fetchCustomerPages, fetchFilteredCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';
import { CreateCustomer } from '@/app/ui/customers/buttons';
export const metadata: Metadata = {
  title: 'Customers',
};
export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page: string };
}) {
  const customers = await fetchFilteredCustomers(searchParams?.query || '');
  return <Table customers={customers} />;
}
