"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Smartphone, CalendarDays, Split, Workflow, Settings, ListChecks } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UsageCounter } from "../usage-counter";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-[#5528ff]"
  },
  {
    label: "Contas Whastapp",
    icon: Smartphone,
    href: "/contas",
    color: "text-[#5528ff]"
  },
  {
    label: "Agendamentos",
    icon: CalendarDays ,
    href: "/agendamentos",
    color: "text-[#5528ff]"
  },
  {
    label: "Redirecionadores",
    icon: Split,
    href: "/redirecionadores",
    color: "text-[#5528ff]"
  },
  {
    label: "Workflows",
    icon: Workflow,
    href: "/workflows",
    color: "text-[#5528ff]"
  },
  {
    label: "Listas de disparo",
    icon: ListChecks,
    href: "/listas-de-disparo",
    color: "text-[#5528ff]"
  },
  {
    label: "Configurações",
    icon: Settings,
    href: "/configuracoes",
    color: "text-[#5528ff]"
  },
]

export function Root() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-100">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-32 h-8 mr-4 ">
            <Image fill src="/logo.svg" alt="zapgate" />
          </div>
        </Link>
        <div className="space-y-3">
          {routes.map((route) => (
            <Link href={route.href} key={route.href} className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-[#5528ff] hover:bg-black/5 rounded-lg transition", pathname === route.href ? "text-[#5528ff] bg-black/5" : "text-zinc-500")}>
              <div className="flex items-center flex-1">
              <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
              {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <UsageCounter.Root />
    </div>
  )
}