
import React, { Component } from "react";
import { Box, MaskedInput } from "grommet";

const daysInMonth = month => new Date(2019, month, 0).getDate();

class DateMaskedInput extends Component {
    render() {
        return (
            <MaskedInput
                mask={[
                    {
                        length: 4,
                        options: Array.from({ length: 19 }, (v, k) => (2019 - k) + ''),
                        regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
                        placeholder: "yyyy"
                    },
                    { fixed: "-" },
                    {
                        length: [2],
                        options: Array.from({ length: 12 }, (v, k) => (k + 1 < 10) ? '0' + (k + 1) : (k + 1) + ''),
                        regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                        placeholder: "mm"
                    },
                    { fixed: "-" },
                    {
                        length: [2],
                        options: Array.from(
                            {
                                length: daysInMonth(parseInt(this.props.value.split("/")[0], 10))
                            },
                            (v, k) => (k + 1 < 10) ? '0' + (k + 1) : (k + 1) + ''
                        ),
                        regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
                        placeholder: "dd"
                    }
                ]}
                required={true}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );
    }
}

export default DateMaskedInput