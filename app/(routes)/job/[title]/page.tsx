export default function Page({ params }: { params: { title: string } }) {
  return <h1>Job: {params.title}</h1>;
}
