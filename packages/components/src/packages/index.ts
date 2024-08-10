const componentMap: { [key: string]: () => Promise<any> } = {
  BaseDict: () => import("./BaseDict"),
  BaseSelect: () => import("./BaseSelect"),
};

export default componentMap;
