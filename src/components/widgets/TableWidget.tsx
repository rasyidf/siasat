import { Card, Table } from "@mantine/core";
import { WidgetProps } from "./WidgetProps";


export function TableWidget({ widget }: { widget: WidgetProps; }) {
  return <Card shadow="sm" radius="sm">
    <h3>{widget.title}</h3>

    <Table>
      <thead>
        <tr>
          {widget?.columns?.map((column, index) => {
            return (
              <th key={index}>{column}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {widget?.rows?.map((row, index) => {
          return (
            <tr key={index}>
              {row.map((cell, index) => {
                return (
                  <td key={index}>{cell}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  </Card>;
}
