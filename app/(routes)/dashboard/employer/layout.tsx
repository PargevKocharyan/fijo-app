import EmployerMenu from "@/components/routes/dashboard/employer/employer-menu";

import { readUserSession } from "@/components/auth/actions";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function DashboardEmployerLayout({ children }: Props) {
  const userSession = await readUserSession();

  if (userSession.data.session?.user.user_metadata.type !== "employer") {
    redirect("/");
  }
  return (
    <div className="flex ">
      <EmployerMenu />
      {children}
    </div>
  );
}
