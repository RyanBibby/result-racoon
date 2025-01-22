import { Form } from "react-router";

export default function DaisyHome() {
  return(
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Result Racoon</h1>
          <div className="mt-5 mb-5">
            <Form id="run-number" role="search" action="results-process" method="post">
              <input
                aria-label="Run number"
                id="run-number"
                name="runnumber"
                placeholder="Run number"
                className="input input-bordered w-full max-w-xs"
                type="search"
              /> 
              <button type="submit" className="btn btn-primary mt-5">Process</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

