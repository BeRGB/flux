import ador from './pages/ador.json';
import beamo from './pages/beamo.json';
import beambox from './pages/beambox.json';
import beamboxII from './pages/beambox-ii.json';
import beamboxPro from './pages/beambox-pro.json';
import hexa from './pages/hexa.json';
import promark from './pages/promark.json';
import beamAir from './pages/beam-air.json';
import beamStudio from './pages/beam-studio.json';
import type { PageBlockEntry } from './pageTypes';

export const productBlocks: Record<string, PageBlockEntry[]> = {
	ador: ador as PageBlockEntry[],
	beamo: beamo as PageBlockEntry[],
	beambox: beambox as PageBlockEntry[],
	'beambox-ii': beamboxII as PageBlockEntry[],
	'beambox-pro': beamboxPro as PageBlockEntry[],
	hexa: hexa as PageBlockEntry[],
	promark: promark as PageBlockEntry[],
	'beam-air': beamAir as PageBlockEntry[],
	'beam-studio': beamStudio as PageBlockEntry[],
};
