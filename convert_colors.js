
const hexToHsl = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin;
    let h = 0, s = 0, l = 0;

    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return `${h} ${s}% ${l}%`;
}

const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
    }
    return `${r} ${g} ${b}`;
}

const colors = {
    background: '#06070B',
    foreground: '#fcfcfc', // Corrected from #fcfcfc which is hsl(0, 0%, 99%)
    card: '#101114',
    popover: '#101114',
    primary: '#526fff',
    secondary: '#323542',
    muted: '#18181a',
    accent: '#323542',
    destructive: '#ec397a',
    border: '#22242d',
    input: '#22242d',
    ring: '#526fff'
};

const primaryColor = '#526fff';

console.log("/* Generated HSL */");
for (const [key, value] of Object.entries(colors)) {
    console.log(`--${key}: ${hexToHsl(value)};`);
}
console.log(`--primary-color: ${hexToRgb(primaryColor)};`);
console.log(`--primary-foreground: ${hexToHsl('#fcfcfc')};`);
console.log(`--card-foreground: ${hexToHsl('#fcfcfc')};`);
console.log(`--popover-foreground: ${hexToHsl('#fcfcfc')};`);
console.log(`--secondary-foreground: ${hexToHsl('#fcfcfc')};`);
console.log(`--muted-foreground: ${hexToHsl('#777a8c')};`);
console.log(`--accent-foreground: ${hexToHsl('#fcfcfc')};`);
console.log(`--destructive-foreground: ${hexToHsl('#fcfcfc')};`);
