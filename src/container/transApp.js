import { connect } from 'react-redux';
import TransList from '../components/translist';
import { fetchData, refundTrans } from '../actions/trans-actions';

const mapStateToProps = state => ({
    transactions: state.transactions.items
});

const mapDispatchToProps = dispatch => ({
    fetchTransactionData: () => {
        dispatch(fetchData());
    },
    refundTransaction: (data) => {
        dispatch(refundTrans(data));
    }
});

const TransApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransList)

export default TransApp;