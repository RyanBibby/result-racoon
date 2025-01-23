import type { Route } from "../routes/+types/result";
import fetch from "node-fetch"
import processResults from "../calculate/stats"

export async function loader({ params }: Route.LoaderArgs): Promise<string> {

  const url = `https://www.parkrun.org.uk/hillsborough/results/${params.runnumber}/`;

  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15" } });
    if (!response.ok) {
      console.log("fail");
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.text();
  } catch (error: any) {
    console.log("nope");
    console.error(error.message);
    return "nope"
  }
}

export default function Result({ loaderData, params }: Route.ComponentProps) {
  const page = loaderData;
  const regex = /Results-table-row.+?data-name="([\s\S]+?)".+?data-runs="(\d+)"/g;

  const rawResults = Array.from(page.matchAll(regex), (match) => [match[1], match[2]]);

  const results = processResults(rawResults);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Result Racoon</h1>
          <div className="mt-5 mb-5">
            Stats for run {params.runnumber}
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr className="hover">
                  <td>Total runners</td>
                  <td>{results.total}</td>
                </tr>
                <tr className="hover">
                  <td>First ever parkrun</td>
                  <td>{results.firstTime}</td>
                </tr>
                <tr className="hover">
                  <td>25 runs</td>
                  <td>{results[25]}</td>
                </tr>
                <tr className="hover">
                  <td>50 runs</td>
                  <td>{results["50"]}</td>
                </tr>
                <tr className="hover">
                  <td>100 runs</td>
                  <td>{results["100"]}</td>
                </tr>
                <tr className="hover">
                  <td>250 runs</td>
                  <td>{results["250"]}</td>
                </tr>
                <tr className="hover">
                  <td>500 runs</td>
                  <td>{results["500"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

