import {UserMenu} from "./user-submenu";
export class UserGroupMenu {
  constructor(public groupName: string,
              public listMenu: UserMenu[]) {
  }

  static parse(data: string) {
    let json = JSON.parse(data);

    let groupName = json.GROUP_NAME;
    let listMenu: UserMenu[] = [];
    for (let i = 0; i < json.LIST_MENU.length; i++) {
      listMenu.push(UserMenu.parse(JSON.stringify(json.LIST_MENU[i])));
    }

    return new UserGroupMenu(groupName, listMenu);
  }
}
