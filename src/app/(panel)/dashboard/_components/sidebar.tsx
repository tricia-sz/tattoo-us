"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";
import { List } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

export function SidebarDashboard({children}:{children: ReactNode}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false)
  return(
    <div className={clsx("flex flex-1 flex-col transition-all duration-300", {

      "md:ml-20": isCollapsed,
      "md:ml-64": !isCollapsed

    })}>

      <header className="md:hidden">
        <Sheet>
          <div className="flex items-center gap-4">
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <List />
              </Button>
            </SheetTrigger>
            <h1>Tatto Us - my space</h1>
          </div>
        </Sheet>
      </header>

      <main className="flex-1 py-4 px-2 md:p-6">
        {children}
      </main>
     
    </div>
  )
}