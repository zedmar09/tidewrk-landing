import type { Metadata } from "next";

import { changeLogEntries } from "@/constants/change-logs";
import { ChangeLogsPage } from "@/components/sections/change-logs/change-logs-page";

export const metadata: Metadata = {
  title: "Change Logs | Tidewrk",
  description: "Hidden Tidewrk site change logs.",
};

export default function ChangeLogsRoute() {
  return <ChangeLogsPage entries={changeLogEntries} />;
}
