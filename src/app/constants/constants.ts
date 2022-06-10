export class Constants {
    public static PENDING_REQUEST: string = 'Pending Request';
    public static APPROVE_REQUEST: string = 'Approved Request';
    public static REJECT_REQUEST: string = 'Rejected Request';
}

export interface Card {
    name: string;
    imageUrl: string;
    index?: number;
}
