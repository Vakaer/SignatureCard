import logoOne from "../../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-1.png";
import logoTwo from "../../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-2.png";
import logoThree from "../../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-3.png";
import logoFour from "../../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-4.png";
import logoFive from "../../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-5.png";
import logoSix from "../../../assets/cards/CardColorSelectionPage/CardLogo/logo-card-6.png";

import bgGreen from "../../../assets/cards/CardColorSelectionPage/background/bg-depp-green.png";
import bgRoseGold from "../../../assets/cards/CardColorSelectionPage/background/bg-rose-gold.png";
import bgSeaBlue from "../../../assets/cards/CardColorSelectionPage/background/bg-sea-blue.png";
import bgShinyBlack from "../../../assets/cards/CardColorSelectionPage/background/bg-shiny-black.png";
import bgShinyBlue from "../../../assets/cards/CardColorSelectionPage/background/bg-shiny-blue.png";
import bgShinyGold from "../../../assets/cards/CardColorSelectionPage/background/bg-shiny-gold.png";

import borderOne from "../../../assets/cards/CardColorSelectionPage/Borders/border-card-1.png";
import borderTwo from "../../../assets/cards/CardColorSelectionPage/Borders/border-card-2.png";
import borderThree from "../../../assets/cards/CardColorSelectionPage/Borders/border-card-3.png";
import chipOne from "../../../assets/cards/CardColorSelectionPage/Borders/chip-card-1.png";
import chipTwo from "../../../assets/cards/CardColorSelectionPage/Borders/chip-card-2.png";

const ROSE_GOLD = "#B76E79";
const SHINY_GOLD = "#FFDD43";
const SHINY_BLACK = "#262525";
const DEEP_GREEN = "#144F53";
const SHINY_BLUE = "#0096FF";
const SEA_BLUE = "#003C5F";

export interface ICardColorsData{
	id:number,
	color: string,
	name:string,
	background: string
}

export const CardColorsData: ICardColorsData[] = [
	{
		id: 1,
		color: ROSE_GOLD,
		name: "ROSE GOLD",
		background: bgRoseGold,
	},
	{
		id: 2,
		color: SHINY_GOLD,
		name: "SHINY GOLD",
		background: bgShinyGold,
	},
	{
		id: 3,
		color: SHINY_BLACK,
		name: "SHINY BLACK",
		background: bgShinyBlack,
	},
	{
		id: 4,
		color: DEEP_GREEN,
		name: "DEEP GREEN",
		background: bgGreen,
	},
	{
		id: 5,
		color: SHINY_BLUE,
		name: "SHINY BLUE",
		background: bgShinyBlue,
	},
	{
		id: 6,
		color: SEA_BLUE,
		name: "SEA BLUE",
		background: SEA_BLUE,
	},
];
export const CardBgImageData: { id: number; background: string }[] = [
	{
		id: 1,
		background: bgRoseGold,
	},
	{
		id: 2,
		background: bgShinyGold,
	},
	{
		id: 3,
		background: bgShinyBlack,
	},
	{
		id: 4,
		background: bgGreen,
	},
	{
		id: 5,
		background: bgShinyBlue,
	},
	{
		id: 6,
		background: bgSeaBlue,
	},
];
export const CardBorderData: { id: number; border: string }[] = [
	{
		id: 1,
		border: borderOne,
	},
	{
		id: 2,
		border: borderTwo,
	},
	{
		id: 3,
		border: borderThree,
	},
];
export const CardChipData: { id: number; chip: string }[] = [
	{
		id: 1,
		chip: chipOne,
	},
	{
		id: 2,
		chip: chipTwo,
	},
];
