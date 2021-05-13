import * as ActionType from '../../actionTypes';

export const setError=(messege)=>
{
    return{
        type:ActionType.ERROR_SETED,
        payload:messege
    }

}
