function properlyCapitalizeFusionName(string) {
  //capitalize only the first letter (works for most fusions)
  const processedString =
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  //if there's a space in the middle of the string, capitalize the following letter.
  //doing this first ensures Mr. Jr. is capitalized properly instead of trying to capitalize the space before Jr.
  const i1 = processedString.indexOf(" ");
  if (i1 > 0) {
    return (
      processedString.substring(0, i1 + 1) +
      processedString[i1 + 1].toUpperCase() +
      processedString.substring(i1 + 2)
    );
  }

  //if there's a '.' in the middle of the string, return the string with the following character capitalized
  const i2 = processedString.indexOf(".");
  if (i2 > 0 && i2 < processedString.length - 1) {
    return (
      processedString.substring(0, i2 + 1) +
      processedString[i2 + 1].toUpperCase() +
      processedString.substring(i2 + 2)
    );
  }

  return processedString;
}
function getFusedNames(num1, num2) {
  if (num1 === num2) {
    //fusing a pokemon with the same species usually doesn't give a new name
    //there are exceptions (e.g. Shelgon/Shelgon = Shellgon)
    //simply removing this return statement should allow you to display those if desired
    //but I haven't tested it much outside of Shellgon
    return ["", ""];
  }

  try {
    let prefix1 = fusionNameParts[num1 - 1][0];
    let prefix2 = fusionNameParts[num2 - 1][0];
    let suffix1 = fusionNameParts[num1 - 1][1];
    let suffix2 = fusionNameParts[num2 - 1][1];

    /*"If the last character of the first half and the first character of the second half of a fusion name is the same, the duplicate letter is removed."
    - NakaMagic#0774
    I have confirmed that if both Pokemon have double letters it still removes only one e.g. SMOOchum + glOOM = Smooom
    */

    if (prefix1.charAt(prefix1.length - 1) === suffix2.charAt(0))
      suffix2 = suffix2.slice(1);
    if (prefix2.charAt(prefix2.length - 1) === suffix1.charAt(0))
      suffix1 = suffix1.slice(1);

    if (prefix1.charAt(prefix1.length - 1) === ".") suffix2;

    //if part of the name is missing, leave the whole name blank
    //insert a space so a new line is still made, to keep everything else aligned in case one name is working
    const normalOrder =
      prefix1 === "" || suffix2 === ""
        ? "&nbsp;"
        : properlyCapitalizeFusionName(`${prefix1}${suffix2}`);
    const reverseOrder =
      prefix2 === "" || suffix1 === ""
        ? "&nbsp;"
        : properlyCapitalizeFusionName(`${prefix2}${suffix1}`);

    return [normalOrder, reverseOrder];
  } catch {
    return ["&nbsp;", "&nbsp;"]; //simply leave blank if any unexpected error occurs
  }
}

//data up to Kyurem was posted in Discord in 2020 by chardub#7050
//the rest was gathered by me (Exadi) by encountering them ingame or in screenshots on Discord

