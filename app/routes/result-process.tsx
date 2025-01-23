import { redirect } from "react-router";
import type { Route } from "../routes/+types/result";

// export function loader({ params }: Route.LoaderArgs) {
//   const runNumber = params.runNumber;
//   return { runNumber };
// }

export async function action({ request }: Route.ActionArgs) {

  const moo = await request.formData();
  moo.get("runnumber")
  return redirect(`/results/${moo.get("runnumber")}`)
}
