import { getCampers } from "@/lib/api/clientApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";

export default async function Catalog() {
  const queryClient = new QueryClient();
  const filters = {};

  await queryClient.prefetchQuery({
    queryKey: ["campers", filters],
    queryFn: () => getCampers({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
