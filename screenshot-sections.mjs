// screenshot-sections.mjs — captura cada seção via puppeteer local
// Rode: node screenshot-sections.mjs

import { execSync } from 'child_process'
import { existsSync, mkdirSync } from 'fs'
import path from 'path'

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const OUT_DIR = 'C:\\Temp\\ss'
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

const sections = [
  { id: 'hero',     y: 0 },
  { id: 'video',    y: 950 },
  { id: 'features', y: 1800 },
  { id: 'pricing',  y: 2700 },
]

for (const s of sections) {
  const url = `http://localhost:5173`
  const out = path.join(OUT_DIR, `${s.id}.png`)
  const cmd = `"${CHROME}" --headless=old --disable-gpu --screenshot="${out}" --window-size=1280,900 "${url}"`
  try { execSync(cmd, { timeout: 15000 }) } catch(e) {}
  console.log(s.id, existsSync(out) ? '✓' : '✗')
}
