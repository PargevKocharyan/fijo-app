import { readUserSession } from "@/components/auth/actions";
import Landing from "@/components/general/landing";

export default async function Index() {
  const userSession = await readUserSession();

  return (
    <>
      <Landing />
    </>
  );
}