const fusionNameParts = [
  ["BULBA", "SAUR"],
  ["IVY", "SAUR"],
  ["VENU", "SAUR"],
  ["CHAR", "MANDER"],
  ["CHAR", "MELEON"],
  ["CHAR", "IZARD"],
  ["SQUIRT", "TLE"],
  ["WAR", "TORTLE"],
  ["BLAST", "TOISE"],
  ["CATER", "PIE"],
  ["META", "POD"],
  ["BUTTER", "FREE"],
  ["WEE", "DLE"],
  ["KAK", "UNA"],
  ["BEE", "DRILL"],
  ["PID", "GEY"],
  ["PIDGE", "OTTO"],
  ["PID", "GEOT"],
  ["RAT", "TATA"],
  ["RAT", "ICATE"],
  ["SPEAR", "ROW"],
  ["FEAR", "ROW"],
  ["EK", "ANS"],
  ["AR", "BOK"],
  ["PIKA", "CHU"],
  ["RAI", "CHU"],
  ["SAND", "SHREW"],
  ["SAND", "SLASH"],
  ["NIDO", "RAN"],
  ["NIDO", "RINA"],
  ["NIDO", "QUEEN"],
  ["NIDO", "RAN"],
  ["NIDO", "RINO"],
  ["NIDO", "KING"],
  ["CLEF", "FAIRY"],
  ["CLEF", "FABLE"],
  ["VUL", "PIX"],
  ["NINE", "TALES"],
  ["JIGGLY", "PUFF"],
  ["WIGGLY", "TUFF"],
  ["ZU", "BAT"],
  ["GOL", "BAT"],
  ["ODD", "ISH"],
  ["GLOO", "OOM"],
  ["VILE", "PLUME"],
  ["PA", "RAS"],
  ["PARA", "SECT"],
  ["VENO", "NAT"],
  ["VENO", "MOTH"],
  ["DIG", "LETT"],
  ["DUG", "TRIO"],
  ["MEOW", "TH"],
  ["PER", "SIAN"],
  ["PSY", "DUCK"],
  ["GOL", "DUCK"],
  ["MAN", "KEY"],
  ["PRIME", "APE"],
  ["GROWL", "LITHE"],
  ["ARCA", "NINE"],
  ["POLI", "WAG"],
  ["POLI", "WHIRL"],
  ["POLI", "WRATH"],
  ["AB", "RA"],
  ["KADA", "BRA"],
  ["ALA", "KAZAM"],
  ["MA", "CHOP"],
  ["MA", "CHOKE"],
  ["MA", "CHAMP"],
  ["BELL", "SPROUT"],
  ["WEEPIN", "BELL"],
  ["VICTREE", "BELL"],
  ["TENTA", "COOL"],
  ["TENTA", "CRUEL"],
  ["GEO", "DUDE"],
  ["GRAVE", "LER"],
  ["GO", "LEM"],
  ["PONY", "TA"],
  ["RAPI", "DASH"],
  ["SLOW", "POKE"],
  ["SLOW", "BRO"],
  ["MAGNE", "MITE"],
  ["MAGNE", "TON"],
  ["FAR", "FETCHD"],
  ["DO", "DUO"],
  ["DO", "DRIO"],
  ["SEE", "EEL"],
  ["DEW", "GONG"],
  ["GRI", "MER"],
  ["MU", "UK"],
  ["SHELL", "DER"],
  ["CLOY", "STER"],
  ["GAS", "TLY"],
  ["HAUN", "TER"],
  ["GEN", "GAR"],
  ["ON", "NIX"],
  ["DROW", "ZEE"],
  ["HYP", "NO"],
  ["KRAB", "BY"],
  ["KING", "LER"],
  ["VOLT", "ORB"],
  ["ELECTR", "ODE"],
  ["EXEGG", "CUTE"],
  ["EXEGG", "UTOR"],
  ["CU", "BONE"],
  ["MARO", "WAK"],
  ["HITMON", "LEE"],
  ["HITMON", "CHAN"],
  ["LICKI", "TUNG"],
  ["KOFF", "FING"],
  ["WEE", "ZING"],
  ["RHY", "HORN"],
  ["RHY", "DON"],
  ["CHAN", "SEY"],
  ["TAN", "GELA"],
  ["KANGAS", "KHAN"],
  ["HOR", "SEA"],
  ["SEA", "DRA"],
  ["GOL", "DEEN"],
  ["SEA", "KING"],
  ["STAR", "YU"],
  ["STAR", "MIE"],
  ["MR.", "MIME"],
  ["SCY", "THER"],
  ["JYN", "NX"],
  ["ELECTA", "BUZZ"],
  ["MAG", "MAR"],
  ["PIN", "SIR"],
  ["TAU", "ROS"],
  ["MAGI", "KARP"],
  ["GYARA", "DOS"],
  ["LAP", "RAS"],
  ["DIT", "TO"],
  ["EE", "VEE"],
  ["VAPOR", "EON"],
  ["JOLT", "EON"],
  ["FLA", "REON"],
  ["PORY", "GON"],
  ["OMA", "NYTE"],
  ["OMA", "STAR"],
  ["KABU", "TO"],
  ["KABU", "TOPS"],
  ["AERO", "DACTYL"],
  ["SNOR", "LAX"],
  ["ARTI", "CUNO"],
  ["ZAP", "DOS"],
  ["MOL", "TRES"],
  ["DRA", "TINI"],
  ["DRAGO", "NAIR"],
  ["DRAGO", "NITE"],
  ["MEW", "TWO"],
  ["MEW", "EW"],
  ["CHIKO", "RITA"],
  ["BAY", "LEEF"],
  ["MEGA", "NIUM"],
  ["CYNDA", "QUIL"],
  ["QUI", "LAVA"],
  ["TYPH", "LOSION"],
  ["TOTO", "DILE"],
  ["CROCO", "NAW"],
  ["FERA", "LIGATR"],
  ["SEN", "TRET"],
  ["FUR", "RET"],
  ["HOOT", "HOOT"],
  ["NOCT", "OWL"],
  ["LEDY", "BA"],
  ["LED", "IAN"],
  ["SPINA", "RAK"],
  ["ARIA", "DOS"],
  ["CRO", "BAT"],
  ["CHIN", "CHOU"],
  ["LAN", "TURN"],
  ["PI", "CHU"],
  ["CLEF", "FA"],
  ["IGGLY", "BUFF"],
  ["TOGE", "PI"],
  ["TOGE", "TIC"],
  ["NA", "TU"],
  ["XA", "TU"],
  ["MA", "REEP"],
  ["FLAA", "FFY"],
  ["AMPHA", "ROS"],
  ["BELL", "OSSOM"],
  ["MA", "RILL"],
  ["AZUMA", "RILL"],
  ["SUDO", "WOODO"],
  ["POLI", "TOED"],
  ["HOP", "PIP"],
  ["SKIP", "LOOM"],
  ["JUMP", "LUFF"],
  ["AI", "POM"],
  ["SUN", "KERN"],
  ["SUN", "FLORA"],
  ["YAN", "MA"],
  ["WOO", "PER"],
  ["QUAG", "SIRE"],
  ["ES", "PEON"],
  ["UMB", "REON"],
  ["MUR", "KROW"],
  ["SLOW", "KING"],
  ["MIS", "DREAVUS"],
  ["UN", "OWN"],
  ["WOB", "BUFFET"],
  ["GIRA", "FARIG"],
  ["PINE", "CO"],
  ["FORRE", "TRESS"],
  ["DUN", "SPARCE"],
  ["GLI", "GAR"],
  ["STEE", "LIX"],
  ["SNUB", "BULL"],
  ["GRAN", "BULL"],
  ["QWIL", "FISH"],
  ["SCI", "ZOR"],
  ["SHU", "CKLE"],
  ["HERA", "CROSS"],
  ["SNEA", "SEL"],
  ["TEDDI", "URSA"],
  ["URSA", "RING"],
  ["SLUG", "GMA"],
  ["MAG", "CARGO"],
  ["SWI", "NUB"],
  ["PILO", "SWINE"],
  ["COR", "SOLA"],
  ["REMO", "RAID"],
  ["OCTI", "LLERY"],
  ["DELI", "BIRD"],
  ["MAN", "TINE"],
  ["SKAR", "MORY"],
  ["HOUN", "DOUR"],
  ["HOUN", "DOOM"],
  ["KING", "DRA"],
  ["PHAN", "PY"],
  ["DON", "PHAN"],
  ["PORY", "GON2"],
  ["STAN", "TLER"],
  ["SMEAR", "GLE"],
  ["TY", "ROGUE"],
  ["HITMON", "TOP"],
  ["SMOO", "CHUM"],
  ["ELE", "KID"],
  ["MAG", "BY"],
  ["MIL", "TANK"],
  ["BLIS", "SEY"],
  ["RAI", "KOU"],
  ["EN", "TEI"],
  ["SUI", "CUNE"],
  ["LARVI", "TAR"],
  ["PUPI", "TAR"],
  ["TYRAN", "ITAR"],
  ["LU", "GIA"],
  ["HO-", "OH"],
  ["CELE", "BI"],
  ["AZU", "RILL"],
  ["WY", "NAUT"],
  ["AMBI", "POM"],
  ["MISMA", "GIUS"],
  ["HONCH", "KROW"],
  ["BON", "SLY"],
  ["MIME", " JR."],
  ["HAP", "PINY"],
  ["MUNCH", "LAX"],
  ["MAN", "TYKE"],
  ["WEA", "VILE"],
  ["MAGNE", "ZONE"],
  ["LICKI", "LICKY"],
  ["RHYPE", "RIOR"],
  ["TAN", "GROWTH"],
  ["ELECTI", "VIRE"],
  ["MAG", "MORTAR"],
  ["TOGE", "KISS"],
  ["YAN", "MEGA"],
  ["LEAF", "FEON"],
  ["GLA", "CEON"],
  ["GLIS", "COR"],
  ["MAM", "SWINE"],
  ["PORY", "GON-Z"],
  ["TREE", "CKO"],
  ["GRO", "VYLE"],
  ["SCEP", "TILE"],
  ["TOR", "CHIC"],
  ["COM", "BUSKEN"],
  ["BLAZ", "IKEN"],
  ["MUD", "KIP"],
  ["MARSH", "TOMP"],
  ["SWAM", "PERT"],
  ["RAL", "TS"],
  ["KIR", "LIA"],
  ["GARDE", "VOIR"],
  ["GAL", "LADE"],
  ["SHED", "INJA"],
  ["KEC", "LEON"],
  ["BEL", "DUM"],
  ["MET", "TANG"],
  ["META", "GROSS"],
  ["BI", "DOOF"],
  ["SPIRI", "TOMB"],
  ["LUCA", "ARIO"],
  ["GI", "BLE"],
  ["GA", "BITE"],
  ["GAR", "CHOMP"],
  ["MA", "WILE"],
  ["LI", "LEEP"],
  ["CRA", "DILY"],
  ["ANO", "RITH"],
  ["ARMA", "LDO"],
  ["CRANI", "DOS"],
  ["RAMPA", "ARDOS"],
  ["SHIEL", "DON"],
  ["BASTI", "ODON"],
  ["SLA", "KING"],
  ["AB", "SOL"],
  ["DU", "SKULL"],
  ["DUS", "CLOPS"],
  ["DUSK", "NOIR"],
  ["WAI", "LORD"],
  ["AR", "CEUS"],
  ["TUR", "TWIG"],
  ["GRO", "TLE"],
  ["TOR", "TERRA"],
  ["CHIM", "CHAR"],
  ["MON", "FERNO"],
  ["INFER", "NAPE"],
  ["PIP", "LUP"],
  ["PRIN", "PLUP"],
  ["EMPO", "LEON"],
  ["NOSE", "PASS"],
  ["PROBO", "PASS"],
  ["HON", "EDGE"],
  ["DOU", "BLADE"],
  ["AEGI", "SLASH"],
  ["PAWN", "IARD"],
  ["BI", "SHARP"],
  ["LUX", "RAY"],
  ["AG", "GRON"],
  ["FLY", "GON"],
  ["MILO", "TIC"],
  ["SALA", "MENCE"],
  ["KLINK", "KLANG"],
  ["ZO", "ROARK"],
  ["SYLV", "EON"],
  ["KYO", "GRE"],
  ["GROU", "DON"],
  ["RAY", "QUAZA"],
  ["DIAL", "GA"],
  ["PAL", "KIA"],
  ["GIRA", "TINA"],
  ["REGI", "GIGAS"],
  ["DARK", "RAI"],
  ["GENE", "SECT"],
  ["RESHI", "RAM"],
  ["ZEK", "ROM"],
  ["KYU", "REM"],
  ["ROSE", "RADE"],
  ["DRIF", "BLIM"],
  ["LOP", "UNNY"],
  ["BRE", "LOOM"],
  ["NIN", "JASK"],
  ["BAN", "ETTE"],
  ["RO", "TOM"],
  ["REU", "NICLUS"],
  ["WHIMSI", "COTT"],
  ["KROOK", "ODILE"],
  ["COFA", "GRIGUS"],
  ["GALVAN", "TULA"],
  ["FERRO", "THORN"],
  ["LIT", "WICK"],
  ["LAMP", "ENT"],
  ["CHANDE", "LURE"],
  ["HAX", "ORUS"],
  ["GO", "LURK"],
  ["PYUKU", "MUKU"],
  ["KLEF", "KI"],
  ["TALON", "FLAME"],
  ["MIMI", "KYU"],
  ["VOLCA", "RONA"],
  ["DEI", "NO"],
  ["ZWEI", "LOUS"],
  ["HYDRE", "IGON"],
  ["LATI", "AS"],
  ["LATI", "OS"],
  ["DEO", "XYS"],
  ["JIRA", "CHI"],
  ["NIN", "CADA"],
  ["BI", "BAREL"],
  ["RIO", "LU"],
  ["SLA", "KOTH"],
  ["VIGO", "ROTH"],
  ["WAIL", "MER"],
  ["SHI", "INX"],
  ["LU", "XIO"],
  ["A", "RON"],
  ["LAI", "RON"],
  ["TRAP", "INCH"],
  ["VIBRA", "VA"],
  ["FEE", "BAS"],
  ["BA", "GON"],
  ["SHELL", "GON"], //oddly, the prefix does actually have more Ls than Shelgon's actual name
  ["KLINK", "INK"],
  ["KLANG", "ANG"],
  ["ZO", "RUA"],
  ["BUD", "DEW"],
  ["ROSE", "LIA"],
  ["DRIF", "LOON"],
  ["BUN", "EARY"],
  ["SHROOM", "ISH"],
  ["SHUP", "PET"],
  ["SOLO", "SIS"],
  ["DUO", "SION"],
  ["COTTON", "NEE"],
  ["SAN", "DILE"],
  ["KROKO", "ROK"],
  ["YA", "MASK"],
  ["JOL", "TIK"],
  ["FERRO", "SEED"],
  ["AX", "EW"],
  ["FRA", "XURE"],
  ["GO", "LETT"],
  ["FLETCH", "LING"],
  ["FLETCH", "INDER"],
  ["LAR", "VESTA"],
  ["STUN", "FISK"],
];
