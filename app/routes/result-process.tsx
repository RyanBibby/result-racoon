import { redirect } from "react-router";
import type { Route } from "../routes/+types/result";

export async function action({ request }: Route.ActionArgs) {

  const formData = await request.formData();
  return redirect(`/results/${formData.get("runnumber")}`)
}
