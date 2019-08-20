import React, { Component } from "react";
import { SelectInput } from "@openimis/fe-core";
import { injectIntl } from "react-intl";
import { formatMessage } from "@openimis/fe-core";

import { CLAIM_STATUS } from "./constants";

class ClaimStatusPicker extends Component {

    _onChange = v => this.props.onChange(
        v,
        formatMessage(this.props.intl, "claim", "claimStatus." + v)
    )

    render() {
        const { intl, name, value } = this.props;
        return (
            <SelectInput
                module="claim" label="claimStatus"
                options={[{
                    value: null,
                    label: formatMessage(intl, "claim", "claimStatus.null")
                }, ...CLAIM_STATUS.map(v => ({
                    value: v,
                    label: formatMessage(intl, "claim", "claimStatus." + v)
                }))]}
                name={name}
                value={value}
                onChange={this._onChange}
            />
        );
    }
}

export default injectIntl(ClaimStatusPicker);