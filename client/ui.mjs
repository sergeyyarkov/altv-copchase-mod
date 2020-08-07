import alt from 'alt-client'
import * as native from 'natives'
import * as NativeUI from "./includes/nativeui/nativeui.min.js"

// NativeUI.MidsizedMessage.ShowMidsizedShardMessage("Menu opened", "Awesome", NativeUI.HudColor.HUD_COLOUR_BLACK, true, true)
// NativeUI.MidsizedMessage.ShowMidsizedMessage('~r~Вы саспект!', 'Уйдите от полиции', 1000)

const Menu = NativeUI.Menu
const UIMenuItem = NativeUI.UIMenuItem
const UIMenuListItem = NativeUI.UIMenuListItem
const ItemsCollection = NativeUI.ItemsCollection
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem
const Point = NativeUI.Point

const menuPos = new Point(1450, 150)
const locations = ['airport', 'fibroof', 'epsilon', 'policestation']
const cars = `ninef
ninef2
blista
asea
asea2
boattrailer
bus
armytanker
armytrailer
armytrailer2
freighttrailer
coach
airbus
asterope
airtug
ambulance
barracks
barracks2
baller
baller2
bjxl
banshee
benson
bfinjection
biff
blazer
blazer2
blazer3
bison
bison2
bison3
boxville
boxville2
boxville3
bobcatxl
bodhi2
buccaneer
buffalo
buffalo2
bulldozer
bullet
blimp
burrito
burrito2
burrito3
burrito4
burrito5
cavalcade
cavalcade2
policet
gburrito
cablecar
caddy
caddy2
camper
carbonizzare
cheetah
comet2
cogcabrio
coquette
cutter
gresley
dilettante
dilettante2
dune
dune2
hotknife
dloader
dubsta
dubsta2
dump
rubble
docktug
dominator
emperor
emperor2
emperor3
entityxf
exemplar
elegy2
f620
fbi
fbi2
felon
felon2
feltzer2
firetruk
flatbed
forklift
fq2
fusilade
fugitive
futo
granger
gauntlet
habanero
hauler
handler
infernus
ingot
intruder
issi2
Jackal
journey
jb700
khamelion
landstalker
lguard
manana
mesa
mesa2
mesa3
crusader
minivan
mixer
mixer2
monroe
mower
mule
mule2
oracle
oracle2
packer
patriot
pbus
penumbra
peyote
phantom
phoenix
picador
pounder
police
police4
police2
police3
policeold1
policeold2
pony
pony2
prairie
pranger
premier
primo
proptrailer
rancherxl
rancherxl2
rapidgt
rapidgt2
radi
ratloader
rebel
regina
rebel2
rentalbus
ruiner
rumpo
rumpo2
rhino
riot
ripley
rocoto
romero
sabregt
sadler
sadler2
sandking
sandking2
schafter2
schwarzer
scrap
seminole
sentinel
sentinel2
zion
zion2
serrano
sheriff
sheriff2
speedo
speedo2
stanier
stinger
stingergt
stockade
stockade3
stratum
sultan
superd
surano
surfer
surfer2
surge
taco
tailgater
taxi
trash
tractor
tractor2
tractor3
graintrailer
baletrailer
tiptruck
tiptruck2
tornado
tornado2
tornado3
tornado4
tourbus
towtruck
towtruck2
utillitruck
utillitruck2
utillitruck3
voodoo2
washington
stretch
youga
ztype
sanchez
sanchez2
scorcher
tribike
tribike2
tribike3
fixter
cruiser
BMX
policeb
akuma
carbonrs
bagger
bati
bati2
ruffian
daemon
double
pcj
vader
vigero
faggio2
hexer
annihilator
buzzard
buzzard2
cargobob
cargobob2
cargobob3
skylift
polmav
maverick
nemesis
frogger
frogger2
cuban800
duster
stunt
mammatus
jet
shamal
luxor
titan
lazer
cargoplane
squalo
marquis
dinghy
dinghy2
jetmax
predator
tropic
seashark
seashark2
submersible
freightcar
freight
freightcont1
freightcont2
freightgrain
tankercar
metrotrain
docktrailer
trailers
trailers2
trailers3
tvtrailer
raketrailer
tanker
trailerlogs
tr2
tr3
tr4
trflat
trailersmall
velum
adder
voltic
vacca
suntrap
submersible2
dukes
dukes2
buffalo3
dominator2
dodo
marshall
blimp2
gauntlet2
stalion
stalion2
blista2
blista3
bifta
speeder
kalahari
paradise
btype
jester
turismor
alpha
vestra
zentorno
massacro
huntley
thrust
rhapsody
warrener
blade
glendale
panto
dubsta3
pigalle
monster
sovereign
innovation
hakuchou
furoregt
miljet
besra
coquette2
swift
jester2
massacro2
ratloader2
slamvan
mule3
velum2
tanker2
casco
boxville4
hydra
insurgent
insurgent2
gburrito2
technical
dinghy3
savage
enduro
guardian
lectro
kuruma
kuruma2
trash2
barracks3
valkyrie
slamvan2
swift2
luxor2
feltzer3
osiris
virgo
windsor
coquette3
vindicator
t20
brawler
toro
chino
faction
faction2
moonbeam
moonbeam2
primo2
chino2
buccaneer2
voodoo
Lurcher
btype2
verlierer2
nightshade
mamba
limo2
schafter3
schafter4
schafter5
schafter6
cog55
cog552
cognoscenti
cognoscenti2
baller3
baller4
baller5
baller6
toro2
seashark3
dinghy4
tropic2
speeder2
cargobob4
supervolito
supervolito2
valkyrie2
tampa
sultanrs
banshee2
btype3
faction3
minivan2
sabregt2
slamvan3
tornado5
virgo2
virgo3
nimbus
xls
xls2
seven70
fmj
bestiagts
pfister811
brickade
rumpo3
volatus
prototipo
reaper
tug
windsor2
lynx
gargoyle
tyrus
sheava
omnis
le7b
contender
trophytruck
trophytruck2
rallytruck
cliffhanger
bf400
tropos
brioso
tampa2
tornado6
faggio3
faggio
raptor
vortex
avarus
sanctus
youga2
hakuchou2
nightblade
chimera
esskey
wolfsbane
zombiea
zombieb
defiler
daemon2
ratbike
shotaro
manchez
blazer4
elegy
tempesta
italigtb
italigtb2
nero
nero2
specter
specter2
diablous
diablous2
blazer5
ruiner2
dune4
dune5
phantom2
voltic2
penetrator
boxville5
wastelander
technical2
fcr
fcr2
comet3
ruiner3
turismo2
infernus2
gp1
ruston
trailers4
xa21
caddy3
vagner
phantom3
nightshark
cheetah2
torero
hauler2
trailerlarge
technical3
insurgent3
apc
tampa3
dune3
trailersmall2
halftrack
ardent
oppressor
vigilante
bombushka
alphaz1
seabreeze
tula
havok
hunter
microlight
rogue
pyro
howard
mogul
starling
nokota
molotok
rapidgt3
retinue
cyclone
visione
z190
viseris
comet5
raiden
riata
sc1
autarch
savestra
gt500
comet4
neon
sentinel3
khanjali
barrage
volatol
akula
deluxo
stromberg
chernobog
riot2
avenger
avenger2
thruster
yosemite
hermes
hustler
streiter
revolter
pariah
kamacho
entity2
cheburek
jester3
caracara
hotring
seasparrow
flashgt
ellie
michelli
fagaloa
dominator3
tyrant
tezeract
gb200
issi3
taipan
blimp3
mule4
pounder2
speedo4
pbus2
patriot2
swinger
terbyte
oppressor2
strikeforce
menacer
scramjet
freecrawler
stafford
bruiser
bruiser2
bruiser3
brutus
brutus2
brutus3
cerberus
cerberus2
cerberus3
clique
deathbike
deathbike2
deathbike3
deveste
deviant
dominator4
dominator5
dominator6
impaler
impaler2
impaler3
impaler4
imperator
imperator2
imperator3
issi4
issi5
issi6
italigto
monster3
monster4
monster5
rcbandito
scarab
scarab2
scarab3
schlagen
slamvan4
slamvan5
slamvan6
toros
tulip
vamos
zr380
zr3802
zr3803
caracara2
drafter
dynasty
emerus
gauntlet3
gauntlet4
hellion
issi7
jugular
krieger
locust
paragon
paragon2
peyote2
nebula
neo
novak
rrocket
s80
thrax
zion3
zorrusso
asbo
formula2
formula
furia
imorgon
jb7002
kanjo
komoda
minitank
outlaw
rebla
retinue2
stryder
sugoi
sultan2
vagrant
vstr
yosemite2
zhaba`.split(/\r?\n/)
const weapons = {
  melee: {
    dagger: '0x92A27487',
    bat: '0x958A4A8F',
    bottle: '0xF9E6AA4B',
    crowbar: '0x84BD7BFD',
    unarmed: '0xA2719263',
    flashlight: '0x8BB05FD7',
    golfclub: '0x440E4788',
    hammer: '0x4E875F73',
    hatchet: '0xF9DCBF2D',
    knuckle: '0xD8DF3C3C',
    knife: '0x99B507EA',
    machete: '0xDD5DF8D9',
    switchblade: '0xDFE37640',
    nightstick: '0x678B81B1',
    wrench: '0x19044EE0',
    battleaxe: '0xCD274149',
    poolcue: '0x94117305',
    stone_hatchet: '0x3813FC08'
  },
  handguns: {
    pistol: '0x1B06D571',
    pistol_mk2: '0xBFE256D4',
    combatpistol: '0x5EF9FEC4',
    appistol: '0x22D8FE39',
    stungun: '0x3656C8C1',
    pistol50: '0x99AEEB3B',
    snspistol: '0xBFD21232',
    snspistol_mk2: '0x88374054',
    heavypistol: '0xD205520E',
    vintagepistol: '0x83839C4',
    flaregun: '0x47757124',
    marksmanpistol: '0xDC4DB296',
    revolver: '0xC1B3C3D1',
    revolver_mk2: '0xCB96392F',
    doubleaction: '0x97EA20B8',
    raypistol: '0xAF3696A1',
    ceramicpistol: '0x2B5EF5EC',
    navyrevolver: '0x917F6C8C'
  },
  smg: {
    microsmg: '0x13532244',
    smg: '0x2BE6766B',
    smg_mk2: '0x78A97CD0',
    assaultsmg: '0xEFE7E2DF',
    combatpdw: '0xA3D4D34',
    machinepistol: '0xDB1AA450',
    minismg: '0xBD248B55',
    raycarbine: '0x476BF155'
  },
  shotguns: {
    pumpshotgun: '0x1D073A89',
    pumpshotgun_mk2: '0x555AF99A',
    sawnoffshotgun: '0x7846A318',
    assaultshotgun: '0xE284C527',
    bullpupshotgun: '0x9D61E50F',
    musket: '0xA89CB99E',
    heavyshotgun: '0x3AABBBAA',
    dbshotgun: '0xEF951FBB',
    autoshotgun: '0x12E82D3D'
  },
  assault_rifles: {
    assaultrifle: '0xBFEFFF6D',
    assaultrifle_mk2: '0x394F415C',
    carbinerifle: '0x83BF0278',
    carbinerifle_mk2: '0xFAD1F1C9',
    advancedrifle: '0xAF113F99',
    specialcarbine: '0xC0A3098D',
    specialcarbine_mk2: '0x969C3D67',
    bullpuprifle: '0x7F229F94',
    bullpuprifle_mk2: '0x84D6FAFD',
    compactrifle: '0x624FE830'
  },
  machine_guns: {
    mg: '0x9D07F764',
    combatmg: '0x7FD62962',
    combatmg_mk2: '0xDBBD7280',
    gusenberg: '0x61012683'
  },
  sniper_rifles: {
    sniperrifle: '0x5FC3C11',
    heavysniper: '0xC472FE2',
    heavysniper_mk2: '0xA914799',
    marksmanrifle: '0xC734385A',
    marksmanrifle_mk2: '0x6A6C02E0'
  },
  heavy_weapons: {
    rpg: '0xB1CA77B1',
    grenadelauncher: '0xA284510B',
    grenadelauncher_smoke: '0x4DD2DC56',
    minigun: '0x42BF8A85',
    firework: '0x7F7497E5',
    railgun: '0x6D544C99',
    hominglauncher: '0x63AB0442',
    compactlauncher: '0x781FE4A',
    rayminigun: '0xB62D1F67'
  },
  throwables: {
    grenade: '0x93E220BD',
    bzgas: '0xA0973D5E',
    smokegrenade: '0xFDBC8A50',
    flare: '0x497FACC3',
    molotov: '0x24B17070',
    stickybomb: '0x2C3731D9',
    proxmine: '0xAB564B93',
    snowball: '0x787F0BB',
    pipebomb: '0xBA45E8B8',
    ball: '0x23C9F95C'
  },
  misc: {
    petrolcan: '0x34A67B97',
    fireextinguisher: '0x60EC506',
    parachute: '0xFBAB5776',
    hazardcan: '0xBA536372'
  }
}

