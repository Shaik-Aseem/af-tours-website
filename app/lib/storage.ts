import fs from "fs/promises";
import path from "path";

export interface EnquiryRecord {
  id: string;
  name: string;
  email?: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  time: string;
  ipAddress?: string;
  createdAt: string;
}

/**
 * Storage Interface for AF Tours Enquiries.
 * Email is the primary delivery mechanism.
 * Local file/SQLite storage is used for development backup.
 * On Vercel / Serverless read-only filesystems, local file writes are bypassed.
 */
export async function saveEnquiryBackup(record: EnquiryRecord): Promise<void> {
  // If running in Vercel or serverless environment, local filesystem writing is not persistent.
  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    // Recommend PostgreSQL / Supabase for persistent production database storage
    // Example: await supabase.from('enquiries').insert(record);
    return;
  }

  try {
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "enquiries.json");

    await fs.mkdir(dataDir, { recursive: true });

    let existing: EnquiryRecord[] = [];
    try {
      const content = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(content);
    } catch {
      existing = [];
    }

    existing.unshift(record);
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.warn("Local storage backup notice (bypassed on read-only system):", err);
  }
}
