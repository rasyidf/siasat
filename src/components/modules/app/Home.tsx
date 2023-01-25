import { Stack } from "@mantine/core";
import { useLocation } from "@tanstack/react-location";
import { CalendarWidget } from "../../widgets/CalendarWidget";
import { CardWidget } from "../../widgets/CardWidget";
import { ChartWidget } from "../../widgets/ChartWidget";
import { DashboardSchema } from "./DashboardSchema";
import { statsData, StatsGrid } from "../../widgets/StatsGridWidget";
import { TableWidget } from "../../widgets/TableWidget";

export const Home = () => {
  const { history: { location } } = useLocation();
  const pathSpan = location?.pathname?.split('/') || ['', 'unknown', 'home'];
  const currentPath = pathSpan[1];
  const role = currentPath;
  return (
    <Stack className="home">
      {
        DashboardSchema[role]?.widgets?.map((widget, index) => {
          return (
            <div key={index}>
              {
                widget.type === "stats" && (
                  <StatsGrid data={widget?.stats ?? []} />
                )
              }
              {
                widget.type === "card" && (
                  <CardWidget widget={widget} />
                )
              }
              {
                widget.type === "table" && (
                  <TableWidget widget={widget} />
                )
              }
              {
                widget.type === "chart" && (
                  <div>
                    <ChartWidget widget={widget} />
                  </div>
                )
              }
              {
                widget.type === "calendar" && (
                  <div>
                    <CalendarWidget widget={widget} />
                  </div>
                )
              }
            </div>
          );
        })
      }
    </Stack>
  );
};


