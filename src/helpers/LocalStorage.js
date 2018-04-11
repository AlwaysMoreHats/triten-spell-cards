const SPELL_DATA = 'spellData'

const saveSpellData = jsonString => localStorage.setItem(SPELL_DATA, jsonString)
const getSpellData = () => localStorage.getItem(SPELL_DATA)

export { getSpellData, saveSpellData }