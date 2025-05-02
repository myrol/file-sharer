import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.resolve("./public", "test.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  const response = new Response(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=meine-datei.pdf"
    }
  });
  return response;
}
