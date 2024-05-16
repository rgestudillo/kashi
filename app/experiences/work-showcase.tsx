import { WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import DateRange from "../ui/date-range";

interface WorkShowcaseProps {
  experience: WorkExperience;
  whetherlast: boolean;
}

export default function WorkShowcase({
  experience,
  whetherlast,
}: WorkShowcaseProps) {
  return (
    <div className="">
      <div className="space-y-2 ">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={experience.logo} />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold leading-none tracking-tight">
              {experience.company}
            </h3>
          </div>
          <DateRange date={experience.years} />
        </div>
        <p className="text-sm text-muted pb-2 text-start">
          {experience.description}
        </p>
        {whetherlast ? <></> : <Separator />}
      </div>
    </div>
  );
}
