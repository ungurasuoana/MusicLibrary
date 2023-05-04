export enum MusicRoutes {
    Home = 'Home',
    Favorites = 'Favorites',
    Settings = 'Settings',
    EditUser = 'EditUser',
}

export type MusicRouteProps = {
    [MusicRoutes.Home] : undefined
    [MusicRoutes.Favorites] : undefined
    [MusicRoutes.Settings] : undefined
    [MusicRoutes.EditUser] : undefined
}