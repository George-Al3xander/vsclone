import React from "react";
import { FileManagerDropdown } from "@/components/file/file-manager-menu";
import { render, screen } from "@testing-library/react";
import { fileManagerDialogs } from "@/constants/data";
import { userEvent } from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { atomBooleanOptions } from "@/components/file/settings-sub-menu";

const setup = () => {
  render(
    <RecoilRoot>
      <FileManagerDropdown />
    </RecoilRoot>,
  );
  const trigger_button = screen.getByRole("button", { name: "Open settings" });

  return { trigger_button };
};

describe("file-manager-menu", () => {
  describe("Render", () => {
    it("should render the trigger", () => {
      const { trigger_button } = setup();
      expect(trigger_button).toBeInTheDocument();
    });
  });

  describe("Behavior", () => {
    it("should not render the menu items before the click", () => {
      setup();

      Object.keys(fileManagerDialogs).forEach((obj) => {
        const item = screen.queryByText(new RegExp(obj, "i"));
        expect(item).not.toBeInTheDocument();
      });
    });
    it("should  render the menu items after the click", async () => {
      const renders = [];
      const { trigger_button } = setup();
      await userEvent.click(trigger_button);

      Object.keys(fileManagerDialogs).forEach((obj) => {
        const item = screen.queryByText(new RegExp(obj, "i"));
        renders.push(item);
      });

      const ghLink = screen.getByText(new RegExp("github", "i"));
      renders.push(ghLink);

      const settings = screen.getByText("Settings");
      renders.push(settings);

      renders.forEach((item) => expect(item).toBeInTheDocument());
    });
    for (const obj of Object.keys(fileManagerDialogs)) {
      it(`should  open the ${obj} dialog after menu option click`, async () => {
        const { trigger_button } = setup();
        await userEvent.click(trigger_button);
        const item = screen.getByText(new RegExp(obj, "i"));
        await userEvent.click(item);
        const dialogTitle = screen.getByText(new RegExp(`${obj} file`, "i"));
        expect(dialogTitle).toBeInTheDocument();
      });
    }
  });
});
