import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "@/components/sidebar/mobile";

export function Root() {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" showName />
      </div>
    </div>
  );
}