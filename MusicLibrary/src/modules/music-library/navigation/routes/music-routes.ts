export enum MusicRoutes {
    Home = 'Home',
    Favorites = 'Favorites',
    Settings = 'Settings'
}

export type MusicRouteProps = {
    [MusicRoutes.Home] : undefined
    [MusicRoutes.Favorites] : undefined
    [MusicRoutes.Settings] : undefined
}