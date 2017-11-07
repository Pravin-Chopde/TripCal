export class TripClass {
    fund: Object = {
        contri: Number,
        expence: Number,
        perHead: Number
    };

    log: Array<any> = [
        {
            contri: {
                amount: Number,
                userName: String
            },
            expence: {
                amount: Number,
                itemOrThing: String,
                paidFor: String,
                paidby: String
            },
            dateAndTime: String,
        }
    ];
    users: Array<any>= [
        {
            username: String,
            TakeFronContri: Number,
            paidInCountri: Number
        }
    ];
}
