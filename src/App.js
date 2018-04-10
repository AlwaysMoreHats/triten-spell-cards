import React, { Component } from 'react';
import './App.css';
import SpellCard from './components/SpellCard'

const spellCardData = [{
  name: 'Lightning Bolt I',
  level: 4,
  mp: 6,
  range: '50 feet',
  duration: 'Instant',
  target: '1 target',
  defense: 'Dodge',
  effect: 'Lightning Bolt I fires a bolt of lightning at the target, dealing 2d4+Wisdom damage. This damage ignores all DR.',
  school: 'Aeromancy',
  page: 110,
}, {
  name: 'Daze I',
  level: 5,
  mp: 7,
  range: '50 feet',
  duration: '1d4+2 rounds',
  target: '1 target',
  defense: 'Psychology',
  effect: 'Daze I puts a single target into a daze for 1d4+2 rounds. While dazed, the target is awake and conscious, but mostly unaware of his or her surroundings, as if lost in a daydream. The target will not react to anything he or she sees or hears. Loud noises or any physical force on the target will break the daze. Moving within 10 feet of the dazed target while in the target’s field of vision will also break the effect. If the target is aware of a potential threat or engaged in combat, the target gains a +4 bonus to Psychology to resist the spell.',
  school: 'Divination',
  page: 115,
}, {
  name: 'Ancient Blessing',
  level: 7,
  mp: 12,
  range: 'N/A',
  duration: '15 minutes',
  target: '1 target',
  defense: 'N/A',
  effect: 'Ancient Blessing gives the target a +1 bonus to any one attribute of your choosing. Multiple castings of this spell can be applied to a target at once to give bonuses to different attributes, but no single attribute can get more than a +1 bonus from this spell.',
  school: 'Druidism',
  page: 122,
}, {
  name: 'Sculpt Earth',
  level: 9,
  mp: 16,
  range: '50 feet',
  duration: '15 minutes',
  target: 'Cube (25 feet)',
  defense: 'N/A',
  effect: 'Sculpt Earth allows you to soften, harden, mold, and reshape up to a 25-foot cube (15,625 cubic feet) of stone, dirt, and sand. You cannot move any material more than 50 feet from its original location. This is a very slow process. You can mold 25 cubic feet of material per Standard Action. This process does not require you to physically touch the material, but you must be within 50 feet of the affected material. As soon as the effect of the spell ends, the material regains its original hardness. Reshaping stone may compromise the structural integrity of structures or caves. Reshaped sand and dirt will hold its new shape and position for the duration of the spell, then regain its normal softness (e.g. a tunnel made through a sand dune will cave in after the spell ends).',
  school: 'Geomancy',
  page: 132,
}, {
  name: 'Create Undead I',
  level: 4,
  mp: 12,
  range: 'N/A',
  duration: 'Sustained',
  target: '1 corpse',
  defense: 'N/A',
  effect: 'Create Undead I creates a Weak Zombie or Weak Skeleton (refer to the Bestiary chapter) under your command. This spell takes 5 minutes to cast. To create an undead creature, you must have the corpse of a deceased humanoid. You may use the remains of a previously destroyed undead creature to create a new one. You have a mental link with the undead creature and it obeys any simple command you give it. Giving a command to an undead creature you control is a Free Action. They can perform simple tasks; see page 137-138 for more details.',
  school: 'Necromancy',
  page: 137,
}, {
  name: 'Slow',
  level: 6,
  mp: 10,
  range: '50 feet',
  duration: '1d4+1 rounds',
  target: '1 target',
  defense: 'Constitution',
  effect: 'Slow binds the target with arcane energy, temporarily reducing the target’s speed for a short period of time. For the duration of the spell, the target can only make 1 action per turn instead of the normal 2. The target is also unable to make Opportune Actions for the duration of the spell.',
  school: 'Sorcery',
  page: 149,
}, {
  name: 'Cure I',
  level: 3,
  mp: 5,
  range: '25 feet',
  duration: 'Instant',
  target: '1 target',
  defense: 'N/A',
  effect: 'Cure I bathes the target in a warm glow of holy light and healing energy, restoring the target’s HP and healing minor injuries. You restore 1d6+Wisdom HP to the target.',
  school: 'Thaumaturgy',
  page: 153,
}]

const width = 240
const height = width * 7 / 5

class App extends Component {
  render() {
    const cards = spellCardData.map(d => <SpellCard {...d} width={width} height={height} key={d.name + d.school}/>)
    return (
      <div className="App">
        {cards}
      </div>
    );
  }
}

export default App;
