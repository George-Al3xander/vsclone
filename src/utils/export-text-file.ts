export const exportTextFile = ({
    content,
    fileName = "file",
    fileExtension = "txt",
}: {
    content: string;
    fileName?: string;
    fileExtension?: string;
}): boolean => {
    const file = new File(
        [content],
        `${fileName.length > 0 ? fileName : "file"}.${fileExtension}`,
        {
            type: "text/plain",
        },
    );
    try {
        const link = document.createElement("a");
        const url = URL.createObjectURL(file);

        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};
