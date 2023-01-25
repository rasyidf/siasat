import { Card } from "@mantine/core";
import { WidgetProps } from "./WidgetProps";
export function ChartWidget({ widget }: { widget: WidgetProps; }) {
  return <Card shadow="sm" radius="sm">
    <h3>{widget.title} </h3>
    <div>
      {widget?.data?.map((data, index) => {
        return (
          <div key={index}>
            <div>{data.status}</div>
            <div>{data.count}</div>
          </div>
        );
      })}
    </div>
  </Card>;
}
