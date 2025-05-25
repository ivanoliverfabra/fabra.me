"use server";

import { headers } from "next/headers";

interface WebhookData {
  name: string;
  email: string;
  message: string;
}

interface SuccessfulWebhookResult {
  success: true;
}

interface FailedWebhookResult {
  success: false;
  error: string;
}

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "fabra.me";
const APP_URL = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const BOT_USERNAME = "fabra.me - Contact Form Bot";

export async function submitWebhook(
  data: WebhookData,
): Promise<SuccessfulWebhookResult | FailedWebhookResult> {
  const webhookUrlFromEnv = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrlFromEnv) {
    console.error(
      "DISCORD_WEBHOOK_URL not configured in environment variables.",
    );
    return {
      success: false,
      error: "Discord webhook URL not configured on the server.",
    };
  }

  let webhookUrl = webhookUrlFromEnv;
  if (webhookUrl.includes("?")) {
    webhookUrl += "&with_components=true";
  } else {
    webhookUrl += "?with_components=true";
  }

  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "User-Agent Not Found";
  const referer = headersList.get("referer") ?? "Referer Not Found";
  const submissionTimestamp = new Date();

  const containerComponents = [];

  let appInfoContent = `**Sent via:** ${APP_NAME}`;
  if (APP_URL) {
    appInfoContent += ` ([Visit Site](${APP_URL}))`;
  }
  containerComponents.push({ type: 10, content: appInfoContent }); // text display
  containerComponents.push({ type: 14, divider: false, spacing: 1 }); // separator (small spacing, no line)

  // 2. title (replaces embed title)
  containerComponents.push({
    type: 10, // text display
    content: `# 📬 New Contact Form Submission`, // markdown h1 for title
  });

  // 3. description (replaces embed description)
  containerComponents.push({
    type: 10, // text display
    content: `A new message has been received from **${data.name || "N/A"}**.`,
  });

  containerComponents.push({ type: 14, divider: true, spacing: 1 }); // separator

  // 4. fields (replaces embed fields)
  containerComponents.push({
    type: 10,
    content: `**👤 Name:** ${data.name || "N/A"}`,
  });
  containerComponents.push({
    type: 10,
    content: `**📧 Email:** [${data.email || "N/A"}](mailto:${data.email})`,
  });

  containerComponents.push({ type: 14, divider: true, spacing: 1 }); // separator

  // 5. message content
  containerComponents.push({
    type: 10,
    content: `**📄 Message:**\n${data.message
      ? data.message.substring(0, 1000) + // keep message within reasonable limits for a text display
      (data.message.length > 1000 ? "..." : "")
      : "No message provided."
      }`,
  });

  containerComponents.push({ type: 14, divider: true, spacing: 1 }); // separator

  // 6. analytical info
  containerComponents.push({
    type: 10,
    content: `**💻 User Agent:**\n\`\`\`\n${userAgent.substring(0, 950)}\n\`\`\``, // truncate for code block
  });
  containerComponents.push({
    type: 10,
    content: `**🔗 Referer:** ${referer !== "Referer Not Found" ? `\`${referer}\`` : referer
      }`,
  });

  containerComponents.push({ type: 14, divider: true, spacing: 1 }); // separator

  // 7. footer (replaces embed footer and timestamp)
  containerComponents.push({
    type: 10, // text display
    content: `*Submitted: ${submissionTimestamp.toLocaleString()}*`,
  });

  const discordPayload = {
    username: BOT_USERNAME,
    // avatar_url: BOT_AVATAR_URL,
    flags: 1 << 15, // 32768, this is the IS_COMPONENTS_V2 flag
    components: [
      {
        type: 17,
        accent_color: 0x3498db,
        components: containerComponents,
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Discord webhook V2 components failed: ${response.status} ${response.statusText}`,
        errorBody,
      );
      return {
        success: false,
        error: `Discord API Error: ${response.statusText} (Status: ${response.status}). Details: ${errorBody}`,
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Webhook V2 components submission error:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred.",
    };
  }
}