import { REFUND_TRANS, INIT_LIST } from '../actions/trans-actions'

export default function (state = [], action) {
    switch (action.type) {
        case INIT_LIST:
            return action.payload;
        case REFUND_TRANS:{
            let newState = JSON.parse(JSON.stringify(state));
            for(let i = 0; i < action.payload.length; i++){
                newState.items[action.payload[i]].history.push({
                    'state': newState.items[action.payload[i]].state,
                    'updatedDate': (new Date()).toISOString(),
                    'trigger': 'ADMINISTRATOR'
                });
                newState.items[action.payload[i]].state = 'REFUNDED';
            }
            return newState;
        }
        default:
            return state;
    }
}