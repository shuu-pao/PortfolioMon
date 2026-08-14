// Main-menu options. `unlockText` is shown when the option is still locked.
// `chat` is always unlocked so visitors can meet the AI guide without fighting.
export const menuOptionsBase = [
  { id: 'battle', label: 'BATTLE', unlockText: null },
  { id: 'chat', label: 'CHAT WITH AI', unlockText: null },
  { id: 'about', label: 'ABOUT ME & RESUME', unlockText: 'Defeat "TWO" to unlock ABOUT ME & RESUME.' },
  { id: 'professional', label: 'PROFESSIONAL EXPERIENCE', unlockText: 'Befriend "GHOST" to unlock PROFESSIONAL EXPERIENCE.' },
  { id: 'education', label: 'EDUCATION', unlockText: 'Defeat "DR. ZANGETSU" to unlock EDUCATION.' },
  { id: 'skills', label: 'SKILLS', unlockText: null },
  { id: 'projects', label: 'PERSONAL PROJECTS', unlockText: null },
  { id: 'contact', label: 'CONTACT', unlockText: null },
]

// Selectable bosses — one boss per locked section, so each boss unlocks exactly
// one section (a 1:1 map, matching the 3 gated menu buttons):
//   TWO          -> ABOUT ME                (defeat)
//   GHOST        -> PROFESSIONAL EXPERIENCE (befriend: ACT -> TALK -> TALK -> JOKE)
//   DR. ZANGETSU -> EDUCATION               (defeat, quiz fight)
// Killing GHOST chains into the unbeatable ASGORE follow-up fight (which unlocks
// nothing). SKILLS and PERSONAL PROJECTS have no boss at all — they're always
// unlocked (see unlockedSections init in useBattle).
export const bossOptions = [
  { id: 'hollow', label: 'TWO', locked: false },
  { id: 'ghost', label: 'GHOST', locked: false },
  { id: 'school', label: 'DR. ZANGETSU', locked: false },
]

// Menu background music — a single Persona playlist that loops, with a
// "NEXT SONG" control in AudioControls to skip ahead.
export const personaPlaylist = [
  { file: 'Persona 5 OST 69 - Sweet.mp3' },
  { file: 'Persona 5 OST 29 - Beneath the Mask.mp3' },
  { file: 'Persona 5 - Wake Up Get up Get Out There.mp3' },
  { file: 'Persona 4 OST - Heaven.mp3' },
  { file: 'Persona 5 Royal - No More What Ifs.mp3' },
  { file: 'Persona 5 OST 109 - With the Stars and Us (Hoshi to Bokura to).mp3' },
  { file: 'Persona 4 OST - Heartbeat Heartbreak.mp3' },
]

// Opening track index — always starts on "Beneath the Mask" rather than the
// playlist's first track.
export const DEFAULT_TRACK_INDEX = personaPlaylist.findIndex(
  (track) => track.file === 'Persona 5 OST 29 - Beneath the Mask.mp3'
) || 0

// Section ids that a battle or the browse-bypass can unlock. `chat` is always
// available and is intentionally excluded here.
export const UNLOCKABLE_SECTIONS = ['about', 'professional', 'education', 'skills', 'projects']

// Star row on the main menu — one star per boss, listed in BOSS ORDER so the
// row doubles as a boss-progress tracker. Slot N lights when boss N is beaten
// (or befriended, for GHOST). The slot `id` is the section that boss unlocks:
//   TWO          (slot 1) -> ABOUT ME
//   GHOST        (slot 2) -> PROFESSIONAL EXPERIENCE  (befriend: TALK/JOKE)
//   DR. ZANGETSU (slot 3) -> EDUCATION
// A star lights only on a LEGIT battle win (CALL REINFORCEMENTS and the
// browse-bypass earn none).
export const STAR_SLOTS = [
  { id: 'about', label: 'TWO' },
  { id: 'professional', label: 'GHOST' },
  { id: 'education', label: 'DR. ZANGETSU' },
]
