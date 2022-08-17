import type { RawMember } from "./guilds";
import type { PremiumTypes } from "../Constants";

// avatar_decoration, (self) bio
export interface RESTUser {
	accent_color?: number | null;
	avatar: string | null;
	banner?: string | null;
	bot?: boolean;
	discriminator: string;
	email?: string | null;
	flags?: number;
	id: string;
	locale?: string;
	member?: RawMember;
	mfa_enabled?: boolean;
	premium_type?: PremiumTypes;
	public_flags?: number;
	system?: boolean;
	username: string;
	verified?: boolean;
}
export type RawUser = Pick<RESTUser, "id" | "username" | "discriminator" | "avatar" | "bot" | "system" | "banner" | "accent_color"> & Required<Pick<RESTUser, "public_flags">>;
export type RawUserWithMember = RawUser & Pick<RESTUser, "member">;
export type RawExtendedUser = Pick<RESTUser, "id" | "username" | "discriminator" | "avatar" | "bot" | "system"> & Required<Pick<RESTUser, "banner" | "accent_color" | "locale" | "mfa_enabled" | "email" | "verified" | "flags" | "public_flags">>;

export interface EditSelfUserOptions {
	avatar?: Buffer | string | null;
	username?: string;
}

export interface CreateGroupChannelOptions {
	accessTokens: Array<string>;
	nicks?: Record<string, string>;
}
