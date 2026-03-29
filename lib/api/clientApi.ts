import { Filters } from "@/types/filters";
import { nextServer } from "./api";

export async function getCampers(filters: Filters = {}): Promise<Filters> {
  const { data } = await nextServer.get("/campers", {
    params: filters,
  });

  return data;
}
