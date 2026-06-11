import Herosection from "@/components/dashboard/heroSection";
import TopicInput from "@/components/dashboard/topicInput";
import Example from "@/components/dashboard/example";
import ExampleCard from "@/components/dashboard/exampleCard";
import Footernote from "@/components/dashboard/footerNote";
import { Brain, House, Laptop, Plane } from 'lucide-react';

export default function DashboardLayout(){
   return(
    <div className="flex flex-col gap-6 h-6/6 items-center justify-center">
       <Herosection />
       <TopicInput />
       <Example />
       <div className="w-full max-w-2xl grid grid-cols-4 md:grid-cols-2 gap-6">
         <ExampleCard title="Should i quit my Job?" description="Evaluate the pros and cons of leaveing your current role." Icon={<Brain className="h-10 w-9" style={{ color: "`#BF00FF`" }} />} />
         <ExampleCard title="Rent vs. Buy a house?" description="Compare the financial and lifestyle impacts of each option." Icon={<House className="h-10 w-9" style={{ color: "`#00674F`" }} />} />
         <ExampleCard title="Macbook vs. Windows Laptop?" description="Break down features, performance  and value to decide" Icon={<Laptop className="h-10 w-9" style={{color : "0050cb"}} />} />
         <ExampleCard title="Solo travel vs. Group travel" description="Evaluate the pros and cons of leaveing your current role?" Icon={<Plane className="h-10 w-9" style={{ color: "`#FBB15B`" }} />} />
       </div>
       <Footernote />
    </div>
   )
}