import { WidgetProps } from "./Home";

export const DashboardSchema: Record<string, { widgets: WidgetProps[]; }> = {
  staff: {
    "widgets": [
      {
        "type": "stats",
        "title": "Payment Status",
        "stats": [
          { "title": "Total", "value": "1000", },
          { "title": "Paid", "value": "500" },
          { "title": "Pending", "value": "500" },
          { "title": "Overdue", "value": "0" },
        ]
      },
      {
        "type": "table",
        "title": "Maintenance Requests",
        "columns": ["Date", "Description", "Status"],
        "rows": [
          ["2022-01-01", "Broken window", "Pending"],
          ["2022-01-15", "Clogged drain", "Completed"]
        ]
      },
      {
        "type": "calendar",
        "title": "Meeting Schedule",
        "events": [
          {
            "name": "Dorm Meeting",
            "start_time": "2022-01-15T19:00:00",
            "end_time": "2022-01-15T20:00:00"
          }
        ]
      }
    ]
  },
  student: {
    "widgets": [
      {
        "type": "card",
        "title": "My Room",
        "content": "Room number: 123\r\nBuilding: A\nFloor: 3"
      },
      {
        "type": "table",
        "title": "Maintenance Requests",
        "columns": ["Date", "Description", "Status"],
        "rows": [
          ["2022-01-01", "Broken window", "Pending"],
          ["2022-01-15", "Clogged drain", "Completed"]
        ]
      },
      {
        "type": "calendar",
        "title": "Upcoming Events",
        "events": [
          {
            "name": "Study Group",
            "start_time": "2022-01-01T18:00:00",
            "end_time": "2022-01-01T20:00:00"
          },
          {
            "name": "Dorm Meeting",
            "start_time": "2022-01-15T19:00:00",
            "end_time": "2022-01-15T20:00:00"
          }
        ]
      }
    ]
  },


  parent: {
    "widgets": [
      {
        "type": "card",
        "title": "My Student",
        "content": "Name: John Smith\nRoom number: 123\nBuilding: A\nFloor: 3"
      },
      {
        "type": "table",
        "title": "Leave Requests",
        "columns": ["Date", "Reason", "Status"],
        "rows": [
          ["2022-01-01", "Sick", "Approved"],
          ["2022-01-15", "Personal", "Pending"]
        ]
      },
      {
        "type": "table",
        "title": "Health Records",
        "columns": ["Date", "Symptoms", "Diagnosis"],
        "rows": [
          ["2022-01-01", "Fever, cough", "Influenza"],
          ["2022-01-15", "Headache", "Migraine"]
        ]
      }
    ]
  },
};
