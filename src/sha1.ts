import crypto from "crypto";

export default async function sha1(message: string) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  // TODO: Fix any
  const hashBuffer: any = crypto
    .createHash("sha1")
    .update(msgUint8)
    .digest("hex"); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}
