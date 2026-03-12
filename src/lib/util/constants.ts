import type { DiscordStatus, LanyardData } from "$lib/types/lanyard";

export const DATE_OF_BIRTH = new Date("2000-11-22");

export const DISCORD_STATUS_COLORS = {
  online: "bg-green-500",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
};

export const DISCORD_STATUS_MAPPINGS = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
} as const satisfies Record<DiscordStatus, string>;

export const DISCORD_USER_ID = "247830371654303744";

export const LANYARD_API_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`;

export const LANYARD_OFFLINE_FALLBACK: LanyardData = {
  active_on_discord_desktop: false,
  active_on_discord_mobile: false,
  active_on_discord_web: false,
  activities: [],
  discord_status: "offline",
  discord_user: {
    avatar: "",
    discriminator: "0",
    display_name: "",
    id: DISCORD_USER_ID,
    public_flags: 0,
    username: "",
  },
  kv: {},
  listening_to_spotify: false,
  spotify: null,
};

export const LANYARD_WS_URL = "wss://api.lanyard.rest/socket";

export const SOCIAL_LINKS = {
  Email: "mailto:kaitossphan@gmail.com",
} as const;
