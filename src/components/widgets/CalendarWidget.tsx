import { Card } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { WidgetProps } from "./WidgetProps";

export function CalendarWidget({ widget }: { widget: WidgetProps; }) {
  return <Card shadow="sm" radius="sm">
    <h3>{widget.title}</h3>
    <Calendar />
  </Card>;
}
