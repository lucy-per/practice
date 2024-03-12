const solution = (spell, dic) => {
    const spells = spell.sort().join("")
    const dics = dic.map((a)=>[...a].sort().join(""))
    return dics.filter((a)=> a === spells).length >= 1 ? 1 : 2
}