const helpMenu = new Menu("Помощь", "Помощь по игре на сервере", menuPos)
const listCommandsMenu = new Menu("Команды", "Узнайте список доступных команд", menuPos)

const commandsItem = new UIMenuItem('Достуные команды', `Узнайте список доступных команд`)

helpMenu.BindMenuToItem(listCommandsMenu, commandsItem)

listCommandsMenu.AddItem(new UIMenuItem('Играть в copchase', `/copchase`))
listCommandsMenu.AddItem(new UIMenuItem('Сменить скин', `/skin [0 - 700]`))
listCommandsMenu.AddItem(new UIMenuItem('Появиться на спауне', `/spawn`))
listCommandsMenu.AddItem(new UIMenuItem('Узнать текущий онлайн', `/online`))
listCommandsMenu.AddItem(new UIMenuItem('Узнать Social Club ID', `/scid`))
listCommandsMenu.AddItem(new UIMenuItem('Выйти из комнаты ожидания', `/exit`))

const adminMenu = new Menu("Админ Панель", "Выполняйте админ-функции", menuPos)
const kickPlayerMenu = new Menu("Кикнуть игрока", "Сервер кикнет любого игрока", menuPos)
const killPlayerMenu = new Menu('Убить игрока', "Сервер моментально убьет игрока", menuPos)
const carSpawnMenu = new Menu("Заспавнить машину", "Сервер заспавнит машину", menuPos)
const teleportToLocationMenu = new Menu("Телепорт к локации", "Телепортируйтесь на выбранную локацию", menuPos)
const myPersonMenu = new Menu("Мой персонаж", "Выберите что-то", menuPos)
const weaponsMenu = new Menu("Оружие", "Выберите оружие", menuPos)
const teleportToPlayerMenu = new Menu("Телепорт к игроку", "Вы телепортируетесь к игроку", menuPos)
const teleportToMeMenu = new Menu("Телепорт к себе", "Вы телепортируете игрока к себе", menuPos)

