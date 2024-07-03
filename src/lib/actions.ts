import { CodeService } from "@/lib/services/code.service";

const { executeCode, exportCode, importCode } = new CodeService();

// const importCode = (
//   e: React.ChangeEvent<HTMLInputElement>,
// ): ((assigmentCallback: (code: string) => void) => void) => {
//   return (assigmentCallback) => {
//     //let code: string = "test";
//     const { files } = e.target;
//     if (!files) return;
//     const fr = new FileReader();
//     const file = files[0];
//     const split = file.name.split(".");
//     //const fileName = split[0];
//     //const ext = split[split.length - 1];
//
//     fr.onload = function (event) {
//       if (!event.target) return;
//       assigmentCallback(event.target.result as string);
//     };
//     fr.readAsText(file);
//   };
// };

export { executeCode, importCode, exportCode };
