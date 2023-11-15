function Page({
  params: { title },
}: {
  params: { title: string | undefined };
}) {
  return <div>Job: {title}</div>;
}

export default Page;
