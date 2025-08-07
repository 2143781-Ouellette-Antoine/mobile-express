const sliderDefaults: Record<string, [number, number]> = {
    rangeHauteurMm: [80, 200],
    rangeLargeurMm: [40, 100],
    rangeEpaisseurMm: [1, 40],
    rangePoidsG: [50, 250],
    rangeTailleEcranPouces: [5, 12],
    rangeTauxRafraichissementHz: [60, 120],
    rangeResolutionLargeurPixels: [640, 3840],
    rangeResolutionHauteurPixels: [480, 2160],
    rangeVitessePuceGhz: [1, 5],
    rangeMemoireViveGb: [1, 16],
    rangeStockageGb: [8, 2048],
    rangeCapaciteBatterieMah: [1000, 10000],
};

export default sliderDefaults;