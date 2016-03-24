
export class Selection {

    _id:String;
    name:String;
    potIndex:number;
    multiplier:number;
    handicap:number;
    score:number;
    sport:String;
    avatar:String;

    static fromJson(selection):Selection {
        var newSelection = new Selection();
        newSelection._id = selection._id;
        newSelection.name = selection.name;
        newSelection.score = selection.score;
        newSelection.potIndex = selection.potIndex;
        newSelection.multiplier = selection.multiplier;
        newSelection.handicap = selection.handicap;
        newSelection.sport = selection.sport;
        newSelection.avatar = selection.avatar;
        return newSelection;
    }
}