const kickItem = new UIMenuItem('Кикнуть игрока',`Сервер кикнет игрока`)
const killItem = new UIMenuItem('Убить игрока',`Убейте моментально любого игрока`)
const spawnCarItem = new UIMenuItem('Заспавнить машину',`Сервер заспавнит машину перед вами`)
const teleportToLocationItem = new UIMenuItem('Телепорт к локации',`Телепортируйтесь к выбранной локации`)
const myPersonItem = new UIMenuItem('Мой персонаж', `Выдайте себе здоровье или станьте неуязвимым`)
const weaponsItem = new UIMenuItem('Выдать себе оружие',`Выдайте любое оружие себе`)
const teleportToPlayerItem = new UIMenuItem('Телепорт к игроку',`Телепортируйтесь к игроку`)
const teleportToMeItem = new UIMenuItem('Телепорт игрока к себе', `Телепортируйте игрока к себе`)
const playersListItem = new UIMenuListItem("Игроки", "Выберите игрока", new ItemsCollection(alt.Player.all.map(_player => _player.name)))

kickPlayerMenu.AddItem(playersListItem)
killPlayerMenu.AddItem(playersListItem)
teleportToPlayerMenu.AddItem(playersListItem)
teleportToMeMenu.AddItem(playersListItem)
myPersonMenu.AddItem(new UIMenuCheckboxItem("Неуязвимость", false, "Делает вашего персонажа неуязвимым"))
myPersonMenu.AddItem(new UIMenuItem('Восстановить здоровье', `Восстанавливает 100hp`))
carSpawnMenu.AddItem(new UIMenuListItem("Список машин","Выберите машину и сервер заспавнит её", new ItemsCollection(cars)))
teleportToLocationMenu.AddItem(new UIMenuListItem("Список локаций", "Выберите локацию для телепортирования", new ItemsCollection(locations)))
weaponsMenu.AddItem(new UIMenuListItem("Ближнее оружие", "Выберите ближнее оружие", new ItemsCollection(Object.keys(weapons["melee"]))))
weaponsMenu.AddItem(new UIMenuListItem("Пистолеты", "Выберите пистолет", new ItemsCollection(Object.keys(weapons["handguns"]))))
weaponsMenu.AddItem(new UIMenuListItem("Пистолет-пулеметы", "Выберите пистолет-пулемет",new ItemsCollection(Object.keys(weapons["smg"]))))
weaponsMenu.AddItem(new UIMenuListItem("Дробовики","Выберите дробовик",new ItemsCollection(Object.keys(weapons["shotguns"]))))
weaponsMenu.AddItem(new UIMenuListItem("Штурмовые винтовки", "Выберите штурмовую винтовку",new ItemsCollection(Object.keys(weapons["assault_rifles"]))))
weaponsMenu.AddItem(new UIMenuListItem("Пулеметы", "Выберите пулемет",new ItemsCollection(Object.keys(weapons["machine_guns"]))))
weaponsMenu.AddItem(new UIMenuListItem("Снайперские винтовки", "Выберите снайп.винтовку",new ItemsCollection(Object.keys(weapons["sniper_rifles"]))))
weaponsMenu.AddItem(new UIMenuListItem("Тяжелое оружие", "Выберите тяжелое оружие", new ItemsCollection(Object.keys(weapons["heavy_weapons"]))))
weaponsMenu.AddItem(new UIMenuListItem("Гранаты","Выберите гранату",new ItemsCollection(Object.keys(weapons["throwables"]))))
weaponsMenu.AddItem(new UIMenuListItem("Разное","Выберите что-то",new ItemsCollection(Object.keys(weapons["misc"]))))

