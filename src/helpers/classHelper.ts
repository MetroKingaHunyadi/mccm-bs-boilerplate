type NavClass = {
  isActive: boolean;
  isPending: boolean;
}

export const classHelper = (navClass: NavClass, style: {[key:string]: string}) => navClass.isActive ? style.active : '';
