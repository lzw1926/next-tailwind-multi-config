import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Card = function(props: PropsWithChildren<{ className: string }>) {
  return <div className={cn('tb-bg-red-300', props.className)}>{ props.children }</div>
}