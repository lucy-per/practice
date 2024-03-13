const solution = (id_pw, db) => {
    // id 확인 false면 fail
    const ids = db.map((e)=>e[0])
    const idIndex = ids.indexOf(id_pw[0])
    if (ids.some((e)=> e === id_pw[0]) === false) {
        return "fail"
    } else if (db[idIndex][1] === id_pw[1]) {
        return "login"
    } else return "wrong pw"
}