alt.setInterval(() => playersListItem.Collection = new ItemsCollection(alt.Player.all.map(_player => `[${_player.id}]:${_player.name}`)).getListItems(), 300)

adminMenu.BindMenuToItem(myPersonMenu, myPersonItem)
adminMenu.BindMenuToItem(kickPlayerMenu, kickItem)
adminMenu.BindMenuToItem(killPlayerMenu, killItem)
adminMenu.BindMenuToItem(carSpawnMenu, spawnCarItem)
adminMenu.BindMenuToItem(teleportToLocationMenu, teleportToLocationItem)
adminMenu.BindMenuToItem(weaponsMenu, weaponsItem)
adminMenu.BindMenuToItem(teleportToPlayerMenu, teleportToPlayerItem)
adminMenu.BindMenuToItem(teleportToMeMenu, teleportToMeItem)

myPersonMenu.ItemSelect.on(item => {
  if (item.Text.toLowerCase() === 'восстановить здоровье') alt.emitServer('getHealth')
})

myPersonMenu.CheckboxChange.on(item => {
  if (item.Text.toLowerCase() === 'неуязвимость') alt.emitServer('godMode', item.Checked)
})

kickPlayerMenu.ItemSelect.on(item => alt.emitServer("kickPlayer", item.SelectedItem.DisplayText))
killPlayerMenu.ItemSelect.on(item => alt.emitServer("killPlayer", item.SelectedItem.DisplayText))
teleportToLocationMenu.ItemSelect.on(item => alt.emitServer("teleportToLocation", item.SelectedItem.DisplayText))
teleportToPlayerMenu.ItemSelect.on(item => alt.emitServer("teleportToPlayer", item.SelectedItem.DisplayText))
teleportToMeMenu.ItemSelect.on(item => alt.emitServer("teleportToMe", item.SelectedItem.DisplayText))

