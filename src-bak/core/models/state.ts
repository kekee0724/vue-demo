export interface State {
  title?: string;
  [property: string]: any;
}

export const CoreState: State = {
  isLoading: !0,
  showloading: !1,
  showheader: !0,
  count: 0,
  title: 'Vue(v3) 与 tsx 的结合~'
}
