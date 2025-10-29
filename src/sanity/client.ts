import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "36h19h90",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});