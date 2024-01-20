import { readUserSession } from "@/components/auth/actions";
import { redirect } from "next/navigation";

async function Page() {
  const userSession = await readUserSession();

  if (userSession.data.session?.user.user_metadata.type !== "employer") {
    redirect("/");
  }
  return (
    <>
      <h1>Employer Dashboard</h1>
      <p>
        This is the employer dashboard. It's a protected route that can only be
        accessed by authenticated users.
      </p>
    </>
  );
}

export default Page;
