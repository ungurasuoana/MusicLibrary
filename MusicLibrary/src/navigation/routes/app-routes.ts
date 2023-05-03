export enum AppRoutes {
    Auth = 'Auth',
    Music = 'PlayMusic',
}

export type AppRouteProps = {
    [AppRoutes.Auth] : undefined
    [AppRoutes.Music] : undefined
}