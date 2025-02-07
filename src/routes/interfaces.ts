export interface RouteConfig {
    path: string;
    component: React.LazyExoticComponent<() => JSX.Element>;
    protected?: boolean;
    roles?: string[];

}
