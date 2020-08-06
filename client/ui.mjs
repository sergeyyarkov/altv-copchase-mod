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
const locations = ['airport', 'spawn', 'fibroof', 'epsilon', 'policestation', 'yankton']

let subMenuActive = false

const adminMenu = new Menu("Админ Панель", "Выполняйте админ-функции", menuPos)
const kickPlayerMenu = new Menu("Кикнуть игрока", "Сервер кикнет любого игрока", menuPos)
const banPlayerMenu = new Menu('Забанить игрока', "Сервер забанит игрока", menuPos)
const killPlayerMenu = new Menu('Убить игрока', "Сервер моментально убьет игрока", menuPos)
const carSpawnMenu = new Menu("Заспавнить машину", "Сервер заспавнит машину", menuPos)
const teleportToLocationMenu = new Menu("Телепорт к локации", "Телепортируйтесь на выбранную локацию", menuPos)
const myPersonMenu = new Menu("Мой персонаж", "Выберите что-то", menuPos)
const weaponsMenu = new Menu("Оружие", "Выберите оружие", menuPos)
const teleportToPlayerMenu = new Menu("Телепорт к игроку", "Вы телепортируетесь к игроку", menuPos)
const teleportToMeMenu = new Menu("Телепорт к себе", "Вы телепортируете игрока к себе", menuPos)

const kickItem = new UIMenuItem('Кикнуть игрока',`Сервер кикнет игрока`)
const banItem = new UIMenuItem('Забанить игрока',`Сервер заблокирует игрока`)
const killItem = new UIMenuItem('Убить игрока',`Убейте моментально любого игрока`)
const spawnCarItem = new UIMenuItem('Заспавнить машину',`Сервер заспавнит машину перед вами`)
const teleportToLocationItem = new UIMenuItem('Телепорт к локации',`Телепортируйтесь к выбранной локации`)
const myPersonItem = new UIMenuItem('Мой персонаж', `Выдайте себе здоровье или станьте неуязвимым`)
const weaponsItem = new UIMenuItem('Выдать себе оружие',`Выдайте любое оружие себе`)
const teleportToPlayerItem = new UIMenuItem('Телепорт к игроку',`Телепортируйтесь к игроку`)
const teleportToMeItem = new UIMenuItem('Телепорт игрока к себе', `Телепортируйте игрока к себе`)

const playersListItem = new UIMenuListItem(
	"Игроки",
	"Выберите игрока",
	new ItemsCollection(alt.Player.all.map(_player => _player.name))
)

myPersonMenu.AddItem(new UIMenuCheckboxItem(
	"Неуязвимость",
	false,
	"Делает вашего персонажа неуязвимым"
))
myPersonMenu.AddItem(new UIMenuItem('Восстановить здоровье', `Восстанавливает 100hp`))

kickPlayerMenu.AddItem(playersListItem)
alt.setInterval(() => playersListItem.Collection = new ItemsCollection(alt.Player.all.map(_player => `[${_player.id}]:${_player.name}`)).getListItems(), 300)

adminMenu.BindMenuToItem(myPersonMenu, myPersonItem)
adminMenu.BindMenuToItem(kickPlayerMenu, kickItem)
adminMenu.BindMenuToItem(banPlayerMenu, banItem)
adminMenu.BindMenuToItem(killPlayerMenu, killItem)
adminMenu.BindMenuToItem(carSpawnMenu, spawnCarItem)
adminMenu.BindMenuToItem(teleportToLocationMenu, teleportToLocationItem)
adminMenu.BindMenuToItem(weaponsMenu, weaponsItem)
adminMenu.BindMenuToItem(teleportToPlayerMenu, teleportToPlayerItem)
adminMenu.BindMenuToItem(teleportToMeMenu, teleportToMeItem)


adminMenu.ItemSelect.on(item => {
  if (item instanceof UIMenuItem) subMenuActive = true
})

myPersonMenu.ItemSelect.on(item => {
  if (item.Text.toLowerCase() === 'восстановить здоровье') alt.emitServer('getHealth')
})

myPersonMenu.CheckboxChange.on(item => {
  if (item.Text.toLowerCase() === 'неуязвимость') alt.emitServer('godMode', item.Checked)
})

kickPlayerMenu.ItemSelect.on(item => {
  alt.emitServer("kickPlayer", item.SelectedItem.DisplayText);
})


alt.on('keyup', key => {
	if (key === 113) { // F2
  	alt.emitServer('showAdminPanel')
	}
})

alt.onServer('ui:showAdminPanel', () => {
	if (
			kickPlayerMenu.Visible 
		|| banPlayerMenu.Visible 
		|| killPlayerMenu.Visible 
		|| carSpawnMenu.Visible 
		|| teleportToLocationMenu.Visible
		|| myPersonMenu.Visible
		|| weaponsMenu.Visible
		|| teleportToPlayerMenu.Visible
		|| teleportToMeMenu.Visible
	) 
	{
		kickPlayerMenu.Close()
		banPlayerMenu.Close()
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
