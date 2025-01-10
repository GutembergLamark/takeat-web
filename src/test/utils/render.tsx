/* eslint-disable @typescript-eslint/no-explicit-any */
import { Provider } from "@/context";
import { ToastProvider } from "@/components/general";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const providerRender = (ui: any, { ...renderOptions }) => {
  return render(
    <MemoryRouter>
      <ToastProvider>
        <Provider>{ui}</Provider>
      </ToastProvider>
    </MemoryRouter>,
    renderOptions,
  );
};
