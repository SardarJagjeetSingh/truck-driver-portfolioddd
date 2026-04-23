import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Inquiry {
    id: bigint;
    name: string;
    email: string;
    company?: string;
    serviceInterest: ServiceInterest;
    message: string;
    timestamp: Time;
}
export interface UserProfile {
    name: string;
}
export enum ServiceInterest {
    hostingAndDomain = "hostingAndDomain",
    softwareDevelopment = "softwareDevelopment",
    itConsulting = "itConsulting",
    aiAutomation = "aiAutomation",
    websiteBuilding = "websiteBuilding"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    findInquiriesByName(searchTerm: string): Promise<Array<Inquiry>>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getInquiry(id: bigint): Promise<Inquiry>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitInquiry(name: string, email: string, company: string | null, serviceInterest: ServiceInterest, message: string): Promise<void>;
}
