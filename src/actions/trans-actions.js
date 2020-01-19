export const REFUND_TRANS = 'REFUND_TRANS';
export const INIT_LIST = 'INIT_LIST';

export const refundTrans = data => ({
    type: REFUND_TRANS,
    payload: data
});

export const initList = data => ({
    type: INIT_LIST,
    payload: data
});

export const fetchData = () => {
    return dispatch => {
        fetch('http://www.mocky.io/v2/5e2285962f000096002225ac')
        .then(res => res.json())
        .then(json => dispatch(initList(json)));
    }
};