carSpawnMenu.ItemSelect.on(item => {
  if (item instanceof UIMenuListItem) return alt.emitServer("spawnCar", item.SelectedItem.DisplayText)
})
weaponsMenu.ItemSelect.on(item => {
  if (item instanceof UIMenuListItem) return alt.emitServer("giveWeapon", item.SelectedItem.DisplayText)
})

alt.on('keyup', key => {
  if (key === 112) {
    if (
      listCommandsMenu.Visible
    || adminMenu.Visible
		|| kickPlayerMenu.Visible 
		|| killPlayerMenu.Visible 
		|| carSpawnMenu.Visible 
		|| teleportToLocationMenu.Visible
		|| myPersonMenu.Visible
		|| weaponsMenu.Visible
		|| teleportToPlayerMenu.Visible
		|| teleportToMeMenu.Visible
	) {
    listCommandsMenu.Close()
    adminMenu.Close()
    kickPlayerMenu.Close()
		killPlayerMenu.Close()
		carSpawnMenu.Close()
		teleportToLocationMenu.Close()
		myPersonMenu.Close()
		weaponsMenu.Close()
		teleportToPlayerMenu.Close()
		teleportToMeMenu.Close()
  }
    helpMenu.Visible ? helpMenu.Close() : helpMenu.Open()
  }

	if (key === 113) {
    alt.emitServer('showAdminPanel')
  }
})

alt.onServer('ui:showAdminPanel', () => {
	if (
      helpMenu.Visible
    || listCommandsMenu.Visible
		|| kickPlayerMenu.Visible 
		|| killPlayerMenu.Visible 
		|| carSpawnMenu.Visible 
		|| teleportToLocationMenu.Visible
		|| myPersonMenu.Visible
		|| weaponsMenu.Visible
		|| teleportToPlayerMenu.Visible
		|| teleportToMeMenu.Visible
	) 
	{
    helpMenu.Close()
    listCommandsMenu.Close()
		kickPlayerMenu.Close()
		killPlayerMenu.Close()
		carSpawnMenu.Close()
		teleportToLocationMenu.Close()
		myPersonMenu.Close()
		weaponsMenu.Close()
		teleportToPlayerMenu.Close()
		teleportToMeMenu.Close()
	}
	
	adminMenu.Visible ? adminMenu.Close() : adminMenu.Open()
})
