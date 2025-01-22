import type { Route } from "../routes/+types/result";
import fetch from "node-fetch"
export async function loader({ params }: Route.LoaderArgs) {
  const runNumber = params.runnumber;

  
  const url = "https://www.parkrun.org.uk/hillsborough/results/533/";

  let text : String = "moo"

  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15" }});
    if (!response.ok) {
      console.log("fail");
      throw new Error(`Response status: ${response.status}`);
    }

    text = await response.text();
    console.log("text");
  } catch (error) {
    console.log("nope");
    console.error(error.message);
    text = "nope"
  }

  
  return { text };
}



export default function Result({ loaderData } : Route.ComponentProps) {
  const { text } = loaderData;
  const re = /parkrunner\/(\d+)/g;


  const parser = new DOMParser();

  const document = parser.parseFromString(text, "text/html");

  return(
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Result Racoon</h1>
          <div className="mt-5 mb-5">
            Stats for run
          </div>

          <div>
            {console.log(Array.from(text.matchAll(re)))}
            {text.matchAll(re)}
          </div>
        </div>
      </div>
    </div>
  
  );
}

