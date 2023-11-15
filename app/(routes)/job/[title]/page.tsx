import React from "react";

function Page(
  { params: { title } }: { params: { title: string } } = {
    params: { title: "No Results" },
  }
) {
  return <div>Job: {title}</div>;
}

export default Page;
