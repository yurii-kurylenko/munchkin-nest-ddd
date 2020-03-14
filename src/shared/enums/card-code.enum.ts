export enum MonsterCardCode { M1 = "M1", M2 = "M2", M3 = "M3", M4 = "M4", M5 = "M5", M6 = "M6", M7 = "M7" }

export enum CurseCardCode { C1 = "C1", C2 = "C2", C3 = "C3", C4 = "C4", C5 = "C5", C6 = "C6", C7 = "C7" }

export enum KlassCardCode { K11 = "K11", K12 = "K12", K21 = "K21", K22 = "K22", K31 = "K31", K32 = "K32", K41 = "K41", K42 = "K42" }

export enum RaceCardCode { R11 = "R11", R12 = "R12", R21 = "R21", R22 = "R", R31 = "R31", R32 = "R32", R41 = "R41", R42 = "R42" }

export enum BuffCardCode { B1 = "B1", B2 = "B2", B3 = "B3", B4 = "B4", B5 = "B5" }

export enum EquipmentCardCode { E1 = "E1", E2 = "E2" }

export enum PoisonCardCode { P1 = "P1", P2 = "P2" }

export type TreasureCardCode = EquipmentCardCode | PoisonCardCode;

export type DoorCardCode = MonsterCardCode | CurseCardCode | BuffCardCode | RaceCardCode | KlassCardCode;

export type CardCode = DoorCardCode | TreasureCardCode;
