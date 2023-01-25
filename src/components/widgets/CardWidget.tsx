import { Card } from "@mantine/core";
import { WidgetProps } from "./WidgetProps";

export function CardWidget({ widget }: { widget: WidgetProps; }) {
  return <Card shadow="sm" radius="sm">
    <h3>{widget.title}
    </h3>
    <div>
      {widget.content}
    </div>
  </Card>;
}
