import * as React from "react";
import { create } from "react-test-renderer";
import { NotificationContextProvider } from "../NotificationContext";

test("NotificationContext component should render", async () => {
  const component = create(
    <NotificationContextProvider>
      <div>test</div>
    </NotificationContextProvider>
  );
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
});
