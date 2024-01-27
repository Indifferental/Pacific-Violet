const css = `
html, body {
      background: black
}
.Common-visible {
      transition: none;
      animation: 400ms ease-in-out 0s 1 normal none running gradientMenu2
}

.Common-container {
      background: linear-gradient(15deg, #370071, #000, #5a0093);
      animation: gradient 40s ease-in-out infinite;
      background-size: 600%
}

.Common-entranceBackground {
    background-image: url(-);
}

#modal-root > div {
    z-index: 2
}

.ModalStyle-rootHover {
    background: rgba(0, 0, 0, 0)
}

.PrimaryMenuItemComponentStyle-itemName {
    text-shadow: rgb(255 255 255) 0em 0em 0.25em
}

.ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn {
    backdrop-filter: blur(15px)
}

.ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn:before {
    content: 'Pacific Violet 0.92';
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    color: rgb(181, 110, 255, 80%);
    text-shadow: rgb(181 110 255) 0em 0em 0.05em;
    font-family: RubikMedium;
    font-size: 600%;
    border-radius: 12.5px;
    box-shadow: rgba(0, 0, 0, 100%) 0em 0em 0.05em 0.025em;
    height: 180px;
    width: 50%;
    backdrop-filter: blur(15px);
    background: rgba(0, 0, 0, 80%)
}

.ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn:after {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 12.5px;
    height: 180px;
    width: 50%;
    z-index: -1;
    filter: blur(30px);
      background: linear-gradient(20deg, transparent, #c700ff, #c100ff, #8500ff, transparent, #8500ff, #c100ff, #c700ff, transparent);
      background-size: 500%;
      animation: eff 40s ease-in-out infinite
}

.ApplicationLoaderComponentStyle-logo {
    visibility: hidden
}


.ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn > div:nth-child(1) {
    visibility: hidden
}

.ApplicationLoaderComponentStyle-loader {
    visibility: hidden
}

div.ApplicationLoaderComponentStyle-container.Common-flexCenterAlignCenterColumn > div.Common-flexCenterAlignCenter > span {
    visibility: hidden
}

.LobbyLoaderComponentStyle-container {
    background: transparent;
    backdrop-filter: blur(25px);
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont1
}

.LobbyLoaderComponentStyle-loader {
    background: transparent;
    backdrop-filter: blur(15px);
}

.LobbyLoaderComponentStyle-loaderContainer {
    visibility: hidden
}

.MainScreenComponentStyle-playButtonContainer span {
    text-shadow: rgb(118, 255, 51) 0em 0em 0.375em;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}

.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-activeItem {
    width: calc(100% - 2.5em);
    background: rgba(0,0,0,0.35);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    background-image: url(-);
    outline: 1.5px solid rgb(118, 255, 51, 25%);
    transition: all 200ms ease-in-out 0s;
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 /25%);
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-activeItem:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0em 0.5em 0.025em rgb(0, 0, 0, 50%), 0em 0em 0.5em 0.25em rgb(118, 255, 51, 25%)
}

.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-activeItem:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, #56ff00, transparent, #56ff00, transparent, #56ff00, transparent, #56ff00, transparent);
    background-size: 600%;
    opacity: 0;
    filter: blur(30px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    transform: scale(1.15);
    pointer-events: none;
      animation: eff 60s ease-in-out infinite;
      animation-play-state: paused
}

.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-activeItem:hover:after {
    opacity: 0.25;
      animation-play-state: running
}

.MainScreenComponentStyle-playButtonContainer span {
    text-shadow: rgb(118, 255, 51) 0em 0em 0.375em
}

.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-disabledButtonPlay {
    width: calc(100% - 2.5em);
    background: rgba(0,0,0,0.35);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    background-image: url(-);
    outline: 1.5px solid rgb(118, 255, 51, 25%);
    transition: all 250ms ease-in-out 0s;
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 50%)
}

div > div.Common-flexStartAlignStart {
    justify-content: center
}

.MainScreenComponentStyle-gradientBlockRight, .MainScreenComponentStyle-gradientBlock {
    width: 60em;
    opacity: 0.25
}

.MainScreenComponentStyle-containerPanel {
    background: rgba(0,0,0,0.15);
    backdrop-filter: blur(10px);
    outline: transparent;
    color: transparent;
    width: 95%;
    height: 7em;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom: 1.5px solid rgba(185, 135, 255, 0.25);
    border-left: 1.5px solid rgba(185, 135, 255, 0.25);
    border-right: 1.5px solid rgba(185, 135, 255, 0.25);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 50%);
    transition: all 200ms ease-in-out 0s;
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.UserInfoContainerStyle-rankIconContainerClickable {
    border-right: transparent;
    width: 7em;
    scale: 1.15;
    transition: all 200ms ease-in-out 0s
}

.UserInfoContainerStyle-rankIconContainerClickable:hover {
    scale: 1.25;
    background: transparent
}

.UserInfoContainerStyle-userNameRank {
    transition: all 200ms ease-in-out 0s
}

.UserInfoContainerStyle-userNameRank:hover {
    color: rgb(198 143 255)
}

.ChatComponentStyle-upMenu {
    background: transparent
}

.ChatComponentStyle-channelSelect {
    background-color: rgb(0 0 0)
}

.UserInfoContainerStyle-containerProgressMainScreen {
    justify-content: center;
    scale: 1.1
}

div > div > div > div > div > div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn {
    background: rgba(255, 255, 255, 50%)
}

div > div > div > div > div > div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn:after {
    background: rgba(255, 255, 255);
    box-shadow: rgb(255 255 255) 0em 0em 0.375em
}

div > div > div > div > div > div.UserInfoContainerStyle-containerProgressMainScreen > div.UserInfoContainerStyle-containerParameterProgress > div.UserInfoContainerStyle-progressValue > span {
    color: rgb(255 255 255)
}

.UserInfoContainerStyle-xpIcon {
    visibility: hidden;
    width: 0px;
    height: 0px
}

.UserInfoContainerStyle-progressValue {
    margin-left: 0px;
    color: rgb(255 255 255);
    text-shadow: rgb(255 255 255) 0em 0em 0.375em
}

.MenuComponentStyle-decorLineMenu {
    background: transparent
}

.BreadcrumbsComponentStyle-headerContainer {
    backdrop-filter: none;
    background: rgb(0,0,0,5%);
    align-items: center;
    min-height: 7em;
    height: 7em;
    width: 95%;
    border-bottom: 1.5px solid rgba(185, 135, 255, 0.25);
    border-left: 1.5px solid rgba(185, 135, 255, 0.25);
    border-right: 1.5px solid rgba(185, 135, 255, 0.25);
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%);
      animation: 300ms ease-in-out 0s 1 normal none running containerPanelTop
}

.GarageMenuComponentStyle-garageMenuContainer, .ProBattlesComponentStyle-navigationBlock {
    border-bottom: none;
    justify-content: center;
      animation: 500ms ease-in-out 0s 1 normal none running containerPanelTop
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserInfoContainerStyle-blockLeftPanel > div > div.Common-flexStartAlignCenter > div.UserInfoContainerStyle-containerProgressMainScreen > div.UserInfoContainerStyle-containerParameterProgress > div.UserInfoContainerStyle-progressValue > span {
    color: rgba(255, 255, 255, 75%)
}

div > div.BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.Common-flexStartAlignCenter > div.UserInfoContainerStyle-containerProgressMainScreen > div.UserInfoContainerStyle-containerParameterProgress > div.UserInfoContainerStyle-progressValue > span {
    color: rgba(255, 255, 255, 75%)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserInfoContainerStyle-blockLeftPanel > div > div.Common-flexStartAlignCenter > div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn {
    background: rgba(255, 255, 255, 50%)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserInfoContainerStyle-blockLeftPanel > div > div.Common-flexStartAlignCenter > div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn::after {
    background: rgb(255 255 255);
    box-shadow: rgb(255 255 255) 0em 0em 0.4em 0.1em
}

div > div.BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.Common-flexStartAlignCenter > div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn {
    background: rgba(255, 255, 255, 50%)
}

div > div.BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.Common-flexStartAlignCenter > div.UserInfoContainerStyle-containerProgressMainScreen > div.Common-flexStartAlignStartColumn::after {
    background: rgb(255 255 255);
    box-shadow: rgb(255 255 255) 0em 0em 0.4em 0.1em
}

.PrimaryMenuItemComponentStyle-itemCommonLi.PrimaryMenuItemComponentStyle-menuItemContainer {
    background: rgba(0,0,0,0);
    margin-top: 10px;
    backdrop-filter: blur(10px);
    border-radius: 15px;
    outline: 1.5px solid rgba(185, 135, 255, 0.25);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 /50%);
    transition: all 200ms ease-in-out 0s;
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.PrimaryMenuItemComponentStyle-itemCommonLi:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(185, 135, 255, 25%)
}

.PrimaryMenuItemComponentStyle-itemCommonLi:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(20deg, transparent, #c700ff, #c100ff, #8500ff, transparent, #8500ff, #c100ff, #c700ff, transparent);
    background-size: 400%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    transform: scale(1.15);
    pointer-events: none;
    animation: eff 40s ease-in-out infinite;
    animation-play-state: paused
}

.PrimaryMenuItemComponentStyle-itemCommonLi:hover:after {
    opacity: 0.75;
    animation-play-state: running
}

.FooterComponentStyle-clanButton div,
.FooterComponentStyle-friendButton div,
.FooterComponentStyle-chatButton div,
.FooterComponentStyle-newsButton div,
.PrimaryMenuItemComponentStyle-itemLiContainers,
.PrimaryMenuItemComponentStyle-itemLiQuests,
.PrimaryMenuItemComponentStyle-itemLiGarage,
.PrimaryMenuItemComponentStyle-itemLiShop,
.PrimaryMenuItemComponentStyle-itemLiOption,
.Common-backgroundImageContain,
.BreadcrumbsComponentStyle-iconLogout,
.IconStyle-iconLogOff,
.IconStyle-iconBackArrow {
    transition: all 200ms ease-in-out 0s
}

.FooterComponentStyle-footer ul {
    width: 27.4em;
    height: 33em
}

.FooterComponentStyle-footer li {
    background: rgba(0,0,0,0);
    backdrop-filter: blur(10px);
    margin-left: 10px;
    width: 27.4em;
    height: 4em;
    border-radius: 15px;
    outline: 1.5px solid rgba(185, 135, 255, 0.25);
    transition: all 200ms ease-in-out 0s;
    right: 0.5em;
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 /50%);
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.FooterComponentStyle-containerMenu:hover {
    transform: translateY(-5px);
    width: 27.4em;
    height: 4em;
    border-radius: 15px;
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(185, 135, 255, 25%)
}

.FooterComponentStyle-containerMenu:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(20deg, transparent, #c700ff, #c100ff, #8500ff, transparent, #8500ff, #c100ff, #c700ff, transparent);
    background-size: 400%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    transform: scale(1.15);
    pointer-events: none;
    animation: eff 40s ease-in-out infinite;
    animation-play-state: paused
}

.FooterComponentStyle-containerMenu:hover:after {
    opacity: 0.75;
    animation-play-state: running
}

.NotificationViewStyle-progressNotification {
    background: transparent;
    backdrop-filter: blur(10px)
}
.NotificationViewStyle-commonBlockNotification {
    background: transparent;
    backdrop-filter: blur(10px)
}

.ListItemsComponentStyle-itemsListContainer {
    background: rgb(0, 0, 0, 10%);
    backdrop-filter: blur(10px);
    outline: 1.5px solid rgb(183 0 255 / 25%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

.BattlePauseMenuComponentStyle-redMenuButton.BattlePauseMenuComponentStyle-enabledButton.BattlePauseMenuComponentStyle-selectedRedMenuButton {
    background: rgb(0, 0, 0, 35%);
    border-radius: 10px;
    transition: all 200ms ease-in-out 0s;
    border: 1px solid rgba(255, 255, 255,0);
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em
}

.BattlePauseMenuComponentStyle-redMenuButton.BattlePauseMenuComponentStyle-enabledButton.BattlePauseMenuComponentStyle-selectedRedMenuButton:hover {
    scale: 1.025;
      animation: anim1 300ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(235, 87, 87) 50%, transparent 100%);
      background-size: 250%
}

.BattlePauseMenuComponentStyle-menuButton.BattlePauseMenuComponentStyle-enabledButton {
    background: rgb(0, 0, 0, 15%);
    border-radius: 10px;
    transition: all 200ms ease-in-out 0s;
    border: 1px solid rgba(255, 255, 255,0);
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em
}

.BattlePauseMenuComponentStyle-menuButton.BattlePauseMenuComponentStyle-enabledButton:hover {
    scale: 1.025;
      animation: anim2 300ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(191 213 255 / 50%) 50%, transparent 100%);
      background-size: 250%
}

.BattlePauseMenuComponentStyle-enabledButton span {
    color: white;
    text-shadow: rgb(0 0 0) 0em 0em 0.2em
}

.BattlePauseMenuComponentStyle-disabledButton {
    border-radius: 10px;
    transition: all 200ms ease-in-out 0s
}

.BattlePauseMenuComponentStyle-dialogFooter {
    background: rgb(0, 0, 0, 15%);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255,0);
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em
}

.BattleHudComponentStyle-pauseButton.BattleHudComponentStyle-hudButton {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(15px);
    transition: all 200ms ease-in-out 0s;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em
}

.BattleHudComponentStyle-pauseButton.BattleHudComponentStyle-hudButton:hover {
    scale: 1.025;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(191 213 255 / 50%) 50%, transparent 100%);
      background-size: 250%
}

.BattleHudComponentStyle-fullScreenButton.BattleHudComponentStyle-hudButton {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(15px);
    transition: all 200ms ease-in-out 0s;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em
}

.BattleHudComponentStyle-fullScreenButton.BattleHudComponentStyle-hudButton:hover {
    scale: 1.025;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(191 213 255 / 50%) 50%, transparent 100%);
      background-size: 250%
}

.BattleHudComponentStyle-tabButton.BattleHudComponentStyle-hudButton {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(5px);
    transition: all 200ms ease-in-out 0s;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em
}

.BattleHudComponentStyle-tabButton.BattleHudComponentStyle-hudButton:hover {
    scale: 1.025;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(191 213 255 / 50%) 50%, transparent 100%);
      background-size: 250%
}

.ItemDescriptionComponentStyle-commonBlockModal {
    background: rgb(0 0 0 / 25%);
    backdrop-filter: blur(15px)
}

.TutorialModalComponentStyle-contentWrapper {
    background: rgb(0 0 0 / 50%);
      animation: 0.2s ease-in-out 0s 1 normal none running chatwindow1
}
.TutorialModalComponentStyle-backgroundClickArea {
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(5px);
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont1
}

.ScrollingCardsComponentStyle-scrollCardPick {
      animation: 200ms ease-in-out 0s 1 normal none running scrollingcards
}

.InvitationWindowsComponentStyle-centerBlock {
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont1
}

.ContextMenuStyle-menu {
    background: rgb(0 0 0 / 15%);
    backdrop-filter: blur(15px);
    border-radius: 15px;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont1
}

.ContextMenuStyle-menuItem.ContextMenuStyle-menuItemRank {
    border-bottom: 1px solid rgba(255,255,255,0.4);
    border-radius: 15px
}

.InvitationWindowsComponentStyle-commonItem {
    background: rgb(0 0 0 / 10%);
    backdrop-filter: blur(10px);
    left: 35em;
    top: 10.75em;
    border-radius: 10px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%);
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}

.InvitationWindowsComponentStyle-commonBorder {
    border-left: transparent;
    border-right: transparent;
    border-bottom: transparent
}

.Common-entranceGradient {
    background: radial-gradient(50% 100% at 50% 100%, #000000 0%, #000000 100%)
}

.ContainersStyle-openBuyButton {
    background: rgb(0 0 0 / 25%);
    width: 18em;
    height: 6em;
    transition: all 0.2s ease-in-out 0s
}

.UserInfoContainerStyle-blockForIconTankiOnline {
    visibility: hidden
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div {
    border-right: none
}

.ProBattlesComponentStyle-battlesContainer {
    margin-left: 0px
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-button > div > div > div > div {
    border-color: rgb(145 0 255)
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-button > div > div > div {
    border-color: rgb(181, 110, 255, 25%)
}

.ProBattlesComponentStyle-cellName {
    max-width: 100%
}

.Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon {
    background: rgb(0 0 0/25%);
    width: 98%;
    margin-left: 8px;
    border-radius: 15px;
    transition: all 0.2s ease-in-out 0s
}

.Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon:hover {
    box-shadow: rgb(118, 255, 51) 0em 0em 0em 2px;
    cursor: pointer;
    background: rgb(118, 255, 51, 25%)
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-blockModesFilter.ProBattleCommonStyleMobile-blockModesFilter > div.Common-flexCenterAlignCenter {
    background: rgb(0,0,0,10%);
    outline: 1.5px solid rgb(183, 0, 255, 0.25);
    transition: all 200ms ease-in-out 0s;
    border-radius: 15px;
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 /25%)
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-blockModesFilter.ProBattleCommonStyleMobile-blockModesFilter > div.Common-flexCenterAlignCenter:hover {
    background: rgb(100,100,100,10%);
}

.ProBattlesComponentStyle-borderLineCell {
    border-left: none
}

.LockableContainersComponentStyle-infoPanel > div.LockableContainersComponentStyle-header > div.Common-flexStartAlignCenterColumn > p {
    color: white;
    text-shadow: rgb(255 255 255) 0em 0em 0.375em
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-button > div {
    transition: all 200ms ease-in-out 0s;
    border-top: none;
    scale: 0.8;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%);
    display: flex;
    justify-content: center;
    align-items: center
}

.IconStyle-iconAddBattle {
    background: rgb(181 110 255)
}

.ProBattlesComponentStyle-commonBlockHotkeyV {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 6.125em;
    height: 4.3125em;
    position: absolute;
    -webkit-box-align: center;
    -webkit-box-pack: end;
    align-content: center;
    margin-right: 65em
}

.ProBattlesComponentStyle-commonBlockHotkeyV:hover {
    background: transparent
}

div > div.ProBattlesComponentStyle-navigationBlock > div.ProBattlesComponentStyle-commonBlockHotkeyV > h3 {
    position: relative;
    left: -6.5em
}

div > div.ProBattlesComponentStyle-navigationBlock > div.ProBattlesComponentStyle-commonBlockHotkeyV > div {
    transition: all 200ms ease-in-out 0s;
    width: 6em;
    height: 3em;
    cursor: pointer;
    position: absolute;
    margin: auto;
    border-top: none;
    scale: 0.8;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

div > div.ProBattlesComponentStyle-navigationBlock > div.ProBattlesComponentStyle-commonBlockHotkeyV > div:hover {
    background: rgba(255, 255, 255, 0.05)
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-button > div.Common-flexStartAlignCenter.BattleModesComponentStyle-fund > div.Common-flexStartAlignCenter {
    justify-content: center;
    scale: 1.15
}

.ProBattlesComponentStyle-chatBlock {
    visibility: hidden
}

.ProBattlesComponentStyle-createBattleButton {
    transition: all 200ms ease-in-out 0s;
    border-top: none;
    bottom: 4px;
    scale: 0.8;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

.ProBattlesComponentStyle-createBattleButton:hover,
div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-button > div:hover {
    background: rgba(255, 255, 255, 0.05)
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-button > div.Common-flexCenterAlignCenter > div.Common-maskImageContain,
.Common-maskImageContain {
    transition: all 200ms ease-in-out 0s
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.Common-flexCenterAlignCenterColumn {
    visibility: hidden;
    height: 0px
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.Common-flexCenterAlignCenterColumn > div > div {
    height: 0px
}

div.Common-flexSpaceBetweenAlignStretch > div.Common-flexStartAlignStretch > div > div > span,
div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div.Common-flexCenterAlignCenter > span,
.BreadcrumbsComponentStyle-breadcrumbs span {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-blockModesFilter.ProBattleCommonStyleMobile-blockModesFilter {
    transition: all 200ms ease-in-out 0s
}


div.Common-flexSpaceBetweenAlignStretch > div.Common-flexStartAlignStretch > div > div > span {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-blockModesFilter.ProBattleCommonStyleMobile-blockModesFilter {
    transition: all 200ms ease-in-out 0s
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn {
    border-left: none;
    border-right: none
}

div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div > div.BattleModesComponentStyle-button > div > div {
    scale: 1.5
}

.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin > span {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin {
    background: transparent;
    box-shadow: none;
    transition: all 200ms ease-in-out 0s
}

.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin:hover {
    box-shadow: none
}

.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(20deg, transparent, #c700ff, #c100ff, #8500ff, transparent, #8500ff, #c100ff, #c700ff, transparent);
    background-size: 400%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    pointer-events: none;
    animation: eff 40s ease-in-out infinite;
    animation-play-state: paused
}

.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin:hover:after {
    opacity: 0.5;
    animation-play-state: running
}

.Common-flexCenterAlignCenter.ButtonComponentStyle-disabled.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin {
    background: transparent
}

.Common-flexCenterAlignCenter.ButtonComponentStyle-disabled.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin:hover {
    box-shadow: rgb(128, 42, 218, 0%) 0em 0em 0em 0.1em;
    animation: none;
    animation-fill-mode: none;
    background: transparent;
    background-size: 100%
}


.Common-flexStartAlignCenterColumn {
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0%) 0em 0em 1em 2px
}

.QuestsComponentStyle-scrollBlock {
    background: transparent
}

.BattlePickComponentStyle-cardImg {
    background-blend-mode: color-dodge;
    box-shadow: 0em 0em 0.5em 0.25em inset rgb(0 0 0 / 50%)
}

div > div.ScrollingCardsComponentStyle-blockCenter > div > div > div.Common-backgroundImageCover,
div > div.ScrollingCardsComponentStyle-scrollCardPick.Common-scrollBarVisible > div.ScrollingCardsComponentStyle-scrollCard.cardImg > div.Common-backgroundImageCover,
div > div > div.BattlePickComponentStyle-cardContentRight > div.BattlePickComponentStyle-commonStyleBlock.cardImgEvents > div.BattlePickComponentStyle-cardImgEvent.Common-backgroundImageContain.Common-backgroundImage {
    box-shadow: inset 0em 0em 0.5em 0.25em rgb(0 0 0 /50%);
    background-blend-mode: color-dodge
}

.ScrollingCardsComponentStyle-scrollCard, .FormatsSectionComponentStyle-selectedCard, .FormatsSectionComponentStyle-unSelectedCard, .BattlePickComponentStyle-commonStyleBlock.cardImgEvents {
    transition: all 200ms ease-in-out 0s;
    box-shadow: 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%);
    outline: 1.75px solid rgb(0, 255, 0, 15%)
}

.ScrollingCardsComponentStyle-scrollCard:hover, .FormatsSectionComponentStyle-selectedCard:hover, .FormatsSectionComponentStyle-unSelectedCard:hover, .BattlePickComponentStyle-commonStyleBlock.cardImgEvents:hover {
    box-shadow: 0em 0em 0.5em 0.25em rgb(0 255 0 / 25%);
    filter: brightness(1.35);
    transform: translateY(-7.5px)
}

.ScrollingCardsComponentStyle-scrollCardPick {
    padding-top: 1em
}

.ScrollingCardsComponentStyle-blockCenter {
      animation: 250ms ease-in-out 0s 1 normal none running scrollingcards
}

.ScrollingCardsComponentStyle-selectCard {
    border-top: 1.75px solid rgb(0, 255, 0, 15%);
    background: rgb(0,0,0,0.15)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserInfoContainerStyle-blockLeftPanel > div > div.Common-flexCenterAlignCenter {
    transition: all 200ms ease-in-out 0s;
    border-right: transparent;
    scale: 0.9;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserInfoContainerStyle-blockLeftPanel > div > div.Common-flexCenterAlignCenterColumn {
    transition: all 200ms ease-in-out 0s;
    border-right: transparent;
    scale: 0.95;
    margin-left: 6px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserInfoContainerStyle-blockLeftPanel > div > div.Common-flexCenterAlignCenterColumn:hover,
div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserInfoContainerStyle-blockLeftPanel > div > div.Common-flexCenterAlignCenter:hover {
    background: rgba(255, 255, 255, 0.025)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserScoreComponentStyle-blockRightPanel > div.BreadcrumbsComponentStyle-logout,
div > div.BreadcrumbsComponentStyle-headerContainer > div.BreadcrumbsComponentStyle-rightButtonsContainer > div.BreadcrumbsComponentStyle-exitGameButton {
    transition: all 200ms ease-in-out 0s;
    scale: 0.95;
    margin-right: 6px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserScoreComponentStyle-blockRightPanel > div.Common-flexCenterAlignCenter,
div > div.BreadcrumbsComponentStyle-headerContainer > div.BreadcrumbsComponentStyle-rightButtonsContainer > div.Common-flexCenterAlignCenter {
    transition: all 200ms ease-in-out 0s;
    border-left: transparent;
    border-right: transparent;
    scale: 0.9;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserScoreComponentStyle-blockRightPanel > div.BreadcrumbsComponentStyle-logout:hover,
div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserScoreComponentStyle-blockRightPanel > div.Common-flexCenterAlignCenter:hover,
div > div.BreadcrumbsComponentStyle-headerContainer > div.BreadcrumbsComponentStyle-rightButtonsContainer > div.BreadcrumbsComponentStyle-exitGameButton:hover,
div > div.BreadcrumbsComponentStyle-headerContainer > div.BreadcrumbsComponentStyle-rightButtonsContainer > div.Common-flexCenterAlignCenter:hover {
    background: rgba(255, 255, 255, 0.05)
}

.UserGroupTitleButtonComponentStyle-commonBlockGroup {
    position: absolute;
    transform: translateY(-5px);
    scale: 1.25
}

div > div.BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.Common-flexCenterAlignCenter {
    visibility: hidden;
    width: 0px;
    height: 0px
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserScoreComponentStyle-blockRightPanel > div > div.HeaderCommonStyle-icons,
div > div.BreadcrumbsComponentStyle-headerContainer > div.BreadcrumbsComponentStyle-rightButtonsContainer > div > div.HeaderCommonStyle-icons {
    scale: 1.125;
    border-bottom: none;
    margin-right: 1em
}

div > div.Common-flexStartAlignStart > div.MainScreenComponentStyle-containerPanel > div.UserScoreComponentStyle-blockRightPanel > div > div.HeaderCommonStyle-icons:hover,
div > div.BreadcrumbsComponentStyle-headerContainer > div.BreadcrumbsComponentStyle-rightButtonsContainer > div > div.HeaderCommonStyle-icons:hover {
    background: transparent
}

.BreadcrumbsComponentStyle-backButton {
    transition: all 200ms ease-in-out 0s;
    scale: 0.9;
    width: 13em;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border: 2px solid rgba(185, 135, 255, 0.15);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

.ProBattlesComponentStyle-mainContainer {
      animation: 300ms ease-in-out 0s 1 normal none running gradientMenu3
}

.SuperMissionComponentStyle-gradientBackground {
    background: transparent
}

.SuperMissionComponentStyle-descriptionSuperMission {
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 /25%)
}

.Common-overflowScrollFriends {
      animation: 200ms ease-in-out 0s 1 normal none running scrollingcards
}

.MainQuestComponentStyle-cardPlayCommon, .MainQuestComponentStyle-cardPlay {
    transition: all 0.2s ease-in-out 0s;
    outline: 1.5px solid rgb(190 215 255 / 25%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 /25%);
    background: rgb(190 215 255 / 10%)
}

.MainQuestComponentStyle-cardPlayCommon:hover, .MainQuestComponentStyle-cardPlay:hover {
    transform: translateY(-5px);
    background: rgb(190 215 255 / 10%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(190 215 255 /25%)
}

.MainQuestComponentStyle-cardPlayCommon:after, .MainQuestComponentStyle-cardPlay:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(25deg, transparent, #bfd5ff, #bfd5ff, #bfd5ff, transparent, #bfd5ff, #bfd5ff, #bfd5ff, transparent);
    background-size: 800%;
    opacity: 0;
    filter: blur(50px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    pointer-events: none;
      animation: eff 60s ease-in-out infinite;
      animation-play-state: paused
}

.MainQuestComponentStyle-cardPlayCommon:hover:after, .MainQuestComponentStyle-cardPlay:hover:after {
    opacity: 0.5;
    animation-play-state: running
}

.MainQuestComponentStyle-cardCommonLocked, .MainQuestComponentStyle-colorCardPlay {
    transition: all 0.2s ease-in-out 0s;
    outline: 1.5px solid rgb(255 0 0 / 25%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 /25%);
    background: rgb(135 0 0 / 15%)
}

.MainQuestComponentStyle-cardCommonLocked:hover, .MainQuestComponentStyle-colorCardPlay:hover {
    transform: translateY(-5px);
    background: rgb(135 0 0 / 15%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(255 0 0 /25%)
}

.MainQuestComponentStyle-cardCommonLocked:after, .MainQuestComponentStyle-colorCardPlay:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(25deg, transparent, #ff0000, #ff0000, #a30000, transparent, #a30000, #ff0000, #ff0000, transparent);
    background-size: 800%;
    opacity: 0;
    filter: blur(50px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    pointer-events: none;
      animation: eff 60s ease-in-out infinite;
      animation-play-state: paused
}

.MainQuestComponentStyle-cardCommonLocked:hover:after, .MainQuestComponentStyle-colorCardPlay:hover:after {
    opacity: 0.5;
    animation-play-state: running
}

.TableMainQuestComponentStyle-cardLockedTable {
    transition: all 0.2s ease-in-out 0s;
    outline: 1.5px solid rgb(255 200 0 / 25%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 /25%);
    background: rgb(255 200 0 / 10%)
}

.TableMainQuestComponentStyle-cardLockedTable:hover {
    transform: translateY(-5px);
    background: rgb(255 200 0 / 10%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(255 200 0 /25%)
}
.TableMainQuestComponentStyle-cardLockedTable:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(25deg, transparent, #ffbc00, #ffd400, #efff00, transparent, #efff00, #ffd400, #ffbc00, transparent);
    background-size: 800%;
    opacity: 0;
    filter: blur(50px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    pointer-events: none;
      animation: eff 60s ease-in-out infinite;
      animation-play-state: paused
}

.TableMainQuestComponentStyle-cardLockedTable:hover:after {
    opacity: 0.5;
    animation-play-state: running
}

.TableMainQuestComponentStyle-colorLockedGradientTable {
    background: transparent
}

.TableMainQuestComponentStyle-cardRewardCompletedTable {
transition: all 0.2s ease-in-out 0s
}

.BattleKillBoardComponentStyle-tableContainer table {
background: transparent;
height: 1050px
}
.ShopCategoryOfferSectionStyle-innerContainer {
background: rgb(0 0 0 / 25%)
}
.SettingsComponentStyle-scrollingMenu {
background: rgb(0 0 0/15%)
}
.BattleInfoComponentStyle-commonBlockSelectedOptionsSettings {
background: rgb(0 0 0 / 25%);
backdrop-filter: blur(15px);
animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}

.DropDownStyle-dropdownMenu {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(15px);
    border-radius: 10px
}
.SuccessfulPurchaseComponentStyle-container {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(15px);
    border-radius: 10px;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}
.Need2FaDialogComponentStyle-container {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(15px);
    border-radius: 10px;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}
.TooltipStyle-tooltip {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(15px);
    border-radius: 10px;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}

.ChatComponentStyle-closeArea {
    background-color: rgb(0 0 0 / 15%);
    backdrop-filter: blur(5px);
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont1
}

.ChatComponentStyle-chatWindow {
    background-color: rgb(0 0 0 / 15%);
    backdrop-filter: blur(15px);
      animation: 0.2s ease-in-out 0s 1 normal none running chatwindow1
}

.ChatComponentStyle-chatWindow > div.ChatComponentStyle-upMenu > div > .ChatComponentStyle-channelsSelect > select {
    background-color: rgb(0 0 0 / 15%);
}

.ChatComponentStyle-messageRow {
    background-color: rgb(0 0 0 / 15%);
    border-radius: 10px;
    transition: all 0.2s ease-in-out 0s
}

.ChatComponentStyle-messageRow:hover {
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
    transform: scale(1.025);
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

.ChatComponentStyle-chatRegularUser {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

.ChatComponentStyle-arrowForPrivateMessage::before {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

.NewsComponentStyle-closeArea {
    background: rgb(0 0 0 / 0%);
    backdrop-filter: blur(5px);
    animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont1
}

.NewsComponentStyle-newsWindow {
    background: rgb(0 0 0 / 25%);
    backdrop-filter: blur(15px);
    animation: 0.2s ease-in-out 0s 1 normal none running chatwindow2
}

div > div > div.DialogContainerComponentStyle-footerContainer > div > div > span {
    text-shadow: rgb(255, 188, 9) 0em 0em 0.375em
}

.DialogContainerComponentStyle-header h1 {
    visibility: hidden
}

.DialogContainerComponentStyle-header:before {
    font-family: RubikBold;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5em;
    line-height: normal;
    text-transform: uppercase;
    color: white
}


.DialogContainerComponentStyle-container {
    background: rgb(0 0 0/25%);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    outline: 1.5px solid rgba(0, 0, 0, 0);
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}

.DialogContainerComponentStyle-enterButton {
    background: rgba(100, 100, 100, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

.DialogContainerComponentStyle-enterButton:hover {
    scale: 1.025;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(150 255 100 / 50%) 50%, transparent 100%);
      background-size: 250%
}

.DialogContainerComponentStyle-keyButton {
    background: rgba(100, 100, 100, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

.DialogContainerComponentStyle-keyButton:hover {
    scale: 1.025;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(191 213 255 / 50%) 50%, transparent 100%);
      background-size: 250%
}


.ClanProfileEditComponentStyle-buttonCancel {
    background: rgba(100, 100, 100, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

.ClanProfileEditComponentStyle-buttonCancel:hover {
    scale: 1.025;
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div > div.FriendListComponentStyle-containerMembers > div > div.Common-flexCenterAlignCenter.ClanCommonStyle-buttonInvite.ClanProfileEditComponentStyle-buttonCancel > span {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

.ClanStatisticsComponentStyle-areCommonSpanOnline {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

div > div > div.ClanCommonStyle-center.ClanCommonStyle-marginContent > div > div.Common-flexCenterAlignCenter.ClanInfoComponentStyle-buttonEditProfile.Common-alignSelfFlexEnd > span {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

div > div > div > div.ClanProfileEditComponentStyle-commonContainerButtons > div.ClanProfileEditComponentStyle-priceAndSaveContainer > div > span {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

.ClanInfoComponentStyle-buttonEditProfile {
    background: rgba(100, 100, 100, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

.ClanInfoComponentStyle-buttonEditProfile:hover {
    scale: 1.025;
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div > div.FriendListComponentStyle-containerMembers > div > div.SearchInputComponentStyle-search > div > input {
    background: rgba(100, 100, 100, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

div > div > div.FriendListComponentStyle-containerMembers > div > div.SearchInputComponentStyle-search > div > input:hover {
    scale: 1.025;
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div > div.FriendListComponentStyle-containerMembers > div > div.SearchInputComponentStyle-search > div > div {
    visibility: hidden
}

.ClanHeaderComponentStyle-blockInform, .ClanInfoComponentStyle-messageClan {
    background: rgba(100, 100, 100, 0.1)
}

.ClanCreateComponentStyle-blockCreatureClan {
    background: radial-gradient(50% 100% at 50% 100%, rgb(50 50 50) 0%, rgb(0 0 0) 100%)
}
.ClanInvitationsComponentStyle-invitationContent {
    background: transparent;
    animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2;
    backdrop-filter: blur(15px)
}

.ClanMembersListComponentStyle-nameColumnHeader, .ClanMembersListComponentStyle-positionColumnHeader, .ClanMembersListComponentStyle-experienceColumnHeader, .ClanMembersListComponentStyle-lostColumnHeader,
.ClanMembersListComponentStyle-destroyedLostKoefColumnHeader, .ClanMembersListComponentStyle-lastVisitColumnHeader {
    background: rgba(100, 100, 100, 0.1)
}

.ClanCommonStyle-content {
    background: radial-gradient(50% 100% at 50% 100%, rgb(50 50 50) 0%, rgb(0 0 0) 100%)
}

.ClanCommonStyle-row {
    background: rgba(100, 100, 100, 0.1);
    border-left: 0.15em solid rgb(181 110 255 / 50%)
}

.ClanStatisticsComponentStyle-areCommon {
    background: rgb(0 0 0 / 15%);
    backdrop-filter: blur(15px);
    border-left: 0.2em solid rgb(181, 110, 255, 50%)
}

.ClanCommonStyle-tableInvite thead tr th {
    background: rgba(100, 100, 100, 0.1);
    border-left: 0.15em solid rgb(181 110 255 / 50%);
    height: 2em
}

.ClanCommonStyle-marginContent, .ClanStatisticsComponentStyle-clan, .FriendListComponentStyle-containerMembers {
      animation: 300ms ease-in-out 0s 1 normal none running gradientMenu3
}

.ClanInvitationsComponentStyle-sendButton {
    background: rgba(100, 100, 100, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

.ClanInvitationsComponentStyle-sendButton:hover {
    scale: 1.025;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(150 255 100 / 50%) 50%, transparent 100%);
      background-size: 250%
}

.Common-activeMenu {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em;
    transition: all 200ms ease-in-out 0s
}

.Common-menuItemActive {
    background: rgb(181 110 255);
    box-shadow: rgb(181 110 255) 0em 0em 0.375em 0.1em;
    filter: none;
    bottom: 12.5px;
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.MenuComponentStyle-mainMenuItem {
    transition: all 200ms ease-in-out 0s
}

.MenuComponentStyle-mainMenuItem:hover {
    color: rgb(181 110 255)
}

.TableComponentStyle-row {
    background: rgba(100, 100, 100, 0.1);
    border-left: 0.15em solid rgb(181 110 255 / 50%)
}

.TableComponentStyle-table {
      animation: 500ms ease-in-out 0s 1 normal none running containerPanelBottom
}

.FriendRequestComponentStyle-blockInformationCommunityNoSearch {
      animation: 300ms ease-in-out 0s 1 normal none running containerPanelBottom
}

.TableComponentStyle-table thead tr th {
    background: rgba(100, 100, 100, 0.1);
    border-left: 0.15em solid rgb(181 110 255 / 50%);
    height: 2em;
    transition: all 200ms ease-in-out 0s
}

.TableComponentStyle-table thead tr th:hover {
    background: rgba(100, 100, 100, 0.25);
    cursor: pointer
}

.ClanCommonStyle-onlineNickName {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
}

.LockableContainersComponentStyle-navigationBlock {
    transition: all 200ms ease-in-out 0s
}

.LockableContainersComponentStyle-infoPanel, .LockableContainersComponentStyle-bottomBlock, .LockableContainersComponentStyle-containersBlock, .SettingsComponentStyle-blockContentOptions {
      animation: 300ms ease-in-out 0s 1 normal none running gradientMenu3
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.SearchInputComponentStyle-search > div {
    background: rgba(0, 0, 0, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.SearchInputComponentStyle-search > div:hover {
    scale: 1.025;
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
      animation: anim1 200ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.SearchInputComponentStyle-search > div > input {
    box-shadow: rgb(0, 0, 0) 0em 0em 0em 0px
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerButtonFriends > div > img {
    visibility: hidden
}

.TableComponentStyle-table thead tr th h2 {
    transition: all 200ms ease-in-out 0s
}

.FriendRequestComponentStyle-buttonDeclineAll {
    background: rgba(100, 100, 100, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

.FriendRequestComponentStyle-buttonDeclineAll:hover {
    scale: 1.025;
    box-shadow: rgb(255, 124, 124) 0em 0em 0em 0.1em;
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(255, 124, 124, 0.6) 50%, transparent 100%);
      background-size: 250%
}

.FriendRequestComponentStyle-buttonDeclineAll span {
    text-shadow: rgb(255, 124, 124) 0em 0em 0.375em
}

.FriendListComponentStyle-friendsOnline {
    transform: translateX(-80px)
}

.FriendListComponentStyle-numberFriends {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em;
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerButtonFriends > div {
    background: rgba(0, 0, 0, 10%);
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 10px
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerButtonFriends > div:hover {
    scale: 1.025;
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerButtonFriends > div:before {
    content: 'ADD';
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em;
    position: absolute;
    font-size: x-large
}

.FriendListComponentStyle-substrateRhombus {
    background: transparent;
    box-shadow: rgb(0 0 0 / 0%) 0.438em 0.438em 0.438em 0px
}

.FriendListComponentStyle-blockList.nickNameClass,
div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-usersScroll > div.Common-flexStartAlignStretch > div {
    background: rgb(0 0 0/10%);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    box-shadow: 0em 0em 0.5em 0.25em rgb(10 10 10 / 25%);
    outline: 1.5px solid rgb(118, 255, 51, 0%);
    transition: all 200ms ease-in-out 0s
}

.FriendListComponentStyle-blockList.nickNameClass:hover,
div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-usersScroll > div.Common-flexStartAlignStretch > div:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.025);
    box-shadow: 0em 0em 0.5em 0.25em rgb(118 255 51 / 25%);
    outline: 1.5px solid rgb(118, 255, 51, 25%)
}

.FriendListComponentStyle-blockList.nickNameClass:after,
div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-usersScroll > div.Common-flexStartAlignStretch > div:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, #56ff00, transparent, #56ff00, transparent, #56ff00, transparent, #56ff00, transparent);
    background-size: 600%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    pointer-events: none;
    animation: eff 60s ease-in-out infinite;
    animation-play-state: paused
}

.FriendListComponentStyle-blockList.nickNameClass:hover:after,
div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-usersScroll > div.Common-flexStartAlignStretch > div:hover:after {
    opacity: 0.5;
    animation-play-state: running
}

.FriendListComponentStyle-scrollCommunity {
    align-items: center;
    padding-top: 7.5px;
    overflow: visible;
    height: calc(100% - 16em);
      animation: 500ms ease-in-out 0s 1 normal none running containerPanelBottom
}

.FriendListComponentStyle-containerFriends {
    width: 110%;
    margin-left: 20px;
    overflow: overlay;
    padding-top: 5px
}

.FriendListComponentStyle-greenTextOnline {
    color: rgb(162, 255, 106);
    text-shadow: rgb(162, 255, 106) 0em 0em 0.375em;
}

.FriendRequestComponentStyle-buttonDecline {
    background: transparent;
    backdrop-filter: blur(15px);
    transition: all 200ms ease-in-out 0s
}

.FriendRequestComponentStyle-buttonDecline:hover {
    background: rgb(255 135 135 / 25%);
    scale: 0.985
}

.FriendRequestComponentStyle-buttonAccept {
    background: transparent;
    backdrop-filter: blur(15px);
    transition: all 200mss ease-in-out 0s
}

.FriendRequestComponentStyle-buttonAccept:hover {
    background: rgb(135 255 175 / 25%);
    scale: 0.985
}

.FriendRequestComponentStyle-blockInformationCommunity {
    margin-left: 0px;
      animation: 300ms ease-in-out 0s 1 normal none running containerPanelBottom
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerForm > div.Common-flexCenterAlignCenter.FriendListComponentStyle-buttonCloseAddFriends {
    background: rgba(0, 0, 0, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerForm > div.Common-flexCenterAlignCenter.FriendListComponentStyle-buttonCloseAddFriends:hover {
    scale: 1.025;
    box-shadow: rgb(255, 124, 124) 0em 0em 0em 0.1em;
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(255, 124, 124, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerForm > div.SearchInputComponentStyle-search.FriendListComponentStyle-friendSearchInput > div {
    background: rgba(0, 0, 0, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerForm > div.SearchInputComponentStyle-search.FriendListComponentStyle-friendSearchInput > div:hover {
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div.FriendListComponentStyle-containerFriends > div.FriendRequestComponentStyle-blockInformationCommunity > div.FriendListComponentStyle-containerForm > div.SearchInputComponentStyle-search.FriendListComponentStyle-friendSearchInput > div > input {
    box-shadow: rgb(0 0 0 / 0%) 0em 0em 0em 0px
}

div > div.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > div.EventBattlePassLobbyComponentStyle-commonBlockProgressBar > div > div > div {
    border-color: rgb(255 225 0)
}

div > div.EventBattlePassLobbyComponentStyle-buttonEventBattlePass > div.EventBattlePassLobbyComponentStyle-commonBlockProgressBar > div > div {
    border-color: rgb(255 225 0 / 25%)
}

.ChallengeTimerComponentStyle-textTime {
    background: rgb(255 225 0)
}



.EventBattlePassLobbyComponentStyle-descriptionEventPass h2, .EventBattlePassLobbyComponentStyle-descriptionEventPass h3, .EventBattlePassLobbyComponentStyle-commonBlockProgressBar h2 {
    text-shadow: 0 0 5px black
}


.EventBattlePassLobbyComponentStyle-buttonEventBattlePass {
    top: 10em;
    right: 28em;
    background: rgb(0 0 0 / 0%);
    border: 1px solid rgba(255,255,255,0);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease-in-out 0s;
    outline: 1.5px solid rgba(255, 198, 65, 0.5);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%);
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(255 225 0 / 25%)
}

.EventBattlePassLobbyComponentStyle-commonBlockProgressBar {
    background-color: rgb(0 0 0 / 15%)
}

.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, #ff8800, #ffd400, #fbff00, transparent, #fbff00, #ffd400, #ff8800, transparent);
    background-size: 700%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    transform: scale(1.15);
    pointer-events: none;
    animation: eff 40s ease-in-out infinite;
    animation-play-state: paused
}

.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover:after {
    opacity: 0.5;
    animation-play-state: running
}


.BattlePassLobbyComponentStyle-menuBattlePass {
    margin-top: 10em;
    right: 4.375em;
    background: rgb(0 0 0/0%);
    border: 1px solid rgba(255,255,255,0);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease-in-out 0s;
    outline: 1.5px solid rgba(255, 198, 65, 0.5);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%);
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.BattlePassLobbyComponentStyle-menuBattlePass:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(255 225 0 / 25%)
}

.BattlePassLobbyComponentStyle-menuBattlePass:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, #ff8800, #ffd400, #fbff00, transparent, #fbff00, #ffd400, #ff8800, transparent);
    background-size: 700%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    transform: scale(1.15);
    pointer-events: none;
    animation: eff 40s ease-in-out infinite;
    animation-play-state: paused
}

.BattlePassLobbyComponentStyle-menuBattlePass:hover:after {
    opacity: 0.5;
    animation-play-state: running
}

@keyframes eff {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 600% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.BattlePassLobbyComponentStyle-blockBattlePass {
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

.BattlePassLobbyComponentStyle-commonDescription span {
    text-shadow: 0 0 5px black
}

.BattlePassLobbyComponentStyle-commonDescription p {
    text-shadow: 0 0 5px black
}

div > div.BattlePassLobbyComponentStyle-menuBattlePass > div.BattlePassLobbyComponentStyle-descriptionMenuPass > div > span {
    text-shadow: 0 0 5px black
}

div > div.AnnouncementHomeScreenComponentStyle-mainContainer > div.AnnouncementHomeScreenComponentStyle-mainBackGroundContainer > div.AnnouncementHomeScreenComponentStyle-mainClickContainer > div {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px
}

.AnnouncementHomeScreenComponentStyle-mainContainer > div.Common-flexCenterAlignCenterColumn,
.AnnouncementHomeScreenComponentStyle-announceContainer {
    background: rgb(0 0 0 / 0%)
}

.AnnouncementHomeScreenComponentStyle-mainContainer {
    bottom: 1em;
    right: 4.375em;
    background: rgb(0 0 0 / 0%);
    border: 1px solid rgba(255,255,255,0);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease-in-out 0s;
    outline: 1.5px solid rgba(255, 198, 65, 0.5);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%);
      animation: 400ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.AnnouncementHomeScreenComponentStyle-mainContainer:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(255 225 0 / 25%)
}

.AnnouncementHomeScreenComponentStyle-mainContainer:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, #ff8800, #ffd400, #fbff00, transparent, #fbff00, #ffd400, #ff8800, transparent);
    background-size: 700%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    animation: eff 40s ease-in-out infinite;
    pointer-events: none;
    animation-play-state: paused
}

.AnnouncementHomeScreenComponentStyle-mainContainer:hover:after {
    opacity: 0.75;
    animation-play-state: running
}

.ContextMenuStyle-menuItem.ContextMenuStyle-menuItemRank {
    visibility: hidden;
    height: 0px
}

.SuppliesComponentStyle-cellAdd {
    background: rgba(0,0,0,0.10);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    outline: 1.5px solid rgb(183, 0, 255, 0.25);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 /50%);
    transition: all 200ms ease-in-out 0s
}

.SuppliesComponentStyle-cellAdd:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 50%), 0em 0em 0.5em 0.25em rgb(185, 135, 255, 25%)
}

.SuppliesComponentStyle-cellAdd:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(20deg, transparent, #c700ff, #c100ff, #8500ff, transparent, #8500ff, #c100ff, #c700ff, transparent);
    background-size: 400%;
    opacity: 0;
    filter: blur(40px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    pointer-events: none;
    animation: eff 40s ease-in-out infinite;
    animation-play-state: paused
}

.SuppliesComponentStyle-cellAdd:hover:after {
    opacity: 0.75;
    animation-play-state: running
}

.ItemDescriptionComponentStyle-descriptionBlockDevice {
    height: 11em
}

div > div.GarageCommonStyle-garageContainer > div.GarageCommonStyle-positionContent > div.ListItemsComponentStyle-itemsListContainer.CssCommonAnimations-appearFromBottom > div > div.Common-flexCenterAlignCenter {
    visibility: hidden
}

.Common-itemStyle, .MountedItemsStyle-commonBlockDrone, .MountedItemsStyle-commonBlockForTurretsHulls,
.LockableContainersComponentStyle-possibleRewardsBlock,
.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch.LockableContainersComponentStyle-description,
div > div.GarageCommonStyle-garageContainer > div > div.GarageMainScreenStyle-blockParameters > div.MountedItemsStyle-container.GarageCommonStyle-animatedBlurredRightBlock > div > div.MountedItemsStyle-commonBlockPaint,
div > div.GarageCommonStyle-garageContainer > div.GarageCommonStyle-positionContent > div.GarageMainScreenStyle-blockParameters > div.TanksPartBaseComponentStyle-tankPartContainer > div > div.TanksPartComponentStyle-descriptionContainer > div.GarageCommonStyle-animatedBlurredLeftBlock > div.ItemDescriptionComponentStyle-descriptionBlockDevice > div.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch {
    background: rgba(0,0,0,0.15);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    outline: 1.5px solid rgb(183, 0, 255, 0.25);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 /25%);
    transition: all 200ms ease-in-out 0s;
    overflow: visible
}

.Common-itemStyle:hover, .MountedItemsStyle-commonBlockDrone:hover, .MountedItemsStyle-commonBlockForTurretsHulls:hover,
.LockableContainersComponentStyle-possibleRewardsBlock:hover,
.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch.LockableContainersComponentStyle-description:hover,
div > div.GarageCommonStyle-garageContainer > div > div.GarageMainScreenStyle-blockParameters > div.MountedItemsStyle-container.GarageCommonStyle-animatedBlurredRightBlock > div > div.MountedItemsStyle-commonBlockPaint:hover,
div > div.GarageCommonStyle-garageContainer > div.GarageCommonStyle-positionContent > div.GarageMainScreenStyle-blockParameters > div.TanksPartBaseComponentStyle-tankPartContainer > div > div.TanksPartComponentStyle-descriptionContainer > div.GarageCommonStyle-animatedBlurredLeftBlock > div.ItemDescriptionComponentStyle-descriptionBlockDevice > div.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch:hover {
    transform: translateY(-5px);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(185, 135, 255, 25%)
}

.Common-itemStyle:after, .MountedItemsStyle-commonBlockDrone:after, .MountedItemsStyle-commonBlockForTurretsHulls:after,
.LockableContainersComponentStyle-possibleRewardsBlock:after,
.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch.LockableContainersComponentStyle-description:after,
div > div.GarageCommonStyle-garageContainer > div > div.GarageMainScreenStyle-blockParameters > div.MountedItemsStyle-container.GarageCommonStyle-animatedBlurredRightBlock > div > div.MountedItemsStyle-commonBlockPaint:after,
div > div.GarageCommonStyle-garageContainer > div.GarageCommonStyle-positionContent > div.GarageMainScreenStyle-blockParameters > div.TanksPartBaseComponentStyle-tankPartContainer > div > div.TanksPartComponentStyle-descriptionContainer > div.GarageCommonStyle-animatedBlurredLeftBlock > div.ItemDescriptionComponentStyle-descriptionBlockDevice > div.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(20deg, transparent, #c700ff, #c100ff, #8500ff, transparent, #8500ff, #c100ff, #c700ff, transparent);
    background-size: 600%;
    opacity: 0;
    filter: blur(60px);
    transition: all 600ms ease-in-out 0s;
    z-index: -1;
    pointer-events: none;
    animation: eff 60s ease-in-out infinite;
    animation-play-state: paused
}

.Common-itemStyle:hover:after, .MountedItemsStyle-commonBlockDrone:hover:after, .MountedItemsStyle-commonBlockForTurretsHulls:hover:after,
.LockableContainersComponentStyle-possibleRewardsBlock:hover:after,
.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch.LockableContainersComponentStyle-description:hover:after,
div > div.GarageCommonStyle-garageContainer > div > div.GarageMainScreenStyle-blockParameters > div.MountedItemsStyle-container.GarageCommonStyle-animatedBlurredRightBlock > div > div.MountedItemsStyle-commonBlockPaint:hover:after,
div > div.GarageCommonStyle-garageContainer > div.GarageCommonStyle-positionContent > div.GarageMainScreenStyle-blockParameters > div.TanksPartBaseComponentStyle-tankPartContainer > div > div.TanksPartComponentStyle-descriptionContainer > div.GarageCommonStyle-animatedBlurredLeftBlock > div.ItemDescriptionComponentStyle-descriptionBlockDevice > div.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch:hover:after {
    opacity: 0.5;
    animation-play-state: running
}

.GarageCommonStyle-garageContainer, .TankPreviewComponentStyle-visible{
      animation: 400ms ease-in-out 0s 1 normal none running gradientMenu2
}

div > div.GarageCommonStyle-garageContainer > div > div.GarageMainScreenStyle-blockParameters > div > div.Common-flexStartAlignStartColumn.CssCommonAnimations-appearFromLeft {
    bottom: calc(100% - 19em);
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    z-index: 4;
    width: 22.55em;
      animation: 300ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.MountedItemsStyle-commonForCellResistenceName {
    transition: all 0.2s ease-in-out 0s
}

.MountedItemsStyle-improvementArrow {
    visibility: hidden
}

div > div.GarageCommonStyle-garageContainer > div > div.GarageMainScreenStyle-blockParameters > div > div.TankParametersStyle-leftParamsContainer.GarageCommonStyle-animatedBlurredLeftBlock {
    background: rgb(0, 0, 0, 10%);
    height: 18.35em;
    border: 1.5px solid rgb(118, 255, 51, 0.25);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 15%)
}

div > div.GarageCommonStyle-garageContainer > div.GarageCommonStyle-positionContent > div.GarageMainScreenStyle-blockParameters > div.TanksPartBaseComponentStyle-tankPartContainer > div > div.TanksPartComponentStyle-descriptionContainer > div.GarageCommonStyle-animatedBlurredLeftBlock > div.ItemDescriptionComponentStyle-descriptionBlockDevice > div.ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch:hover:after {
    opacity: 0.25;
    animation-play-state: running
}

.GarageCommonStyle-animatedBlurredLeftBlock {
    backdrop-filter: none;
      animation: 300ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.CssCommonAnimations-appearFromLeft {
      animation: 300ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.CssCommonAnimations-appearFromBottom {
      animation: 300ms ease-in-out 0s 1 normal none running lobbyloadercont1
}

.GarageCommonStyle-animatedBlurredRightBlock {
      animation: 300ms ease-in-out 0s 1 normal none running lobbyloadercont1;
      backdrop-filter: none
}

.MountedItemsStyle-containerBlockGarage {
    overflow: visible
}

.MountedItemsStyle-tankPartNameContainer h1 {
    color: white;
    text-shadow: rgb(255 255 255) 0em 0em 0.375em
}

.UsersTableStyle-rowBattle {
    background: rgb(0 0 0/25%)
}

.UsersTableStyle-rowBattleEmpty {
    background: rgb(0 0 0/25%)
}

.SuppliesComponentStyle-decorLine {
    background: transparent;
    margin-top: 50px
}

.SuppliesComponentStyle-screenShotButtonOpen {
    width: 0em
}

.SuppliesComponentStyle-blocksCell {
    width: 89%
}

.SuppliesComponentStyle-commonBlockSupplies {
    width: 100%
}

.SuppliesComponentStyle-containersBlocks {
    background: rgb(0,0,0,10%);
    backdrop-filter: blur(3.125em);
    outline: 1.5px solid rgb(183 0 255 / 25%);
    box-shadow: inset 0 0em 0.5em 0.25em rgb(0 0 0 / 25%), 0em 0em 0.5em 0.25em rgb(0 0 0 / 25%)
}

.BattlePickComponentStyle-modeCards {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600em;
    width: 600em;
    -webkit-box-align: stretch;
    -webkit-box-pack: start;
    align-content: center;
    flex-wrap: wrap;
    backdrop-filter: blur(5px);
    background: rgb(0 0 0 / 15%);
    pointer-events: none;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont1
}

.BattlePickComponentStyle-cardContentLeft {
    pointer-events: auto;
      animation: 300ms ease-in-out 0s 1 normal none running cardsleft
}

.BattlePickComponentStyle-cardContentRight {
    pointer-events: auto;
      animation: 300ms ease-in-out 0s 1 normal none running cardsright
}

.BattlePickComponentStyle-commonStyleBlock {
    transition: all 0.2s ease-in-out 0s;
    box-shadow: rgba(255, 255, 255, 0%) 0em 0em 0em 1px;
    background: transparent
}

.BattlePickComponentStyle-styleIsEnableBlock:hover {
    transition: all 0.2s ease-in-out 0s;
    transform: translateY(-7.5px);
    box-shadow: rgb(120, 255, 50) 0em 0em 0em 2px
}

.LockableContainersComponentStyle-rightPane {
    background: rgb(0, 0, 0, 0%)
}

.LockableContainersComponentStyle-leftPane {
    background: rgb(0, 0, 0, 0%)
}

.ApplicationLoaderComponentStyle-helpChangeTip {
    visibility: hidden
}

.BattleMessagesComponentStyle-message {
    backdrop-filter: blur(15px)
}

.BattleChatComponentStyle-inputContainerAll {
    background: rgba(0, 0, 0, 0.25);
    height: 3.25em;
    border: 0px solid white;
    border-radius: 10px;
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em;
    animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}

.InvitationWindowsComponentStyle-usersScroll {
    padding-top: 7.5px;
    align-items: center;
    overflow: visible
}

div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-buttonsContainer > div.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-backButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter {
    background: rgba(0, 0, 0, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-buttonsContainer > div.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-backButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter:hover {
    scale: 1.025;
    box-shadow: rgb(191, 213, 255) 0em 0em 0em 2px;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(191 213 255 / 50%) 50%, transparent 100%);
      background-size: 250%
}

.InvitationWindowsComponentStyle-typeListContainer {
    visibility: hidden
}

div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-header > div.SearchInputComponentStyle-search > div {
    background: rgba(0, 0, 0, 10%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-header > div.SearchInputComponentStyle-search > div:hover {
    scale: 1.025;
    box-shadow: rgb(128, 42, 218) 0em 0em 0em 0.1em;
      animation: anim1 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(185, 135, 255, 0.6) 50%, transparent 100%);
      background-size: 250%
}

div > div.InvitationWindowsComponentStyle-centerBlock > div.InvitationWindowsComponentStyle-header > div.SearchInputComponentStyle-search > div > input {
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px
}

.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-inviteButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter {
    background: rgba(0, 0, 0, 10%)
}

.BattlePickComponentStyle-timerButton {
    box-shadow: rgb(0, 0, 0, 25%) 0em 0em 0.5em 0.25em;
    bottom: 6em
}

.BattlePickComponentStyle-descriptionBattle {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    bottom: 0em;
    left: 0em;
    width: 100%;
    height: 30%;
    border-top: 1.75px solid rgb(0, 255, 0, 25%);
    background: rgb(0, 0, 0, 35%)
}

.BattlePickComponentStyle-descriptionBattle h2 {
    text-shadow: rgb(255 255 255) 0em 0em 0.375em;
    padding: 1em
}

.ScrollingCardsComponentStyle-cardName h2 {
    text-shadow: rgb(255 255 255) 0em 0em 0.375em
}


div > div > div.SuccessfulPurchaseComponentStyle-content > div.Common-flexCenterAlignCenter {
    background: rgba(0, 0, 0, 0%);
    backdrop-filter: blur(15px);
    box-shadow: rgba(0, 0, 0, 0) 0em 0em 0em 1px;
    transition: all 200ms ease-in-out 0s;
    border-radius: 5px
}

div > div > div.SuccessfulPurchaseComponentStyle-content > div.Common-flexCenterAlignCenter:hover {
    scale: 1.025;
    box-shadow: rgb(191 213 255) 0em 0em 0em 0.1em;
      animation: anim2 400ms ease-in-out;
      animation-fill-mode: forwards;
      background: linear-gradient(45deg, transparent 0%, rgb(191 213 255 / 50%) 50%, transparent 100%);
      background-size: 250%
}

div > div.NewShopCommonComponentStyle-marginButtonContainer > div.ShopSpecialOfferSectionStyle-container > div.LargeShowcaseItemComponentStyle-container.Common-backgroundImageCover {
    background-color: rgb(0,0,0,10%);
    background-image: none;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 0.676em
}

.ShopSpecialOfferSectionHeaderStyle-container {
    background-color: rgb(0,0,0,10%);
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 0.676em
}


@keyframes cardsright {
    0% {
        opacity: 0;
        transform: translateX(10vw)
    }
    100% {
        opacity: 1
    }
}


@keyframes cardsleft {
    0% {
        opacity: 0;
        transform: translateX(-10vw)
    }
    100% {
        opacity: 1
    }
}

@keyframes lobbyloadercont1 {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}

@keyframes lobbyloadercont2 {
    0% {
        opacity: 0;
        transform: translateY(10px)
    }
    100% {
        opacity: 1
    }
}

@keyframes lobbyloadercont3 {
    0% {
        background: black
    }
    100% {
        background: transparent
    }
}

@keyframes chatwindow1 {
     from {
           opacity: 0;
           transform: translateX(100px)
     }
     to {
           opacity: 1
     }
}

@keyframes chatwindow2 {
     from {
           opacity: 0;
           transform: translateX(-100px)
     }
     to {
           opacity: 1
     }
}

@keyframes scrollingcards {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1
    }
}

@keyframes anim1 {
    0% {
        background-position: 100%;
        opacity: 100%
    }
    50% {
        opacity: 50%
    }
    100% {
        background-position: 0%;
        opacity: 100%
    }
}

@keyframes anim2 {
    0% {
        background-position: 100%;
        opacity: 100%
    }
    50% {
        opacity: 75%
    }
    100% {
        background-position: 0%;
        opacity: 100%
    }
}

@keyframes gradient {
    0% {
        background-position: 80% 0%
    }
    50% {
        background-position: 20% 100%
    }
    100% {
        background-position: 80% 0%
    }
}

@keyframes gradientMenu2 {
    0% {
        filter: blur(10px);
        scale: 1.025
    }
    100% {
        filter: none;
        scale: 1
    }
}

@keyframes gradientMenu3 {
    0% {
        opacity: 0;
        filter: blur(10px)
    }
    100% {
        opacity: 1;
        filter: none
    }
}

@keyframes containerPanelTop {
    0% {
        opacity: 0;
        transform: translateY(-10px)
    }
    100% {
        opacity: 1
    }
}

@keyframes containerPanelLeft {
    0% {
        opacity: 0;
        transform: translateX(-10px)
    }
    100% {
        opacity: 1
    }
}

@keyframes containerPanelRight {
    0% {
        opacity: 0;
        transform: translateX(10px)
    }
    100% {
        opacity: 1
    }
}

@keyframes containerPanelBottom {
    0% {
        opacity: 0;
        transform: translateY(10px)
    }
    100% {
        opacity: 1
    }
}

BattleTabStatisticComponentStyle-dmTableContainer table tbody tr {
    width: 54.25em
}

.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:first-child {
    margin-right: 10em
}

.BattleTabStatisticComponentStyle-dmTableContainer table thead tr th:nth-child(n+1) {
    visibility: hidden
}

.BattleTabStatisticComponentStyle-containerInsideResults {
    background: rgb(0, 0, 0, 10%);
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}

.BattleTabStatisticComponentStyle-containerInsideTeams {
    width: 100em;
    background: rgb(0, 0, 0, 10%);
    backdrop-filter: blur(10px);
    box-shadow: rgba(0, 0, 0, 50%) 0em 0em 0.25em 0.025em;
      animation: 0.2s ease-in-out 0s 1 normal none running lobbyloadercont2
}


.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr {
    width: 48.7em;
    transition: all 200ms ease-in-out 0s;
    border-radius: 10px;
    box-shadow: rgb(10 10 10 / 50%) 0em 0em 0.15em 0em
}

.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr {
    width: 48.7em;
    transition: all 200ms ease-in-out 0s;
    border-radius: 10px;
    box-shadow: rgb(10 10 10 / 50%) 0em 0em 0.15em 0em
}

.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead {
    opacity: 0
}
.BattleTabStatisticComponentStyle-redTeamTableContainer table thead {
    opacity: 0
}

.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:first-child {
    margin-right: 10em
}
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:first-child {
    margin-right: 10em
}

.BattleTabStatisticComponentStyle-resistanceModuleCell {
    visibility: visible
}

.BattleTabStatisticComponentStyle-gsCell {
    visibility: visible
}
.BattleTabStatisticComponentStyle-deviceCell{
    visibility: visible
}
.BattleTabStatisticComponentStyle-defenceCell{
    visibility: visible
}

.BattleTabStatisticComponentStyle-defenceLabel {
    margin-left: -10em;
    margin-right: 10em
}

.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody {
    --row-background-color: rgb(0 0 0 / 15%);
    --selected-row-background-color: rgb(191 213 255 / 10%);
}

.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody {
    --row-background-color: rgb(0 0 0 / 15%);
    --selected-row-background-color: rgb(76 76 76 / 25%);
}

.BattleKillBoardComponentStyle-tableContainer table thead tr th {
    background: rgba(100, 100, 100, 0.1);
    border-left: 0.15em solid rgb(181 110 255 / 50%);
    height: 2em;
    transition: all 200ms ease-in-out 0s
}

.BattleTabStatisticComponentStyle-selectedRowBackGround {
    background: rgb(160 160 160 / 15%);
    box-shadow: rgb(10 10 10 / 50%) 0em 0em 0.15em 0em;
    transition: all 200ms ease-in-out 0s
}

.BattleTabStatisticComponentStyle-selectedRowBackGround:hover {
    background: rgb(160 160 160 / 15%);
    box-shadow: rgb(10 10 10 / 50%) 0em 0em 0.15em 0em;
    cursor: default
}

.BattleTabStatisticComponentStyle-rowBackGround {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: rgb(10 10 10 / 50%) 0em 0em 0.15em 0em;
    transition: all 200ms ease-in-out 0s
}

.BattleTabStatisticComponentStyle-rowBackGround:hover {
    box-shadow: rgb(10 10 10 / 50%) 0em 0em 0.15em 0em;
    background: rgb(185, 135, 255, 0.25)
}

.BattleKillBoardComponentStyle-tableContainer table thead tr th h2 {
    color: rgb(181 110 255);
    text-shadow: rgb(212 51 255) 0em 0em 0.375em
`
const body = document.body || document.getElementsByTagName('body')[0],
style = document.createElement('style');

style.className = 'css';
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}

body.appendChild(style);
