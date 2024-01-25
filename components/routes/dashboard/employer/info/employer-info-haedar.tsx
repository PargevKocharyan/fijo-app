import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar } from "@radix-ui/react-avatar";
import { Edit2Icon, Globe2Icon } from "lucide-react";

export default function EmployerInfoHaedar() {
  return (
    <div className="flex justify-between gap-3 px-5 py-6 text-center bg-white shadow-md rounded-3xl">
      <div className="flex gap-4">
        <Avatar className="border-2 rounded-full border-foreground">
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback className="flex p-4 bg-white rounded-full">
            <Globe2Icon className="text-foreground" size={24} />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-around text-left">
          <p className="font-semibold">Company Name</p>
          <p className="text-sm text-backgorund">
            8 jobs - since 02 February 2022
          </p>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Edit2Icon className="cursor-pointer " size={16} />
        </DialogTrigger>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
}
