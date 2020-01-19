import React, { Component } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css'
import PropTypes from 'prop-types';
import { columns } from '../constant'

class TransList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.props.fetchTransactionData();
    }

    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = (selectedRowKeys) => {
        console.log(selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    onRefund = () => {
        this.props.refundTransaction(this.state.selectedRowKeys);
        this.start();
    }

    render() {
        const { transactions } = this.props;
        const { loading, selectedRowKeys } = this.state;
        for (let i = 0; transactions && i < transactions.length; i++) {
            transactions[i].key = i;
        }
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            getCheckboxProps: record => ({
                disabled: record.canRefundIfConfirmed === false || record.state === 'REFUNDED'
            })
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.onRefund} disabled={!hasSelected}>
                        Refund
                    </Button>
                    <span> </span>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        Clear
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} dataSource={transactions} columns={columns} />
            </div>
        )
    }

    static propTypes = {
        fetchTransactionData: PropTypes.func.isRequired,
        refundTransaction: PropTypes.func.isRequired
    }
}

export default TransList