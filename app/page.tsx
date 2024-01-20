import { readUserSession } from "@/components/auth/actions";
import Landing from "@/components/general/landing";

export default async function Index() {
  const { data } = await readUserSession();
  console.log();
  return (
    <>
      <Landing />
    </>
  );
}
