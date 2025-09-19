import React, { Suspense } from "react";
import Countries from "./components/Countres/Countries";


const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h1>Country is here...</h1>}>
        <Countries countriesPromise={countriesPromise}> </Countries>
      </Suspense>
    </>
  );
}

export default App;
