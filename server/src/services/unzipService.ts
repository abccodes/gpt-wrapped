import unzipper from "unzipper";
import stream from "stream";

export const extractJsonFromZip = async (zipBuffer: Buffer): Promise<any> => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(zipBuffer);

  const zip = bufferStream.pipe(unzipper.Parse({ forceStream: true }));

  for await (const entry of zip) {
    if (entry.path === "conversations.json") {
      const content = await entry.buffer();
      return JSON.parse(content.toString("utf-8"));
    } else {
      entry.autodrain();
    }
  }

  throw new Error("conversations.json not found in ZIP");
};
