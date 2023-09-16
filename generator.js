let PLUGIN, EVENT, MODE, TARGET, WINNER, START_DATE, END_DATE, START_TIME, END_TIME, STATUS = false, copy, copy_button;

let ORGANIZER_EVENTS = ["Easy clue", "Medium clue", "Hard clue", "Elite clue", "Master clue", "Barrows", "Callisto", "Chambers of Xeric", "Chambers of Xeric: CM", "Chaos Elemental",
"Commander Zilyana", "Corporeal Beast", "Dagannoth Kings", "General Graardor", "Giant Mole", "Kalphite Queen", 
"King Black Dragon", "Kree'Arra", "K'ril Tsutsaroth", "Nex", "Nightmare", "Sarachnis", "Scorpia", "Temporos",
"Theatre of Blood", "Theatre of Blood: HM", "Tombs of Amascut", "Venenatis", "Vetion", "Wintertotd", "Zalcano",
"PK", "Hide and Seek", "Wilderness prayer", "BINGO", "Olympo kalnas", "Specialus"];


let PRE_EVENT = ["easy", "medium", "hard", "elite", "master", "barrows", "calisto", "cox", "cox cm", "chaos ele", "kbd", "arma",
"zammy", "nex", "nm", "sarachnis", "scorpia", "temporos", "tob", "tob hm", "toa", "venenatis",
"vetion", "wt", "zalcano", "pk", "hns", "wild altar", "bingo", "olympo", "special"];

let XP_EVENTS = [ "Attack", "Strength", "Defense", "Ranged", "Prayer", "Magic", "Runecrafting",
"Construction", "Hitpoints", "Agility", "Herblore", "Thieving", "Crafting", "Fletching",
"Slayer", "Hunter", "Mining", "Smithing", "Fishing", "Cooking", "Firemaking", "Woodcutting",
"Farming"
];

let PRE_XP_EVENT = ["attack", "strength", "defense", "ranged", "prayer", "magic", "runecrafting",
"construction", "hitpoints", "agility", "herblore", "thieving", "crafting", "fletching",
"slayer", "hunter", "mining", "smithing", "fishing", "cooking", "firemaking", "woodcutting",
"farming"
];
		
let KC_EVENTS = [
	"Beginner Clue", "Easy Clue", "Medium clue", "Hard Clue", "Elite CLue",	"Master Clue",
	"Last Man Standing", "PvP Arena", "Soul Wars Zeal",	"Guardians of the Rift", "empty", "empty",
	"Abyssal Sire",	"Alchemical Hydra",	"Artio", "Barrows Chests", "Bryophyta",	"Callisto",	"Calvar'ion",
	"Cerberus",	"Chambers of Xeric", "CoX CM", "Chaos Elemental", "Chaos Fanatic", "Commander Zilyana",
	"Corporeal Beast", "Crazy Archaeologist", "Dagannoth Prime", "Dagannoth Rex", "Dagannoth Supreme",
	"Deranged Archaeologist", "Duke Sucellus", "General Graardor", "Giant Mole", "Grotesque Guardians",
	"Hespori", "Kalphite Queen", "King Black Dragon", "Kraken",	"Kree'Arra", "K'ril Tsutsaroth", "Mimic",
	"Nex", "Nightmare",	"Phosani's Nightmare", "Obor", "Phantom Muspah", "Sarachnis", "Scorpia", "Skotizo",
	"Spindel", "Tempoross",	"The Gauntlet",	"The Corrupted Gauntlet", "The Leviathan", "The Whisperer",
	"Theatre of Blood",	"Theatre of Blood: Hard Mode", "Thermonuclear Smoke Devil",	"Tombs of Amascut",
	"ToA Expert", "TzKal-Zuk", "TzTok-Jad",	"Vardorvis", "Venenatis", "Vet'ion", "Vorkath",
	"Wintertodt", "Zalcano", "Zulrah"
	];

let PRE_KC_EVENT = [
	"beginner", "easy",	"medium", "hard", "elite", "master",
	"lms", "pvpa", "sw", "gotr", "empty", "empty", "sire", "hydra",	"artio",
	"barrows", "bryo", "callisto", "calvarion",	"cerberus",	"cox", "cox cm",
	"chaos ele", "chaos fan", "sara", "corp", "crazy arch", "prime", "rex",
	"supreme", "der arch", "duke", "bandos", "mole", "gargs", "hespori",
	"kq", "kbd", "kraken", "arma", "zammy", "mimic", "nex",	"nm", "phosanis",
	"obor",	"muspah", "sarachnis", "scorpia", "skotizo", "spindel",
	"tempoross", "gauntlet", "cg", "leviathan",	"whisperer", "tob",
	"tob hm", "smoke devil", "toa", "toa expert", "zuk", "jad",
	"vardorvis", "venenatis", "vetion", "vorkath", "wt", "zalcano",	"zulrah"
	];
	 
