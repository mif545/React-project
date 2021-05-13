import * as ActionType from '../../actionTypes';

export const setDialog=(dialogs)=>
{
    return{
        type:ActionType.DIALOG_SETED,
        payload:dialogs
    }

}