"use client";
import EmployerMenuMobile from "@/components/routes/dashboard/employer/employer-menu-mobile";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/utils/shadcn/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Briefcase, Globe2Icon, StarIcon, User2Icon } from "lucide-react";

function Page() {
  return (
    <section className="px-2 mx-auto mt-10">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Overview</h2>
        <EmployerMenuMobile />
      </div>
      {/* Container */}
      <div className="flex flex-col gap-5 mt-10 ">
        {/* First row */}
        <div className="flex flex-col gap-5 lg:flex-row ">
          <div className="flex flex-col gap-5">
            {/* Company Profile Completness */}
            <div
              className={cn(
                "px-5 py-6 bg-foreground rounded-3xl shadow-md w-fit flex flex-col items-start gap-3 text-right text-background",
                "w-full"
              )}
            >
              <div className="flex gap-4">
                <Avatar className="border-2 rounded-lg border-foreground">
                  <AvatarImage src="" alt="@shadcn" />
                  <AvatarFallback className="flex p-4 bg-white rounded-lg">
                    <Globe2Icon className="text-foreground" size={24} />
                  </AvatarFallback>
                </Avatar>
                {/* Name + jobs */}
                <div className="flex flex-col justify-around text-left">
                  <p className="font-semibold text-white">Google Inc.</p>
                  <p className="text-backgorund">45 jobs</p>
                </div>
              </div>
              <p>Company Profile Completness (60%) </p>
              <Progress className="w-full" value={60} />
            </div>
            {/* Row with cards */}
            <div className="flex gap-5">
              {/* Created jobs 1 */}
              <div className="px-5 py-6 bg-white rounded-3xl shadow-md min-w-[180px] flex flex-col items-center gap-3 text-center">
                <div className="p-4 rounded-full bg-background">
                  <Briefcase className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Created Jobs</h3>
                <p className=" text-foreground">0 jobs</p>
              </div>
              {/* Candidates applied 2 */}
              <div className="px-5 py-6  bg-white rounded-3xl shadow-md min-w-[180px]  flex flex-col items-center gap-3 text-center">
                <div className="p-4 rounded-full bg-background">
                  <User2Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Candidates Applied</h3>
                <p className=" text-foreground">0 candidates</p>
              </div>
              {/* Saved Resumes 3 */}
              <div
                className={cn(
                  "px-5 py-6 bg-white rounded-3xl shadow-md min-w-[180px]  flex flex-col items-center gap-3 text-center"
                )}
              >
                <div className="p-4 rounded-full bg-background">
                  <StarIcon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Saved Resumes</h3>
                <p className=" text-foreground">0 resumes</p>
              </div>
            </div>
          </div>
          {/* Last applied 6 */}
          <div
            className={cn(
              "px-5 py-6  bg-white rounded-3xl shadow-md min-w-[180px]  flex flex-col items-start gap-3 text-left",
              "w-full lg:w-[320px] "
            )}
          >
            <h3 className="text-lg font-semibold">Last Applied</h3>
            <div className="flex gap-4">
              <Avatar className="border-2 rounded-lg border-foreground">
                {/* TODO: Add image */}
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback className="flex p-4 bg-white rounded-lg">
                  <User2Icon className="text-foreground" size={24} />
                </AvatarFallback>
              </Avatar>
              {/* Name + jobs */}
              <div className="flex flex-col justify-around text-left">
                <p className="font-semibold">John Doe</p>
                <p className="text-backgorund">45 jobs</p>
              </div>
            </div>
          </div>
        </div>
        {/* Job views 5 */}
        <div
          className={cn(
            "px-5 py-6 bg-white rounded-3xl shadow-md flex flex-col items-start gap-3 text-left",
            ""
          )}
        >
          <h3 className="text-lg font-semibold">Jobs views</h3>
        </div>
      </div>
    </section>
  );
}

export default Page;
