export enum MainRoutes {
    BottomTab = 'BottomTab',
    EditUser = 'Edit User',
    CardDetails = 'Song Details',
}

export type MainProps = {
    [MainRoutes.BottomTab] : undefined
    [MainRoutes.EditUser] : undefined
    [MainRoutes.CardDetails] : undefined
}