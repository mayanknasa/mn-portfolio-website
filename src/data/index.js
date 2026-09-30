import { PROFILE } from "./profile";
import { EXPERIENCE_DATA } from "./experience";
import { PROJECTS_DATA, LIVE_PROJECTS_DATA } from "./projects";
import { SKILLS_DATA } from "./skills";

export * from "./profile";
export * from "./experience";
export * from "./projects";
export * from "./skills";

// Backward-compatible aliases
export const NAV = PROFILE.nav;
export const STATS = PROFILE.stats;
export const ROLES = PROFILE.roles;
export const SKILLS = SKILLS_DATA;
export const EXP = EXPERIENCE_DATA;
export const PROJECTS = PROJECTS_DATA;
export const LIVE_PROJECTS = LIVE_PROJECTS_DATA;
