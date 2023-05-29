//textConverter
const textConverter = (type, text) => {

    const conversionMap = {
        a: "а",
        b: "б",
        v: "в",
        g: "г",
        d: "д",
        gj: "ѓ",
        e: "е",
        zh: "ж",
        z: "з",
        dz: "ѕ",
        i: "и",
        j: "ј",
        k: "к",
        l: "л",
        lj: "љ",
        m: "м",
        n: "н",
        nj: "њ",
        o: "о",
        p: "п",
        r: "р",
        s: "с",
        t: "т",
        kj: "ќ",
        u: "у",
        f: "ф",
        h: "х",
        c: "ц",
        ch: "ч",
        dzh: "џ",
        sh: "ш",

    };

    for(let c in conversionMap){
        let regex;
        switch (type) {
            case 'cyr2lat':
                regex = new RegExp(`${conversionMap[c]}`, 'g');
                text = text.replace(regex, c);
                break;
            case 'lat2cyr':
                regex = new RegExp(`${c}`, 'g');
                text = text.replace(regex, conversionMap[c]);
                break;
            default:
                break;
        }
    }

    return text;
}

//textStats
const textStats = (text) => {
    if(typeof text !== "string") return;

    // {
    //     bukvi:0,
    //     zborovi:0,
    //     rechenici:0,
    //     gt5:0,
    //     lt5:0,
    //     eq5:0
    // }

    let resObj = {
        bukvi:0,
        zborovi:0,
        rechenici:0,
        gt5:0,
        lt5:0,
        eq5:0
    }

    resObj.bukvi = text.length;
    resObj.zborovi = text.split(" ").length;
    resObj.rechenici = text.split(".").length;

    let zborovi = text.split(" ");
    for(let zbor of zborovi){
        console.log(zbor);
        if(zbor.length > 5) resObj.gt5++;
        if(zbor.length < 5) resObj.lt5++;
        if(zbor.length === 5) resObj.eq5++;
    }

    return resObj;
}

module.exports = {
textConverter,
textStats
}