function Auto() {
	PLUGIN = document.getElementById("plugin");
	EVENT = document.getElementById("events");
	MODE = document.getElementById("mode");
	TARGET = document.getElementById("target");
	WINNER = document.getElementById("prize_count");
	START_DATE = document.getElementById("start_date");
	END_DATE = document.getElementById("end_date");
	START_TIME = document.getElementById("start_time");
	END_TIME = document.getElementById("end_time");
	copy = document.getElementById("copy_text");
	copy_button = document.getElementById("copy");
}

function checkSafe(){
	safe_color = '2px solid #f4d017'; 
	unsafe_color = '2px solid red';
	STATUS = false;
	
	if (PLUGIN.value == '.add'){
		PLUGIN.style.border = safe_color;
		EVENT.style.border = safe_color;
		MODE.style.border = safe_color;
		TARGET.style.border = safe_color;
		WINNER.style.border = safe_color;
		START_DATE.style.border = unsafe_color;
		END_DATE.style.border = safe_color;
		START_TIME.style.border = unsafe_color;
		END_TIME.style.border = safe_color;
		copy.innerHTML = "COPY";
		copy_button.style = 'background-color: #1d1f22;';
		
		MODE.disabled = true;
		TARGET.disabled = true;
		WINNER.disabled = true;
		END_DATE.disabled = true;
		END_TIME.disabled = true;
		
		if (START_DATE.value != ''){
			START_DATE.style.border = safe_color;
		}else{
			START_DATE.style.border = unsafe_color;
		}
		
		if (START_TIME.value != ''){
			START_TIME.style.border = safe_color;
		}else{
			START_TIME.style.border = unsafe_color;
		}
		
		if (START_DATE.value != '' && START_TIME.value != ''){
			STATUS = true;
		}else{
			STATUS = false;
		}
	}else if(PLUGIN.value == '.addxpevent' || PLUGIN.value == '.addkcevent'){
		PLUGIN.style.border = safe_color;
		EVENT.style.border = safe_color;
		MODE.style.border = unsafe_color;
		TARGET.style.border = unsafe_color;
		WINNER.style.border = unsafe_color;
		START_DATE.style.border = unsafe_color;
		END_DATE.style.border = unsafe_color;
		START_TIME.style.border = unsafe_color;
		END_TIME.style.border = unsafe_color;
		copy.innerHTML = "COPY";
		copy_button.style = 'background-color: #1d1f22;';
		
		MODE.disabled = false;
		TARGET.disabled = false;
		WINNER.disabled = false;
		END_DATE.disabled = false;
		END_TIME.disabled = false;
		
		if (MODE.value != 'mode'){
			MODE.style.border = safe_color;
		}else{
			MODE.style.border = unsafe_color;
			TARGET.value = 'XP / KC';
		}
		
		if(MODE.value == 'standart'){
			MODE.style.border = safe_color;
			TARGET.value = '0';
			TARGET.style.border = safe_color;
			TARGET.disabled = true;
		}
		
		if(MODE.value == 'rush'){
			MODE.style.border = safe_color;
			TARGET.value = '100000';
			TARGET.style.border = safe_color;
			TARGET.disabled = false;
		}
		
		if (WINNER.value != 'winner_count'){
			WINNER.style.border = safe_color;
		}else{
			WINNER.style.border = unsafe_color;
		}
		
		if (START_DATE.value != ''){
			START_DATE.style.border = safe_color;
		}else{
			START_DATE.style.border = unsafe_color;
		}
				
		if (START_TIME.value != ''){
			START_TIME.style.border = safe_color;
		}else{
			START_TIME.style.border = unsafe_color;
		}
		
		if (END_DATE.value != ''){
			END_DATE.style.border = safe_color;
		}else{
			END_DATE.style.border = unsafe_color;
		}
		
		if (END_TIME.value != ''){
			END_TIME.style.border = safe_color;
		}else{
			END_TIME.style.border = unsafe_color;
		}
		
		if (MODE.value != 'mode' && TARGET.value != 'XP / KC' && WINNER.value != 'winner_count' && START_DATE.value != '' && END_DATE.value != '' && START_TIME.value != '' && END_TIME.value != ''){
			STATUS = true;
		}else{
			STATUS = false;
		}
		
	}else {
		PLUGIN.style.border = unsafe_color;
		EVENT.style.border = unsafe_color;
		MODE.style.border = unsafe_color;
		TARGET.style.border = unsafe_color;
		WINNER.style.border = unsafe_color;
		START_DATE.style.border = unsafe_color;
		END_DATE.style.border = unsafe_color;
		START_TIME.style.border = unsafe_color;
		END_TIME.style.border = unsafe_color;
		copy.innerHTML = "COPY";
		copy_button.style = 'background-color: #1d1f22;';
		
		PLUGIN.disabled = false;
		EVENT.disabled = false;
		MODE.disabled = false;
		TARGET.disabled = false;
		WINNER.disabled = false;
		START_DATE.disabled = false;
		END_DATE.disabled = false;
		START_TIME.disabled = false;
		END_TIME.disabled = false;
	}
}

