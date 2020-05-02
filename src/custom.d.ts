type State = {
    addDate: addDate;
    addToggle: boolean;
    adToggle: boolean;
    currentTime: string;
    DateList: RecordItem[];
    spendKinds: currentKind[];
    incomeKinds: currentKind[];
}

type RecordItem = {
    id: string;
    data: addDate;
}
type addDate = {
    currentKind?: currentKind;
    type: string;
    notes: string;
    number: string;
    createdAt?: string;
}
type currentKind = {
    iconName?: string;
    textName?: string;
}
type Tag = {
    name:string,
    zhName:string
}
type dateHash = {
    [propName:string]:RecordItem[]
}

