type MenuItemType = {
  name: string;
  href?: string;
  children?: MenuItemType[];
};

export class CMenuItem {
  private menuItems: Map<string, MenuItemType> = new Map();

  constructor() {}

  protected createMenuItem(name: string, href?: string): MenuItemType {
    return {name, href, children: []};
  }

  addItem(name: string, href?: string): void {
    const menuItem = this.createMenuItem(name, href);
    this.menuItems.set(name, menuItem);
  }

  addChild(parentName: string, name: string, href?: string): void {
    const parent = this.menuItems.get(parentName);
    if (parent) {
      if (!parent.children) {
        parent.children = [];
      }
      const child = this.createMenuItem(name, href);
      parent.children.push(child);
      this.menuItems.set(name, child);
    } else {
      console.warn(`Parent menu item '${parentName}' not found.`);
    }
  }

  getStructuredMenu(): MenuItemType[] {
    const menuTree: MenuItemType[] = [];
    const added = new Set<string>();

    this.menuItems.forEach((item) => {
      if (!added.has(item.name)) {
        if (
          !Array.from(this.menuItems.values()).some((parent) =>
            parent.children?.includes(item)
          )
        ) {
          menuTree.push(item);
        }
        added.add(item.name);
      }
    });
    return menuTree;
  }
}