function setPlugin() {
    if (PLUGIN.value == ".add") {
		clear(EVENT);
		for (i = 0; i < ORGANIZER_EVENTS.length; i++) {
			var option = document.createElement("option");
			option.text = ORGANIZER_EVENTS[i];
			EVENT.add(option);
		}
	}else if (PLUGIN.value == ".addxpevent") {
		clear(EVENT);
		for (i = 0; i < XP_EVENTS.length; i++) {
			var option = document.createElement("option");
			option.text = XP_EVENTS[i];
			EVENT.add(option);
		}
	}else if (PLUGIN.value == ".addkcevent") {
		clear(EVENT);
		for (i = 0; i < KC_EVENTS.length; i++) {
			var option = document.createElement("option");
			option.text = KC_EVENTS[i];
			EVENT.add(option);
		}
	}
}

function setMode(MODE, TARGET) {
	if(	MODE.value == "rush"){
		TARGET.disabled = false;
		TARGET.value = 100000;
	}else{
		TARGET.disabled = true;
		TARGET.value = 0;
	}
}

function clear(object){
	object.innerHTML = "";
}

function generateCommand(){
	let plugin_d, event_d, mode_d, target_d, winner_d, start_date_d, end_date_d, start_time_d, end_time_d;
	let EVENTS, EVENTS_PRE;
	let global_text, extra='Additional information.';
	
	if (STATUS == true){
		plugin_d = PLUGIN.value;
		event_d = EVENT.value;
		mode_d = MODE.value;
		target_d = TARGET.value;
		winner_d = WINNER.value;
		start_date_d = START_DATE.value;
		end_date_d = END_DATE.value;
		start_time_d = START_TIME.value;
		end_time_d = END_TIME.value;
		
		if (plugin_d == '.add'){
			start_date_d = start_date_d.substring(5, 10);
			start_time_d = start_time_d.substring(0, 2);
			start_date_d = start_date_d.replace('-', '.');
			for (i = 0; i < ORGANIZER_EVENTS.length; i++) {
				if (ORGANIZER_EVENTS[i] == event_d){
					global_text = `${plugin_d} ${PRE_EVENT[i]} ${start_date_d} ${start_time_d} ${extra}`;
					const command = document.createElement('textarea');
					command.value = global_text;
					document.body.appendChild(command);
					command.select();
					document.execCommand('copy');
					document.body.removeChild(command);
					copy.innerHTML = "COPIED";
					copy_button.style = 'background-color: #f4d017;';
				}
			}
		}
		
		if (plugin_d == '.addxpevent' || PLUGIN.value == '.addkcevent'){
			start_date_d = start_date_d.substring(5, 10);
			start_time_d = start_time_d.substring(0, 2);
			end_date_d = end_date_d.substring(5, 10);
			end_time_d = end_time_d.substring(0, 2);
			start_date_d = start_date_d.replace('-', '.');
			end_date_d = end_date_d.replace('-', '.');
			
			if  (plugin_d == '.addxpevent'){
				EVENTS = XP_EVENTS;
				EVENTS_PRE = PRE_XP_EVENT;
			}else if (plugin_d == '.addkcevent'){
				EVENTS = KC_EVENTS;
				EVENTS_PRE = PRE_KC_EVENT;
			}
			
			for (i = 0; i < EVENTS.length; i++) {
				if (EVENTS[i] == event_d){
					global_text = `${plugin_d} ${target_d} ${EVENTS_PRE[i]} ${winner_d} ${start_date_d} ${end_date_d} ${start_time_d} ${end_time_d} ${extra}`;
					  const command = document.createElement('textarea');
					  command.value = global_text;
					  document.body.appendChild(command);
					  command.select();
					  document.execCommand('copy');
					  document.body.removeChild(command);
					  copy.innerHTML = "COPIED";
					  copy_button.style = 'background-color: #f4d017;';
				}
			}
		}
	}
}