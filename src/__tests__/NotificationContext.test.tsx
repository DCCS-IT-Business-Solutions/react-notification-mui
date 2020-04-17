import * as React from "react";
import { render, screen, waitFor } from "../test/test-utils";
import { TestNotifications } from "../utils/TestNotifications";
import userEvent from "@testing-library/user-event";

test("NotificationContext component should render", async () => {
  const { container } = render(<TestNotifications />);

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-text"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Show Info Notification
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <br />
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-text"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Show Warning Notification
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <br />
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-text"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Show Error Notification
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <br />
        <button
          class="MuiButtonBase-root MuiButton-root MuiButton-text"
          tabindex="0"
          type="button"
        >
          <span
            class="MuiButton-label"
          >
            Show Custom Notification
          </span>
          <span
            class="MuiTouchRipple-root"
          />
        </button>
        <br />
      </div>
    </div>
  `);

  // const warningButton = screen.findByRole("button", {
  //   name: /show warning notification/i,
  // });
  // const errorButton = screen.findByRole("button", {
  //   name: /show error notification/i,
  // });
  // const customButton = screen.findByRole("button", {
  //   name: /show custom notification/i,
  // });
});

test("should show info notification and dissapear automatically", async () => {
  render(<TestNotifications />, {
    notificationContextProps: {
      infoProps: {
        autoHideDuration: 200,
        transitionDuration: 0,
        enableClickAway: true,
      },
    },
  });
  const infoButton = screen.getByRole("button", {
    name: /show info notification/i,
  });
  userEvent.click(infoButton);

  const infoNotification = await screen.findByText(
    /This is an Info Notification. This part is the text part!/i
  );

  expect(infoNotification).not.toBeNull();

  await waitFor(() =>
    expect(
      screen.queryByText(
        /This is an Info Notification. This part is the text part!/i
      )
    ).toBeNull()
  );
});

test("should show warning notification and dissapear automatically", async () => {
  render(<TestNotifications />, {
    notificationContextProps: {
      warningProps: {
        autoHideDuration: 200,
        transitionDuration: 0,
        enableClickAway: true,
      },
    },
  });
  const infoButton = screen.getByRole("button", {
    name: /show warning notification/i,
  });
  userEvent.click(infoButton);

  const infoNotification = await screen.findByText(
    /This is an Warning Notification/i
  );

  expect(infoNotification).not.toBeNull();

  await waitFor(() =>
    expect(screen.queryByText(/This is an Warning Notification/i)).toBeNull()
  );
});

test("should show error notification and dissapear automatically", async () => {
  render(<TestNotifications />, {
    notificationContextProps: {
      errorProps: {
        autoHideDuration: 200,
        transitionDuration: 0,
        enableClickAway: true,
      },
    },
  });
  const infoButton = screen.getByRole("button", {
    name: /show error notification/i,
  });
  userEvent.click(infoButton);

  const infoNotification = await screen.findByText(
    /This is an Error Notification/i
  );

  expect(infoNotification).not.toBeNull();

  await waitFor(() =>
    expect(screen.queryByText(/This is an Error Notification/i)).toBeNull()
  );
});
