export const INC_VIEWS = 'INC_VIEWS'


export function incViews(state){
    return {
        type: INC_VIEWS, 
        payload: state
    }
}